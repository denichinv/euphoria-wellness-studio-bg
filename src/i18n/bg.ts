import type { Translations } from "./types";

export const bg: Translations = {
  hero: {
    badge: "Blagoevgrad Wellness Studio",
    title: "XBody Euphoria",
    titleAccent: "& Pilates Reformer",
    subtitle:
      "Индивидуални XBody EMS и Pilates Reformer сесии в спокойна и комфортна среда.",
    ctaPrimary: "Запази час",
    ctaSecondary: "Виж услугите",
  },
  services: {
    badge: "УСЛУГИ",
    heading: "Индивидуален подход към всяко тяло",
    description:
      "Изберете от нашите специализирани тренировъчни методи, създадени да ви помогнат да постигнете своите цели.",
  },
  serviceCards: {
    xbody: {
      title: "XBODY EMS",
      description:
        "EMS методът комбинира иновативна технология и интелигентно натоварване, за да ви осигури цялостна тренировка за едва 20 минути. Максимална ефективност за минимално време.",
      features: [
        "20-минутни сесии",
        "Дълбока мускулна активация",
        "Бързо видими резултати",
      ],
    },

    pilates: {
      title: "Pilates Reformer",
      description:
        "Pilates Reformer предлага интелигентно натоварване чрез плавни и контролирани движения, които развиват сила, подобряват гъвкавостта и възстановяват естествения баланс на тялото.",
      features: [
        "Дълбока мускулна стабилност",
        "Подобрена стойка и контрол",
        "Повишена гъвкавост и баланс",
      ],
    },
  },
  about: {
    badge: "За нас",
    alt: "Нашето студио Euphoria в Благоевград",
    heading: "Вашият път към здраве и баланс започва тук",
    description:
      "В Euphoria вярваме в персоналния подход към движението и грижата за тялото. Нашето студио в Благоевград създава спокойна и подкрепяща среда, в която можете да се фокусирате върху своите цели. Комбинираме съвременни технологии и доказани методи, за да постигнете устойчиви резултати и усещане за баланс.",
    features: [
      {
        title: "Сертифицирани треньори",
        icon: "award",
      },
      {
        title: "Малки тренировъчни групи",
        icon: "users",
      },
    ],
  },
  gallery: {
    badge: "ГАЛЕРИЯ",
    heading: "Потопете се в атмосферата на нашето студио",
    description:
      "Спокойна и модерна среда, създадена с грижа за вашия напредък и баланс.",
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
    heading: "Готови ли сте за своята трансформация?",
    description:
      "    Запазете своята първа сесия и усетете разликата, която персонализираният подход може да направи.",
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
      title: "Свържете се с нас още днес !",
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
