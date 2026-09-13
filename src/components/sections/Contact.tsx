import { useState } from "react";
import { Phone, Mail, Instagram, Clock } from "lucide-react";
import { useTranslation } from "../../hooks/useTranslation";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const { t } = useTranslation();

  const divStyle: string =
    "size-10 flex items-center justify-center shrink-0 text-accent-mauve";

  const listStyle: string = "flex min-w-0 gap-4 items-start border-b border-gray-900/15 py-7 [&>div:last-child]:min-w-0 [&>div:last-child]:break-words";
  const inputsStyle: string =
    "w-full min-w-0 rounded-sm border border-gray-900/20 bg-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent-mauve focus:border-transparent transition-colors text-gray-900";
  const fieldStyle: string = "space-y-1";

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [service, setService] = useState("pilates");
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const params = new URLSearchParams();

    formData.forEach((value, key) => {
      params.append(key, String(value));
    });

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });

      if (!res.ok) throw new Error("Submit failed");

      setStatus("success");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setService("pilates");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-[7vw] py-24 sm:py-28 lg:py-32"
    >
        <header className="border-l border-accent-mauve/35 pl-5 sm:pl-8 lg:pl-12">
          <p className="text-accent-mauve uppercase tracking-widest text-sm mb-2">
            {t.contact.badge}
          </p>

          <h2
            id="contact-title"
            className="mt-6 max-w-4xl text-4xl leading-[0.95] tracking-[-0.035em] text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {t.contact.heading}
          </h2>

          <p className="mt-8 max-w-2xl text-base sm:text-lg text-gray-600 leading-relaxed">
            {t.contact.description}
          </p>

        </header>
      <div className="mt-14 grid min-w-0 grid-cols-1 gap-12 lg:mt-20 lg:grid-cols-12 lg:gap-16">
        <div className="min-w-0 lg:col-span-5">
          <ul className="flex flex-col border-t border-gray-900/15">
            <li className={listStyle}>
              <div className={divStyle}>
                <Phone size={20} />
              </div>

              <div>
                <h3 className="text-gray-900 mb-1">{t.contact.phone.title}</h3>

                {t.contact.phone.items.map((item) => (
                  <p key={item.label} className="text-gray-600">
                    <span className="text-sm text-gray-500">
                      {item.label}:{" "}
                    </span>

                    <a
                      href={item.href}
                      aria-label={item.aria}
                      className="hover:underline"
                    >
                      {item.number}
                    </a>
                  </p>
                ))}
              </div>
            </li>
            <li className={listStyle}>
              <div className={divStyle}>
                <Clock />
              </div>
              <div>
                <h3 className="text-gray-900 mb-1">
                  {t.contact.workingHours.title}
                </h3>
                <p className="text-gray-600">
                  {t.contact.workingHours.days[0]}:{" "}
                  {t.contact.workingHours.hours[0]}
                </p>
                <p className="text-gray-600">
                  {t.contact.workingHours.days[1]}:{" "}
                  {t.contact.workingHours.hours[1]}
                </p>
                <p className="text-gray-600 ">
                  {t.contact.workingHours.days[2]}:{" "}
                  {t.contact.workingHours.hours[2]}
                </p>
              </div>
            </li>

            <li className={listStyle}>
              <a
                href="mailto:xbodyeuphoria.wellness.studio@gmail.com"
                aria-label={t.contact.email.aria}
              >
                <div className={divStyle}>
                  <Mail size={20} />
                </div>
              </a>
              <div className="min-w-0">
                <h3 className="text-gray-900 mb-1">{t.contact.email.title}</h3>
                <p className="text-gray-600 break-words">{t.contact.email.address}</p>
              </div>
            </li>

            <li className={listStyle}>
              <div className={divStyle}>
                <Instagram size={20} />
              </div>

              <div>
                <h3 className="text-gray-900 mb-1">{t.contact.social.title}</h3>

                {t.contact.social.items.map((item) => (
                  <p key={item.label} className="text-gray-600">
                    <span className="text-sm text-gray-500">
                      {item.label}:{" "}
                    </span>

                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                      aria-label={item.label}
                    >
                      {item.handle}
                    </a>
                  </p>
                ))}
              </div>
            </li>
          </ul>

        </div>

        {/* Right column */}

        <div className="min-w-0 rounded-sm bg-surface p-6 sm:p-8 lg:col-span-7 lg:p-10">
          {status === "success" ? (
            <div role="status" aria-live="polite" className="space-y-6">
              <h3 className="text-2xl md:text-3xl text-gray-900 mb-6">
                {t.contact.contactFormSuccess.title}
              </h3>
              <button
                type="button"
                className="w-full py-4 bg-gray-900 text-white rounded-xl hover:bg-accent-mauve transition-colors duration-300"
                onClick={() => setStatus("idle")}
              >
                {t.contact.contactFormSuccess.submitButton}
              </button>
            </div>
          ) : (
            <form
              className="space-y-7"
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />
              <h3 className="text-3xl md:text-4xl text-gray-900 mb-6">
                {t.contact.contactForm.title}
              </h3>
              <div className={fieldStyle}>
                <label htmlFor="name" className="block text-gray-900 mb-2">
                  {t.contact.contactForm.name}
                </label>
                <input
                  type="text"
                  placeholder={t.contact.contactForm.namePlaceholder}
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className={inputsStyle}
                  required
                />
              </div>
              <div className={fieldStyle}>
                <label htmlFor="email" className="block text-gray-900 mb-2">
                  {t.contact.contactForm.email}
                </label>
                <input
                  type="email"
                  placeholder={t.contact.contactForm.emailPlaceholder}
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className={inputsStyle}
                  required
                />
              </div>
              <div className={fieldStyle}>
                <label htmlFor="phone" className="block text-gray-900 mb-2">
                  {t.contact.contactForm.phone}
                </label>
                <input
                  type="tel"
                  placeholder={t.contact.contactForm.phonePlaceholder}
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  className={inputsStyle}
                />
              </div>
              <div className={fieldStyle}>
                <label htmlFor="service" className="block text-gray-900 mb-2">
                  {t.contact.contactForm.service}
                </label>
                <select
                  name="service"
                  id="service"
                  className={inputsStyle}
                  value={service}
                  onChange={(e) => {
                    setService(e.target.value);
                  }}
                >
                  <option value="pilates">
                    {t.contact.contactForm.serviceOptions[0]}
                  </option>
                  <option value="xbody">
                    {t.contact.contactForm.serviceOptions[1]}
                  </option>
                  <option value="others">
                    {t.contact.contactForm.serviceOptions[2]}
                  </option>
                </select>
              </div>
              <div className={fieldStyle}>
                <label htmlFor="message" className="block text-gray-900 mb-2">
                  {t.contact.contactForm.message}
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  className={inputsStyle}
                  rows={4}
                  placeholder={t.contact.contactForm.messagePlaceholder}
                />
              </div>
              {status === "error" && (
                <p role="alert" className="text-sm text-red-700">
                  {t.contact.contactForm.errorMessage}
                </p>
              )}
              <button
                type="submit"
                disabled={status === "submitting"}
                aria-busy={status === "submitting"}
                className="w-full cursor-pointer rounded-sm bg-gray-900 px-4 py-4 text-white transition-colors duration-300 hover:bg-accent-mauve focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-mauve focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting"
                  ? t.contact.contactForm.submittingButton
                  : t.contact.contactForm.submitButton}
              </button>
            </form>
          )}
        </div>
          <div className="min-w-0 lg:col-span-12 border-t border-gray-900/15 pt-6">
            <p className="mb-5 text-sm tracking-wide text-gray-600">{t.footer.contact.address.join(" · ")}</p>
            <iframe
              title={t.contact.mapTitle}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11856.862851080612!2d23.08025626533252!3d42.0171046396258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14aaf50037bd5417%3A0xff8ae402cc4aa9af!2sX%20Body%20Euphoria%20%26%20Pilates%20Reformer%20studio!5e0!3m2!1sen!2suk!4v1770937952841!5m2!1sen!2suk"
              className="block w-full h-[280px] sm:h-[360px] border-0"
              loading="lazy"
            />
          </div>
      </div>
    </section>
  );
}
