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
    <article className="rounded-2xl border overflow-hidden bg-white ">
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover"
        loading="lazy"
      />
      <div className="p-6 text-left ">
        <h3 className="pb-4 text-xl ">{title}</h3>
        <p className="mt-2">{description}</p>
        <ul className="pt-6 list-disc ">
          {features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
