"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Briefcase,
  Globe,
  ShoppingBag,
  Building2,
  Layers3,
  CheckCircle2,
} from "lucide-react";

const serviceChips = [
  { label: "Websites", icon: Globe },
  { label: "Web Apps", icon: Layers3 },
  { label: "Ecommerce", icon: ShoppingBag },
  { label: "ERP / CRM", icon: Building2 },
];

const metrics = [
  { value: "50+", label: "Projects Delivered" },
  { value: "20+", label: "Happy Clients" },
  { value: "4+", label: "Core Solutions" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 sm:pt-24 sm:pb-20 lg:pt-28 lg:pb-24">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-[-8%] top-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid items-center gap-12 xl:grid-cols-[1fr_1.08fr] xl:gap-14">
          {/* =========================
              LEFT CONTENT
          ========================= */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="mx-auto pt-10 flex max-w-2xl flex-col items-center text-center xl:mx-0 xl:items-start xl:text-left"
          >
            {/* Premium Badge */}
            <div className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-[11px] font-medium text-blue-300 shadow-[0_0_30px_rgba(59,130,246,0.12)] sm:px-4 sm:py-2 sm:text-sm">
              <Sparkles className="h-4 w-4" />
              Premium Web & Software Solutions for Modern Businesses
            </div>

            {/* Heading */}
            <h1 className="mt-5 max-w-4xl text-3xl font-bold leading-[1.08] tracking-tight text-white sm:mt-6 sm:text-4xl lg:text-5xl xl:text-6xl">
              Build a Premium Digital Presence with{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                HELPO
              </span>
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:mt-5 sm:text-base md:text-lg">
              We design and build premium websites, web applications,
              ecommerce platforms, ERP systems and CRM solutions crafted to
              elevate your brand, improve operations and help your business
              grow with a modern digital experience.
            </p>

            {/* CTA buttons */}
            <div className="mt-6 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row">
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
            <div className="mt-7 w-full sm:mt-9">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500 sm:text-xs sm:tracking-[0.25em] xl:text-left">
                Solutions We Build
              </p>

              <div className="flex flex-wrap justify-center gap-3 xl:justify-start">
                {serviceChips.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/10 sm:px-4 sm:text-sm"
                    >
                      <Icon className="h-4 w-4 text-blue-400" />
                      {item.label}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* =========================
              RIGHT VISUAL
          ========================= */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: "easeOut", delay: 0.08 }}
            className="relative mx-auto w-full max-w-[760px]"
          >
            {/* ambient glow */}
            <div className="absolute inset-0 rounded-[42px] bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.18),transparent_68%)] blur-3xl" />

            <div className="relative">
              {/* Desktop floating label */}
              <div className="absolute left-1/2 top-0 z-30 hidden -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-[#07101d]/85 px-5 py-2 text-sm text-slate-200 backdrop-blur xl:flex xl:items-center xl:gap-3">
                <span className="h-2 w-2 rounded-full bg-blue-400" />
                Premium Service Showcase
              </div>

              {/* MAIN PREMIUM VISUAL WRAP */}
              <div className="relative rounded-[30px] border border-white/10 bg-white/[0.045] p-3 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-4">
                {/* glass highlight */}
                <div className="pointer-events-none absolute inset-0 rounded-[30px] bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_22%,transparent_70%,rgba(59,130,246,0.06))]" />

                {/* main image */}
                <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-[#07101d]/70">
                  <Image
                    src="/images/hero/hero-dashboard.jpg"
                    alt="HELPO premium digital solutions dashboard"
                    width={1600}
                    height={1100}
                    priority
                    className="h-auto w-full object-cover"
                  />

                  {/* image overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(5,8,22,0.72),rgba(5,8,22,0.18),rgba(5,8,22,0.08))]" />

                  {/* floating mini card inside image - top left */}
                  <div className="absolute left-4 top-4 hidden rounded-2xl border border-white/10 bg-[#07101d]/85 px-4 py-3 shadow-[0_15px_40px_rgba(0,0,0,0.3)] backdrop-blur md:block">
                    <p className="text-xl font-semibold text-white">50+</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-slate-300">
                      Projects <br /> Delivered
                    </p>
                  </div>

                  {/* floating mini card inside image - top right */}
                  <div className="absolute right-5 top-4 hidden rounded-2xl border border-white/10 bg-[#07101d]/85 px-4 py-3 shadow-[0_15px_40px_rgba(0,0,0,0.3)] backdrop-blur md:block">
                    <p className="text-xl font-semibold text-white">20+</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.22em] text-slate-300">
                      Happy <br /> Clients
                    </p>
                  </div>

                </div>

                {/* bottom metrics strip */}
                <div className="relative z-10 mt-3 grid grid-cols-3 gap-3">
                  {metrics.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-[#07101d]/65 px-3 py-3 text-center backdrop-blur sm:px-4"
                    >
                      <p className="text-lg font-semibold text-white sm:text-xl">
                        {item.value}
                      </p>
                      <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-slate-400 sm:text-[11px]">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* =========================
                  MOBILE / TABLET EXTRA INFO
              ========================= */}
              <div className="mt-4 grid gap-3 xl:hidden">
                <div className="rounded-[1.35rem] border border-white/10 bg-[#07101d]/88 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">
                    Conversion Focused
                  </h4>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    Modern UI, premium presentation and strong user experience
                    crafted to attract and convert clients.
                  </p>
                </div>

                <div className="rounded-[1.35rem] border border-white/10 bg-[#07101d]/88 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">
                    Business Ready Solutions
                  </h4>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    Websites, web apps and business systems structured to
                    support branding, workflow and long-term growth.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}