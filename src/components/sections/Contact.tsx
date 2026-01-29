export function Contact() {
  const divStyle: string =
    "w-12 h-12 rounded-full bg-[#F5F1ED] flex items-center justify-center flex-shrink-0 ";

  const listStyle: string = "flex gap-4 items-start ";
  const inputsStyle: string = "w-full border  rounded-lg px-3 py-2";
  const fieldStyle: string = "space-y-1";

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="max-w-6xl mx-auto px-4 py-16 sm:py-20"
    >
      <div className="grid gap-10 lg:grid-cols-2 items-start">
        {/* Left column */}
        <div>
          <p>GET IN TOUCH</p>

          <h2 id="contact-title" className="text-2xl">
            Ready to Start Your Journey?
          </h2>

          <p>
            Book your first session today and experience the difference
            personalized wellness can make. We&apos;re here to support you every
            step of the way.
          </p>

          <ul className="mt-4 space-y-4">
            <li className={listStyle}>
              <div className={divStyle}>logo</div>
              <div>
                <h3>Location</h3>
                <p>Blagoevgrad, Bulgaria</p>
              </div>
            </li>

            <li className={listStyle}>
              <div className={divStyle}>logo</div>
              <div>
                <h3>Hours</h3>
                <p>Mon–Fri: 08:00–20:00</p>
                <p>Sat–Sun: 09:00–18:00</p>
              </div>
            </li>

            <li className={listStyle}>
              <div className={divStyle}>logo</div>
              <div>
                <h3>Phone</h3>
                <p>+359 XXX XXX XXX</p>
              </div>
            </li>

            <li className={listStyle}>
              <div className={divStyle}>logo</div>
              <div>
                <h3>Email</h3>
                <p>info@xbodyeuphoria.com</p>
              </div>
            </li>

            <li className={listStyle}>
              <div className={divStyle}>logo</div>
              <div>
                <h3>Follow Us</h3>
                <p>@xbodyeuphoria</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="rounded-2xl border bg-white p-6 sm:p-8 shadow-sm space-y-4">
          <h3 className="text-3xl">Have a question or want to get started?</h3>
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              console.log("Request Sent");
            }}
          >
            <div className={fieldStyle}>
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                placeholder="Your Name"
                id="name"
                name="name"
                className={inputsStyle}
                required
              />
            </div>
            <div className={fieldStyle}>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                placeholder="your@email.com"
                id="email"
                name="email"
                className={inputsStyle}
                required
              />
            </div>
            <div className={fieldStyle}>
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                placeholder="+359 XXX XXX XXX"
                id="phone"
                name="phone"
                className={inputsStyle}
              />
            </div>
            <div className={fieldStyle}>
              <label htmlFor="service">Service Interest</label>
              <select
                name="service"
                id="service"
                className={inputsStyle}
                defaultValue="pilates"
              >
                <option value="pilates">Pilates Reformer</option>
                <option value="xbody">XBODY EMS</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div className={fieldStyle}>
              <label htmlFor="message">Message (Optional)</label>
              <textarea
                name="message"
                id="message"
                className={inputsStyle}
                rows={4}
                placeholder="Tell us about your goals... "
              />
            </div>
            <button
              type="submit"
              className={`${inputsStyle} bg-black text-white text-lg`}
            >
              Sent Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
