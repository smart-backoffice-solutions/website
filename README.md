# Smart Backoffice Solutions website

Static multilingual website for Smart Backoffice Solutions B.V., designed for GitHub Pages.

## Languages: one URL per language

The landing page and Mortgage Documents exist in English (`/`, `/mortgage-documents/`), Dutch (`/nl/...`)
and German (`/de/...`), each as real HTML so search engines can index every language. The text lives in
`copy.js` and `mortgage-documents/copy.js`; the English `index.html` files are the templates. After
changing either, run `node tools/render-languages.mjs` (no dependencies) and commit the English files
together with `nl/` and `de/`. Never edit `nl/` or `de/` by hand.

The Mortgage Documents terms page (`/nl/mortgage-documents/terms/`, with English and German translations) takes
its document text from `tools/terms/body.<lang>.html`. The Dutch text (`body.nl.html`) is the binding one and is
edited there directly; after changing it, make the same change in the English and German translations and
re-run the render script. Clause anchors (`id="av-5-2"` etc.) must stay the same in all three.

The terms and the Mortgage Documents page describe what the backend in `~/src/mortgage-documents` actually
does: document types and fields, retention, sub-processors, Azure regions and security measures. Check a claim
against that repository and against Azure before changing it. Its `CLAUDE.md` lists what the terms commit to
and which backend changes require a change here.

The website privacy statement (`/privacy/`, English, Dutch and German) takes its text from `tools/privacy/body.<lang>.html`
in the same way. It describes exactly what `consent.js` does.

## Cookie banner and Google Analytics

`consent.js`, loaded on every page (Food Moments too, through its generator), shows the cookie banner and loads
Google Analytics (`G-F29KPBNC6V`) only after the visitor accepts; before that nothing is requested from Google. It
only sends data from `smart-backoffice.nl`, so local previews do not count as visits. Every footer has a
Cookie settings link (`data-consent-open`) that reopens the banner. If you change what is measured, or the Analytics
settings (retention, Google Signals, data sharing), update the privacy statement in all three languages.

After adding or removing a page,
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

## Food Moments — generated, do not edit by hand

Food Moments has a landing page, a support page and two legal pages (privacy policy +
supplemental terms) in six languages, in the same folder scheme as the rest of the site:
`/foodmoments/`, `/foodmoments/privacy/`, `/foodmoments/terms/`, `/foodmoments/support/` in English and
`/nl/foodmoments/...`, `/de/...`, `/es/...`, `/fr/...`, `/pt/...` for the others. All are indexable.
`foodmoments/` also holds the shared stylesheet and icons. The HTML is **generated**: the sources are the markdown files in the food-moments repo under
`documents/public/`, rendered by `scripts/website/build.py` in that repo. To change wording,
edit the markdown there, run the script, then commit both repos and push this one (pushing
main publishes). Only `foodmoments/foodmoments.css` is edited directly in this repo.
