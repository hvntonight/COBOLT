# Cobolt product site

Static product, support, and privacy pages for the Cobolt macOS app.

The site is English-first. Use the `EN / 中文` control in the header to switch the current page to Chinese; the choice is saved locally in the browser and follows you between the product, privacy, and support pages.

## Local preview

From this directory, run:

```sh
python3 -m http.server 4173
```

Then open <http://localhost:4173/>.

## Pages

- Product: <https://hvntonight.github.io/COBOLT/>
- Privacy: <https://hvntonight.github.io/COBOLT/privacy/>
- Support: <https://hvntonight.github.io/COBOLT/support/>

## Product screenshots

The homepage uses three English app captures from `../vault_screenshot/en/`: the unlocked workspace, locked vault, and security preferences. They are resized to 1600px wide and encoded as WebP (quality 82) in `assets/screenshots/` so the page stays quick to load. The captures sit in a horizontal scroll rail and open into a larger lightbox preview when clicked. Replace those files only when refreshed captures are available, and keep the descriptive `alt` text in `index.html`.

## Product claims used on this site

The copy is based on the Cobolt source and design handoff in `../vault-macos-prototype`, including local vault storage, AES-GCM authenticated encryption, password-wrapped random master keys, Touch ID, recovery keys, auto-lock, integrity checks, encrypted backups, file versions, Restore to original location, Quick Look's temporary decrypted-copy caveat, and the free/Pro limits. Update the privacy page before release if the shipping app adds analytics, crash reporting, cloud sync, or other data practices.

The app icon in `assets/app-icon.png` is the 1024px PNG from `vault-macos-prototype/macOS/Resources/Assets.xcassets/AppIcon.appiconset`.
