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
    alt: "our Euphoria studio in Blagoevgrad",
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
  contact: {
    badge: "GET IN TOUCH",

    heading: "Ready for your transformation?",

    description:
      "Book your first session and experience the difference a personalized approach can make.",

    workingHours: {
      title: "Opening Hours",
      days: ["Monday - Friday", "Saturday", "Sunday"],
      hours: ["8:00 - 20:00", "09:30 - 14:00", "Closed"],
    },

    phone: {
      title: "Phone",
      number: "+359 897 869 293",
      aria: "Call Euphoria Wellness Studio",
    },

    email: {
      title: "Email",
      address: "xbodyeuphoria.wellness.studio@gmail.com",
      aria: "Send an email to Euphoria Wellness Studio",
    },

    social: {
      title: "Follow Us",
      instagram: "@xbody_euphoria",
    },
    mapTitle: "Find us on the map",

    contactForm: {
      title: "Get in touch today",
      name: "Full Name",
      namePlaceholder: "Your name",
      email: "Email Address",
      emailPlaceholder: "Your email",
      phone: "Phone Number",
      phonePlaceholder: "Your phone number",
      service: "Select a service",
      serviceOptions: ["XBODY EMS", "Pilates Reformer", "Other"],
      message: "Message (optional)",
      messagePlaceholder: "Tell us more about your goals...",
      submitButton: "Send request",
    },

    contactFormSuccess: {
      title: "Thank you! We'll get back to you shortly.",
      submitButton: "Send another request",
    },
  },
  footer: {
    heading: "XBody Euphoria & Pilates Reformer",
    description:
      "Balance, strength, and personalized care through Pilates Reformer and XBODY training in Blagoevgrad.",
    alt: "Euphoria Wellness Studio logo in Blagoevgrad",

    navigation: {
      title: "Navigation",
      services: "Services",
      about: "About Us",
      gallery: "Gallery",
      contact: "Contact",
    },

    contact: {
      title: "Contact",
      address: ["3 Ilinden St.", "2700 Blagoevgrad, Bulgaria"],
      phone: "+359 897 869 293",
      phoneAria: "Call Euphoria Wellness Studio",
      email: "xbodyeuphoria.wellness.studio@gmail.com",
      emailAria: "Send an email to Euphoria Wellness Studio",
    },

    rights: "Euphoria - XBODY & Pilates Reformer Studio. All rights reserved.",
  },
};
