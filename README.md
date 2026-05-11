<div align="center">

# Alan Yusuke · Portfolio

**A personal portfolio inspired by the Ubuntu desktop environment**

[![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7-646cff?style=flat-square&logo=vite)](https://vitejs.dev)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-latest-ff0055?style=flat-square)](https://www.framer.com/motion)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

[Live Demo](https://sayusk.github.io/Portfolio) · [Report Bug](https://github.com/Sayusk/Portfolio/issues)

</div>

---

## Overview

This is not a conventional portfolio website. It's a **desktop-metaphor experience** built on top of React — inspired by Ubuntu's desktop environment.

Each section of the portfolio (About Me, Work, Contact) behaves like a real desktop application: draggable, resizable windows that stack as browser-style tabs. The left-side dock lets you open, switch between, and minimize apps, just like a real OS.

---

## Features

- **Ubuntu-inspired dock** — Vertical left taskbar with animated icons, hover tooltips, and active-app indicators
- **Draggable + resizable windows** — Powered by `react-rnd`, windows float freely on the desktop canvas
- **Tabbed window system** — Open multiple apps inside one window container, switch between them like VSCode/browser tabs
- **Minimize / restore** — Windows minimize to an animated bottom bar and restore on click
- **Dark & Light mode** — Full theme system with `localStorage` persistence and zero flash on load
- **Framer Motion animations** — Smooth window open/close, tab transitions, icon spring animations
- **Lucide React icons** — Consistent, minimal icon language across the entire UI
- **Zustand state management** — Clean global state for window positions, open apps, tabs, and theme
- **Tailwind CSS v4** — Utility-first styling, no bespoke CSS files

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + Vite 7 |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Animations | Framer Motion |
| Windowing | react-rnd |
| State | Zustand |
| Icons | lucide-react |
| Deploy | GitHub Pages (`gh-pages`) |

---

## Project Structure

```
src/
├── App.jsx                         # Root: applies theme class, renders Desktop
├── main.jsx                        # Entry point, FOUT prevention
├── index.css                       # Tailwind directives + scrollbar styles
│
├── store/
│   └── useDesktopStore.js          # Zustand: windows, tabs, theme, positions
│
└── components/
    ├── apps/                       # Window content components
    │   ├── AboutApp.jsx
    │   ├── WorkApp.jsx             # Includes inline ProjectDetail view
    │   └── ContactApp.jsx
    │
    ├── desktop/                    # Desktop environment shell
    │   ├── Desktop.jsx             # Canvas + background + home screen
    │   ├── Taskbar.jsx             # Left dock with app icons + theme/mute toggles
    │   └── MinimizedBar.jsx        # Bottom bar for minimized windows
    │
    └── window/
        └── WindowContainer.jsx     # react-rnd wrapper + tab bar + window chrome
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/Sayusk/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173/Portfolio/](http://localhost:5173/Portfolio/) in your browser.

### Build for production

```bash
npm run build
npm run preview
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

---

## Customization

### Adding a new app / window

1. Create `src/components/apps/YourApp.jsx`
2. Add your app to `APPS` in `src/store/useDesktopStore.js`:
   ```js
   { id: 'yourapp', label: 'Your App', icon: 'iconName' }
   ```
3. Add the icon mapping in `Taskbar.jsx`:
   ```js
   const ICON_MAP = { ..., yourapp: YourIcon }
   ```
4. Register the component in `WindowContainer.jsx`:
   ```js
   const APP_COMPONENTS = { ..., yourapp: YourApp }
   ```

### Adding a project

Open `src/data/project.js` and add a new entry to the `projects` array following the existing structure.

### Changing personal info

- **Bio & highlights** → `src/components/apps/AboutApp.jsx`
- **Contact links** → `src/components/apps/ContactApp.jsx`
- **Projects** → `src/data/project.js`
- **Profile picture** → replace `src/assets/Pfp.jpeg`

---

## Roadmap

- [ ] Mobile-responsive layout (simplified UX for touch)
- [ ] Terminal app (interactive command-line easter egg)
- [ ] Resume/CV viewer window
- [ ] Window maximize support
- [ ] Tab reordering via drag-and-drop
- [ ] Right-click desktop context menu

---

## About Me

Hi, I'm **Alan Yusuke Sassano Vilares** — a Web Developer and UI/UX Designer based in Limeira, Brazil.

I'm passionate about creative interfaces and clean code. This portfolio itself is one of my projects — built from scratch with attention to interaction design and developer experience.

- Email: [alanyusuke@gmail.com](mailto:alanyusuke@gmail.com)
- LinkedIn: [yusukesassano](https://www.linkedin.com/in/yusukesassano/)
- GitHub: [Sayusk](https://github.com/Sayusk)
- Instagram: [@sayusk_](https://www.instagram.com/sayusk_/)

---

## License

MIT © 2025 Alan Yusuke Sassano Vilares
