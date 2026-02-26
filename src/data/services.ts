export type Service = {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
};

export const services: Service[] = [
  {
    id: "xbody",
    title: "XBODY EMS",
    description:
      "EMS методът комбинира иновативна технология и интелигентно натоварване, за да ви осигури цялостна тренировка за едва 20 минути. Максимална ефективност за минимално време.",

    image: "/images/services/services-xbody.webp",
    features: [
      "20-минутни сесии",
      "Дълбока мускулна активация",
      "Бързо видими резултати",
    ],
  },

  {
    id: "pilates",
    title: "Pilates Reformer",
    description:
      "Pilates Reformer предлага интелигентно натоварване чрез плавни и контролирани движения, които развиват сила, подобряват гъвкавостта и възстановяват естествения баланс на тялото.",
    image: "/images/services/services-pilates.webp",
    features: [
      "Дълбока мускулна стабилност",
      "Подобрена стойка и контрол",
      "Повишена гъвкавост и баланс",
    ],
  },
];
