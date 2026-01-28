export function Gallery() {
  const items = [
    {
      id: 1,
      className: "col-span-2 row-span-10 lg:col-span-2 lg:row-span-16",
    },
    {
      id: 2,
      className: "col-span-1 row-span-8 lg:col-span-1 lg:row-span-8",
    },
    {
      id: 3,
      className: "col-span-1 row-span-12 lg:col-span-1 lg:row-span-14",
    },
    {
      id: 4,
      className: "col-span-2 row-span-8 lg:col-span-1 lg:row-span-10",
    },
    {
      id: 5,
      className: "col-span-1 row-span-8 lg:col-span-1 lg:row-span-8",
    },
    {
      id: 6,
      className: "col-span-1 row-span-10 lg:col-span-1 lg:row-span-12",
    },
  ];

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-title"
      className="py-16 max-w-6xl mx-auto px-4 text-center "
    >
      <p>GALLERY</p>
      <h2 id="gallery-title" className="text-3xl">
        Experience Our Studio
      </h2>
      <p>
        A glimpse into our serene, modern space designed for your transformation
      </p>
      <ul className="grid grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[18px] mt-10">
        {items.map((item) => (
          <li
            key={item.id}
            className={`${item.className} rounded-2xl bg-neutral-200 overflow-hidden`}
          ></li>
        ))}
      </ul>
    </section>
  );
}
