import ProcessHero from "../../components/sections/process/ProcessHero";
import ProcessTimeline from "../../components/sections/process/ProcessTimeline";
import ProcessWhyItWorks from "../../components/sections/process/ProcessWhyItWorks";
import ProcessExperience from "../../components/sections/process/ProcessExperience";
import ProcessAfterLaunch from "../../components/sections/process/ProcessAfterLaunch";
import ProcessFAQ from "../../components/sections/process/ProcessFAQ";
import ProcessCTA from "../../components/sections/process/ProcessCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Process",
  description:
    "Discover HELPO’s structured project process for building premium websites and web applications from strategy to launch.",
};

export default function ProcessPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">
      <ProcessHero />
      <ProcessTimeline />
      <ProcessWhyItWorks />
      <ProcessExperience />
      <ProcessAfterLaunch />
      <ProcessFAQ />
      <ProcessCTA />
    </main>
  );
}