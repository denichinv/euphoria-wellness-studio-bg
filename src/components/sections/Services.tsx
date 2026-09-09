import { ServiceCard } from "../ui/ServiceCard";
import { services } from "../../data/services";
import { useTranslation } from "../../hooks/useTranslation";

export function Services() {
  const { t } = useTranslation();

  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="overflow-hidden bg-surface py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-[7vw]">
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
          {services.map((service, index) => {
            const content = t.serviceCards[service.id];

            return (
              <ServiceCard
                key={service.id}
                title={content.title}
                description={content.description}
                image={service.image}
                features={content.features}
                imagePosition={index % 2 === 0 ? "left" : "right"}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
