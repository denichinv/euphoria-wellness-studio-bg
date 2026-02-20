export function Gallery() {
  const items = [
    {
      id: 1,
      className: "col-span-2 row-span-12 lg:col-span-2 lg:row-span-18",
    },

    {
      id: 2,
      className: "col-span-1 row-span-8 lg:col-span-1 lg:row-span-8",
    },
    {
      id: 3,
      className: "col-span-1 row-span-8 lg:col-span-1 lg:row-span-10",
    },

    {
      id: 4,
      className: "col-span-2 row-span-10 lg:col-span-1 lg:row-span-12",
    },

    {
      id: 5,
      className: "col-span-1 row-span-10 lg:col-span-1 lg:row-span-14",
    },

    {
      id: 6,
      className: "col-span-1 row-span-8 lg:col-span-1 lg:row-span-8",
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
          {items.map((item) => (
            <li
              key={item.id}
              className={`${item.className} rounded-2xl bg-neutral-200 overflow-hidden`}
            ></li>
          ))}
        </ul>
      </div>
    </section>
  );
}
