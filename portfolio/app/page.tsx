import Nav from "@/app/components/layout/Nav";
import Hero from "@/app/components/sections/Hero";
import Metrics from "@/app/components/sections/Metrics";
import Work from "@/app/components/sections/Work";
import About from "@/app/components/sections/About";
import Skills from "@/app/components/sections/Skills";
import Contact from "@/app/components/sections/Contact";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Metrics />
      <Work />
      <About />
      <Skills />
      <Contact />
    </main>
  );
}
