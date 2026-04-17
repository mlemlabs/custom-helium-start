<img src="https://github.com/user-attachments/assets/e3a74da4-8c2f-4b6f-923d-48b2cea1c407" width="100%" style="border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.15);" />

# Disclosure & Attribution

I am not affiliated with Helium or Imput.

This project was originally created for my personal use. However, as some have asked for a copy, I am sharing it here for anyone to enjoy.

- All references to "Helium" belong to Imput/Helium.
- All rights are reserved to Imput/Helium; you can support their work at [helium.computer/sponsor](https://helium.computer/sponsor).
- I am not part of Imput/Helium, nor am I affiliated with them.

---

## Usage & Hosting

While you can open `index.html` directly in your browser, it is **better to host it locally** (e.g., using a Python web server: `python -m http.server`) for optimal performance and security.

### Integration with Helium

Set your custom new tab page by navigating to:
`helium://flags/#custom-ntp`
From there, point it to your project’s `index.html` file (either locally or hosted url).

Next, configure startup behavior in:
helium://settings/onStartup

1. Click "Add a new page"
2. Enter the Site URL pointing to your project

Examples:

- Local file:
  C:\Users\User\Documents\Project Helium\index.html

- Hosted locally (e.g. Python server):
  http://localhost:8000

3. To customize your dashboard, open `assets/js/config.js` in a text editor. You can easily change your default search engine, colors, and add custom !bang shortcuts without editing the core code.

All your search history and settings are stored locally in your browser's `localStorage`.

### Optional: Redirect Extension
If you want this page to open every time you click the **"+" (New Tab)** button in your browser, you can use a redirect extension such as *New Tab Redirect* or *Custom New Tab URL*.
