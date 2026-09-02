import { useTranslation } from "../../hooks/useTranslation";

type GalleryItem = {
  id: number;
  type: "image" | "video";
  src: string;
  srcSet?: string;
  sizes?: string;
  poster?: string;
  alt: string;
  className: string;
};
export function Gallery() {
  const { t } = useTranslation();

  const item: GalleryItem[] = [
    {
      id: 1,
      type: "video",
      src: "/images/gallery/gallery-1.mp4",
      poster: "/images/gallery/gallery-1-poster.webp",
      alt: t.gallery.alts.reformer,
      className: "col-span-2 row-span-10 lg:col-span-2 lg:row-span-16",
    },
    {
      id: 2,
      type: "image",
      src: "/images/gallery/gallery-2-600.webp",
      srcSet:
        "/images/gallery/gallery-2-600.webp 600w, /images/gallery/gallery-2-900.webp 900w",
      sizes: "(min-width: 1024px) 33vw, 50vw",
      alt: t.gallery.alts.emsCoaches,
      className: "col-span-1 row-span-8 lg:col-span-1 lg:row-span-12",
    },
    {
      id: 3,
      type: "video",
      src: "/images/gallery/gallery-3.mp4",
      poster: "/images/gallery/gallery-3-poster.webp",
      alt: t.gallery.alts.emsMother,
      className: "col-span-1 row-span-8 lg:col-span-1 lg:row-span-12",
    },
    {
      id: 4,
      type: "image",
      src: "/images/gallery/gallery-4-600.webp",
      srcSet:
        "/images/gallery/gallery-4-600.webp 600w, /images/gallery/gallery-4-1000.webp 1000w",
      sizes: "(min-width: 1024px) 33vw, 100vw",
      alt: t.gallery.alts.reformerDuo,
      className: "col-span-2 row-span-7 lg:col-span-1 lg:row-span-16",
    },
    {
      id: 5,
      type: "image",
      src: "/images/gallery/gallery-5-600.webp",
      srcSet:
        "/images/gallery/gallery-5-600.webp 600w, /images/gallery/gallery-5-1000.webp 1000w",
      sizes: "(min-width: 1024px) 33vw, 50vw",
      alt: t.gallery.alts.kettlebell,
      className: "col-span-1 row-span-6 lg:col-span-1 lg:row-span-12",
    },
    {
      id: 6,
      type: "image",
      src: "/images/gallery/gallery-6-600.webp",
      srcSet:
        "/images/gallery/gallery-6-600.webp 600w, /images/gallery/gallery-6-1000.webp 1000w",
      sizes: "(min-width: 1024px) 33vw, 50vw",
      alt: t.gallery.alts.reformerTraining,
      className: "col-span-1 row-span-6 lg:col-span-1 lg:row-span-7",
    },
  ];
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-title"
      className="py-20 md:py-32 px-6 bg-surface-light"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-accent-mauve uppercase tracking-widest text-sm mb-4 ">
            {t.gallery.badge}
          </p>
          <h2
            id="gallery-title"
            className="text-3xl md:text-5xl text-gray-900 mb-4 "
          >
            {t.gallery.heading}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.gallery.description}
          </p>
        </div>

        <ul className="grid grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[20px] mt-10">
          {item.map((galleryItem) => (
            <li
              key={galleryItem.id}
              className={`${galleryItem.className} group rounded-2xl bg-neutral-200 overflow-hidden transition-shadow duration-300 hover:shadow-lg`}
            >
              {galleryItem.type === "image" ? (
                <img
                  src={galleryItem.src}
                  srcSet={galleryItem.srcSet}
                  sizes={galleryItem.sizes}
                  alt={galleryItem.alt}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <video
                  className="h-full w-full object-cover transition duration-500 group-hover:brightness-90"
                  poster={galleryItem.poster}
                  autoPlay
                  muted
                  playsInline
                  loop
                  preload="metadata"
                  aria-hidden="true"
                >
                  <source src={galleryItem.src} type="video/mp4" />
                </video>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
