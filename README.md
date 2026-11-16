# Euphoria Wellness Studio

A bilingual client website for **Euphoria**, a boutique wellness studio in **Blagoevgrad, Bulgaria**, presenting **Pilates Reformer**, **XBODY EMS** and **Shape Space** in **Bulgarian and English**.

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
- A filterable gallery with image and video thumbnails
- Service enquiry links that select the requested service in the contact form
- Accessibility-aware semantic HTML structure
- Contact form powered by **Netlify Forms** (no backend required)
- Automated linting, testing, and production builds with **GitHub Actions**
- Production deployment with **Netlify**

---

## 🧩 Tech Stack

| Tool            | Purpose                      |
| --------------- | ---------------------------- |
| React           | Component-based UI           |
| TypeScript      | Type safety                  |
| Vite            | Fast development environment |
| TailwindCSS     | Utility-first styling        |
| Vitest          | Unit & integration testing   |
| Testing Library | Component testing            |
| GitHub Actions  | Automated quality checks     |
| Netlify         | Deployment & hosting         |

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
and muted videos that play automatically when in view, with poster images,
native controls and deferred loading. Videos pause offscreen or in a hidden tab;
reduced-motion preferences keep playback manual. The
gallery mounts only the selected full-size media item. Smooth scrolling and
decorative transitions respect reduced-motion preferences.

The automated quality suite runs ESLint, Vitest component and interaction tests,
and a TypeScript production build through:

```bash
npm run check
```

The tests cover component rendering, semantic headings, selected ARIA
relationships, language behaviour, responsive media attributes, gallery filters,
service selection across language changes, and contact-form states. They are not presented as a complete WCAG
accessibility audit.

A Semrush audit generated on 3 September 2026 reported **95% Site Health**,
**99% AI Search Health**, and **0 errors**. Three warnings remained for one
crawled page: missing H1 detection, low word count, and a low text-to-HTML ratio.

---

## 📬 Contact Form

The contact form uses **Netlify Forms**, enabling form submissions without a custom backend.

Submissions are automatically handled by Netlify and can be managed through the Netlify dashboard.

The static form definition in `index.html` registers the fields with Netlify.
The React form posts matching URL-encoded fields. Service selection starts empty
and is required; choosing a service enquiry link fills that choice explicitly.

## Media

Optimized studio photos, video clips and posters are in `public/images/refresh/`.
Original HEIC and MOV files are kept outside the repository.

To add gallery content, register the asset and its categories in
`src/data/gallery.ts`, then add its image description and caption to both
`src/i18n/bg.ts` and `src/i18n/en.ts`. Gallery filters and counts update from
these entries. Videos use H.264 MP4 files with a poster image.

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
