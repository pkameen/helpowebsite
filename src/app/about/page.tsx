import AboutHero from "../../components/sections/about/AboutHero";
import MissionVision from "../../components/sections/about/MissionVision";
import FounderSection from "../../components/sections/about/FounderSection";
import WhyChooseUs from "../../components/sections/about/WhyChooseUs";
import CoreExpertise from "../../components/sections/about/CoreExpertise";
import AboutCTA from "../../components/sections/about/AboutCTA"; 
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about HELPO, our mission, vision and approach to building premium business websites and web applications.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">
      <AboutHero />
      <MissionVision />
      <FounderSection />
      <WhyChooseUs />
      <CoreExpertise />
      <AboutCTA />
    </main>
  );
}