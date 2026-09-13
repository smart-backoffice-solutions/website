#!/usr/bin/env node
// Renders the landing page, the Mortgage Documents page and its terms page into one static HTML
// file per language, so that every language has its own URL that search engines can index.
//
// The English files (index.html, mortgage-documents/index.html) are both the templates and the
// English output: every element with data-i18n="section.key" gets its text from the page's copy
// file, and the blocks between <!-- seo:head --> and <!-- lang-switch --> markers are rewritten.
// The terms and privacy pages also get their document text between <!-- terms:body --> or
// <!-- privacy:body --> markers, from tools/terms/ and tools/privacy/body.<lang>.html. Rendering is idempotent. Edit the copy files or the English HTML, then run:
//
//   node tools/render-languages.mjs
//
// and commit the English files together with nl/ and de/. No dependencies.

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const ROOT = path.resolve(import.meta.dirname, '..');
const SITE = 'https://smart-backoffice.nl';
const LANGS = { en: '', nl: 'nl/', de: 'de/' };
const OG_LOCALE = { en: 'en_GB', nl: 'nl_NL', de: 'de_DE' };

const ORGANIZATION = {
  '@type': 'Organization',
  '@id': `${SITE}/#organization`,
  name: 'Smart Backoffice Solutions',
  legalName: 'Smart Backoffice Solutions B.V.',
  url: `${SITE}/`,
  logo: { '@type': 'ImageObject', url: `${SITE}/logo.png`, width: 461, height: 55 },
  email: 'info@smart-backoffice.nl',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Saal van Zwanenbergweg 11',
    postalCode: '5026 RM',
    addressLocality: 'Tilburg',
    addressCountry: 'NL'
  },
  vatID: 'NL865221406B01',
  iso6523Code: '0106:90141482',
  knowsAbout: ['Dutch mortgages', 'Mortgage document processing', 'Document AI', 'Software engineering',
    'Economics', 'Econometrics', 'Competition economics', 'Damages estimation'],
  sameAs: ['https://github.com/smart-backoffice-solutions'],
  contactPoint: { '@type': 'ContactPoint', contactType: 'sales', email: 'info@smart-backoffice.nl', availableLanguage: ['nl', 'en', 'de'] }
};

const PAGES = [
  {
    src: 'index.html',
    path: '',
    copy: 'copy.js',
    og: 'og/home.png',
    jsonld: () => [
      ORGANIZATION,
      {
        '@type': 'WebSite',
        '@id': `${SITE}/#website`,
        url: `${SITE}/`,
        name: 'Smart Backoffice Solutions',
        alternateName: 'Smart Backoffice',
        publisher: { '@id': ORGANIZATION['@id'] },
        inLanguage: Object.keys(LANGS)
      }
    ]
  },
  {
    src: 'mortgage-documents/index.html',
    path: 'mortgage-documents/',
    copy: 'mortgage-documents/copy.js',
    og: 'og/mortgage-documents.png',
    jsonld: (lang, t) => [
      ORGANIZATION,
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Smart Backoffice Solutions', item: `${SITE}/${LANGS[lang]}` },
          { '@type': 'ListItem', position: 2, name: 'Mortgage Documents', item: url(lang, 'mortgage-documents/') }
        ]
      },
      {
        '@type': 'Service',
        '@id': `${url(lang, 'mortgage-documents/')}#service`,
        name: 'Mortgage Documents',
        serviceType: 'Document data extraction API',
        description: t.meta.description,
        url: url(lang, 'mortgage-documents/'),
        inLanguage: lang,
        areaServed: { '@type': 'Country', name: 'NL' },
        audience: { '@type': 'BusinessAudience', audienceType: 'Mortgage advisers, intermediaries and lenders' },
        provider: { '@id': ORGANIZATION['@id'] }
      }
    ]
  },
  {
    src: 'mortgage-documents/terms/index.html',
    path: 'mortgage-documents/terms/',
    copy: 'mortgage-documents/copy.js',
    metaKey: 'termsMeta',
    body: lang => `tools/terms/body.${lang}.html`,
    marker: 'terms:body',
    // The Dutch text is the binding one, so it is also what a visitor in any other language gets.
    xDefault: 'nl',
    og: 'og/mortgage-documents.png',
    jsonld: (lang, t) => [
      ORGANIZATION,
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Smart Backoffice Solutions', item: `${SITE}/${LANGS[lang]}` },
          { '@type': 'ListItem', position: 2, name: 'Mortgage Documents', item: url(lang, 'mortgage-documents/') },
          { '@type': 'ListItem', position: 3, name: t.nav.terms, item: url(lang, 'mortgage-documents/terms/') }
        ]
      }
    ]
  },
  {
    src: 'privacy/index.html',
    path: 'privacy/',
    copy: 'copy.js',
    metaKey: 'privacyMeta',
    body: lang => `tools/privacy/body.${lang}.html`,
    marker: 'privacy:body',
    og: 'og/home.png',
    jsonld: (lang, t) => [
      ORGANIZATION,
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Smart Backoffice Solutions', item: `${SITE}/${LANGS[lang]}` },
          { '@type': 'ListItem', position: 2, name: t.footer.privacy, item: url(lang, 'privacy/') }
        ]
      }
    ]
  }
];

function url(lang, pagePath) {
  return `${SITE}/${LANGS[lang]}${pagePath}`;
}

