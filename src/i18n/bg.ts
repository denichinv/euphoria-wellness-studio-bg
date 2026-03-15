type ServiceCardContent = {
  title: string;
  description: string;
  features: string[];
};

export const bg = {
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
  } satisfies Record<"xbody" | "pilates", ServiceCardContent>,
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
      number: "+359 897 869 293",
      aria: "Обади се на Euphoria Wellness Studio",
    },
    email: {
      title: "Имейл",
      address: "xbodyeuphoria.wellness.studio@gmail.com",
      aria: "Изпрати имейл до Euphoria Wellness Studio",
    },
    social: {
      title: "Последвайте ни",
      instagram: "@xbody_euphoria",
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
    },
    contactFormSuccess: {
      title: " Благодарим ви! Ще се свържем с вас възможно най-скоро.",
      submitButton: "Изпрати ново запитване",
    },
  },
};
