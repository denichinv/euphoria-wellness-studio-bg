import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";
import { About } from "./components/sections/About";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
    </>
  );
}
