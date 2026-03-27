import { ServiceCard } from "../ui/ServiceCard";
import { services } from "../../data/services";
import { useTranslation } from "../../hooks/useTranslation";

export function Services() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-surface" id="services">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Badge */}
        <p className="inline-flex items-center px-4 py-2 text-sm uppercase tracking-widest leading-relaxed text-accent-mauve">
          {t.services.badge}
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl text-neutral-900 mb-6 mt-6">
          {t.services.heading}
        </h2>

        {/* Description */}
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto mt-6 leading-relaxed">
          {t.services.description}
        </p>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 mt-16">
          {services.map((service) => {
            const content = t.serviceCards[service.id];

            return (
              <ServiceCard
                key={service.id}
                title={content.title}
                description={content.description}
                image={service.image}
                features={content.features}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
