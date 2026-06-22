import ContactHero from "../../components/sections/contact/ContactHero";
import ContactInfo from "../../components/sections/contact/ContactInfo";
import ContactFormSection from "../../components/sections/contact/ContactFormSection";
import ContactWhyHelpo from "../../components/sections/contact/ContactWhyHelpo";
import ContactFAQ from "../../components/sections/contact/ContactFAQ";
import ContactWhatsApp from "../../components/sections/contact/ContactWhatsApp";
import ContactTrustStrip from "../../components/sections/contact/ContactTrustStrip";
import ContactCTA from "../../components/sections/contact/ContactCTA"; 
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact HELPO to discuss your website, ecommerce project or custom web application with a premium agency approach.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">
      <ContactHero />
      <ContactInfo />
      <ContactFormSection />
      <ContactWhyHelpo />
      <ContactFAQ />
      <ContactWhatsApp />
      <ContactTrustStrip />
      <ContactCTA />
    </main>
  );
}