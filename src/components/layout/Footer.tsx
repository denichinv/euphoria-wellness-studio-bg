export function Footer() {
  return (
    <footer className="border-t-2 bg-slate-900 text-white/60">
      <div className="mx-auto max-w-6xl px-4 ">
        <div className="grid gap-5 py-10 md:grid-cols-3">
          <div className="space-y-2 ">
            <p className="text-xl font-bold text-white/90">
              Euphoria <br /> XBODY & Pilates Studio
            </p>
            <div className="h-24 w-24 border flex items-center justify-center bg-white/5 rounded-xl ">
              Logo
            </div>

            <p>
              Transforming lives through personalized fitness and wellness in
              Blagoevgrad.
            </p>
          </div>
          <nav className="space-y-2 ">
            <p className="text-xl font-bold text-white/90">Quick Links</p>
            <a href="#services" className="block">
              Services
            </a>
            <a href="#about" className="block">
              About Us
            </a>
            <a href="#gallery" className="block">
              Gallery
            </a>
            <a href="#contact" className="block">
              Contact
            </a>
          </nav>
          <address className="space-y-2 not-italic">
            <p className="text-xl font-bold text-white/90">Contact</p>

            <p>Blagoevgrad, Bulgaria</p>

            <p>+359 XXX XXX XXX</p>
            <p>info@xbodyeuphoria.com</p>
          </address>
        </div>
        <hr className="border-white/10" />
        <div className="text-center p-6">
          <p>
            © 2026 Euphoria - XBODY & Pilates Reformer Studio. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
