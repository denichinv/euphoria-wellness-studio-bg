import { Award, Users } from "lucide-react";

const FEATURES = [
  {
    title: "Сертифицирани треньори",

    Icon: Award,
  },
  {
    title: "Малки тренировъчни групи",

    Icon: Users,
  },
] as const;

export function About() {
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
            За нас
          </p>

          <h2
            id="about-title"
            className="text-3xl md:text-5xl text-gray-900 mb-6"
          >
            Вашият път към здраве и баланс започва тук
          </h2>

          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            В Euphoria вярваме в персоналния подход към движението и грижата за
            тялото. Нашето студио в Благоевград създава спокойна и подкрепяща
            среда, в която можете да се фокусирате върху своите цели.
            Комбинираме съвременни технологии и доказани методи, за да
            постигнете устойчиви резултати и усещане за баланс.
          </p>

          {/* Features */}
          <div className="grid gap-3 sm:grid-cols-2">
            {FEATURES.map(({ title, Icon }) => (
              <div key={title} className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-accent-mauve" />
                </div>
                <div>
                  <p className="text-gray-600 ">{title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image placeholder */}
        <div className="md:order-1 aspect-[4/3] rounded-2xl bg-neutral-100 overflow-hidden ring-1 ring-black/5" />
      </div>
    </section>
  );
}
