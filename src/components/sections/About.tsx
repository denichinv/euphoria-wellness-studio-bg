import { useTranslation } from "../../hooks/useTranslation";

export function About() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="overflow-hidden bg-[#201d1b] py-24 text-white sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-[7vw]">
        <div className="grid gap-8 border-l border-accent-blush/40 pl-5 sm:pl-8 md:grid-cols-12 md:items-end lg:pl-12">
          <div className="md:col-span-8">
            <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-accent-blush sm:text-sm">
              <span aria-hidden="true" className="h-px w-8 bg-accent-blush" />
              {t.about.badge}
            </p>

            <h2
              id="about-title"
              className="mt-6 max-w-4xl text-4xl leading-[0.95] tracking-[-0.035em] sm:text-5xl md:text-6xl lg:text-7xl"
            >
              {t.about.heading}
            </h2>
          </div>

          <p className="max-w-xl text-base leading-relaxed text-white/70 md:col-span-4 md:pb-1 lg:text-lg">
            {t.about.description}
          </p>
        </div>

        <div className="mt-16 grid border-y border-white/15 sm:mt-20 md:grid-cols-12">
          <figure className="relative min-h-80 overflow-hidden sm:min-h-[30rem] md:col-span-9 md:min-h-[36rem]">
            <img
              src="/images/about/about.jpeg"
              alt={t.about.alt}
              width="1200"
              height="900"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
            <figcaption className="absolute bottom-0 left-0 border-r border-t border-white/20 bg-black/45 px-5 py-4 text-xs uppercase tracking-[0.18em] text-white/85 backdrop-blur-sm sm:px-7">
              {t.about.location}
            </figcaption>
          </figure>

          <div className="flex flex-col justify-end bg-white/[0.04] md:col-span-3 md:border-l md:border-white/15">
            {t.about.features.map((feature) => (
              <div
                key={feature.label}
                className="border-t border-white/15 px-6 py-7 first:border-t-0 sm:px-8 md:first:border-t-0 lg:py-9"
              >
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-accent-blush/80">
                  {feature.label}
                </p>
                <p className="mt-3 font-serif text-2xl leading-tight text-white sm:text-3xl">
                  {feature.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
