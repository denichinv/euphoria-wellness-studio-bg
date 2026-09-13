import { useTranslation } from "../../hooks/useTranslation";

export function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-[#201d1b] text-white">
      <div className="mx-auto max-w-7xl px-6 pt-16 sm:px-10 sm:pt-20 lg:px-[7vw]">
        <div className="grid grid-cols-1 gap-12 pb-14 lg:grid-cols-3 lg:gap-10 lg:pb-20">
          {/* Brand Section  */}
          <div className="min-w-0 border-l border-accent-blush/40 pl-5 sm:pl-8">
            <p className="font-serif text-3xl sm:text-4xl leading-tight tracking-tight">{t.footer.heading}</p>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              {t.footer.description}
            </p>

            <img
              src="/images/brand/logo-footer.png"
              alt={t.footer.alt}
              width={80}
              height={80}
              loading="lazy"
              className="mt-6"
            />
          </div>

          {/*Navigation + Contact Wrapper*/}
          <div className="grid min-w-0 grid-cols-1 gap-10 sm:grid-cols-2 lg:col-span-2 [&_a]:inline-block [&_a]:py-2 [&_a:focus-visible]:outline [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-accent-blush">
            {/* Navigation Section */}
            <nav aria-label={t.footer.navigation.title}>
              <h2 className="mb-5 text-xs font-medium uppercase tracking-[0.18em] text-accent-blush">
                {t.footer.navigation.title}
              </h2>
              <ul className="text-sm leading-relaxed text-white/80">
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
            <address className="min-w-0 not-italic">
              <h2 className="mb-5 text-xs font-medium uppercase tracking-[0.18em] text-accent-blush">{t.footer.contact.title}</h2>

              <ul className="space-y-2 text-sm leading-relaxed text-white/80">
                <li>{t.footer.contact.address[0]}</li>
                <li>{t.footer.contact.address[1]}</li>
                {t.contact.phone.items.map((phone) => (
                  <li key={phone.href}>
                    <span className="text-white/60">{phone.label} · </span>
                    <a href={phone.href} aria-label={phone.aria} className="transition-colors hover:text-accent-blush">
                      {phone.number}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href="mailto:xbodyeuphoria.wellness.studio@gmail.com"
                    aria-label={t.footer.contact.emailAria}
                    className="max-w-full [overflow-wrap:anywhere] transition-colors hover:text-accent-blush"
                  >
                    {t.footer.contact.email}
                  </a>
                </li>
              </ul>
            </address>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-white/15 py-6 sm:py-8">
          <p className="text-xs leading-relaxed text-white/60">
            © {new Date().getFullYear()} {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
