type ServiceCardProps = {
  id: string;
  title: string;
  description: string;
  image: string;
  srcSet?: string;
  requestLabel: string;
  onRequest: () => void;
  features: string[];
  imagePosition?: "left" | "right";
};

export function ServiceCard({
  id,
  title,
  description,
  image,
  srcSet,
  requestLabel,
  onRequest,
  features,
  imagePosition = "left",
}: ServiceCardProps) {
  return (
    <article
      id={id}
      className="group grid border-t border-neutral-900/15 md:grid-cols-12"
    >
      <div
        className={`relative min-h-72 overflow-hidden sm:min-h-96 md:col-span-7 md:min-h-[32rem] ${
          imagePosition === "right" ? "md:order-2" : ""
        }`}
      >
        <img
          src={image}
          srcSet={srcSet}
          sizes="(min-width: 1280px) 650px, (min-width: 768px) 55vw, 100vw"
          alt={title}
          className="absolute inset-0 h-full w-full object-cover object-[center_65%] motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-[1.025]"
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
        <p className="mt-7 leading-relaxed text-neutral-700">{description}</p>

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
        <a
          href="#contact"
          onClick={onRequest}
          className="mt-8 inline-flex min-h-11 items-center justify-between gap-4 border-b border-accent-mauve py-3 text-sm text-accent-mauve hover:text-studio-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-mauve"
        >
          {requestLabel}
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}
