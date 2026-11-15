import type { Translations } from "./types";

export const bg: Translations = {
  hero: {
    badge: "Euphoria Wellness Studio · Благоевград",
    title: "Промяната",
    titleAccent: "започва с теб.",
    subtitle:
      "Pilates Reformer, XBODY EMS и Shape Space в Благоевград. Избери своята тренировка — ние ще ти помогнем да направиш първата крачка.",
    ctaPrimary: "Заяви час",
    ctaSecondary: "Разгледай услугите",
    discoverShape: "Запознай се със Shape Space",
    imageAlts: {
      pilates: "Pilates Reformer оборудване в залата с огледала",
      xbody: "Залата за XBODY EMS с оборудване и тренировъчни костюми",
    },
    imageLabels: { pilates: "Pilates Reformer", xbody: "XBODY EMS" },
    imagesLabel: "Снимки от студиото",
  },
  services: {
    badge: "УСЛУГИ",
    heading: "Избери как да тренираш.",
    description:
      "Пилатес реформър, XBODY EMS или Shape Space — три различни възможности според това как обичаш да се движиш. Ако се колебаеш, ще ти помогнем с избора.",
    request: "Искам да опитам",
    shapeBadge: "Вече в студиото",
    shapeNote:
      "Любопитно ти е как протича една сесия? Пиши ни — ще ти разкажем повече и ще уточним удобен час.",
    videoLabel: "Shape Space в действие",
  },
  serviceCards: {
    shape: {
      title: "Shape Space",
      description:
        "Кардио на пътека в капсула с вакуумна и инфрачервена технология. Shape Space е най-новото попълнение в студиото за тези, които искат да разнообразят тренировките си.",
      features: [
        "Кардио на пътека",
        "Вакуумна технология",
        "Инфрачервена технология",
      ],
    },
    xbody: {
      title: "XBODY EMS",
      description:
        "20-минутна тренировка, в която упражненията се съчетават с електромускулна стимулация. Интензивността се настройва спрямо теб.",
      features: [
        "20-минутни сесии",
        "Упражнения с EMS технология",
        "Индивидуално настроена интензивност",
      ],
    },

    pilates: {
      title: "Pilates Reformer",
      description:
        "Упражнения на реформър с регулируемо пружинно съпротивление. Работиш върху сила, контрол и подвижност, с натоварване според възможностите ти.",
      features: [
        "Контролирани движения",
        "Регулируемо съпротивление",
        "Сила, контрол и подвижност",
      ],
    },
  },
  about: {
    badge: "ЗА СТУДИОТО",
    alt: "Входът на Euphoria Wellness Studio в Благоевград",
    heading: "Спокойна среда. Персонален подход.",
    description:
      "В нашето студио в Благоевград можеш да тренираш Pilates Reformer, XBODY EMS и Shape Space. Държим на спокойната обстановка и на вниманието към всеки човек.",
    location: "ул. „Илинден“ № 3 · Благоевград",
    features: [
      {
        label: "Тренировки",
        value: "Pilates Reformer · XBODY EMS · Shape Space",
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
      shapeMachine: "Shape Space в студиото — изглед към машината",
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
      service: "Услуга (задължително)",
      servicePlaceholder: "Избери услуга",
      serviceOptions: {
        xbody: "XBODY EMS",
        pilates: "Pilates Reformer",
        shape: "Shape Space",
        others: "Други",
      },
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
    heading: "Euphoria Wellness Studio",
    description:
      "Pilates Reformer, XBODY EMS и Shape Space. Тренировки с персонално внимание в Благоевград.",
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
    rights: "Euphoria Wellness Studio. Всички права запазени.",
  },
};
