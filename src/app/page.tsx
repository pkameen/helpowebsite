import Hero from "../components/sections/Hero";
import Stats from "../components/sections/Stats";
import Services from "../components/sections/Services";
import Portfolio from "../components/sections/Portfolio";
import Process from "../components/sections/Process";
import Testimonials from "../components/sections/Testimonials";
import CTA from "../components/sections/CTA";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Stats />
        <Services />
        <Portfolio />
        <Process />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
    </>
  );
}