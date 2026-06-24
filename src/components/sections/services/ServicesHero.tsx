"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Globe,
  Layers3,
  ShoppingBag,
  Briefcase,
} from "lucide-react";

const serviceTags = [
  {
    label: "Websites",
    icon: Globe,
  },
  {
    label: "Web Apps",
    icon: Layers3,
  },
  {
    label: "Ecommerce",
    icon: ShoppingBag,
  },
  {
    label: "ERP / CRM",
    icon: Briefcase,
  },
];

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-20 sm:pt-10 sm:pb-24 md:pt-14 md:pb-28">
      {/* background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-16 h-[280px] w-[280px] rounded-full bg-blue-500/10 blur-[110px] sm:h-[320px] sm:w-[320px]" />
        <div className="absolute right-[-8%] top-10 h-[340px] w-[340px] rounded-full bg-cyan-400/10 blur-[120px] sm:h-[420px] sm:w-[420px]" />
        <div className="absolute bottom-[-120px] left-1/2 h-[220px] w-[80%] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px] sm:h-[260px] sm:w-[70%]" />
      </div>

      <div className="container-custom relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:gap-14 xl:grid-cols-[1.02fr_0.98fr]">
          {/* LEFT CONTENT */}
          <div className="relative z-10 pt-16 text-center sm:pt-20 lg:pt-20 lg:text-left">
            {/* badge */}
            <div className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-[11px] text-blue-200 shadow-[0_0_30px_rgba(37,99,235,0.12)] backdrop-blur sm:px-5 sm:text-sm">
              <Sparkles className="h-4 w-4" />
              <span>Premium Web & Software Solutions for Modern Businesses</span>
            </div>

            {/* heading */}
            <h1 className="mx-auto mt-6 max-w-[13ch] text-3xl font-semibold leading-[1.05] tracking-tight text-white sm:mt-7 sm:text-4xl md:text-5xl lg:mx-0 lg:max-w-[12ch] xl:text-7xl">
              Premium Services Built for Growth
            </h1>

            {/* description */}
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:mt-6 sm:text-base sm:leading-8 md:text-lg md:leading-9 lg:mx-0">
              HELPO delivers premium websites, web applications, ecommerce
              platforms, ERP systems and CRM solutions designed to improve brand
              presence, simplify operations and support long-term business
              growth.
            </p>

            {/* buttons */}
            <div className="mt-8 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#2563ff] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_20px_60px_rgba(37,99,235,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1d4ed8] sm:w-auto sm:px-7 sm:py-4 sm:text-base"
              >
                Start Your Project
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex w-full items-center justify-center rounded-2xl border border-white/12 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white/90 backdrop-blur transition-all duration-300 hover:border-white/20 hover:bg-white/10 sm:w-auto sm:px-7 sm:py-4 sm:text-base"
              >
                View Portfolio
              </Link>
            </div>

            {/* service tags */}
            <div className="mt-10 sm:mt-12">
              <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400 sm:text-sm sm:tracking-[0.35em]">
                Solutions We Build
              </p>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                {serviceTags.map((tag) => {
                  const Icon = tag.icon;

                  return (
                    <div
                      key={tag.label}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs text-slate-200 backdrop-blur transition-all duration-300 hover:border-blue-500/25 hover:bg-blue-500/10 sm:px-4 sm:py-3 sm:text-sm"
                    >
                      <Icon className="h-4 w-4 text-blue-300" />
                      {tag.label}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative mx-auto w-full max-w-[760px]">
            {/* glow layers */}
            <div className="absolute inset-0 rounded-[3rem] bg-blue-500/10 blur-3xl" />
            <div className="absolute -bottom-12 left-1/2 h-40 w-[82%] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[100px] sm:h-44" />
            <div className="absolute right-8 top-10 h-24 w-24 rounded-full bg-cyan-400/10 blur-[80px] sm:h-32 sm:w-32 sm:blur-[90px]" />

            <div className="relative">
              {/* showcase frame */}
              <div className="relative rounded-[2rem] border border-white/10 bg-[#07101d]/65 p-3 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur sm:rounded-[2.4rem] sm:p-4 lg:rounded-[2.8rem] lg:p-5">
                {/* outer premium frame */}
                <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#050b16]/90 p-3 sm:rounded-[2rem] sm:p-4 lg:rounded-[2.3rem]">
                  {/* Desktop floating top label */}
                  <div className="absolute left-1/2 -top-7 z-20 hidden -translate-x-1/2 items-center gap-3 rounded-full border border-white/10 bg-[#07101d]/85 px-5 py-2 text-sm text-slate-200 backdrop-blur xl:flex">
                    <span className="h-2 w-2 rounded-full bg-blue-400" />
                    Premium Service Showcase
                  </div>

                  {/* Mobile / tablet top label */}
                  <div className="mb-4 flex items-center justify-center xl:hidden">
                    <div className="flex items-center gap-3 rounded-full border border-white/10 bg-[#07101d]/85 px-4 py-2 text-[11px] text-slate-200 backdrop-blur sm:text-sm">
                      <span className="h-2 w-2 rounded-full bg-blue-400" />
                      Premium Service Showcase
                    </div>
                  </div>

                  {/* image block */}
                  <div className="relative overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#08101d] sm:rounded-[1.7rem]">
                    <Image
                      src="/images/services/services-hero-showcase.png"
                      alt="HELPO Services Showcase"
                      width={1400}
                      height={1000}
                      className="h-auto w-full object-cover"
                      priority
                    />

                    {/* subtle gradient overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020617]/45 via-transparent to-transparent" />
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.12),transparent_32%)]" />
                  </div>
                </div>

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
                <div className="absolute -right-10 top-1/2 z-30 hidden -translate-y-1/2 rounded-[1.75rem] border border-white/10 bg-[#07101d]/88 px-5 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur xl:block">
                  <p className="text-3xl font-semibold text-white">20+</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.32em] text-slate-300">
                    Happy <br /> Clients
                  </p>
                </div>

                {/* floating feature - bottom left */}
                <div className="absolute -bottom-40 left-5 z-30 hidden max-w-[260px] rounded-[1.75rem] border border-white/10 bg-[#07101d]/90 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur xl:block">
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
                <div className="absolute -bottom-40 right-5 z-30 hidden max-w-[260px] rounded-[1.75rem] border border-white/10 bg-[#07101d]/90 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur xl:block">
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
              </div>

              {/* =========================
                  Mobile / tablet cards
                  image container-ന്റെ പുറത്തായി
              ========================= */}
              <div className="mt-4 space-y-3 xl:hidden">
                {/* stats row */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-[1.2rem] border border-white/10 bg-[#07101d]/88 px-4 py-4 text-center shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur sm:rounded-[1.3rem]">
                    <p className="text-2xl font-semibold text-white">50+</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-slate-300 sm:text-[11px]">
                      Projects Delivered
                    </p>
                  </div>

                  <div className="rounded-[1.2rem] border border-white/10 bg-[#07101d]/88 px-4 py-4 text-center shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur sm:rounded-[1.3rem]">
                    <p className="text-2xl font-semibold text-white">20+</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-slate-300 sm:text-[11px]">
                      Happy Clients
                    </p>
                  </div>
                </div>

                {/* feature cards */}
                <div className="rounded-[1.35rem] border border-white/10 bg-[#07101d]/90 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur sm:rounded-[1.45rem] sm:p-5">
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

                <div className="rounded-[1.35rem] border border-white/10 bg-[#07101d]/90 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur sm:rounded-[1.45rem] sm:p-5">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
                    <Briefcase className="h-5 w-5" />
                  </div>
                  <h4 className="text-lg font-semibold text-white">
                    Business Systems
                  </h4>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    ERP, CRM and custom workflow systems built to simplify
                    operations and support long-term business growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* RIGHT VISUAL END */}
        </div>
      </div>
    </section>
  );
}