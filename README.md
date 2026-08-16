# Cobolt product site

Static product, support, and privacy pages for the Cobolt macOS app.

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

## Replacing the screenshot placeholders

The three cards in `index.html` use `.screenshot-slot` as intentional placeholders. When final captures are ready, replace each card's contents with an image, for example:

```html
<img src="assets/screenshot-workspace.png" alt="Cobolt unlocked workspace" />
```

Add the image to `assets/`, keep the `alt` text descriptive, and preserve the surrounding card classes for the responsive layout.

## Product claims used on this site

The copy is based on the Cobolt source and design handoff in `../vault-macos-prototype`, including local vault storage, AES-GCM authenticated encryption, Touch ID, recovery keys, auto-lock, Quick Look's temporary decrypted-copy caveat, and the free/Pro limits. Update the privacy page before release if the shipping app adds analytics, crash reporting, cloud sync, or other data practices.

The app icon in `assets/app-icon.png` is the 1024px PNG from `vault-macos-prototype/macOS/Resources/Assets.xcassets/AppIcon.appiconset`.
