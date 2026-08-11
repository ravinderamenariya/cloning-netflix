# Netflix Landing Page — Debugged

A responsive Netflix-inspired landing page built as a front-end practice project using **HTML, CSS and JavaScript**.

> **Disclaimer:** This is an educational/demo project and is not affiliated with or endorsed by Netflix.

## ✨ Features

- Responsive desktop, tablet and mobile layout
- Netflix-inspired dark/red visual style
- Responsive hero section
- Email validation with demo signup feedback
- Interactive FAQ accordion
- Mobile-friendly navigation
- Local image assets only
- Accessible labels and ARIA attributes
- No framework or build step required

## 🛠️ Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Local PNG assets

## 📁 Project Structure

```text
netflix-landing-page/
├── index.html
├── style.css
├── script.js
├── image.png
├── image copy.png
├── image copy 2.png
└── README.md
```

## 🚀 Run Locally

No installation is required.

1. Download or clone the repository.
2. Open the project folder.
3. Open `index.html` in a browser.

For a better local development experience, use VS Code with Live Server or any static HTTP server.

## 🔧 Debugging Performed

The original project had several issues that could prevent the page from rendering correctly or behaving as expected.

### Fixed

- Removed broken references to `../direct from git/assets/images/bg.jpg`.
- Removed broken references to `../direct from git/assets/images/logo.svg`.
- Replaced the missing external logo with a local text logo.
- Replaced the missing background image with a CSS gradient so the hero works without external files.
- Fixed the CSS structure: the original stylesheet wrapped major rules inside `* { ... }`, which changed selector behavior and could stop intended styles from applying.
- Removed fixed desktop widths such as `1470px` and made the layout fluid.
- Added proper responsive breakpoints for mobile and tablet.
- Added working JavaScript for the FAQ accordion.
- Added client-side email validation and signup feedback.
- Added button behavior for the demo Sign In and language controls.
- Added semantic form labels and ARIA states.
- Added lazy loading to feature images.
- Corrected copy such as `NetFlix` → `Netflix` and removed the duplicated period in the offline-download text.
- Removed macOS `__MACOSX` metadata from the project package.

## ⚠️ Demo Limitations

This is a front-end clone/demo, so these features are intentionally not connected to a real service:

- Sign In does not authenticate users.
- Email signup does not create a Netflix account.
- Language selection is only a demo interaction.
- Footer links use placeholder `#` destinations.
- No backend, database or authentication system is included.

## 🌐 Deploy to GitHub Pages

1. Create a GitHub repository.
2. Upload all project files.
3. Make sure `index.html` is in the repository root.
4. Open **Settings → Pages**.
5. Select **Deploy from a branch**.
6. Select the `main` branch and `/root`.
7. Save and wait for GitHub Pages to publish the site.

## 🧪 Testing Checklist

- [x] Desktop layout
- [x] Tablet layout
- [x] Mobile layout
- [x] Local image paths
- [x] Hero email validation
- [x] FAQ interaction
- [x] Button interactions
- [x] No JavaScript dependency errors
- [x] No external asset dependency for the main UI

## 📌 Future Improvements

- Connect real authentication
- Add a backend/API
- Replace placeholder footer links
- Add real language switching
- Add more Netflix-style content sections
- Improve SEO metadata
- Add automated tests
- Optimize images to WebP/AVIF

## 👨‍💻 Author

**Ravindera**

Created as a front-end web development practice project.
