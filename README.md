<img src="https://github.com/user-attachments/assets/e3a74da4-8c2f-4b6f-923d-48b2cea1c407" width="100%" style="border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.15);" />

# Disclosure & Attribution
I am not affiliated with Helium or Imput. This project was originally created for my personal use — I'm sharing it here for anyone to enjoy.
- All references to "Helium" belong to Imput/Helium.
- All rights are reserved to Imput/Helium; you can support their work at [helium.computer/sponsor](https://helium.computer/sponsor).
- I am not part of Imput/Helium, nor am I affiliated with them.

---

## Usage & Hosting
You can open `index.html` directly in your browser, but hosting it locally is recommended (e.g. `python -m http.server`) — though it's not required.

### Integration with Helium

**Step 1 — Enable the custom new tab flag**

Navigate to:
`helium://flags/#custom-ntp`

> Allows setting a custom URL for the new tab page. Value can be internal (e.g. `about:blank` or `chrome://new-tab-page`), external (e.g. `example.com`), or local (e.g. `file:///tmp/startpage.html`). Applies in incognito too. *ungoogled-chromium — Mac, Windows, Linux*

Enable the flag, then set the value to your `index.html` path or hosted URL.

**Step 2 — Set startup to open a new tab**

Navigate to:
helium://settings/onStartup

Select **"Open the new tab page"** — Helium will automatically load your custom new tab from Step 1.

**Step 3 — Customize your dashboard**

Open `assets/js/config.js` in any text editor to change your search engine, colors, and custom `!bang` shortcuts — no need to touch the core code.

All search history and settings are stored locally in your browser's `localStorage`.

---

## Getting Started
For the best experience with no setup, download the latest release from the GitHub releases page.

To customize the source, open `assets/js/config.js` in a text editor — everything you'd want to change is in there.
