# Smart Backoffice Solutions website

Static multilingual website for Smart Backoffice Solutions B.V. (smart-backoffice.nl), served by GitHub Pages
from `main`, root folder. Plain HTML/CSS/JavaScript, no build step. Pushing `main` publishes.

## Pages

| Path | What | Languages |
|------|------|-----------|
| `/` | Landing page: `index.html`, `styles.css`, `script.js` (copy) | NL / EN / DE, switched in the page |
| `/mortgage-documents/` | Product page for the Mortgage Documents API, with inline SVG comic strips | NL / EN / DE, switched in the page |
| `/foodmoments/` | Food Moments app pages (landing, support, privacy, terms) | EN / DE / NL / ES / FR / PT as separate files |

## Language switch

`i18n.js` is shared by the landing page and the mortgage-documents page. Each page defines
`window.SBO_COPY = { nl, en, de }` in its own copy file (`script.js` at the root,
`mortgage-documents/copy.js`) and marks translatable elements with `data-i18n="section.key"`.
The choice is stored in `localStorage['sbo-lang']` so it carries across pages; `?lang=nl` in
the URL overrides it, which makes per-language links shareable. Keep the three language
objects in a copy file structurally identical: every key must exist in all three.

Comic speech text on the mortgage-documents page lives in `<foreignObject>` blocks inside the
SVG panels, so it wraps and translates like any other text. The characters are drawn once as
`<symbol>` elements at the top of that page and reused with `<use>`.

## foodmoments/ — generated, do not edit by hand

`foodmoments/` holds the Food Moments app's landing page, support hub and legal pages (privacy
policy + supplemental terms in six languages). The pages are `noindex`. The HTML there is
**generated** from the food-moments repo (`scripts/website/build.py` with `landing.html` and
`landing_i18n.py`, and the markdown under `documents/public/`). To change wording, edit the
sources there, run the script, then commit both repos and push this one. Only
`foodmoments/foodmoments.css` is edited directly in this repo. The landing page reuses
`foodmoments/appicon.png`.
