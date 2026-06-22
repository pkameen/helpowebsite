import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  "Website Development",
  "Web Applications",
  "Ecommerce Solutions",
  "ERP Systems",
  "CRM Systems",
];

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10">
      {/* subtle top glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="container-custom py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.9fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/logo/helpo-logo.png"
                alt="HELPO Logo"
                width={150}
                height={44}
                className="h-10 w-auto object-contain md:h-11"
              />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              HELPO builds premium websites, web applications, ecommerce
              platforms, ERP systems and CRM solutions for modern businesses
              that want a strong digital presence and better operational
              systems.
            </p>

            <div className="mt-6 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
              Premium Web & Software Solutions
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/90">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors duration-300 hover:text-white"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="h-4 w-4 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/90">
              Services
            </h3>

            <ul className="mt-5 space-y-3">
              {serviceLinks.map((service) => (
                <li
                  key={service}
                  className="text-sm leading-6 text-slate-400 transition-colors duration-300 hover:text-white"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/90">
              Contact
            </h3>

            <div className="mt-5 space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-blue-400" />
                <a
                  href="mailto:helposoftwars@gmail.com"
                  className="text-sm leading-6 text-slate-400 transition-colors duration-300 hover:text-white"
                >
                  helposoftwars@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-blue-400" />
                <a
                  href="https://wa.me/918592824137"
                  target="_blank"
                  className="text-sm leading-6 text-slate-400 transition-colors duration-300 hover:text-white"
                >
                  WhatsApp / Business Contact
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-blue-400" />
                <p className="text-sm leading-6 text-slate-400">
                  Malappuram, Kerala, India
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]"
            >
              Start a Project
            </a>
          </div>
        </div>

        {/* bottom strip */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-3 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} HELPO. All rights reserved.</p>
            <p>
              Crafted for premium websites, web apps, ecommerce and business
              systems.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}