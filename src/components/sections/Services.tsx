type Service = {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
};

export function Services() {
  const services: Service[] = [
    {
      id: "xbody",
      title: "XBODY EMS",
      description:
        "Revolutionary Electro Muscle Stimulation technology delivers a full-body workout in just 20 minutes. Efficient, effective, and transformative.",

      image:
        "https://images.unsplash.com/photo-1571732154690-f6d1c3e5178a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFTVMlMjB0cmFpbmluZyUyMGZpdG5lc3N8ZW58MXx8fHwxNzY5MDE4MjI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: ["20-minute sessions", "Muscle activation", "Visible results"],
    },

    {
      id: "pilates",
      title: "Pilates Reformer",
      description:
        "Experience low-impact, high-intensity workouts that strengthen your core, improve flexibility, and enhance posture. Perfect for all fitness levels.",
      image:
        "https://images.unsplash.com/photo-1754257319787-4c19f30f2a16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWxhdGVzJTIwcmVmb3JtZXIlMjBzdHVkaW98ZW58MXx8fHwxNzY4OTkyOTQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      features: [
        "Personalized sessions",
        "Expert guidance",
        "Small group classes",
      ],
    },
  ];

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
          <article
            className="rounded-2xl border overflow-hidden bg-white "
            key={service.id}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-56 object-cover"
              loading="lazy"
            />
            <div className="p-6 text-left ">
              <h3 className="pb-4 text-xl ">{service.title}</h3>
              <p className="mt-2">{service.description}</p>
              <ul className="pt-6 list-disc ">
                {service.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
