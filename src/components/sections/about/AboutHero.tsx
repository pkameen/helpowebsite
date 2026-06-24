"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  BadgeCheck,
  Layers3,
  ShieldCheck,
  MoveRight,
} from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-36 md:pb-28 xl:pt-40">
      {/* background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        {/* top glows */}
        <div className="absolute left-[6%] top-20 h-80 w-80 rounded-full bg-blue-500/18 blur-[140px]" />
        <div className="absolute right-[6%] top-14 h-[24rem] w-[24rem] rounded-full bg-cyan-400/10 blur-[150px]" />
        <div className="absolute bottom-[-5rem] left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />

        {/* subtle radial haze */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_34%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_28%,transparent_70%,rgba(255,255,255,0.015))]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 xl:grid-cols-[1.02fr_0.98fr] xl:gap-16">
          {/* LEFT CONTENT */}
          <div className="relative">
            {/* small label */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200 shadow-[0_0_30px_rgba(37,99,235,0.12)] backdrop-blur">
              <Sparkles className="h-4 w-4" />
              About HELPO — Premium Web & Software Agency
            </div>

            {/* heading */}
            <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-white md:text-6xl xl:text-[5.2rem]">
              We Build Modern
              <span className="block">Websites & Softwares</span>
              <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-600 bg-clip-text text-transparent">
                For Growing Businesses
              </span>
            </h1>

            {/* paragraph */}
            <p className="mt-7 max-w-2xl text-lg leading-9 text-slate-300 md:text-[1.15rem]">
              HELPO is a premium web and software agency focused on building
              modern websites, ecommerce platforms, ERP systems, CRM solutions
              and custom digital products that help businesses scale with better
              design, stronger workflows and reliable technology.
            </p>

            {/* trust strip */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Premium Agency Standard",
                "Business-Focused Systems",
                "Design + Workflow + Reliability",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200 backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#2563ff] px-7 py-4 text-base font-semibold text-white shadow-[0_20px_60px_rgba(37,99,235,0.35)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#1d4ed8]"
              >
                Start Your Project
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>

              <Link
                href="/portfolio"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl border border-white/12 bg-white/[0.04] px-7 py-4 text-base font-semibold text-white/90 backdrop-blur transition duration-300 hover:border-white/20 hover:bg-white/[0.07]"
              >
                View Our Work
                <MoveRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>

          </div>

          {/* RIGHT VISUAL SIDE */}
          <div className="relative">
            <div className="relative mx-auto max-w-[650px]">
              {/* luxury frame */}
              <div className="absolute -inset-3 rounded-[2.7rem] bg-gradient-to-br from-white/[0.10] via-white/[0.02] to-transparent opacity-60 blur-2xl" />

              <div className="relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-[#07101d]/85 shadow-[0_35px_120px_rgba(0,0,0,0.45)] backdrop-blur">
                {/* top bar */}
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-6">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                  </div>

                  <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-slate-400">
                    HELPO Showcase
                  </div>
                </div>

                {/* image area */}
                <div className="relative">
                  <div className="absolute inset-0 z-10 bg-[linear-gradient(to_top,rgba(2,6,23,0.55),transparent_28%,transparent_70%,rgba(255,255,255,0.02))]" />
                  <Image
                    src="/images/hero/hero-dashboard.jpg"
                    alt="HELPO agency showcase"
                    width={1200}
                    height={900}
                    className="h-auto w-full object-cover"
                    priority
                  />
                </div>

                {/* bottom info strip */}
                <div className="grid gap-4 border-t border-white/10 bg-[#07101d]/90 px-5 py-5 sm:grid-cols-3 sm:px-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                      Focus
                    </p>
                    <p className="mt-2 text-sm font-medium text-white">
                      Premium Websites & Software Systems
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                      Strength
                    </p>
                    <p className="mt-2 text-sm font-medium text-white">
                      Design + Workflow + Business Thinking
                    </p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-500">
                      Positioning
                    </p>
                    <p className="mt-2 text-sm font-medium text-white">
                      Modern Digital Growth Partner
                    </p>
                  </div>
                </div>
              </div>

              {/* premium feature cards */}
              <div className="mt-12 grid gap-4 md:grid-cols-3">
                <div className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-blue-400/25 hover:bg-white/[0.05]">
                  <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                    <div className="absolute -left-10 top-0 h-28 w-28 rounded-full bg-blue-500/12 blur-[70px]" />
                  </div>

                  <div className="relative z-10">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
                      <BadgeCheck className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      Premium Quality
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-400">
                      Clean design, polished interfaces and strong user experience.
                    </p>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-blue-400/25 hover:bg-white/[0.05]">
                  <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                    <div className="absolute -left-10 top-0 h-28 w-28 rounded-full bg-blue-500/12 blur-[70px]" />
                  </div>

                  <div className="relative z-10">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
                      <Layers3 className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      Business Systems
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-400">
                      Websites, ERP, CRM, ecommerce and custom internal platforms.
                    </p>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-blue-400/25 hover:bg-white/[0.05]">
                  <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                    <div className="absolute -left-10 top-0 h-28 w-28 rounded-full bg-blue-500/12 blur-[70px]" />
                  </div>

                  <div className="relative z-10">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">
                      Growth Focused
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-400">
                      Built to improve brand presence, operations and conversion.
                    </p>
                  </div>
                </div>
              </div>
              {/* luxury frame end */} 
            </div>
          </div>
          {/* RIGHT END */}
        </div>
      </div>
    </section>
  );
}