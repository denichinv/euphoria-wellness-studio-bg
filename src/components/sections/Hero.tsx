import { useEffect, useState } from "react";
export function Hero() {
  const button =
    "group inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-full hover:bg-[#E8D5D5] transition-all duration-300 shadow-lg hover:shadow-xl";

  const desktopImages = [
    "/images/hero/hero-desktop.jpeg",
    "/images/hero/hero-desktop-2.jpeg",
  ] as const;

  const mobileImages = [
    "/images/hero/hero-mobile.jpeg",
    "/images/hero/hero-mobile-2.jpeg",
  ] as const;

  const [active, setActive] = useState(0);
  const images = window.innerWidth >= 768 ? desktopImages : mobileImages;
  const current = active % images.length;

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((prev) => prev + 1);
    }, 7000);

    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      className="relative overflow-hidden min-h-screen flex items-center justify-center"
      id="hero"
    >
      <div className="absolute inset-0 z-0">
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            current === 0 ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${images[0]})` }}
          aria-hidden="true"
        />
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            current === 1 ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${images[1]})` }}
          aria-hidden="true"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20 z-10  text-center">
        <div className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
          <p className="text-white/90 text-sm tracking-wide">
            Blagoevgrad Wellness Studio
          </p>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-white mb-6 font-medium text-center font-serif tracking-tight leading-tight ">
          XBody Euphoria <br />
          <span className="text-[#E8D5D5]"> & Pilates Reformer </span>
        </h1>
        <p className="text-center mt-4 font-sans leading-relaxed text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Индивидуални XBody EMS и Pilates Reformer сесии в спокойна и комфортна
          среда.
        </p>
        <div className="flex justify-center mt-6 gap-4">
          <a className={`${button} font-sans`} href="#contact">
            Запази час
          </a>
          <a className={`${button} font-sans`} href="#services">
            Виж услугите
          </a>
        </div>
      </div>
    </section>
  );
}
