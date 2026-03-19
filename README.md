# Euphoria — XBody & Pilates Reformer Studio

A modern, production-ready marketing website for **Euphoria**, a boutique wellness studio in **Blagoevgrad, Bulgaria** offering **XBody EMS** and **Pilates Reformer** sessions.

> This repository is publicly visible for portfolio demonstration purposes only.  
> The design, branding, and business identity belong to Euphoria Wellness Studio.

---

## 🌐 Live Demo

https://euphoria-wellness.netlify.app/

---

## 🧠 Project Overview

The goal of this project was to build a **clean, premium marketing website** for a boutique fitness studio while focusing on:

- performance
- accessibility
- modular React architecture
- production-ready deployment

The website provides information about services, studio atmosphere, and contact options for potential clients.

---

## ✨ Features

• Premium responsive UI designed for a boutique wellness brand  
• Modular React component architecture with **TypeScript**  
• Bilingual support (BG / EN) with dynamic language switching  
• Centralized translation system using React Context  
• Design token system for scalable styling (**CSS variables + Tailwind**)  
• Optimized media and layout for fast loading performance  
• Accessibility-aware semantic HTML structure  
• Contact form powered by **Netlify Forms** (no backend required)  
• Production deployment with **Netlify**

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


## ⚡ Performance & Accessibility

Lighthouse audit results:

| Metric | Score |
|------|------|
| Performance | 90+ |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

Accessibility testing includes automated checks validating semantic HTML, ARIA attributes, and user interface accessibility patterns.

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
https://vilizardenichin.netlify.app

💼 LinkedIn  
https://linkedin.com/in/VilizarDenichin

📧 Email  
denichinv@gmail.com

📍 Location: Dunstable, Bedfordshire, UK

---

## 📄 License

This project is shared publicly for **portfolio and demonstration purposes only**.
