import { ServiceCard } from "../ui/ServiceCard";
import { services, type ServiceId } from "../../data/services";
import { useTranslation } from "../../hooks/useTranslation";
import { ViewportVideo } from "../ui/ViewportVideo";

export function Services({
  onSelectService,
}: {
  onSelectService?: (service: ServiceId) => void;
}) {
  const { t } = useTranslation();
  const shape = services.find((service) => service.id === "shape");

  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="overflow-hidden bg-surface py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="grid gap-8 border-l border-accent-mauve/35 pl-5 sm:pl-8 md:grid-cols-12 md:items-end lg:pl-12">
          <div className="md:col-span-7">
            <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-accent-mauve sm:text-sm">
              <span aria-hidden="true" className="h-px w-8 bg-accent-mauve" />
              {t.services.badge}
            </p>

            <h2
              id="services-title"
              className="mt-6 max-w-3xl text-4xl leading-[0.95] tracking-[-0.035em] text-neutral-900 sm:text-5xl md:text-6xl lg:text-7xl"
            >
              {t.services.heading}
            </h2>
          </div>

          <p className="max-w-xl text-base leading-relaxed text-neutral-600 md:col-span-5 md:pb-1 lg:text-lg">
            {t.services.description}
          </p>
        </div>

        <div className="mt-16 border-b border-neutral-900/15 sm:mt-20">
          {services
            .filter((service) => service.id !== "shape")
            .map((service, index) => {
              const content = t.serviceCards[service.id];

              return (
                <ServiceCard
                  key={service.id}
                  id={service.id}
                  title={content.title}
                  description={content.description}
                  image={service.image}
                  srcSet={service.srcSet}
                  requestLabel={t.services.request}
                  onRequest={() => onSelectService?.(service.id)}
                  features={content.features}
                  imagePosition={index % 2 === 0 ? "left" : "right"}
                />
              );
            })}
        </div>

        {shape && (
          <article
            id="shape-space"
            aria-labelledby="shape-title"
            className="mt-16 bg-studio-ink p-6 text-white sm:mt-24 sm:p-10 lg:-mx-8 lg:p-14"
          >
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
              <figure className="min-w-0 lg:col-span-5">
                <img
                  src={shape.image}
                  srcSet={shape.srcSet}
                  sizes="(min-width: 1024px) 38vw, 90vw"
                  alt={t.gallery.alts.shapeMachine}
                  width={1140}
                  height={1380}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover object-center"
                />
                <figcaption className="mt-4 flex items-center gap-3 text-[0.65rem] uppercase tracking-[0.18em] text-white/60">
                  <span
                    aria-hidden="true"
                    className="h-px w-8 bg-accent-blush/60"
                  />
                  Shape Space · Euphoria
                </figcaption>
              </figure>

              <div className="min-w-0 lg:col-span-7">
                <p className="text-xs uppercase tracking-[0.2em] text-accent-blush">
                  {t.services.shapeBadge}
                </p>
                <h3
                  id="shape-title"
                  className="mt-5 text-[clamp(3.3rem,6vw,6rem)] leading-[0.95] tracking-[-0.04em]"
                >
                  Shape <span className="text-accent-blush">Space.</span>
                </h3>
                <p className="mt-7 max-w-xl text-base leading-7 text-white/75">
                  {t.serviceCards.shape.description}
                </p>
                <ul className="mt-8 divide-y divide-white/15 border-y border-white/15">
                  {t.serviceCards.shape.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-4 py-3 text-sm text-white/85"
                    >
                      <span
                        aria-hidden="true"
                        className="h-px w-5 bg-accent-blush"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-9 grid gap-7 sm:grid-cols-2 sm:items-end">
                  <div>
                    <p className="text-sm leading-6 text-white/65">
                      {t.services.shapeNote}
                    </p>
                    <a
                      href="#contact"
                      onClick={() => onSelectService?.("shape")}
                      className="mt-6 inline-flex min-h-12 items-center gap-5 border-b border-accent-blush py-3 text-sm text-accent-blush hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-blush"
                    >
                      {t.services.request}
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                  <figure>
                    <ViewportVideo
                      src="/images/refresh/shape-session.mp4"
                      poster="/images/refresh/shape-poster-640.webp"
                      label={t.services.videoLabel}
                      className="aspect-[4/5] w-full bg-black object-cover"
                    />
                    <figcaption className="mt-3 text-xs text-white/65">
                      {t.services.videoLabel}
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </article>
        )}
      </div>
    </section>
  );
}
