import { ServiceCard } from "../ui/ServiceCard";
import { services } from "../../data/services";

export function Services() {
  return (
    <section className="py-24 bg-surface" id="services">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Badge */}
        <p className="inline-flex items-center  px-4 py-2 text-sm uppercase tracking-widest leading-relaxed text-accent-mauve">
          УСЛУГИ
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl text-neutral-900 mb-6 mt-6">
          Индивидуален подход към всяко тяло
        </h2>

        {/* Description */}
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto mt-6 leading-relaxed">
          Изберете от нашите специализирани тренировъчни методи, създадени да ви
          помогнат да постигнете своите цели.
        </p>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 mt-16">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
