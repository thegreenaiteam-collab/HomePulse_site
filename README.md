# HomePulse website

This version is a fully local, visually rich static website.

## Structure

homepulse_site/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── main.js
    └── images/
        ├── homepulse-logo.svg
        ├── mvp-overview.png
        ├── mvp-devices.png
        ├── mvp-history.png
        ├── smart-control-concept.png
        ├── home-energy-visual.png
        └── homepulse-mascot-board.png

## Run locally

From the project directory:

    python -m http.server 8000

Then open:

    http://localhost:8000

You can also open `index.html` directly.

## Deploy

Upload `index.html` and the complete `assets/` folder to the web root of your hosting account.

## Editing

- Main content and page structure: `index.html`
- Visual styling: `assets/css/style.css`
- MVP tab interactions: `assets/js/main.js`
- All visual assets: `assets/images/`

The project intentionally keeps HTML human-readable and stores styling, JavaScript and imagery as separate local files.
