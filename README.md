# DRIFT//LIST — JDM Watch Garage

A responsive Initial D-inspired car-culture catalog. Includes movies, series, anime, YouTube channels and racing games; individual title details; search, filters, sorting; streaming/store search links; and completion tracking saved in browser localStorage.

## Preview immediately
Open `drift-list-website-preview.html` (the standalone file supplied alongside the ZIP). Its CSS, JavaScript and the supplied artwork are embedded, so the page does not lose its styling when opened by itself.

## Recommended local preview
Extract this folder and double-click `run-desktop.bat` on Windows. It starts a local server at `http://localhost:8080`. Python 3 is required. Keep the command window open while testing.

## GitHub Pages deployment
1. Create a repository and upload the contents of this folder to the repository root: `index.html`, `styles.css`, `app.js`, `manifest.webmanifest`, `sw.js`, and `assets/`.
2. In repository Settings → Pages, choose Deploy from a branch, select `main` and `/ (root)`, then save.
3. Open the published HTTPS URL.

## Progress and availability
Completion state is saved in browser localStorage on the current device. It is not synced across devices. Streaming availability varies by region and time; title pages link to search results so availability can be checked rather than promising a particular service has a title.

## Artwork
The supplied Initial D-inspired images are used for the hero and feature areas and selected titles. Other titles use stylized graphic thumbnails, not unofficially represented as official movie posters.


## Motion and responsive interactions

The current build includes a cinematic hero entrance, animated speed-line and light-sweep layers, scroll progress, card reveal-on-scroll with stagger, hover depth and poster sheen, pointer-following ambient glow on desktop, subtle hero parallax, detail-page transitions, animated completion marks, and reduced-motion accessibility support.

Open `index.html` through `run-desktop.bat` or a local server for the best experience. The website can be deployed to GitHub Pages by uploading the folder contents.
