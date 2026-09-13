#!/usr/bin/env python3
"""Converts the Word file of the Algemene Voorwaarden into the HTML body of the Dutch terms page.

The Dutch text is leading, so it is taken from the .docx word for word; only the layout is
translated into HTML. Word's own list numbering (1., 1.1., A., (a), bullets) is recomputed from
numbering.xml, because the numbers are not part of the text. The letterhead (page header and
footer) is left out: the web page has its own. No dependencies.

    python3 tools/terms/docx-to-html.py "Algemene Voorwaarden ... .docx" > tools/terms/body.nl.html

After a new version of the document, run this, update the English and German translations in
tools/terms/ to match, and run node tools/render-languages.mjs.
"""

import html
import re
import sys
import zipfile
import xml.etree.ElementTree as ET

W = '{http://schemas.openxmlformats.org/wordprocessingml/2006/main}'


def attr(el, name):
    return None if el is None else el.get(W + name)


def load_numbering(z):
    """numId -> {ilvl: (numFmt, lvlText, start)}"""
    root = ET.fromstring(z.read('word/numbering.xml'))
    abstract = {}
    for a in root.findall(W + 'abstractNum'):
        levels = {}
        for lvl in a.findall(W + 'lvl'):
            levels[int(attr(lvl, 'ilvl'))] = (
                attr(lvl.find(W + 'numFmt'), 'val'),
                attr(lvl.find(W + 'lvlText'), 'val'),
                int(attr(lvl.find(W + 'start'), 'val') or 1),
            )
        abstract[attr(a, 'abstractNumId')] = levels
    return {attr(n, 'numId'): abstract[attr(n.find(W + 'abstractNumId'), 'val')] for n in root.findall(W + 'num')}


def fmt_number(value, fmt):
    if fmt == 'upperLetter':
        return chr(ord('A') + value - 1)
    if fmt == 'lowerLetter':
        return chr(ord('a') + value - 1)
    return str(value)


def runs(p):
    """The paragraph's text as (text, bold, italic, underline) pieces, adjacent equal styles merged."""
    out = []
    for r in p.iter(W + 'r'):
        rpr = r.find(W + 'rPr')
        on = lambda tag: rpr is not None and rpr.find(W + tag) is not None and attr(rpr.find(W + tag), 'val') not in ('0', 'false', 'none')
        style = (on('b'), on('i'), on('u'))
        text = ''
        for child in r:
            if child.tag == W + 't':
                text += child.text or ''
            elif child.tag == W + 'tab':
                text += ' '
            elif child.tag == W + 'br':
                text += '\n'
        if not text:
            continue
        if out and out[-1][1:] == style:
            out[-1] = (out[-1][0] + text, *style)
        else:
            out.append((text, *style))
    return out


def plain(pieces):
    return ''.join(t for t, *_ in pieces)


def inline(pieces, drop_style=False):
    parts = []
    for text, b, i, u in pieces:
        t = html.escape(text, quote=False).replace('\n', '<br>')
        if not drop_style and text.strip():
            if u: t = f'<u>{t}</u>'
            if i: t = f'<em>{t}</em>'
            if b: t = f'<strong>{t}</strong>'
        parts.append(t)
    return ''.join(parts).strip()


