import ServicesHero from "../../components/sections/services/ServicesHero";
import ServicesGrid from "../../components/sections/services/ServicesGrid";
import ServiceFeatures from "../../components/sections/services/ServiceFeatures";
import ServiceProcess from "../../components/sections/services/ServiceProcess";
import ServicesCTA from "../../components/sections/services/ServicesCTA";
import ServicesTrust from "../../components/sections/services/ServicesTrust";
import ServicesFAQ from "../../components/sections/services/ServicesFAQ";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore HELPO services including business websites, ecommerce websites, web applications and custom business systems.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">
      <ServicesHero />
      <ServicesGrid />
      <ServiceFeatures />
      <ServiceProcess />
      <ServicesTrust /> 
      <ServicesFAQ /> 
      <ServicesCTA /> 
    </main>
  );
}