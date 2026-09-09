type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
  features: string[];
  imagePosition?: "left" | "right";
};

export function ServiceCard({
  title,
  description,
  image,
  features,
  imagePosition = "left",
}: ServiceCardProps) {
  return (
    <article className="group grid border-t border-neutral-900/15 md:grid-cols-12">
      <div
        className={`relative min-h-72 overflow-hidden sm:min-h-96 md:col-span-7 md:min-h-[32rem] ${
          imagePosition === "right" ? "md:order-2" : ""
        }`}
      >
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.025]"
          loading="lazy"
        />
        <div
          aria-hidden="true"
          className={`absolute inset-y-0 hidden w-px bg-white/60 md:block ${
            imagePosition === "right" ? "left-8" : "right-8"
          }`}
        />
      </div>

      <div className="flex flex-col justify-center bg-surface-light px-6 py-12 sm:px-10 md:col-span-5 md:px-10 lg:px-14 lg:py-16">
        <h3 className="text-4xl leading-none tracking-[-0.025em] text-neutral-900 sm:text-5xl">
          {title}
        </h3>
        <p className="mt-7 leading-relaxed text-neutral-700">
          {description}
        </p>

        <ul className="mt-9 border-t border-neutral-900/15">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-4 border-b border-neutral-900/15 py-3.5 font-sans text-sm text-neutral-700"
            >
              <span
                aria-hidden="true"
                className="h-px w-5 flex-shrink-0 bg-accent-mauve"
              />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
