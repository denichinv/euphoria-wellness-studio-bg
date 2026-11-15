import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";
import { About } from "./components/sections/About";
import { Gallery } from "./components/sections/Gallery";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/layout/Footer";
import { useState } from "react";
import type { FormService } from "./data/services";

export default function App() {
  const [selectedService, setSelectedService] = useState<FormService>("");
  return (
    <>
      <main>
        <Hero />
        <Services onSelectService={setSelectedService} />
        <About />
        <Gallery />
        <Contact
          selectedService={selectedService}
          onServiceChange={setSelectedService}
        />
      </main>
      <Footer />
    </>
  );
}
