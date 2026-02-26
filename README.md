# Euphoria — XBody & Pilates Reformer Studio

A modern, single-page marketing website for **Euphoria**, a wellness studio in Blagoevgrad, Bulgaria offering XBODY EMS and Pilates Reformer sessions.

> This repository is publicly visible for portfolio demonstration purposes only.  
> The design, branding, and business identity belong to Euphoria Wellness Studio.

---

## 🌐 Live Demo

https://euphoria-wellness.netlify.app/

---

## Tech Stack

| Tool | Purpose |
|---|---|
| React 19 | UI framework |
| TypeScript | Type safety |
| Vite 7 | Dev server & bundler |
| Tailwind CSS 3 | Styling |
| Lucide React | Icons |
| Vitest + Testing Library | Unit tests |
| Netlify | Hosting & form handling |

---

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx / Hero.test.tsx
│   │   ├── Services.tsx / Services.test.tsx
│   │   ├── About.tsx / About.test.tsx
│   │   ├── Gallery.tsx / Gallery.test.tsx
│   │   └── Contact.tsx / Contact.test.tsx
│   └── ui/
│       └── ServiceCard.tsx
├── data/
│   └── services.ts
├── styles/
│   └── theme.css
├── test/
│   └── setup.ts
├── App.tsx
├── main.tsx
└── index.css
```

---

## Getting Started

### Prerequisites

- Node.js ≥ 20.19.0
- npm

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

---

## Testing

Tests are written with [Vitest](https://vitest.dev/) and [@testing-library/react](https://testing-library.com/).

```bash
# Run tests (watch mode)
npm test

# Run tests with UI
npm run test:ui
```

Each section component has a corresponding `.test.tsx` file that covers:
- Correct semantic HTML structure (headings, landmarks)
- ARIA attributes (`aria-labelledby`, `id`)
- Expected content and interactions
- Form submission and success state (Contact)

---

## Sections

| Section | Description |
|---|---|
| **Hero** | Full-screen image carousel with CTAs |
| **Services** | Cards for XBODY EMS and Pilates Reformer |
| **About** | Studio overview with feature highlights |
| **Gallery** | Masonry-style grid with images and video |
| **Contact** | Contact form with Netlify integration + Google Maps embed |
| **Footer** | Navigation, contact info, branding |

---

## Design Tokens

Custom CSS variables defined in `src/styles/theme.css` and extended in `tailwind.config.js`:

| Token | Value | Usage |
|---|---|---|
| `--surface` | `#f5f1ed` | Card/section backgrounds |
| `--surface-light` | `#f8f8f8` | Alternate section backgrounds |
| `--accent-blush` | `#e8d5d5` | Hover states, highlights |
| `--accent-mauve` | `#b4948f` | Labels, icons, primary accents |

Fonts: **Cormorant Garamond** (headings) + **Inter** (body), both via Google Fonts.

---

## Deployment

The site is deployed on [Netlify](https://www.netlify.com/). Build settings are defined in `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

### Contact Form

The contact form uses Netlify Forms. The hidden form in `index.html` registers the form with Netlify at build time. No backend required.

---

## Linting

```bash
npm run lint
```

ESLint is configured with TypeScript and React Hooks rules via `eslint.config.js`.

---

## Author

**Vilizar Denichin**

---

## License

Copyright © 2025 Vilizar Denichin. All rights reserved.

This project and its source code are proprietary. No part of this codebase may be copied, modified, distributed, or used in any form without explicit written permission from the author.
