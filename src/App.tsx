import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { FeaturedRetreats } from "./components/FeaturedRetreats";
import { Storytelling } from "./components/Storytelling";
import { Experiences } from "./components/Experiences";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedRetreats />
      <Storytelling />
      <Experiences />
      <Contact />
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
}