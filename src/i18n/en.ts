import type { Translations } from "./types";

export const en: Translations = {
  hero: {
    badge: "Euphoria Wellness Studio · Blagoevgrad",
    title: "Pilates Reformer",
    titleAccent: "& XBody EMS",
    subtitle:
      "Individual training with personal attention in a calm and comfortable environment.",
    ctaPrimary: "Request a session",
    ctaSecondary: "Explore services",
  },
  services: {
    badge: "SERVICES",
    heading: "Pilates Reformer and XBODY EMS in Blagoevgrad",
    description:
      "Explore both training methods and choose the option that best suits your goals, preferences and current fitness level.",
  },
  serviceCards: {
    xbody: {
      title: "XBODY EMS",
      description:
        "XBODY EMS combines physical exercise with electrical muscle stimulation. The intensity is adjusted individually, and each training session lasts 20 minutes.",
      features: [
        "20-minute sessions",
        "Exercise with EMS technology",
        "Individually adjusted intensity",
      ],
    },

    pilates: {
      title: "Pilates Reformer",
      description:
        "Pilates Reformer training uses spring resistance and controlled movements. The resistance can be adjusted to suit each person's experience level and goals.",
      features: [
        "Controlled movements",
        "Adjustable resistance",
        "Work on strength, control and mobility",
      ],
    },
  },
  about: {
    badge: "THE STUDIO",
    alt: "Entrance to Euphoria Wellness Studio in Blagoevgrad",
    heading: "A calm setting. A personal approach.",
    description:
      "Euphoria Wellness Studio is based in Blagoevgrad and offers Pilates Reformer and XBODY EMS training in a calm environment focused on personal attention.",
    location: "3 Ilinden St. · Blagoevgrad",
    features: [
      {
        label: "Training",
        value: "Pilates Reformer and XBODY EMS",
      },
      {
        label: "Approach",
        value: "Personal attention",
      },
    ],
  },
  gallery: {
    badge: "GALLERY",
    heading: "A look inside Euphoria",
    description:
      "Real moments from Pilates Reformer and XBODY EMS training at our studio in Blagoevgrad.",
    previous: "Previous media",
    next: "Next media",
    collectionLabel: "Photos and videos from training at Euphoria",
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

    heading: "Your first session starts here.",

    description:
      "Have a question or want to request a session? Send us a message or give us a call — we'll arrange a day and time that works for you.",

    workingHours: {
      title: "Opening Hours",
      days: ["Monday - Friday", "Saturday", "Sunday"],
      hours: ["8:00 - 20:00", "09:30 - 14:00", "Closed"],
    },

    phone: {
      title: "Phone",
      items: [
        {
          label: "Pilates",
          number: "+359 890 997 586",
          href: "tel:+359890997586",
          aria: "Call for Pilates",
        },
        {
          label: "XBody",
          number: "+359 897 869 293",
          href: "tel:+359897869293",
          aria: "Call for XBody",
        },
      ],
    },

    email: {
      title: "Email",
      address: "xbodyeuphoria.wellness.studio@gmail.com",
      aria: "Send an email to Euphoria Wellness Studio",
    },

    social: {
      title: "Follow Us",
      items: [
        {
          label: "Instagram profile for Pilates",
          handle: "@euphoriareform_wellness",
          href: "https://instagram.com/euphoriareform_wellness",
        },
        {
          label: "Instagram profile for XBody",
          handle: "@xbody_euphoria",
          href: "https://instagram.com/xbody_euphoria",
        },
      ],
    },
    mapTitle: "Find us on the map",

    contactForm: {
      title: "Request a session or ask a question",
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
      submittingButton: "Submitting...",
      errorMessage: "Your message could not be sent. Please try again.",
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
