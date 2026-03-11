import { useEffect, useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { bg } from "../../i18n/bg";
import { en } from "../../i18n/en";
export function Hero() {
  const { language } = useLanguage();
  const t = language === "bg" ? bg.hero : en.hero;

  const button =
    "group inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-full hover:bg-accent-blush transition-all duration-300 shadow-lg hover:shadow-xl";

  const desktopImages = [
    "/images/hero/hero-desktop.webp",
    "/images/hero/hero-desktop-2.webp",
  ] as const;

  const mobileImages = [
    "/images/hero/hero-mobile-2.webp",
    "/images/hero/hero-mobile.webp",
  ] as const;

  const [active, setActive] = useState(0);
  const images = window.innerWidth >= 768 ? desktopImages : mobileImages;
  const current = active % images.length;

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((prev) => prev + 1);
    }, 7000);

    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      className="relative overflow-hidden min-h-screen flex items-center justify-center"
      id="hero"
    >
      <div className="absolute inset-0 z-0">
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            current === 0 ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${images[0]})` }}
          aria-hidden="true"
        />
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            current === 1 ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${images[1]})` }}
          aria-hidden="true"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20 z-10 text-center">
        {/* Badge */}
        <p className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm tracking-wide text-white/90 backdrop-blur-sm border border-white/20">
          {t.badge}
        </p>

        {/* Title */}
        <h1 className="mt-6 text-5xl md:text-7xl lg:text-8xl text-white mb-6 font-medium tracking-tight leading-tight">
          {t.title} <br />
          <span className="text-accent-blush"> {t.titleAccent} </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg md:text-xl leading-relaxed text-white/90 mb-10 max-w-2xl mx-auto">
          {t.subtitle}
        </p>

        {/* CTAs */}
        <div className="flex justify-center mt-6 gap-4">
          <a className={button} href="#contact">
            {t.ctaPrimary}
          </a>
          <a className={button} href="#services">
            {t.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
