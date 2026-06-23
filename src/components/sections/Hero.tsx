"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles,Briefcase, Globe, ShoppingBag, Building2, Layers3 } from "lucide-react";

const serviceChips = [
  { label: "Websites", icon: Globe },
  { label: "Web Apps", icon: Layers3 },
  { label: "Ecommerce", icon: ShoppingBag },
  { label: "ERP / CRM", icon: Building2 },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-28 md:pt-28 md:pb-36">
      {/* background glow layers */}
      <div className="pointer-events-none absolute inset-0"> 
        <div className="absolute left-[-10%] top-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-[-8%] top-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid items-center gap-14 xl:grid-cols-[1fr_1.08fr]">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="max-w-2xl"
          >
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300 shadow-[0_0_30px_rgba(59,130,246,0.12)]">
              <Sparkles className="h-4 w-4" />
              Premium Web & Software Solutions for Modern Businesses
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl xl:text-6xl">
              Build a Premium Digital Presence with{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                HELPO
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              We design and build premium websites, web applications, ecommerce
              platforms, ERP systems and CRM solutions crafted to elevate your
              brand, improve operations and help your business grow with a
              modern digital experience.
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,0.35)]"
              >
                Start Your Project
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="#portfolio"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/10"
              >
                View Portfolio
              </a>
            </div>

            {/* Trust line */}
            <div className="mt-10">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                Solutions We Build
              </p>

              <div className="flex flex-wrap gap-3">
                {serviceChips.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/10"
                    >
                      <Icon className="h-4 w-4 text-blue-400" />
                      {item.label}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: "easeOut", delay: 0.08 }}
            className="relative mx-auto w-full max-w-[760px]"
          >
            {/* ambient glow */}
            <div className="absolute inset-0 rounded-[42px] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.20),transparent_68%)] blur-3xl" />

            <div className="relative flex min-h-[620px] items-center justify-center">
              {/* soft floor glow */}
              <div className="absolute bottom-4 left-1/2 h-[160px] w-[78%] -translate-x-1/2 rounded-full bg-blue-600/18 blur-3xl" />

              {/* MAIN SHOWCASE FRAME */}
              <div className="relative z-20 w-full max-w-[650px]">
                {/* outer glow frame */}
                <div className="absolute inset-0 rounded-[36px] bg-blue-500/10 blur-2xl" />
                
                {/* top label bar */}
                {/* Desktop floating top label */}
                <div className="absolute left-1/2 -top-8 z-20 hidden -translate-x-1/2 items-center gap-3 rounded-full border border-white/10 bg-[#07101d]/85 px-5 py-2 text-sm text-slate-200 backdrop-blur xl:flex">
                  <span className="h-2 w-2 rounded-full bg-blue-400" />
                  Premium Service Showcase
                </div>
                {/* Mobile / tablet top label */}
                <div className="mb-4 flex items-center justify-center xl:hidden">
                  <div className="flex items-center gap-3 rounded-full border border-white/10 bg-[#07101d]/85 px-4 py-2 text-xs text-slate-200 backdrop-blur sm:text-sm">
                    <span className="h-2 w-2 rounded-full bg-blue-400" />
                    Premium Service Showcase
                  </div>
                </div>

                {/* image frame */}
                
                <Image
                  src="/images/hero/hero-dashboard.jpg"
                  alt="HELPO premium digital solutions dashboard"
                  width={1600}
                  height={1100}
                  priority
                  className="h-auto w-full object-cover"
                />

                {/* LEFT STAT */}
                {/* =========================
                  Desktop floating cards
                ========================= */}

                {/* floating stat - top left */}
                <div className="absolute -left-6 top-16 z-30 hidden rounded-[1.75rem] border border-white/10 bg-[#07101d]/88 px-5 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur xl:block">
                  <p className="text-3xl font-semibold text-white">50+</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.32em] text-slate-300">
                    Projects <br /> Delivered
                  </p>
                </div>

                {/* floating stat - right */}
                <div className="absolute -right-15 top-1/2 z-30 hidden -translate-y-1/2 rounded-[1.75rem] border border-white/10 bg-[#07101d]/88 px-5 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur xl:block">
                  <p className="text-3xl font-semibold text-white">20+</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.32em] text-slate-300">
                    Happy <br /> Clients
                  </p>
                </div>

                {/* floating feature - bottom left */}
                <div className="absolute -bottom-45 left-5 z-30 hidden max-w-[260px] rounded-[1.75rem] border border-white/10 bg-[#07101d]/90 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur xl:block">
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <h4 className="text-xl font-semibold text-white">
                    Conversion Focused
                  </h4>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Modern UI, premium presentation and strong user experience
                    crafted to attract and convert clients.
                  </p>
                </div>

                {/* floating feature - bottom right */}
                <div className="absolute -bottom-45 right-5 z-30 hidden max-w-[290px] rounded-[1.75rem] border border-white/10 bg-[#07101d]/90 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur xl:block">
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <h4 className="text-xl font-semibold text-white">
                    Business Systems
                  </h4>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    ERP, CRM and custom workflow systems built to simplify
                    operations and support long-term business growth.
                  </p>
                </div>

                {/* =========================
                  Mobile / tablet cards
                  image container-ന്റെ പുറത്തായി ഇടുക
                ========================= */}
                <div className="mt-4 space-y-3 xl:hidden">
                  {/* stats row */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-[1.25rem] border border-white/10 bg-[#07101d]/88 px-4 py-4 text-center shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur">
                      <p className="text-2xl font-semibold text-white">50+</p>
                      <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-slate-300">
                        Projects Delivered
                      </p>
                    </div>

                    <div className="rounded-[1.25rem] border border-white/10 bg-[#07101d]/88 px-4 py-4 text-center shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur">
                      <p className="text-2xl font-semibold text-white">20+</p>
                      <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-slate-300">
                        Happy Clients
                      </p>
                    </div>
                  </div>

                  {/* feature cards */}
                  <div className="rounded-[1.4rem] border border-white/10 bg-[#07101d]/90 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <h4 className="text-lg font-semibold text-white">
                      Conversion Focused
                    </h4>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      Modern UI, premium presentation and strong user experience crafted
                      to attract and convert clients.
                    </p>
                  </div>

                  <div className="rounded-[1.4rem] border border-white/10 bg-[#07101d]/90 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <h4 className="text-lg font-semibold text-white">
                      Business Systems
                    </h4>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      ERP, CRM and custom workflow systems built to simplify operations
                      and support long-term business growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}