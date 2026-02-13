export function Footer() {
  return (
    <footer className=" bg-gradient-to-b from-slate-950 to-slate-900 text-white py-10 px-5">
      <div className="mx-auto max-w-6xl ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl mb-4 leading-relaxed">
              XBody Euphoria & Pilates Reformer
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed mt-4">
              Transforming lives through personalized fitness and wellness in
              Blagoevgrad.
            </p>
            <img
              src="/images/brand/logo-footer.png"
              alt="logo"
              className="h-20 mt-4 opacity-90"
            />
          </div>
          <div>
            <h4 className="mb-4 tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400 leading-relaxed">
              <li>
                <a
                  href="#services"
                  className="hover:text-accent-blush transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-accent-blush transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="hover:text-accent-blush transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-accent-blush transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <address className="space-y-2 not-italic">
            <h4 className="mb-4 tracking-wider">Contact</h4>

            <ul className="space-y-2 text-sm text-gray-400 leading-relaxed">
              <li>Blagoevgrad, Bulgaria</li>
              <li>
                <a
                  href="tel:+359897869293"
                  className="hover:text-accent-blush transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blush/40"
                >
                  +359 897 869 293
                </a>
              </li>
              <li>
                <a
                  href="mailto:xbodyeuphoria.wellness.studio@gmail.com"
                  className="hover:text-accent-blush transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blush/40"
                >
                  xbodyeuphoria.wellness.studio@gmail.com
                </a>
              </li>
            </ul>
          </address>
        </div>

        <div className="text-center pt-8 border-t border-gray-800 ">
          <p className="text-gray-400 text-sm leading-relaxed ">
            © 2026 Euphoria - XBODY & Pilates Reformer Studio. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
