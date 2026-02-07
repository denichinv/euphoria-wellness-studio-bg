export function Hero() {
  return (
    <section className="relative overflow-hidden" id="hero">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <h1
          className="text-5xl font-medium text-center font-serif
         font-m\ tracking-tight leading-tight"
        >
          XBODY & Pilates <br />
          Euphoria
        </h1>
        <p className="text-center mt-4 font-sans leading-relaxed text-lg">
          Индивидуални XBody EMS и Pilates Reformer сесии в спокойна и комфортна
          среда.
        </p>
        <div className="flex justify-center mt-6 gap-4">
          <a className="font-sans" href="#contact">
            Запази час
          </a>
          <a className="font-sans" href="#services">
            Виж услугите
          </a>
        </div>
      </div>
    </section>
  );
}