// Links to a rendered page stay in the same language. Food Moments, generated in its own repo,
// uses the same folder scheme (/nl/foodmoments/).
function localisedPath(sitePath, lang) {
  for (const page of PAGES) if (sitePath === `/${page.path}`) return `/${LANGS[lang]}${page.path}`;
  if (sitePath === '/foodmoments/') return `/${LANGS[lang]}foodmoments/`;
  return sitePath;
}

// Rewrites a relative href/src written for the English page so it works from the language page.
function rewriteUrl(value, page, lang) {
  if (/^(#|[a-z][a-z0-9+.-]*:|\/)/i.test(value)) return value;
  const from = `/${LANGS[lang]}${page.path}`;
  const target = new URL(value, `${SITE}/${page.path}`);
  const targetPath = localisedPath(target.pathname, lang);
  const dir = targetPath.endsWith('/') ? targetPath : path.posix.dirname(targetPath) + '/';
  let rel = path.posix.relative(from, dir);
  rel = rel ? `${rel}/` : '';
  if (!targetPath.endsWith('/')) rel += path.posix.basename(targetPath);
  return (rel || './') + target.search + target.hash;
}

function loadCopy(file) {
  const context = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(ROOT, file), 'utf8'), context, { filename: file });
  return context.window.SBO_COPY;
}

const escapeText = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const escapeAttr = s => escapeText(s).replace(/"/g, '&quot;');

function seoHead(page, lang, t) {
  const self = url(lang, page.path);
  const lines = [
    `<title>${escapeText(t.meta.title)}</title>`,
    `<meta name="description" content="${escapeAttr(t.meta.description)}" />`,
    `<link rel="canonical" href="${self}" />`,
    ...Object.keys(LANGS).map(l => `<link rel="alternate" hreflang="${l}" href="${url(l, page.path)}" />`),
    `<link rel="alternate" hreflang="x-default" href="${url(page.xDefault || 'en', page.path)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="Smart Backoffice Solutions" />`,
    `<meta property="og:title" content="${escapeAttr(t.meta.title)}" />`,
    `<meta property="og:description" content="${escapeAttr(t.meta.description)}" />`,
    `<meta property="og:url" content="${self}" />`,
    `<meta property="og:image" content="${SITE}/${page.og}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${escapeAttr(t.meta.title)}" />`,
    `<meta property="og:locale" content="${OG_LOCALE[lang]}" />`,
    ...Object.keys(LANGS).filter(l => l !== lang).map(l => `<meta property="og:locale:alternate" content="${OG_LOCALE[l]}" />`),
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<script type="application/ld+json">`,
    JSON.stringify({ '@context': 'https://schema.org', '@graph': page.jsonld(lang, t) }, null, 2),
    `</script>`
  ];
  return `<!-- seo:head -->\n${lines.join('\n').replace(/^/gm, '  ')}\n  <!-- /seo:head -->`;
}

function langSwitch(page, lang) {
  const from = `/${LANGS[lang]}${page.path}`;
  const links = Object.keys(LANGS).map(l => {
    const rel = path.posix.relative(from, `/${LANGS[l]}${page.path}`);
    const current = l === lang ? ' class="active" aria-current="page"' : '';
    return `      <a href="${rel ? `${rel}/` : './'}" hreflang="${l}" lang="${l}"${current}>${l.toUpperCase()}</a>`;
  });
  return `<!-- lang-switch -->\n    <nav class="lang-switch" aria-label="Language">\n${links.join('\n')}\n    </nav>\n    <!-- /lang-switch -->`;
}

for (const page of PAGES) {
  const template = fs.readFileSync(path.join(ROOT, page.src), 'utf8');
  const copy = loadCopy(page.copy);
  for (const lang of Object.keys(LANGS)) {
    const t = page.metaKey ? { ...copy[lang], meta: copy[lang][page.metaKey] } : copy[lang];
    let html = template
      .replace(/<html lang="[^"]*">/, `<html lang="${lang}">`)
      .replace(/(<([a-zA-Z][\w:-]*)\b[^>]*\sdata-i18n="([\w.]+)"[^>]*>)[^<]*(<\/\2>)/g, (m, open, tag, key, close) => {
        const [section, name] = key.split('.');
        const text = t[section]?.[name];
        if (typeof text !== 'string') throw new Error(`${page.copy}: no ${lang}.${key}`);
        return open + escapeText(text) + close;
      })
      .replace(/\s(href|src)="([^"]*)"/g, (m, attr, value) => ` ${attr}="${rewriteUrl(value, page, lang)}"`)
      .replace(/<!-- seo:head -->[\s\S]*?<!-- \/seo:head -->/, () => seoHead(page, lang, t))
      .replace(/<!-- lang-switch -->[\s\S]*?<!-- \/lang-switch -->/, () => langSwitch(page, lang));
    if (page.body) {
      const body = fs.readFileSync(path.join(ROOT, page.body(lang)), 'utf8').trim().replace(/^/gm, '    ');
      const block = new RegExp(`<!-- ${page.marker} -->[\\s\\S]*?<!-- /${page.marker} -->`);
      html = html.replace(block, () => `<!-- ${page.marker} -->\n${body}\n    <!-- /${page.marker} -->`);
    }
    const out = path.join(ROOT, LANGS[lang], page.path, 'index.html');
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, html);
    console.log(path.relative(ROOT, out));
  }
}
