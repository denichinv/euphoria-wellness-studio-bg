type GalleryItem = {
  id: number;
  type: "image" | "video";
  src: string;
  alt: string;
  className: string;
};

export function Gallery() {
  const item: GalleryItem[] = [
    {
      id: 1,
      type: "video",
      src: "/images/gallery/gallery-1.mp4",
      alt: "Жена изпълнява упражнение на Pilates Reformer в модерно студио",
      className: "col-span-2 row-span-12 lg:col-span-2 lg:row-span-16",
    },
    {
      id: 2,
      type: "image",
      src: "/images/gallery/gallery-2.webp",
      alt: "Двойка в EMS костюми позират в студиото",
      className: "col-span-1 row-span-8 lg:col-span-1 lg:row-span-8",
    },
    {
      id: 3,
      type: "video",
      src: "/images/gallery/gallery-3.mp4",
      alt: "Майка тренира с EMS оборудване, докато държи бебето си",
      className: "col-span-1 row-span-8 lg:col-span-1 lg:row-span-8",
    },
    {
      id: 4,
      type: "image",
      src: "/images/gallery/gallery-4.webp",
      alt: "Две жени тренират на Pilates Reformer с помощта на ластици",
      className: "col-span-2 row-span-12 lg:col-span-1 lg:row-span-16",
    },
    {
      id: 5,
      type: "image",
      src: "/images/gallery/gallery-5.webp",
      alt: "Клиент изпълнява упражнение под наблюдение на треньор",
      className: "col-span-1 row-span-6 lg:col-span-1 lg:row-span-11",
    },
    {
      id: 6,
      type: "image",
      src: "/images/gallery/gallery-6.webp",
      alt: "Pilates Reformer тренировка в студиото",
      className: "col-span-1 row-span-6 lg:col-span-1 lg:row-span-9",
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
            ГАЛЕРИЯ
          </p>
          <h2
            id="gallery-title"
            className="text-3xl md:text-5xl text-gray-900 mb-4 "
          >
            Потопете се в атмосферата на нашето студио
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Спокойна и модерна среда, създадена с грижа за вашия напредък и
            баланс.
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
                  alt={galleryItem.alt}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />
              ) : (
                <video
                  className="h-full w-full object-cover transition duration-500 group-hover:brightness-90"
                  autoPlay
                  muted
                  playsInline
                  loop
                  preload="metadata"
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
