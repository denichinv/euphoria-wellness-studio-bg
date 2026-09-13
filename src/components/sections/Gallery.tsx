import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { useTranslation } from "../../hooks/useTranslation";
import { ViewportVideo } from "../ui/ViewportVideo";

type GalleryFormat = "landscape" | "portrait" | "square";

type GalleryItem = {
  id: number;
  type: "image" | "video";
  src: string;
  srcSet?: string;
  sizes?: string;
  poster?: string;
  alt: string;
  format: GalleryFormat;
};

export function Gallery() {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  const items: GalleryItem[] = [
    {
      id: 1,
      type: "video",
      src: "/images/gallery/gallery-1.mp4",
      poster: "/images/gallery/gallery-1-poster.webp",
      alt: t.gallery.alts.reformer,
      format: "landscape",
    },
    {
      id: 2,
      type: "image",
      src: "/images/gallery/gallery-2-600.webp",
      srcSet:
        "/images/gallery/gallery-2-600.webp 600w, /images/gallery/gallery-2-900.webp 900w",
      sizes: "(min-width: 768px) 33vw, 100vw",
      alt: t.gallery.alts.emsCoaches,
      format: "portrait",
    },
    {
      id: 3,
      type: "video",
      src: "/images/gallery/gallery-3.mp4",
      poster: "/images/gallery/gallery-3-poster.webp",
      alt: t.gallery.alts.emsMother,
      format: "portrait",
    },
    {
      id: 4,
      type: "image",
      src: "/images/gallery/gallery-4-600.webp",
      srcSet:
        "/images/gallery/gallery-4-600.webp 600w, /images/gallery/gallery-4-1000.webp 1000w",
      sizes: "(min-width: 768px) 67vw, 100vw",
      alt: t.gallery.alts.reformerDuo,
      format: "landscape",
    },
    {
      id: 5,
      type: "image",
      src: "/images/gallery/gallery-5-600.webp",
      srcSet:
        "/images/gallery/gallery-5-600.webp 600w, /images/gallery/gallery-5-1000.webp 1000w",
      sizes: "(min-width: 768px) 58vw, 100vw",
      alt: t.gallery.alts.kettlebell,
      format: "square",
    },
    {
      id: 6,
      type: "image",
      src: "/images/gallery/gallery-6-600.webp",
      srcSet:
        "/images/gallery/gallery-6-600.webp 600w, /images/gallery/gallery-6-1000.webp 1000w",
      sizes: "(min-width: 768px) 42vw, 100vw",
      alt: t.gallery.alts.reformerTraining,
      format: "portrait",
    },
  ];

  const activeItem = items[activeIndex];
  const formattedIndex = String(activeIndex + 1).padStart(2, "0");
  const formattedTotal = String(items.length).padStart(2, "0");

  const showPrevious = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? items.length - 1 : currentIndex - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === items.length - 1 ? 0 : currentIndex + 1,
    );
  };

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-title"
      className="overflow-hidden bg-surface-light py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-[7vw]">
        <div className="grid gap-8 border-l border-accent-mauve/35 pl-5 sm:pl-8 md:grid-cols-12 md:items-end lg:pl-12">
          <div className="md:col-span-8">
            <p className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-accent-mauve sm:text-sm">
              <span aria-hidden="true" className="h-px w-8 bg-accent-mauve" />
              {t.gallery.badge}
            </p>
            <h2
              id="gallery-title"
              className="mt-6 max-w-4xl text-4xl leading-[0.95] tracking-[-0.035em] text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl"
            >
              {t.gallery.heading}
            </h2>
          </div>

          <div className="md:col-span-4 md:pb-1">
            <p className="max-w-xl text-base leading-relaxed text-gray-600 lg:text-lg">
              {t.gallery.description}
            </p>

            <div className="mt-8 flex gap-3">
              <button
                type="button"
                aria-label={t.gallery.previous}
                onClick={showPrevious}
                className="grid size-12 cursor-pointer place-items-center rounded-full border border-gray-900/25 text-gray-900 transition-colors hover:border-gray-900 hover:bg-gray-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-mauve focus-visible:ring-offset-2"
              >
                <ArrowLeft aria-hidden="true" size={18} />
              </button>
              <p
                aria-live="polite"
                aria-atomic="true"
                className="min-w-20 self-center text-center text-xs font-medium tabular-nums tracking-[0.18em] text-gray-500"
              >
                {formattedIndex} / {formattedTotal}
              </p>
              <button
                type="button"
                aria-label={t.gallery.next}
                onClick={showNext}
                className="grid size-12 cursor-pointer place-items-center rounded-full border border-gray-900/25 text-gray-900 transition-colors hover:border-gray-900 hover:bg-gray-900 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-mauve focus-visible:ring-offset-2"
              >
                <ArrowRight aria-hidden="true" size={18} />
              </button>
            </div>
          </div>
        </div>

        <figure
          aria-label={t.gallery.collectionLabel}
          className="relative mt-16 border-y border-gray-900/15 py-5 sm:mt-20 md:py-6"
        >
          <div className="relative aspect-[4/5] overflow-hidden bg-[#201d1b] sm:aspect-[4/3] lg:aspect-[16/9]">
            {activeItem.type === "image" ? (
              <img
                key={activeItem.src}
                src={activeItem.src}
                srcSet={activeItem.srcSet}
                sizes="(min-width: 1280px) 1152px, (min-width: 640px) 90vw, 100vw"
                alt={activeItem.alt}
                className={`h-full w-full ${activeItem.format === "portrait" ? "object-cover lg:object-contain" : "object-cover"}`}
                loading="lazy"
                decoding="async"
              />
            ) : (
              <>
                <ViewportVideo
                  key={activeItem.src}
                  src={activeItem.src}
                  poster={activeItem.poster}
                  className={`h-full w-full ${activeItem.format === "portrait" ? "object-cover lg:object-contain" : "object-cover"}`}
                />
                <span className="sr-only">{activeItem.alt}</span>
              </>
            )}

            <figcaption className="absolute bottom-0 left-0 border-r border-t border-white/20 bg-black/55 px-5 py-3 text-xs uppercase tracking-[0.18em] text-white/85 backdrop-blur-sm sm:px-7 sm:py-4">
              {formattedIndex} / {formattedTotal}
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
}
