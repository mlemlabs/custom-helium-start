<img width="1385" height="933" alt="image" src="https://github.com/user-attachments/assets/b819bece-3efd-496e-ba68-514c2a733f7d" />

# Disclosure & Attribution

I am not affiliated with Helium or Imput.

This project was originally created for my personal use. However, as some have asked for a copy, I am sharing it here for anyone to enjoy.

- All references to "Helium" belong to Helium.
- All rights are reserved to Helium; you can support their work at [helium.computer/sponsor](https://helium.computer/sponsor).
- I am not part of Imput/Helium, nor am I affiliated with them.

---

## Usage & Hosting

While you can open `index.html` directly in your browser, it is **better to host it locally** (e.g., using a Python web server: `python -m http.server`) but thats your preference.

### Why is there no `config.json`?
I decided against using a separate `config.json` to keep things simple and "plug-and-play" for this public release. Using external JSON files would require a web server to bypass browser security restrictions. By keeping the configuration inside `index.html`, the project works immediately without extra setup. This also explains why I haven't used external dependencies or build tools, relying instead on high-quality CDNs.

### Integration with Helium

In the Helium settings (`helium://settings/onStartup`), you can configure the app to open this project on startup:

1. Click **"Add a new page"**.
2. Set the **Site URL** to the path of the `index.html` file in this folder.
   
   **Example:**
   `C:\Users\User\Documents\Project Helium\index.html`
   
   Or if you are hosting with Python:
   `http://localhost:8000` (or whichever port you have set).

3. To edit your default search engine, open `index.html` in an editor and go to **Line 101** to swap Google for any of the other engines listed (or add your own).

All your search history and settings are stored locally in a wrapped `localStorage`.

### Optional: Redirect Extension
If you want this page to open every time you click the **"+" (New Tab)** button in your browser, you can use a redirect extension such as *New Tab Redirect* or *Custom New Tab URL*.