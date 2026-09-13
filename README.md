# Smart Backoffice Solutions website

Static multilingual website for Smart Backoffice Solutions B.V., designed for GitHub Pages.

## Languages: one URL per language

The landing page and Mortgage Documents exist in English (`/`, `/mortgage-documents/`), Dutch (`/nl/...`)
and German (`/de/...`), each as real HTML so search engines can index every language. The text lives in
`copy.js` and `mortgage-documents/copy.js`; the English `index.html` files are the templates. After
changing either, run `node tools/render-languages.mjs` (no dependencies) and commit the English files
together with `nl/` and `de/`. Never edit `nl/` or `de/` by hand.

The Mortgage Documents terms page (`/nl/mortgage-documents/terms/`, with English and German translations) takes
its document text from `tools/terms/body.<lang>.html`. The Dutch text is the binding one and is converted from
the Word file with `python3 tools/terms/docx-to-html.py <file.docx> > tools/terms/body.nl.html`; after a new
version, update the English and German translations to match and re-run the render script. After adding or removing a page,
update `tools/sitemap.json` and regenerate `sitemap.xml` with the `seo` skill's `gen_sitemap.py`
(it takes `lastmod` from git, so run it after committing). Share images in `og/` are screenshots of
`tools/og-cards.html`. Fonts are self-hosted in `fonts/`.

## Publish with GitHub Pages

1. Push these files to the repository root.
2. In GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select `main` and `/ (root)`.
5. Save.

The site uses plain HTML/CSS/JavaScript and needs no build step.

## foodmoments/ — generated, do not edit by hand

`foodmoments/` holds the Food Moments app's landing page, support hub and legal pages (privacy
policy + supplemental terms) in six languages. Everything except `support.html` is indexable. The HTML
there is **generated**: the sources are the markdown files in the food-moments repo under
`documents/public/`, rendered by `scripts/website/build.py` in that repo. To change wording,
edit the markdown there, run the script, then commit both repos and push this one (pushing
main publishes). Only `foodmoments/foodmoments.css` is edited directly in this repo.
