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
  about: {
    badge: "ABOUT US",
    heading: "Your Wellness Journey Starts Here",
    description:
      "At Euphoria, we believe in a personalized approach to movement and body care. Our studio in Blagoevgrad creates a calm and supportive environment where you can focus on your goals. We combine modern technology with proven methods to help you achieve lasting results and a true sense of balance.",
    features: [
      {
        title: "Certified Trainers",
        icon: "award",
      },
      {
        title: "Small Training Groups",
        icon: "users",
      },
    ],
  },
  gallery: {
    badge: "GALLERY",
    heading: "A Glimpse into Our Studio",
    description:
      "Explore the atmosphere of Euphoria Wellness Studio and discover the space where modern technology meets personalized wellness.",
    alts: {
      reformer:
        "Woman performing an exercise on a Pilates Reformer in a modern studio",
      emsCoaches: "Coaches wearing EMS suits in the studio",
      emsMother: "Mother training with EMS equipment while holding her baby",
      reformerDuo:
        "Two women training on a Pilates Reformer with resistance straps",
      kettlebell:
        "Client performing a kettlebell exercise under trainer supervision",
      reformerTraining: "Pilates Reformer training session in the studio",
    },
  },
};
