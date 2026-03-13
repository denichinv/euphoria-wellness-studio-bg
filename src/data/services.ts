export type Service = {
  id: "xbody" | "pilates";
  image: string;
};

export const services: Service[] = [
  {
    id: "xbody",
    image: "/images/services/services-xbody.webp",
  },
  {
    id: "pilates",
    image: "/images/services/services-pilates.webp",
  },
];
