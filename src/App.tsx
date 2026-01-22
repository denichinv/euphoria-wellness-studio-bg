import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/sections/Hero";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-semibold text-gray-900">
          Tailwind is working
        </h1>
      </div>
    </>
  );
}
