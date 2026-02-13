type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
  features: string[];
};

export function ServiceCard({
  title,
  description,
  image,
  features,
}: ServiceCardProps) {
  return (
    <article className="group rounded-3xl border border-black/5 overflow-hidden bg-white shadow-sm hover:shadow-xl transition duration-500">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className=" p-6 text-left ">
        <h3 className="font-serif text-2xl text-neutral-900">{title}</h3>
        <p className="text-neutral-700 mb-6 leading-relaxed mt-6">
          {description}
        </p>
        <ul className="pt-6 space-y-2">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3 font-sans text-sm text-neutral-600"
            >
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#B4948F] flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
