import Nav from "@/app/components/layout/Nav";
import Hero from "@/app/components/sections/Hero";
import Metrics from "@/app/components/sections/Metrics";
import Work from "@/app/components/sections/Work";
import About from "@/app/components/sections/About";
import Skills from "@/app/components/sections/Skills";
import Contact from "@/app/components/sections/Contact";
import Marquee from "@/app/components/ui/Marquee";
import FAQ from "./components/sections/FAQ";
import Projects from "./components/sections/Projects";

const marqueeItems = [
  "Full-Stack Engineer", "React Developer", "Next.js", "TypeScript",
  "UI/UX Minded", "API Integration", "Component Architecture",
  "Accessible Interfaces", "Production Ready", "Remote Available",
];


export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Marquee items={marqueeItems} />
      <Metrics />
      <Work />
      <Projects />
      <About />
      <Skills />
      <FAQ />
      <Contact />
    </main>
  );
}
