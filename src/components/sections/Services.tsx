import { ServiceCard } from "../ui/ServiceCard";
import { services } from "../../data/services";

export function Services() {
  return (
    <section
      className="py-16 max-w-6xl mx-auto px-4 text-center "
      id="services"
    >
      <p> Our Services</p>
      <h2 className="text-3xl">Personalized Fitness & Wellness</h2>
      <p>
        Choose from our specialized training methods designed to help you
        achieve your goals
      </p>

      <div className="grid gap-6 md:grid-cols-2">
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
    </section>
  );
}
