import { useState } from "react";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import { useTranslation } from "../../hooks/useTranslation";
import { galleryItems, type GalleryFilter } from "../../data/gallery";
import { ViewportVideo } from "../ui/ViewportVideo";

const filters: GalleryFilter[] = ["all", "pilates", "xbody", "shape", "studio"];

export function Gallery() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<GalleryFilter>("all");
  const [activeIndex, setActiveIndex] = useState(0);
  const items = galleryItems.filter(
    (item) => filter === "all" || item.categories.includes(filter),
  );
  const activeItem = items[activeIndex];
  const alt = t.gallery.alts[activeItem.altKey];
  const caption = t.gallery.captions[activeItem.altKey];
  const categoryLabel =
    filter === "all"
      ? activeItem.categories
          .map((category) => t.gallery.filters[category])
          .join(" · ")
      : t.gallery.filters[filter];
  const formattedIndex = String(activeIndex + 1).padStart(2, "0");
  const formattedTotal = String(items.length).padStart(2, "0");

  function changeFilter(nextFilter: GalleryFilter) {
    setFilter(nextFilter);
    setActiveIndex(0);
  }

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-title"
      className="bg-surface-light py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="grid gap-8 border-l border-accent-mauve/35 pl-5 sm:pl-8 md:grid-cols-12 md:items-end lg:pl-12">
          <div className="md:col-span-8">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent-mauve">
              {t.gallery.badge}
            </p>
            <h2
              id="gallery-title"
              className="mt-6 max-w-4xl text-4xl leading-[0.95] tracking-[-0.035em] text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl"
            >
              {t.gallery.heading}
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-gray-600 md:col-span-4 lg:text-lg">
            {t.gallery.description}
          </p>
        </div>

        <div
          role="group"
          aria-label={t.gallery.collectionLabel}
          className="mb-8 mt-12 flex flex-wrap gap-2 border-b border-gray-900/15 pb-5 sm:mt-16"
        >
          {filters.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={filter === category}
              onClick={() => changeFilter(category)}
              className={`min-h-11 cursor-pointer px-4 py-2 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-mauve ${filter === category ? "bg-studio-ink text-white" : "bg-transparent text-gray-600 hover:bg-surface hover:text-gray-900"}`}
            >
              {t.gallery.filters[category]}
            </button>
          ))}
        </div>

        <figure
          aria-label={t.gallery.collectionLabel}
          className="grid min-w-0 border-y border-gray-900/15 lg:grid-cols-12"
        >
          <div className="relative aspect-[4/5] min-w-0 overflow-hidden bg-studio-ink sm:aspect-[4/3] lg:col-span-8">
            {activeItem.type === "image" ? (
              <img
                key={activeItem.src}
                src={activeItem.src}
                srcSet={activeItem.srcSet}
                sizes="(min-width: 1280px) 760px, (min-width: 1024px) 60vw, 100vw"
                alt={alt}
                className="h-full w-full object-contain"
                loading="lazy"
                decoding="async"
              />
            ) : (
              <ViewportVideo
                key={activeItem.src}
                src={activeItem.src}
                poster={activeItem.poster}
                label={alt}
                className="h-full w-full object-contain"
              />
            )}
          </div>

          <figcaption className="flex min-h-80 min-w-0 flex-col justify-between bg-surface p-6 sm:p-8 lg:col-span-4 lg:min-h-0">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-accent-mauve">
                {categoryLabel}
              </p>
              <p className="mt-5 max-w-sm font-serif text-2xl leading-tight text-studio-ink sm:text-3xl lg:text-4xl">
                {caption.title}
              </p>
              <p className="mt-5 max-w-sm text-sm leading-7 text-gray-600">
                {caption.text}
              </p>
            </div>
            <div className="mt-10 flex items-center justify-between gap-3">
              <button
                type="button"
                aria-label={t.gallery.previous}
                onClick={() =>
                  setActiveIndex(
                    (index) => (index - 1 + items.length) % items.length,
                  )
                }
                className="grid size-12 cursor-pointer place-items-center border border-gray-900/25 text-gray-900 transition-colors hover:bg-studio-ink hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-mauve"
              >
                <ArrowLeft aria-hidden="true" size={18} />
              </button>
              <p
                role="status"
                aria-live="polite"
                aria-atomic="true"
                className="text-center text-xs tabular-nums tracking-[0.18em] text-gray-600"
              >
                <span className="sr-only">{t.gallery.filters[filter]}: </span>
                {formattedIndex} / {formattedTotal}
              </p>
              <button
                type="button"
                aria-label={t.gallery.next}
                onClick={() =>
                  setActiveIndex((index) => (index + 1) % items.length)
                }
                className="grid size-12 cursor-pointer place-items-center border border-gray-900/25 text-gray-900 transition-colors hover:bg-studio-ink hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-mauve"
              >
                <ArrowRight aria-hidden="true" size={18} />
              </button>
            </div>
          </figcaption>
        </figure>

        <div className="mt-5 flex gap-3 overflow-x-auto p-1 pb-4">
          {items.map((item, index) => (
            <button
              key={item.id}
              type="button"
              aria-label={t.gallery.alts[item.altKey]}
              aria-pressed={activeIndex === index}
              onClick={() => setActiveIndex(index)}
              className={`relative h-20 w-20 shrink-0 cursor-pointer bg-studio-ink transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-mauve sm:h-24 sm:w-24 ${activeIndex === index ? "ring-2 ring-accent-mauve ring-offset-2 ring-offset-surface-light" : "opacity-60 hover:opacity-100"}`}
            >
              <img
                src={item.poster ?? item.thumbnail ?? item.src}
                alt=""
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
              {item.type === "video" && (
                <span className="absolute inset-0 grid place-items-center bg-black/20">
                  <Play
                    aria-hidden="true"
                    size={20}
                    className="fill-white text-white"
                  />
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
