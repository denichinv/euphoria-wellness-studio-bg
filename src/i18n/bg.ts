import type { Translations } from "./types";

export const bg: Translations = {
  hero: {
    badge: "Euphoria Wellness Studio · Благоевград",
    title: "Пилатес реформър",
    titleAccent: "& XBody EMS",
    subtitle:
      "Индивидуални тренировки с персонално внимание в спокойна и комфортна среда.",
    ctaPrimary: "Заяви час",
    ctaSecondary: "Разгледай услугите",
  },
  services: {
    badge: "УСЛУГИ",
    heading: "Pilates Reformer и XBODY EMS в Благоевград",
    description:
      "Разгледайте двата тренировъчни метода и изберете подходящия вариант според своите цели, предпочитания и ниво на подготовка.",
  },
  serviceCards: {
    xbody: {
      title: "XBODY EMS",
      description:
        "XBODY EMS комбинира физически упражнения с електромускулна стимулация. Интензивността се настройва индивидуално, а една тренировъчна сесия продължава 20 минути.",
      features: [
        "20-минутни сесии",
        "Упражнения с EMS технология",
        "Индивидуално настроена интензивност",
      ],
    },

    pilates: {
      title: "Pilates Reformer",
      description:
        "Тренировките с Pilates Reformer използват пружинно съпротивление и контролирани движения. Натоварването може да бъде адаптирано спрямо нивото и целите на трениращия.",
      features: [
        "Контролирани движения",
        "Регулируемо съпротивление",
        "Работа върху сила, контрол и мобилност",
      ],
    },
  },
  about: {
    badge: "ЗА СТУДИОТО",
    alt: "Входът на Euphoria Wellness Studio в Благоевград",
    heading: "Спокойна среда. Персонален подход.",
    description:
      "Euphoria Wellness Studio се намира в Благоевград и предлага Pilates Reformer и XBODY EMS тренировки в спокойна среда с фокус върху персоналното внимание.",
    location: "ул. „Илинден“ № 3 · Благоевград",
    features: [
      {
        label: "Тренировки",
        value: "Pilates Reformer и XBODY EMS",
      },
      {
        label: "Подход",
        value: "Персонално внимание",
      },
    ],
  },
  gallery: {
    badge: "ГАЛЕРИЯ",
    heading: "Поглед към тренировките в Euphoria",
    description:
      "Реални моменти от Pilates Reformer и XBODY EMS тренировките в нашето студио в Благоевград.",
    previous: "Предишни кадри",
    next: "Следващи кадри",
    collectionLabel: "Снимки и видеа от тренировките в Euphoria",
    alts: {
      reformer:
        "Жена изпълнява упражнение на Pilates Reformer в модерно студио",
      emsCoaches: "Двойка в EMS костюми позират в студиото",
      emsMother: "Майка тренира с EMS оборудване, докато държи бебето си",
      reformerDuo: "Две жени тренират на Pilates Reformer с помощта на ластици",
      kettlebell: "Клиент изпълнява упражнение под наблюдение на треньор",
      reformerTraining: "Pilates Reformer тренировка в студиото",
    },
  },
  contact: {
    badge: "СВЪРЖЕТЕ СЕ С НАС",
    heading: "Твоята първа тренировка започва тук.",
    description:
      "Имаш въпрос или искаш да заявиш час? Пиши ни или се обади — ще уточним удобен ден и час.",
    workingHours: {
      title: "Работно време",
      days: ["Понеделник - Петък", "Събота", "Неделя"],
      hours: ["8:00 - 20:00", "10:00 - 18:00", "Почивен ден"],
    },
    phone: {
      title: "Телефон",
      items: [
        {
          label: "Pilates",
          number: "+359 890 997 586",
          href: "tel:+359890997586",
          aria: "Обади се за Pilates",
        },
        {
          label: "XBody",
          number: "+359 897 869 293",
          href: "tel:+359897869293",
          aria: "Обади се за XBody",
        },
      ],
    },
    email: {
      title: "Имейл",
      address: "xbodyeuphoria.wellness.studio@gmail.com",
      aria: "Изпрати имейл до Euphoria Wellness Studio",
    },
    social: {
      title: "Последвайте ни",
      items: [
        {
          label: "Pilates",
          handle: "@euphoriareform_wellness",
          href: "https://instagram.com/euphoriareform_wellness",
        },
        {
          label: "XBody",
          handle: "@xbody_euphoria",
          href: "https://instagram.com/xbody_euphoria",
        },
      ],
    },
    mapTitle: "Намерете ни на картата",
    contactForm: {
      title: "Заяви час или задай въпрос",
      name: "Име и фамилия",
      namePlaceholder: "Вашето име",
      email: "Имейл адрес",
      emailPlaceholder: "Вашият имейл",
      phone: "Телефонен номер",
      phonePlaceholder: "Вашият телефон",
      service: "Изберете услуга",
      serviceOptions: ["XBODY EMS", "Pilates Reformer", "Други"],
      message: "Съобщение (по желание)",
      messagePlaceholder: "Разкажете ни повече за вашите цели...",
      submitButton: "Изпрати запитване",
      submittingButton: "Изпращане...",
      errorMessage: "Съобщението не беше изпратено. Моля, опитайте отново.",
    },
    contactFormSuccess: {
      title: " Благодарим ви! Ще се свържем с вас възможно най-скоро.",
      submitButton: "Изпрати ново запитване",
    },
  },
  footer: {
    heading: " XBody Euphoria & Pilates Reformer",
    description:
      "  Баланс, сила и персонализирана грижа чрез Pilates Reformer и XBODY тренировки в Благоевград.",
    alt: "Лого на Euphoria Wellness Studio в Благоевград",
    navigation: {
      title: "Навигация",
      services: "Услуги",
      about: "За нас",
      gallery: "Галерия",
      contact: "Контакти",
    },
    contact: {
      title: "Контакти",
      address: ["ул. „Илинден“ № 3", "2700 Благоевград, България"],
      phone: "+359 897 869 293",
      phoneAria: "Обади се на Euphoria",
      email: "xbodyeuphoria.wellness.studio@gmail.com",
      emailAria: "Изпрати имейл до Euphoria",
    },
    rights:
      "Euphoria - XBODY & Pilates Reformer Studio. Всички права запазени.",
  },
};
