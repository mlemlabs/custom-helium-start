<img width="1385" height="933" alt="image" src="https://github.com/user-attachments/assets/b819bece-3efd-496e-ba68-514c2a733f7d" />

# Disclosure & Attribution

I am not affiliated with Helium or imput

This project was originally created for my personal use. However, as some have asked for a copy, I am sharing it here because... why not? Enjoy!

- All references to "Helium" belong to Helium.
- All rights are reserved to Helium bless those boys consider sponsoring them (https://helium.computer/sponsor).
- I am not "imput" nor affiliated with them.

---

## Usage & Hosting

While you can open the `index.html` directly, it is **better to host it locally** (e.g., using a Python web server: `python -m http.server`).

### Why is there no `config.json`?
I decided against using a separate `config.json` to keep things simple for standard use in this public release. Using external JSON files would require you to run a web server to avoid browser security restrictions. By keeping the configuration inside `index.html`, you can use the file normally without extra setup, also explains why i did not build the project with its depends and why i'm using their cdns. (if you are a bit savy then you know how to easy build this yourself thats why this is opensource).

### Integration with Helium
In the Helium settings on startup, you can point directly to the `index.html` file in this folder. All of your history and settings are stored in `localStorage`.
OPTIONAL: If you want this page to open every time you click the **"+" (New Tab)** button in your browser, you can use a redirect extension like New Tab Redirect or Custom New Tab URL.
