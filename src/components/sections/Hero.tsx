import { LanguageToggle } from "../ui/LanguageToggle";
import { useEffect, useState } from "react";
import { useTranslation } from "../../hooks/useTranslation";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

const HERO_SLIDES = [
  {
    desktop: {
      srcSet:
        "/images/hero/hero-slide-1-desktop-1280.webp 1280w, /images/hero/hero-slide-1-desktop-1920.webp 1920w",
    },
    mobile: {
      src: "/images/hero/hero-slide-1-mobile-640.webp",
      srcSet:
        "/images/hero/hero-slide-1-mobile-640.webp 640w, /images/hero/hero-slide-1-mobile-960.webp 960w",
    },
  },
  {
    desktop: {
      srcSet:
        "/images/hero/hero-slide-2-desktop-1280.webp 1280w, /images/hero/hero-slide-2-desktop-1920.webp 1920w",
    },
    mobile: {
      src: "/images/hero/hero-slide-2-mobile-640.webp",
      srcSet:
        "/images/hero/hero-slide-2-mobile-640.webp 640w, /images/hero/hero-slide-2-mobile-960.webp 960w",
    },
  },
] as const;

export function Hero() {
  const { t } = useTranslation();

  const button =
    "group inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-full hover:bg-accent-blush transition-all duration-300 shadow-lg hover:shadow-xl";

  const [active, setActive] = useState(0);
  const current = active % HERO_SLIDES.length;
  const prefersReducedMotion = usePrefersReducedMotion();
  useEffect(() => {
    if (prefersReducedMotion) return;
    const id = window.setInterval(() => {
      setActive((prev) => prev + 1);
    }, 7000);

    return () => window.clearInterval(id);
  }, [prefersReducedMotion]);
  return (
    <section
      className="relative overflow-hidden min-h-[100dvh] flex items-center justify-center"
      id="hero"
    >
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((slide, index) => (
          <picture
            key={slide.mobile.src}
            className={`absolute inset-0 block motion-safe:transition-opacity motion-safe:duration-1000 ${
              current === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <source
              media="(min-width: 768px)"
              srcSet={slide.desktop.srcSet}
              sizes="100vw"
            />
            <img
              src={slide.mobile.src}
              srcSet={slide.mobile.srcSet}
              sizes="100vw"
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover object-center"
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "auto"}
            />
          </picture>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20 z-10 text-center">
        <div className="absolute top-6 right-6 sm:top-8 sm:right-8 z-20">
          <LanguageToggle />
        </div>
        {/* Badge */}
        <p className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-sm tracking-wide text-white/90 backdrop-blur-sm border border-white/20">
          {t.hero.badge}
        </p>

        {/* Title */}
        <h1 className="mt-6 text-5xl md:text-7xl lg:text-8xl text-white mb-6 font-medium tracking-tight leading-tight">
          {t.hero.title} <br />
          <span className="text-accent-blush"> {t.hero.titleAccent} </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg md:text-xl leading-relaxed text-white/90 mb-10 max-w-2xl mx-auto">
          {t.hero.subtitle}
        </p>

        {/* CTAs */}
        <div className="flex justify-center mt-6 gap-4">
          <a className={button} href="#contact">
            {t.hero.ctaPrimary}
          </a>
          <a className={button} href="#services">
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
