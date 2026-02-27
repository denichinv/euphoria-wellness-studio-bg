export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-10 px-5">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 mb-8 md:grid-cols-3">
          {/* Brand Section  */}
          <div>
            <h3 className="text-xl mb-4 leading-relaxed">
              XBody Euphoria & Pilates Reformer
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Баланс, сила и персонализирана грижа чрез Pilates Reformer и XBODY
              тренировки в Благоевград.
            </p>

            <img
              src="/images/brand/logo-footer.png"
              alt="Лого на Euphoria Pilates"
              className="h-20 mt-4 opacity-90 transition-opacity hover:opacity-100"
            />
          </div>

          {/*Navigation + Contact Wrapper*/}
          <div className="grid grid-cols-2 gap-8 md:col-span-2 ">
            {/* Navigation Section */}
            <nav>
              <h4 className="mb-4 tracking-wider">Навигация</h4>
              <ul className="space-y-2 text-sm leading-relaxed text-gray-400">
                <li>
                  <a
                    href="#services"
                    className="transition-colors hover:text-accent-blush"
                  >
                    Услуги
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="transition-colors hover:text-accent-blush"
                  >
                    За нас
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    className="transition-colors hover:text-accent-blush"
                  >
                    Галерия
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="transition-colors hover:text-accent-blush"
                  >
                    Контакти
                  </a>
                </li>
              </ul>
            </nav>

            {/* Contact Section */}
            <address className="not-italic">
              <h4 className="mb-4 tracking-wider">Контакти</h4>

              <ul className="space-y-2 text-sm leading-relaxed text-gray-400">
                <li>ул. „Илинден“ № 3</li>
                <li>2700 Благоевград, България</li>
                <li>
                  <a
                    href="tel:+359897869293"
                    aria-label="Обади се на Euphoria"
                    className="transition-colors hover:text-accent-blush focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blush/40"
                  >
                    +359 897 869 293
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:xbodyeuphoria.wellness.studio@gmail.com"
                    aria-label="Изпрати имейл до Euphoria"
                    className="break-all transition-colors hover:text-accent-blush focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blush/40"
                  >
                    xbodyeuphoria.wellness.studio@gmail.com
                  </a>
                </li>
              </ul>
            </address>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm leading-relaxed text-gray-400">
            © {new Date().getFullYear()} Euphoria - XBODY & Pilates Reformer
            Studio. Всички права запазени.
          </p>
        </div>
      </div>
    </footer>
  );
}
