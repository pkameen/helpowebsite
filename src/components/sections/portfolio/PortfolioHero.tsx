"use client";

import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  FolderKanban,
  Globe2,
  Layers3,
  ShieldCheck,
} from "lucide-react";

export default function PortfolioHero() {
  return (
    <section className="relative overflow-hidden bg-[#050816] pt-16 pb-20 md:pt-20 md:pb-24">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-40px] top-10 h-64 w-64 rounded-full bg-blue-500/15 blur-[120px]" />
        <div className="absolute right-[-40px] top-20 h-72 w-72 rounded-full bg-cyan-400/10 blur-[140px]" />
        <div className="absolute left-1/2 bottom-[-100px] h-64 w-[75%] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />
      </div>

      {/* subtle grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        {/* top label */}
        <div className="mx-auto pt-10 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-white/[0.06] px-4 py-2 text-[12px] font-medium tracking-[0.18em] text-blue-200 uppercase backdrop-blur md:text-sm">
            <Sparkles className="h-4 w-4" />
            HELPO Portfolio Showcase
          </div>

          {/* heading */}
          <h1 className="mx-auto mt-6 max-w-5xl text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl">
            Crafted Projects.
            <span className="block text-white/90">Premium Business</span>
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-600 bg-clip-text text-transparent">
              Digital Experiences.
            </span>
          </h1>

          {/* paragraph */}
          <p className="mx-auto mt-6 max-w-3xl text-[15px] leading-8 text-slate-300 sm:text-base md:text-lg md:leading-9">
            Explore HELPO’s portfolio of premium websites, ecommerce platforms,
            business management systems and custom web applications designed to
            help modern brands present better, operate smarter and grow with
            clarity.
          </p>

          {/* trust line */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-300">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur">
              <ShieldCheck className="h-4 w-4 text-emerald-300" />
              Premium UI Focus
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur">
              <ShieldCheck className="h-4 w-4 text-emerald-300" />
              Custom Business Solutions
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur">
              <ShieldCheck className="h-4 w-4 text-emerald-300" />
              Modern Premium Presentation
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#2563ff] px-7 py-4 text-base font-semibold text-white shadow-[0_25px_80px_rgba(37,99,235,0.35)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#1d4ed8] sm:w-auto"
            >
              Start Your Project
              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              href="/services"
              className="inline-flex w-full items-center justify-center rounded-2xl border border-white/12 bg-white/[0.05] px-7 py-4 text-base font-semibold text-white/90 backdrop-blur transition duration-300 hover:border-white/20 hover:bg-white/[0.08] sm:w-auto"
            >
              View Services
            </Link>
          </div>
        </div>

        {/* premium showcase card */}
        <div className="mx-auto mt-14 max-w-6xl">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur md:p-6">
            {/* inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-400/5" />

            <div className="relative grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
              {/* left large premium block */}
              <div className="rounded-[1.75rem] border border-white/10 bg-[#081121] p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-blue-200">
                    Selected Works
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-300">
                    Premium Build Quality
                  </span>
                </div>

                <h2 className="mt-6 max-w-2xl text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-[2.2rem]">
                  Designed for real businesses, not just beautiful screens.
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-8 text-slate-300 sm:text-base">
                  Our portfolio includes premium websites, ecommerce stores,
                  ERP-style business systems, CRM dashboards and custom digital
                  platforms built with visual clarity, brand strength and
                  conversion-focused structure.
                </p>

                {/* mini metrics */}
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-2xl font-semibold text-white">50+</p>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      Projects delivered
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-2xl font-semibold text-white">Web + App</p>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      Multi-format solutions
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-2xl font-semibold text-white">Custom</p>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      Tailored for business goals
                    </p>
                  </div>
                </div>
              </div>

              {/* right floating cards */}
              <div className="grid gap-4">
                {/* top featured card */}
                <div className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-5 backdrop-blur transition duration-300 hover:border-blue-400/20 hover:bg-white/[0.07] sm:p-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-400/5 opacity-0 transition duration-300 group-hover:opacity-100" />

                  <div className="relative flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300 shadow-[0_10px_30px_rgba(37,99,235,0.18)]">
                      <FolderKanban className="h-6 w-6" />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white sm:text-2xl">
                        Project Range
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-[15px] sm:leading-8">
                        Websites, ecommerce platforms, admin dashboards and custom business
                        systems delivered with a premium visual approach.
                      </p>
                    </div>
                  </div>
                </div>

                {/* bottom two cards */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                  {/* premium presentation */}
                  <div className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-5 backdrop-blur transition duration-300 hover:border-blue-400/20 hover:bg-white/[0.07] sm:p-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/8 via-transparent to-blue-500/5 opacity-0 transition duration-300 group-hover:opacity-100" />

                    <div className="relative">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300 shadow-[0_10px_30px_rgba(37,99,235,0.18)]">
                        <Globe2 className="h-6 w-6" />
                      </div>

                      <h3 className="mt-5 text-xl font-semibold text-white">
                        Premium Presentation
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-[15px] sm:leading-8">
                        Strong layout structure, elegant UI balance and brand-focused
                        storytelling for a refined digital presence.
                      </p>
                    </div>
                  </div>

                  {/* custom build */}
                  <div className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-5 backdrop-blur transition duration-300 hover:border-blue-400/20 hover:bg-white/[0.07] sm:p-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/8 via-transparent to-cyan-400/5 opacity-0 transition duration-300 group-hover:opacity-100" />

                    <div className="relative">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300 shadow-[0_10px_30px_rgba(37,99,235,0.18)]">
                        <Layers3 className="h-6 w-6" />
                      </div>

                      <h3 className="mt-5 text-xl font-semibold text-white">
                        Built Around Need
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-[15px] sm:leading-8">
                        Every solution is tailored around actual business workflow, goals and
                        client-specific operational requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}