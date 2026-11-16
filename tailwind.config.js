/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "studio-ink": "var(--studio-ink)",
        surface: "var(--surface)",
        "surface-light": "var(--surface-light)",
        "accent-blush": "var(--accent-blush)",
        "accent-mauve": "var(--accent-mauve)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Cormorant Garamond", "serif"],
      },
    },
  },
  plugins: [],
};
