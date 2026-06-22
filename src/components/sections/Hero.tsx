"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Globe, ShoppingBag, Building2, Layers3 } from "lucide-react";

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
                <div className="absolute -left-15 top-15 z-30 hidden rounded-[20px] border border-white/10 bg-[#081120]/90 px-5 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl xl:block">
                  <p className="text-3xl font-bold leading-none text-white">50+</p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.28em] text-slate-400">
                    Projects <br /> Delivered
                  </p>
                </div>

                {/* RIGHT STAT */}
                <div className="absolute -right-15 top-[48%] z-30 hidden -translate-y-1/2 rounded-[20px] border border-white/10 bg-[#081120]/90 px-5 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl xl:block">
                  <p className="text-3xl font-bold leading-none text-white">20+</p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.28em] text-slate-400">
                    Happy <br /> Clients
                  </p>
                </div>

                {/* BOTTOM FEATURE STRIP */}
                <div className="absolute -bottom-35 left-1/2 z-30 hidden w-[90%] -translate-x-1/2 grid-cols-2 gap-4 lg:grid">
                  <div className="rounded-[22px] border border-white/10 bg-[#081120]/86 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.42)] backdrop-blur-xl">
                    <p className="text-[10px] uppercase tracking-[0.32em] text-slate-400">
                      Conversion Focused
                    </p>
                    <p className="mt-2 text-base font-semibold text-white">
                      Modern UI & Premium Presentation
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Clean interfaces crafted to convert visitors into clients.
                    </p>
                  </div>

                  <div className="rounded-[22px] border border-white/10 bg-[#081120]/86 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.42)] backdrop-blur-xl">
                    <p className="text-[10px] uppercase tracking-[0.32em] text-slate-400">
                      Business Systems
                    </p>
                    <p className="mt-2 text-base font-semibold text-white">
                      ERP, CRM & Workflow Tools
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Powerful systems that simplify operations and improve management.
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