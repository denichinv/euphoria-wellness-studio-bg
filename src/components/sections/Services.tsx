import { ServiceCard } from "../ui/ServiceCard";
import { services } from "../../data/services";

export function Services() {
  return (
    <section className="py-24 bg-[#F5F1ED]" id="services">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="font-sans uppercase tracking-[0.2em] text-sm text-[#B4948F]">
          УСЛУГИ
        </p>
        <h2 className="font-serif text-4xl md:text-6xl text-neutral-900 mb-6">
          Индивидуален подход към всяко тяло
        </h2>
        <p className="font-sans text-lg text-neutral-600 max-w-2xl mx-auto mt-6 leading-relaxed">
          Изберете от нашите специализирани тренировъчни методи, създадени да ви
          помогнат да постигнете своите цели.
        </p>

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
