import { Award, Users } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { bg } from "../../i18n/bg";
import { en } from "../../i18n/en";

const ICONS = {
  award: Award,
  users: Users,
} as const;

export function About() {
  const { language } = useLanguage();
  const t = language === "bg" ? bg.about : en.about;

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="py-20 md:py-32 bg-white"
    >
      <div className="mx-auto max-w-6xl px-4 grid gap-10 md:grid-cols-2 items-center">
        {/* Text */}
        <div className="md:order-2">
          <p className="text-accent-mauve uppercase tracking-widest leading-relaxed mb-4">
            {t.badge}
          </p>

          <h2
            id="about-title"
            className="text-3xl md:text-5xl text-gray-900 mb-6"
          >
            {t.heading}
          </h2>

          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            {t.description}
          </p>

          {/* Features */}
          <div className="grid gap-3 sm:grid-cols-2">
            {t.features.map((feature) => {
              const Icon = ICONS[feature.icon as keyof typeof ICONS];

              return (
                <div key={feature.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-accent-mauve" />
                  </div>
                  <div>
                    <p className="text-gray-600">{feature.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Image */}
        <div className="md:order-1 aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-black/5">
          <img
            src="/images/about/about.jpeg"
            alt={t.alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
