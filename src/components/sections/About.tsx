export function About() {
  return (
    <section id="about" aria-labelledby="about-title">
      <div className=" px-4 py-16 sm:py-20 grid gap-10 md:grid-cols-2 items-center mx-auto max-w-6xl ">
        <div className="md:order-2">
          <p>About Us</p>
          <h2 id="about-title">Your Personal Wellness Journey Starts Here</h2>
          <p>
            At XBODY Euphoria & Pilates Reformer Studio, we believe in a
            personalized approach to fitness and wellness. Located in the heart
            of Blagoevgrad, our boutique studio offers a calm, supportive
            environment where you can focus on your health goals. Our certified
            trainers combine cutting-edge technology with time-tested methods to
            deliver results that transform not just your body, but your entire
            well-being.
          </p>
        </div>
        <div className="aspect-[4/3] rounded-2xl border bg-neutral-100 overflow-hidden ring-1 ring-black/5 md:order-1"></div>
      </div>
    </section>
  );
}
