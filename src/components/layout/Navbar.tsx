"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div
            className={`relative overflow-hidden rounded-2xl border transition-all duration-300 ${
              isScrolled
                ? "border-white/12 bg-[#07101d]/85 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-2xl"
                : "border-white/10 bg-white/[0.05] backdrop-blur-xl"
            }`}
          >
            {/* premium glow layers */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-y-0 right-0 w-[35%] bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_55%)]" />
              <div className="absolute inset-y-0 left-0 w-[28%] bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.08),transparent_55%)]" />
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>

            <div className="relative flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
              {/* Logo */}
              <Link
                href="/"
                className="relative z-10 flex items-center"
                onClick={() => setIsOpen(false)}
              >
                <Image
                  src="/logo/helpo-logo.png"
                  alt="HELPO Logo"
                  width={140}
                  height={45}
                  priority
                  className="h-auto w-32 object-contain sm:w-36 md:w-40"
                />
              </Link>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-2 py-2">
                {navLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="group relative rounded-full px-4 py-2.5 text-sm font-medium text-slate-300 transition-all duration-300 hover:text-white"
                  >
                    <span className="relative z-10">{item.label}</span>

                    <span className="absolute inset-0 rounded-full bg-white/0 transition-all duration-300 group-hover:bg-white/[0.06]" />
                  </Link>
                ))}
              </div>

              {/* Desktop CTA */}
              <div className="hidden md:block">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl border border-blue-500/30 bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]"
                >
                  Start Project
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>

              {/* Mobile Toggle */}
              <button
                aria-label={isOpen ? "Close menu" : "Open menu"}
                className="md:hidden relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-white transition-all duration-300 hover:bg-white/[0.1]"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ${
              isOpen
                ? "pointer-events-auto mt-3 max-h-[700px] opacity-100"
                : "pointer-events-none max-h-0 opacity-0"
            }`}
          >
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#07101d]/92 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.32)] backdrop-blur-2xl">
              {/* glow */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_38%)]" />

              <div className="relative z-10 flex flex-col">
                <div className="space-y-2">
                  {navLinks.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center justify-between rounded-2xl border border-transparent bg-white/[0.03] px-4 py-3.5 text-sm font-medium text-slate-200 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.06] hover:text-white"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="h-4 w-4 text-slate-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-400" />
                    </Link>
                  ))}
                </div>

                {/* Mobile CTA */}
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]"
                >
                  Start Project
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                {/* mini trust line */}
                <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-center text-xs leading-6 text-slate-400">
                  Premium websites • Web apps • Ecommerce • ERP • CRM
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* optional spacer if navbar overlaps hero too much */}
      {/* <div className="h-24 sm:h-28" /> */}
    </>
  );
}