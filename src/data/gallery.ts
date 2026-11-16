import { studioImages } from "./studioImages";

export type GalleryCategory = "pilates" | "xbody" | "shape" | "studio";
export type GalleryFilter = "all" | GalleryCategory;
type GalleryCategories = readonly [GalleryCategory, ...GalleryCategory[]];

type GalleryItem = {
  id: string;
  type: "image" | "video";
  src: string;
  srcSet?: string;
  poster?: string;
  thumbnail?: string;
  altKey: string;
  categories: GalleryCategories;
};

function photo(
  id: string,
  categories: GalleryCategories,
  altKey: string,
): GalleryItem {
  return {
    id,
    categories,
    altKey,
    type: "image",
    src: `/images/refresh/${id}-1280.webp`,
    thumbnail: `/images/refresh/${id}-640.webp`,
    srcSet: `/images/refresh/${id}-640.webp 640w, /images/refresh/${id}-1280.webp 1280w`,
  };
}

// Append media here; filtering and the viewer derive their counts from this list.
export const galleryItems: GalleryItem[] = [
  {
    id: "reformer-video",
    type: "video",
    src: "/images/gallery/gallery-1.mp4",
    poster: "/images/gallery/gallery-1-poster.webp",
    altKey: "reformer",
    categories: ["pilates"],
  },
  {
    id: "ems-coaches",
    type: "image",
    src: "/images/gallery/gallery-2-600.webp",
    srcSet:
      "/images/gallery/gallery-2-600.webp 600w, /images/gallery/gallery-2-900.webp 900w",
    altKey: "emsCoaches",
    categories: ["xbody"],
  },
  {
    id: "ems-video",
    type: "video",
    src: "/images/gallery/gallery-3.mp4",
    poster: "/images/gallery/gallery-3-poster.webp",
    altKey: "emsMother",
    categories: ["xbody"],
  },
  {
    id: "reformer-duo",
    type: "image",
    src: "/images/gallery/gallery-4-600.webp",
    srcSet:
      "/images/gallery/gallery-4-600.webp 600w, /images/gallery/gallery-4-1000.webp 1000w",
    altKey: "reformerDuo",
    categories: ["pilates"],
  },
  {
    id: "kettlebell",
    type: "image",
    src: "/images/gallery/gallery-5-600.webp",
    srcSet:
      "/images/gallery/gallery-5-600.webp 600w, /images/gallery/gallery-5-1000.webp 1000w",
    altKey: "kettlebell",
    categories: ["xbody"],
  },
  {
    id: "reformer-training",
    type: "image",
    src: "/images/gallery/gallery-6-600.webp",
    srcSet:
      "/images/gallery/gallery-6-600.webp 600w, /images/gallery/gallery-6-1000.webp 1000w",
    altKey: "reformerTraining",
    categories: ["pilates"],
  },
  photo("shape-space", ["shape"], "shapeMachine"),
  {
    id: "shape-session",
    type: "video",
    src: "/images/refresh/shape-session.mp4",
    poster: "/images/refresh/shape-poster-640.webp",
    altKey: "shapeSession",
    categories: ["shape"],
  },
  photo("shape-interior", ["shape"], "shapeInterior"),
  photo("shape-in-use", ["shape"], "shapeInUse"),
  photo("shape-front", ["shape"], "shapeFront"),
  // Room/equipment views belong to their service as well as the studio filter.
  photo("reformer-room", ["pilates", "studio"], "studioRoom"),
  photo("reformer-detail", ["pilates", "studio"], "studioDetail"),
  {
    id: "studio-training",
    type: "video",
    src: "/images/refresh/studio-training.mp4",
    poster: "/images/refresh/studio-poster-640.webp",
    altKey: "studioTraining",
    categories: ["xbody", "shape"],
  },
  photo("ems-corner", ["xbody", "studio"], "emsCorner"),
  photo("ems-equipment", ["xbody", "studio"], "emsEquipment"),
  {
    id: "pilates-room",
    type: "image",
    ...studioImages.pilates,
    altKey: "pilatesRoom",
    categories: ["pilates", "studio"],
  },
  {
    id: "xbody-room",
    type: "image",
    ...studioImages.xbody,
    altKey: "xbodyRoom",
    categories: ["xbody", "studio"],
  },
  {
    id: "studio-entrance",
    type: "image",
    src: "/images/about/about.jpeg",
    altKey: "studioEntrance",
    categories: ["studio"],
  },
];
