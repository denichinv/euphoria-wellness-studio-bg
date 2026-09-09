# Euphoria — XBody & Pilates Reformer Studio

A bilingual client website for **Euphoria**, a boutique wellness studio in **Blagoevgrad, Bulgaria**, created to establish their digital presence and present **Pilates Reformer** and **XBody EMS** services in both **Bulgarian and English**.

> This repository is publicly visible for portfolio demonstration purposes only.  
> The design, branding, and business identity belong to Euphoria Wellness Studio.

---

## 🌐 Live Website

https://euphoria-wellness.com/

---

## 🧠 Project Overview

The website was built with focus on:

- performance
- accessibility
- modular React architecture
- seamless bilingual experience

The website provides information about services, studio atmosphere, and contact options for potential clients.

---

## ✨ Features

- Premium responsive UI designed for a boutique wellness brand
- Modular React component architecture with **TypeScript**
- Bilingual support (BG / EN) with dynamic language switching
- Centralized translation system using React Context
- Design token system for scalable styling (**CSS variables + Tailwind**)
- Responsive WebP images and deferred gallery video loading
- Accessibility-aware semantic HTML structure
- Contact form powered by **Netlify Forms** (no backend required)
- Automated linting, testing, and production builds with **GitHub Actions**
- Production deployment with **Netlify**

---

## 🧩 Tech Stack

| Tool | Purpose |
|------|--------|
| React | Component-based UI |
| TypeScript | Type safety |
| Vite | Fast development environment |
| TailwindCSS | Utility-first styling |
| Vitest | Unit & integration testing |
| Testing Library | Component testing |
| GitHub Actions | Automated quality checks |
| Netlify | Deployment & hosting |

---

## 🏗 Architecture

The project follows a **section-based architecture**, where each major page section is implemented as an independent React component with corresponding tests.

```
src
 ├ components
 │  ├ layout
 │  ├ sections
 │  └ ui
 ├ data
 ├ styles
 └ test
```

This structure improves:

• maintainability  
• scalability  
• component reusability

---

## 🌍 Internationalization

The application includes a lightweight internationalization system supporting **Bulgarian and English**.

• Language state managed globally via React Context  
• Content separated from UI using structured translation files  
• Dynamic rendering based on selected language  
• Scalable approach for adding additional languages  

This ensures a clean separation between content, structure, and presentation.

---

## ⚡ Performance, Quality & Accessibility

The project includes responsive image sources, WebP assets, lazy-loaded images,
deferred gallery videos, viewport-based video playback, and reduced-motion
handling.

The automated quality suite runs ESLint, 28 tests across 8 test files, and a
TypeScript production build through:

```bash
npm run check
```

The tests cover component rendering, semantic headings, selected ARIA
relationships, language behaviour, responsive media attributes, video playback
behaviour, and contact-form states. They are not presented as a complete WCAG
accessibility audit.

A Semrush audit generated on 3 September 2026 reported **95% Site Health**,
**99% AI Search Health**, and **0 errors**. Three warnings remained for one
crawled page: missing H1 detection, low word count, and a low text-to-HTML ratio.

---

## 📬 Contact Form

The contact form uses **Netlify Forms**, enabling form submissions without a custom backend.

Submissions are automatically handled by Netlify and can be managed through the Netlify dashboard.

---

## 🚀 Deployment

The project is deployed using **Netlify**.

Build command:

```
npm run build
```

Publish directory:

```
dist
```

---

## 📂 Repository Purpose

This repository is part of a **front-end developer portfolio** and demonstrates:

- React + TypeScript development
- UI architecture for marketing websites
- responsive design
- accessibility practices
- testing workflows
- production deployment

---

## 👨‍💻 Author

**Vilizar Denichin**

🌍 Portfolio  
https://vilizar.dev

💼 LinkedIn  
https://www.linkedin.com/in/vilizar-denichin/

📧 Email  
denichinv@gmail.com

📍 Location: Dunstable, Bedfordshire, UK

---

## 📄 License

This project is shared publicly for **portfolio and demonstration purposes only**.