class Renderer:
    def __init__(self, numbering):
        self.numbering = numbering
        self.counters = {}
        self.out = []
        self.open_list = False
        self.part = 'av'
        self.h1_done = False

    def close_list(self):
        if self.open_list:
            self.out.append('</ul>')
            self.open_list = False

    def paragraph(self, p, in_table=False):
        ppr = p.find(W + 'pPr')
        style = attr(ppr.find(W + 'pStyle'), 'val') if ppr is not None and ppr.find(W + 'pStyle') is not None else None
        num = ppr.find(W + 'numPr') if ppr is not None else None
        pieces = runs(p)
        text = plain(pieces).strip()
        if not text:
            return  # empty paragraphs are only spacing in Word

        if style == 'Heading1':
            self.close_list()
            if not self.h1_done:
                self.out.append(f'<h1>{inline(pieces, True)}</h1>')
                self.h1_done = True
            else:
                self.part = 'vwo'
                self.out.append(f'<h2 id="verwerkersovereenkomst">{inline(pieces, True)}</h2>')
            return

        if num is not None:
            num_id = attr(num.find(W + 'numId'), 'val')
            ilvl = int(attr(num.find(W + 'ilvl'), 'val') or 0)
            levels = self.numbering[num_id]
            fmt, lvl_text, start = levels[ilvl]
            if fmt == 'bullet':
                if not self.open_list:
                    self.out.append(f'<ul class="lvl{ilvl}">' if not in_table else '<ul>')
                    self.open_list = True
                self.out.append(f'<li>{inline(pieces)}</li>')
                return
            self.close_list()
            counts = self.counters.setdefault(num_id, {})
            counts[ilvl] = counts.get(ilvl, start - 1) + 1
            for deeper in [k for k in counts if k > ilvl]:
                del counts[deeper]
            label = re.sub(r'%(\d)', lambda m: fmt_number(counts.get(int(m.group(1)) - 1, 1), levels[int(m.group(1)) - 1][0]), lvl_text)
            anchor = f'{self.part}-' + '-'.join(str(counts[k]) for k in sorted(counts)) if fmt == 'decimal' else None
            id_attr = f' id="{anchor}"' if anchor else ''
            body = inline(pieces)
            if ilvl == 0 and fmt == 'decimal' and len(text) <= 100:
                self.out.append(f'<h3 class="clause"{id_attr}><span class="num">{label}</span> {inline(pieces, True)}</h3>')
            else:
                self.out.append(f'<p class="item lvl{ilvl}"{id_attr}><span class="num">{label}</span> <span>{body}</span></p>')
            return

        self.close_list()
        visible = [x for x in pieces if x[0].strip()]
        if not in_table and visible and all(b for _, b, _, _ in visible):
            letter = re.match(r'Bijlage Verwerkersovereenkomst ([A-C]):', text)
            if letter:
                self.part = f'bijlage-{letter.group(1).lower()}'
                self.out.append(f'<h2 class="annex" id="{self.part}">{inline(pieces, True)}</h2>')
            else:
                self.out.append(f'<p class="lead-in"><strong>{inline(pieces, True)}</strong></p>')
            return
        self.out.append(f'<p>{inline(pieces)}</p>')

    def table(self, tbl):
        self.close_list()
        rows = tbl.findall(W + 'tr')
        self.out.append('<div class="table-scroll"><table>')
        for index, tr in enumerate(rows):
            cell_tag = 'th' if index == 0 else 'td'
            if index == 0:
                self.out.append('<thead>')
            elif index == 1:
                self.out.append('<tbody>')
            self.out.append('<tr>')
            for tc in tr.findall(W + 'tc'):
                saved, self.out = self.out, []
                for p in tc.findall(W + 'p'):
                    self.paragraph(p, in_table=True)
                self.close_list()
                inner = '\n'.join(self.out)
                self.out = saved
                if index == 0:
                    inner = re.sub(r'</?p>|</?strong>', '', inner)
                self.out.append(f'<{cell_tag}>{inner}</{cell_tag}>')
            self.out.append('</tr>')
            if index == 0:
                self.out.append('</thead>')
        self.out.append('</tbody></table></div>')


def main(path):
    with zipfile.ZipFile(path) as z:
        numbering = load_numbering(z)
        body = ET.fromstring(z.read('word/document.xml')).find(W + 'body')
    r = Renderer(numbering)
    for el in body:
        if el.tag == W + 'p':
            r.paragraph(el)
        elif el.tag == W + 'tbl':
            r.table(el)
    r.close_list()
    print('\n'.join(r.out))


if __name__ == '__main__':
    main(sys.argv[1])
