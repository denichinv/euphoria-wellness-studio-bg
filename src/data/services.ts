export type Service = {
  id: "xbody" | "pilates";
  image: string;
};

export const services: Service[] = [
  {
    id: "pilates",
    image: "/images/services/services-pilates.webp",
  },
  {
    id: "xbody",
    image: "/images/services/services-xbody.webp",
  },
];
