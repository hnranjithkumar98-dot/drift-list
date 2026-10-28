# DRIFT//LIST — JDM Watch Garage

Responsive Initial D-inspired car-culture catalogue with search, category filters, title details, streaming-search links, and local completion tracking.

## Publish to GitHub Pages

1. Create a repository named `drift-list` (or use your existing DriftList repository).
2. Upload **the contents of this folder** to the repository root, keeping the `assets` folder intact.
3. Open **Settings → Pages**.
4. Under Build and deployment, choose **Deploy from a branch**, branch `main`, folder `/(root)`, and Save.
5. Wait for deployment, then open `https://YOUR-USERNAME.github.io/drift-list/` (replace `YOUR-USERNAME`).
6. Open that HTTPS URL in Chrome on Android. Visit once while online, wait a few seconds, then refresh.
7. In Chrome, open ⋮ → **Install app** or **Add to Home screen**. Exact wording varies by Chrome version/device.

## Required files and paths

Keep this structure exactly (all paths are relative, so it works on a GitHub Pages project URL):

```
/index.html
/styles.css
/app.js
/manifest.webmanifest
/sw.js
/assets/icon.svg
/assets/icon-192.png
/assets/icon-512.png
/assets/mountain-drift.jpg
/assets/ae86-tokyo.jpg
```

`index.html` links `./manifest.webmanifest`; the manifest declares 192×192 and 512×512 PNG icons; `app.js` registers `./sw.js`; the service worker caches the main app files and icons.

## If Chrome still says it cannot be installed

- Confirm the site opens over `https://`, not `file://` or an editor preview.
- Open the manifest directly at `https://YOUR-USERNAME.github.io/drift-list/manifest.webmanifest` and ensure it shows JSON, not a 404 page.
- Open `https://YOUR-USERNAME.github.io/drift-list/assets/icon-192.png` and `.../icon-512.png` and confirm both images load.
- Check `https://YOUR-USERNAME.github.io/drift-list/sw.js` loads as JavaScript.
- In Chrome, open the site, refresh it, and wait for the service worker to install. If an older version was cached, clear the site's storage or wait for the new service worker to activate.
- Check DevTools → Application → Manifest and Service Workers on desktop Chrome for specific errors.
- Chrome's install UI can vary by Android version; if install is not offered, **Add to Home screen** may still be available.

Completion status is stored in localStorage on that browser/device and does not sync automatically between devices. Streaming availability changes by region; platform links open searches rather than guaranteeing a title is available.


## PWA install troubleshooting (v2)
Upload the contents of this folder to the root of the GitHub Pages publishing branch. Keep `index.html`, `manifest.webmanifest`, `sw.js`, `styles.css`, `app.js`, and the `assets/` directory together. The app now registers `sw.js` on HTTPS and shows an Install button if Chrome fires `beforeinstallprompt`.

After deploying, visit `/manifest.webmanifest`, `/sw.js`, `/assets/icon-192.png`, and `/assets/icon-512.png` on your GitHub Pages origin and confirm none returns 404. Clear the old site data/service worker or test in an Incognito tab after deployment. GitHub Pages path for a project repo is `https://USERNAME.github.io/REPOSITORY/`; for a user site it is `https://USERNAME.github.io/`.
