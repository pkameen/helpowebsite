"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

const highlights = [
  "Premium websites & brand presentation",
  "ERP, CRM & custom business systems",
  "Structured execution with long-term support",
];

export default function AboutCTA() {
  return (
    <section className="relative py-24">
      {/* background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[6%] top-10 h-72 w-72 rounded-full bg-blue-500/12 blur-[120px]" />
        <div className="absolute right-[6%] bottom-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-[130px]" />
        <div className="absolute left-1/2 top-1/2 h-64 w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/8 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2.75rem] border border-white/10 bg-gradient-to-br from-[#07101f] via-[#081223] to-[#0a1428] shadow-[0_35px_140px_rgba(0,0,0,0.5)]">
          {/* layered glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-16 top-0 h-56 w-56 rounded-full bg-blue-500/15 blur-[100px]" />
            <div className="absolute right-[-30px] bottom-[-20px] h-64 w-64 rounded-full bg-cyan-400/10 blur-[110px]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
          </div>

          {/* subtle mesh overlay */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.08),transparent_28%)]" />

          <div className="relative z-10 grid gap-10 px-6 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 lg:grid-cols-[1.15fr_0.85fr] lg:px-12 lg:py-14 xl:px-14 xl:py-16">
            {/* LEFT SIDE */}
            <div className="flex flex-col justify-center">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200 shadow-[0_0_30px_rgba(37,99,235,0.12)]">
                <Sparkles className="h-4 w-4" />
                Let’s Build Something Great
              </div>

              <h2 className="mt-6 max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl xl:text-[3.4rem] xl:leading-[1.05]">
                Ready to Build a Premium Website or Software System for Your
                Business?
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg md:text-xl md:leading-9">
                If you need a premium website, ecommerce platform, ERP, CRM or a
                custom digital solution, HELPO can help you build a system that
                looks professional, works efficiently and supports growth.
              </p>

              {/* premium highlights */}
              <div className="mt-8 grid gap-3 sm:grid-cols-1 md:max-w-2xl">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" />
                    <p className="text-sm leading-7 text-slate-200 sm:text-[15px]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE PREMIUM CTA PANEL */}
            <div className="flex items-center">
              <div className="relative w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-5 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-6 lg:p-7">
                {/* inner glow */}
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute left-0 top-0 h-28 w-28 rounded-full bg-blue-500/10 blur-[70px]" />
                  <div className="absolute right-0 bottom-0 h-28 w-28 rounded-full bg-cyan-400/10 blur-[70px]" />
                </div>

                <div className="relative z-10">
                  <div className="rounded-[1.5rem] border border-white/10 bg-[#07101d]/70 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                    <p className="text-sm font-medium uppercase tracking-[0.22em] text-slate-400">
                      Start with HELPO
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold leading-tight text-white sm:text-3xl">
                      Let’s turn your business idea into a premium digital
                      product.
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                      From strategy and interface design to development and
                      launch, we build with structure, quality and business
                      clarity.
                    </p>

                    <div className="mt-6 flex flex-col gap-3">
                      <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#2563ff] px-6 py-4 text-sm font-semibold text-white shadow-[0_20px_60px_rgba(37,99,235,0.35)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#1d4ed8] sm:text-base"
                      >
                        Start Your Project
                        <ArrowRight className="h-5 w-5" />
                      </Link>

                      <Link
                        href="/portfolio"
                        className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/5 px-6 py-4 text-sm font-semibold text-white/90 backdrop-blur transition duration-300 hover:border-white/20 hover:bg-white/10 sm:text-base"
                      >
                        View Portfolio
                      </Link>
                    </div>
                  </div>

                  {/* bottom mini note */}
                  <div className="mt-4 rounded-[1.4rem] border border-white/10 bg-white/[0.035] px-4 py-3 text-center backdrop-blur">
                    <p className="text-xs leading-6 text-slate-400 sm:text-sm">
                      Premium websites • Ecommerce • ERP / CRM • Custom web apps
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* bottom subtle border glow */}
          <div className="pointer-events-none absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}