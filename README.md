# Smart Backoffice Solutions website

Static multilingual website for Smart Backoffice Solutions B.V., designed for GitHub Pages.

## Publish with GitHub Pages

1. Push these files to the repository root.
2. In GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select `main` and `/ (root)`.
5. Save.

The site uses plain HTML/CSS/JavaScript and needs no build step.

## foodscanner/ — generated, do not edit by hand

`foodscanner/` holds the Food Scanner app's support hub and legal pages (privacy policy +
supplemental terms in six languages), unlinked from the main site and `noindex`. The HTML
there is **generated**: the sources are the markdown files in the food-scanner repo under
`documents/public/`, rendered by `scripts/website/build.py` in that repo. To change wording,
edit the markdown there, run the script, then commit both repos and push this one (pushing
main publishes). Only `foodscanner/foodscanner.css` is edited directly in this repo.
