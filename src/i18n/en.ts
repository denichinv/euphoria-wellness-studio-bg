type ServiceCardContent = {
  title: string;
  description: string;
  features: string[];
};

export const en = {
  hero: {
    badge: "Blagoevgrad Wellness Studio",
    title: "XBody Euphoria",
    titleAccent: "& Pilates Reformer",
    subtitle:
      "Personal XBody EMS and Pilates Reformer sessions in a calm and comfortable environment.",
    ctaPrimary: "Book a session",
    ctaSecondary: "View services",
  },
  services: {
    badge: "SERVICES",
    heading: "A Personalized Approach to Every Body",
    description:
      "Choose from our specialized training methods designed to help you reach your personal goals.",
  },
  serviceCards: {
    xbody: {
      title: "XBODY EMS",
      description:
        "The EMS method combines innovative technology and intelligent resistance to deliver a full-body workout in just 20 minutes. Maximum efficiency in minimal time.",
      features: [
        "20-minute sessions",
        "Deep muscle activation",
        "Fast visible results",
      ],
    },

    pilates: {
      title: "Pilates Reformer",
      description:
        "Pilates Reformer provides intelligent resistance through smooth and controlled movements that build strength, improve flexibility and restore natural balance.",
      features: [
        "Deep muscle stability",
        "Improved posture and control",
        "Greater flexibility and balance",
      ],
    },
  } satisfies Record<"xbody" | "pilates", ServiceCardContent>,
};
