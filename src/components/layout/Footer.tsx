import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
 ChevronRight,
} from "lucide-react";

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
    <footer className="relative mt-24 overflow-hidden border-t border-white/10 bg-[#030712]">
      {/* premium background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-8%] top-[-80px] h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-[-10%] bottom-[-120px] h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
      </div>

      <div className="container-custom relative z-10 py-14 sm:py-16 lg:py-20">
        {/* Top main footer */}
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.8fr_0.95fr_1fr] xl:gap-14">
          {/* =======================
              BRAND COLUMN
          ======================= */}
          <div>
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/logo/helpo-logo.png"
                alt="HELPO Logo"
                width={170}
                height={48}
                className="h-10 w-auto object-contain md:h-11"
              />
            </Link>

            <div className="mt-6 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 shadow-[0_0_30px_rgba(59,130,246,0.10)]">
              Premium Web & Software Solutions
            </div>

            <p className="mt-6 max-w-md text-sm leading-7 text-slate-400 md:text-[15px]">
              HELPO builds premium websites, web applications, ecommerce
              platforms, ERP systems and business software with a modern,
              polished and performance-focused approach for growing brands.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              {["Websites", "Web Apps", "Ecommerce", "ERP", "CRM"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-medium text-slate-300 backdrop-blur-sm"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          {/* =======================
              QUICK LINKS
          ======================= */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/90">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-3.5">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors duration-300 hover:text-white"
                  >
                    <ChevronRight className="h-4 w-4 text-blue-400/80 transition-transform duration-300 group-hover:translate-x-0.5" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* =======================
              SERVICES
          ======================= */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/90">
              Services
            </h3>

            <ul className="mt-6 space-y-3.5">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <span className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors duration-300 hover:text-white">
                    <ChevronRight className="h-4 w-4 text-blue-400/80 transition-transform duration-300 group-hover:translate-x-0.5" />
                    <span>{service}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* =======================
              CONTACT
          ======================= */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white/90">
              Contact
            </h3>

            <div className="mt-6 space-y-4">
              {/* Email */}
              <a
                href="mailto:helposoftwares@gmail.com"
                className="group flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/30 hover:bg-white/[0.06]"
              >
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.12)]">
                  <Mail className="h-4 w-4" />
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-medium text-white">Email</p>
                  <p className="mt-1 break-all text-sm leading-6 text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
                    helposoftwars@gmail.com
                  </p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/918592824137"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/30 hover:bg-white/[0.06]"
              >
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.12)]">
                  <Phone className="h-4 w-4" />
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-medium text-white">WhatsApp</p>
                  <p className="mt-1 text-sm leading-6 text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
                    Business Contact
                  </p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm">
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.12)]">
                  <MapPin className="h-4 w-4" />
                </div>

                <div className="min-w-0">
                  <p className="text-sm font-medium text-white">Location</p>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    Malappuram, Kerala, India
                  </p>
                </div>
              </div>
            </div>

            {/* CTA button */}
            <a
              href="#contact"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]"
            >
              Start a Project
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* =======================
            BOTTOM STRIP
        ======================= */}
        <div className="mt-12 border-t border-white/10 pt-6 sm:mt-14">
          <div className="flex flex-col gap-3 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} HELPO. All rights reserved.</p>

            <p className="max-w-xl text-left md:text-right">
              Crafted for premium websites, web apps, ecommerce platforms and
              business systems with a modern digital-first approach.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}