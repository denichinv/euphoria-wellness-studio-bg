import type { ServiceId } from "../data/services";

export type ServiceCardContent = {
  title: string;
  description: string;
  features: string[];
};

export type Translations = {
  hero: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    discoverShape: string;
    imageAlts: Record<"pilates" | "xbody", string>;
    imageLabels: Record<"pilates" | "xbody", string>;
    imagesLabel: string;
  };

  services: {
    badge: string;
    heading: string;
    description: string;
    request: string;
    shapeBadge: string;
    shapeNote: string;
    videoLabel: string;
  };

  serviceCards: Record<"xbody" | "pilates" | "shape", ServiceCardContent>;

  about: {
    badge: string;
    alt: string;
    heading: string;
    description: string;
    location: string;
    features: {
      label: string;
      value: string;
    }[];
  };

  gallery: {
    badge: string;
    heading: string;
    description: string;
    previous: string;
    next: string;
    collectionLabel: string;
    alts: Record<string, string>;
  };

  contact: {
    badge: string;
    heading: string;
    description: string;

    workingHours: {
      title: string;
      days: string[];
      hours: string[];
    };

    phone: {
      title: string;
      items: {
        label: string;
        number: string;
        href: string;
        aria: string;
      }[];
    };
    email: {
      title: string;
      address: string;
      aria: string;
    };

    social: {
      title: string;
      items: {
        label: string;
        handle: string;
        href: string;
      }[];
    };
    mapTitle: string;

    contactForm: {
      title: string;
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      service: string;
      servicePlaceholder: string;
      serviceOptions: Record<ServiceId | "others", string>;
      message: string;
      messagePlaceholder: string;
      submitButton: string;
      submittingButton: string;
      errorMessage: string;
    };

    contactFormSuccess: {
      title: string;
      submitButton: string;
    };
  };

  footer: {
    heading: string;
    description: string;
    alt: string;

    navigation: {
      title: string;
      services: string;
      about: string;
      gallery: string;
      contact: string;
    };

    contact: {
      title: string;
      address: string[];
      phone: string;
      phoneAria: string;
      email: string;
      emailAria: string;
    };

    rights: string;
  };
};
