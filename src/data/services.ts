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

    image:
      "https://images.unsplash.com/photo-1571732154690-f6d1c3e5178a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxFTVMlMjB0cmFpbmluZyUyMGZpdG5lc3N8ZW58MXx8fHwxNzY5MDE4MjI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
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
    image:
      "https://images.unsplash.com/photo-1754257319787-4c19f30f2a16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWxhdGVzJTIwcmVmb3JtZXIlMjBzdHVkaW98ZW58MXx8fHwxNzY4OTkyOTQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    features: [
      "Дълбока мускулна стабилност",
      "Подобрена стойка и контрол",
      "Повишена гъвкавост и баланс",
    ],
  },
];
