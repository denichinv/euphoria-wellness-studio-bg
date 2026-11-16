export type ServiceId = "xbody" | "pilates" | "shape";
export type FormService = ServiceId | "others" | "";

export type Service = {
  id: ServiceId;
  image: string;
  srcSet?: string;
};

export const services: Service[] = [
  {
    id: "pilates",
    image: "/images/refresh/reformer-detail-1280.webp",
    srcSet:
      "/images/refresh/reformer-detail-640.webp 640w, /images/refresh/reformer-detail-1280.webp 1280w",
  },
  {
    id: "xbody",
    image: "/images/services/services-xbody.webp",
  },
  {
    id: "shape",
    image: "/images/refresh/shape-editorial-1280.webp",
    srcSet:
      "/images/refresh/shape-editorial-640.webp 640w, /images/refresh/shape-editorial-1280.webp 1280w",
  },
];
