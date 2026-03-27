import { useTranslation } from "../../hooks/useTranslation";

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-10 px-5">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 mb-8 md:grid-cols-3">
          {/* Brand Section  */}
          <div>
            <h3 className="text-xl mb-4 leading-relaxed">{t.footer.heading}</h3>

            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              {t.footer.description}
            </p>

            <img
              src="/images/brand/logo-footer.png"
              alt={t.footer.alt}
              width={80}
              height={80}
              className=" mt-4 opacity-90 transition-opacity hover:opacity-100"
            />
          </div>

          {/*Navigation + Contact Wrapper*/}
          <div className="grid grid-cols-2 gap-8 md:col-span-2 ">
            {/* Navigation Section */}
            <nav>
              <h4 className="mb-4 tracking-wider">
                {t.footer.navigation.title}
              </h4>
              <ul className="space-y-2 text-sm leading-relaxed text-gray-400">
                <li>
                  <a
                    href="#services"
                    className="transition-colors hover:text-accent-blush"
                  >
                    {t.footer.navigation.services}
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="transition-colors hover:text-accent-blush"
                  >
                    {t.footer.navigation.about}
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    className="transition-colors hover:text-accent-blush"
                  >
                    {t.footer.navigation.gallery}
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="transition-colors hover:text-accent-blush"
                  >
                    {t.footer.navigation.contact}
                  </a>
                </li>
              </ul>
            </nav>

            {/* Contact Section */}
            <address className="not-italic">
              <h4 className="mb-4 tracking-wider">{t.footer.contact.title}</h4>

              <ul className="space-y-2 text-sm leading-relaxed text-gray-400">
                <li>{t.footer.contact.address[0]}</li>
                <li>{t.footer.contact.address[1]}</li>
                <li>
                  <a
                    href="tel:+359897869293"
                    aria-label={t.footer.contact.phoneAria}
                    className="transition-colors hover:text-accent-blush focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blush/40"
                  >
                    {t.footer.contact.phone}
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:xbodyeuphoria.wellness.studio@gmail.com"
                    aria-label={t.footer.contact.emailAria}
                    className="break-all transition-colors hover:text-accent-blush focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blush/40"
                  >
                    {t.footer.contact.email}
                  </a>
                </li>
              </ul>
            </address>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm leading-relaxed text-gray-400">
            © {new Date().getFullYear()} {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
