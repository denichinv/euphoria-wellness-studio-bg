import { ArrowDown, ArrowUpRight } from "lucide-react";
import { LanguageToggle } from "../ui/LanguageToggle";
import { useTranslation } from "../../hooks/useTranslation";

const HERO_IMAGE = {
  src: "/images/refresh/reformer-room-1280.webp",
  srcSet:
    "/images/refresh/reformer-room-640.webp 640w, /images/refresh/reformer-room-1280.webp 1280w",
};

export function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="bg-studio-ink text-white"
    >
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-[5vw]">
        <header className="flex items-center justify-between gap-6 border-b border-white/20 py-6 sm:py-8">
          <a
            href="#hero"
            className="font-serif text-3xl tracking-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-blush"
          >
            Euphoria<span className="text-accent-blush">.</span>
          </a>
          <nav
            aria-label={t.footer.navigation.title}
            className="hidden gap-8 text-sm text-white/80 md:flex"
          >
            <a
              className="py-2 hover:text-accent-blush focus-visible:outline focus-visible:outline-2"
              href="#services"
            >
              {t.footer.navigation.services}
            </a>
            <a
              className="py-2 hover:text-accent-blush focus-visible:outline focus-visible:outline-2"
              href="#gallery"
            >
              {t.footer.navigation.gallery}
            </a>
            <a
              className="py-2 hover:text-accent-blush focus-visible:outline focus-visible:outline-2"
              href="#contact"
            >
              {t.footer.navigation.contact}
            </a>
          </nav>
          <LanguageToggle />
        </header>

        <div className="grid gap-10 pb-8 pt-12 sm:pt-16 lg:min-h-[min(850px,calc(100svh-106px))] lg:grid-cols-12 lg:gap-6 lg:py-10">
          <div className="relative z-10 flex min-w-0 flex-col justify-center lg:col-span-7 lg:py-12 lg:pr-4">
            <p className="max-w-sm text-[0.65rem] uppercase leading-relaxed tracking-[0.2em] text-accent-blush sm:text-xs">
              {t.hero.badge}
            </p>
            <h1
              id="hero-title"
              className="mt-7 text-[clamp(3.2rem,6.7vw,7rem)] font-medium leading-[0.94] tracking-[-0.04em]"
            >
              <span className="block">{t.hero.title}</span>
              <span className="mt-2 block max-w-[11ch] text-accent-blush">
                {t.hero.titleAccent}
              </span>
            </h1>
            <p className="mt-8 max-w-md text-sm leading-7 text-white/75 sm:text-base sm:leading-8">
              {t.hero.subtitle}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center gap-5 bg-accent-blush px-6 py-3 text-sm font-medium text-studio-ink transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-blush"
              >
                {t.hero.ctaPrimary}
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <a
                href="#services"
                className="inline-flex min-h-12 items-center gap-3 border-b border-white/40 text-sm text-white/85 hover:text-accent-blush focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-blush"
              >
                {t.hero.ctaSecondary}
                <ArrowDown size={15} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="relative min-w-0 lg:col-span-5 lg:self-center">
            <picture className="mx-auto block w-full max-w-[30rem]">
              <source
                media="(min-width: 768px)"
                srcSet={HERO_IMAGE.srcSet}
                sizes="(min-width: 1024px) 480px, 90vw"
              />
              <img
                src={HERO_IMAGE.src}
                srcSet={HERO_IMAGE.srcSet}
                sizes="(min-width: 1024px) 480px, 90vw"
                width={1280}
                height={1707}
                alt={t.hero.imageAlts.pilates}
                fetchPriority="high"
                loading="eager"
                className="block h-auto w-full"
              />
            </picture>
            <a
              href="#shape-space"
              className="group relative z-10 -mt-12 ml-4 flex min-h-28 max-w-sm items-center gap-3 border border-white/15 bg-studio-ink p-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent-blush sm:ml-8 sm:gap-4 lg:-ml-8"
            >
              <img
                src="/images/refresh/shape-editorial-640.webp"
                alt=""
                width={72}
                height={88}
                className="h-24 w-16 shrink-0 object-cover object-center sm:w-20"
              />
              <span className="flex-1">
                <span className="block text-[0.6rem] uppercase tracking-[0.18em] text-accent-blush">
                  {t.services.shapeBadge}
                </span>
                <span className="mt-2 block max-w-48 font-serif text-2xl leading-tight">
                  {t.hero.discoverShape}
                </span>
              </span>
              <ArrowUpRight
                size={20}
                aria-hidden="true"
                className="shrink-0 text-accent-blush motion-safe:transition-transform motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-7 gap-y-3 border-t border-white/20 py-6 text-[0.65rem] uppercase tracking-[0.15em] text-white/65 sm:gap-x-12 sm:text-xs">
          <a
            href="#pilates"
            className="py-1 hover:text-white focus-visible:outline focus-visible:outline-2"
          >
            Pilates Reformer
          </a>
          <a
            href="#xbody"
            className="py-1 hover:text-white focus-visible:outline focus-visible:outline-2"
          >
            XBODY EMS
          </a>
          <a
            href="#shape-space"
            className="py-1 text-accent-blush hover:text-white focus-visible:outline focus-visible:outline-2"
          >
            Shape Space
          </a>
        </div>
      </div>
    </section>
  );
}
