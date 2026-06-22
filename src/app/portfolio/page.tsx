import PortfolioHero from "../../components/sections/portfolio/PortfolioHero";
import PortfolioGallery from "../../components/sections/portfolio/PortfolioGallery";
import FeaturedCaseStudy from "../../components/sections/portfolio/FeaturedCaseStudy";
import PortfolioShowcaseAlt from "../../components/sections/portfolio/PortfolioShowcaseAlt";
import PortfolioImpact from "../../components/sections/portfolio/PortfolioImpact";
import PortfolioTrustStrip from "../../components/sections/portfolio/PortfolioTrustStrip";
import PortfolioCTA from "../../components/sections/portfolio/PortfolioCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "View HELPO portfolio projects including premium websites, ecommerce builds, web applications and business-focused digital solutions.",
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">
      <PortfolioHero />
      <PortfolioGallery />
      <FeaturedCaseStudy />
      <PortfolioShowcaseAlt />
      <PortfolioImpact />
      <PortfolioTrustStrip /> 
      <PortfolioCTA />
    </main>
  );
}