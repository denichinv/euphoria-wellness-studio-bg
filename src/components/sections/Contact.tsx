import { useState } from "react";
import { Phone, Mail, Instagram, Clock } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { en } from "../../i18n/en";
import { bg } from "../../i18n/bg";

export function Contact() {
  const { language } = useLanguage();
  const content = language === "en" ? en.contact : bg.contact;

  const divStyle: string =
    "w-12 h-12 rounded-full bg-surface flex items-center justify-center flex-shrink-0 hover:bg-accent-blush transition-color text-accent-mauve hover:text-white";

  const listStyle: string = "flex gap-4 ";
  const inputsStyle: string =
    "w-full  rounded-lg border border-gray-300 bg-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent-blush focus:border-transparent transition-colors text-gray-900";
  const fieldStyle: string = "space-y-1";

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [service, setService] = useState("pilates");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (!res.ok) throw new Error("Submit failed");

      setIsSubmitted(true);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setService("pilates");
    } catch (err) {
      alert(String(err));
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="max-w-6xl mx-auto px-4 py-20 md:py-32 "
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 ">
        {/* Left column */}
        <div>
          <p className="text-accent-mauve uppercase tracking-widest text-sm mb-2">
            {content.badge}
          </p>

          <h2
            id="contact-title"
            className="text-3xl md:text-5xl text-gray-900 mb-6 "
          >
            {content.heading}
          </h2>

          <p className="text-lg text-gray-600 m-8 leading-relaxed ">
            {content.description}
          </p>

          <ul className="mt-2 space-y-4">
            <li className={listStyle}>
              <div className={divStyle}>
                <Clock />
              </div>
              <div>
                <h3 className="text-gray-900 mb-1">
                  {content.workingHours.title}
                </h3>
                <p className="text-gray-600">
                  {content.workingHours.days[0]}:{" "}
                  {content.workingHours.hours[0]}
                </p>
                <p className="text-gray-600">
                  {content.workingHours.days[1]}:{" "}
                  {content.workingHours.hours[1]}
                </p>
                <p className="text-gray-600 ">
                  {content.workingHours.days[2]}:{" "}
                  {content.workingHours.hours[2]}
                </p>
              </div>
            </li>

            <li className={listStyle}>
              <a href="tel:+359897869293" aria-label={content.phone.aria}>
                <div className={divStyle}>
                  <Phone size={20} />
                </div>
              </a>
              <div>
                <h3 className="text-gray-900 mb-1">{content.phone.title}</h3>

                <p className="text-gray-600">{content.phone.number}</p>
              </div>
            </li>

            <li className={listStyle}>
              <a
                href="mailto:xbodyeuphoria.wellness.studio@gmail.com"
                aria-label={content.email.aria}
              >
                <div className={divStyle}>
                  <Mail size={20} />
                </div>
              </a>
              <div>
                <h3 className="text-gray-900 mb-1">{content.email.title}</h3>
                <p className="text-gray-600">{content.email.address}</p>
              </div>
            </li>

            <li className={listStyle}>
              <a
                href="https://instagram.com/xbody_euphoria"
                aria-label="Instagram профил на Euphoria"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={divStyle}>
                  <Instagram size={20} />
                </div>
              </a>
              <div>
                <h3 className="text-gray-900 mb-1">{content.social.title}</h3>
                <p className="text-gray-600">{content.social.instagram}</p>
              </div>
            </li>
          </ul>

          <div className="mt-6">
            <iframe
              title={content.mapTitle}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11856.862851080612!2d23.08025626533252!3d42.0171046396258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14aaf50037bd5417%3A0xff8ae402cc4aa9af!2sX%20Body%20Euphoria%20%26%20Pilates%20Reformer%20studio!5e0!3m2!1sen!2suk!4v1770937952841!5m2!1sen!2suk"
              className="w-full h-[300px] rounded-xl border"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right column */}

        <div className="rounded-3xl bg-surface p-8 md:p-12">
          {isSubmitted ? (
            <div className="space-y-6 ">
              <h3 className="text-2xl md:text-3xl text-gray-900 mb-6">
                {content.contactFormSuccess.title}
              </h3>
              <button
                type="button"
                className="w-full py-4 bg-gray-900 text-white rounded-xl hover:bg-accent-mauve transition-colors duration-300"
                onClick={() => setIsSubmitted(false)}
              >
                {content.contactFormSuccess.submitButton}
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
                {content.contactForm.title}
              </h3>
              <div className={fieldStyle}>
                <label htmlFor="name" className="block text-gray-900 mb-2">
                  {content.contactForm.name}
                </label>
                <input
                  type="text"
                  placeholder={content.contactForm.namePlaceholder}
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-transparent focus:border-accent-mauve focus:outline-none transition-colors"
                  required
                />
              </div>
              <div className={fieldStyle}>
                <label htmlFor="email" className="block text-gray-900 mb-2">
                  {content.contactForm.email}
                </label>
                <input
                  type="email"
                  placeholder={content.contactForm.emailPlaceholder}
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
                  {content.contactForm.phone}
                </label>
                <input
                  type="tel"
                  placeholder={content.contactForm.phonePlaceholder}
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
                  {content.contactForm.service}
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
                    {content.contactForm.serviceOptions[0]}
                  </option>
                  <option value="xbody">
                    {content.contactForm.serviceOptions[1]}
                  </option>
                  <option value="others">
                    {content.contactForm.serviceOptions[2]}
                  </option>
                </select>
              </div>
              <div className={fieldStyle}>
                <label htmlFor="message" className="block text-gray-900 mb-2">
                  {content.contactForm.message}
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
                  placeholder={content.contactForm.messagePlaceholder}
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gray-900 text-white rounded-xl hover:bg-accent-mauve transition-colors duration-300 "
              >
                {content.contactForm.submitButton}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
