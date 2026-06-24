"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Briefcase, Clock3 } from "lucide-react";

export default function ServicesCTA() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      {/* background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-8%] top-10 h-[260px] w-[260px] rounded-full bg-blue-500/10 blur-[110px]" />
        <div className="absolute right-[-10%] bottom-0 h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-[130px]" />
        <div className="absolute left-1/2 top-1/2 h-[280px] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#07101d]/70 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:rounded-[2.5rem]">
          {/* layered premium background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.10),transparent_30%)]" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#08111f] via-[#091423] to-[#0a1527]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

          {/* subtle inner ring */}
          <div className="pointer-events-none absolute inset-4 rounded-[1.7rem] border border-white/[0.06] sm:inset-5 sm:rounded-[2rem]" />

          <div className="relative z-10 px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-12 lg:px-12 lg:py-14">
            <div className="grid gap-10 xl:grid-cols-[1.1fr_0.9fr] xl:items-center">
              {/* LEFT CONTENT */}
              <div className="text-center xl:text-left">
                {/* badge */}
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-medium text-blue-200 shadow-[0_0_30px_rgba(37,99,235,0.12)] sm:text-sm">
                  <Sparkles className="h-4 w-4" />
                  Let’s Build Together
                </div>

                {/* heading */}
                <h2 className="mx-auto mt-6 max-w-4xl text-3xl font-semibold leading-[1.08] tracking-tight text-white sm:text-4xl md:text-5xl xl:mx-0">
                  Ready to Build a Premium Website or Web Application?
                </h2>

                {/* description */}
                <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8 md:text-lg xl:mx-0">
                  If you need a modern website or a custom web application for
                  your business, HELPO can help you build a digital product that
                  looks professional, works smoothly and supports real growth.
                </p>

                {/* trust mini points */}
                <div className="mt-7 flex flex-wrap items-center justify-center gap-3 xl:justify-start">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-slate-200 backdrop-blur sm:text-sm">
                    <ShieldCheck className="h-4 w-4 text-blue-300" />
                    Premium execution
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-slate-200 backdrop-blur sm:text-sm">
                    <Briefcase className="h-4 w-4 text-blue-300" />
                    Business-focused solutions
                  </div>

                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-slate-200 backdrop-blur sm:text-sm">
                    <Clock3 className="h-4 w-4 text-blue-300" />
                    Reliable delivery
                  </div>
                </div>
              </div>

              {/* RIGHT CTA PANEL */}
              <div className="relative mx-auto w-full max-w-[520px] xl:max-w-none">
                {/* floating glow */}
                <div className="absolute inset-0 rounded-[2rem] bg-blue-500/10 blur-2xl" />

                <div className="relative rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-4 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-5">
                  <div className="rounded-[1.5rem] border border-white/10 bg-[#050b16]/70 p-5 sm:p-6">
                    {/* top label */}
                    <div className="mb-5 flex items-center justify-center">
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-slate-200 sm:text-sm">
                        <span className="h-2 w-2 rounded-full bg-blue-400" />
                        Start your next digital project with HELPO
                      </div>
                    </div>

                    {/* buttons */}
                    <div className="flex flex-col gap-3">
                      <Link
                        href="/contact"
                        className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#2563ff] px-6 py-4 text-sm font-semibold text-white shadow-[0_20px_60px_rgba(37,99,235,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1d4ed8] sm:text-base"
                      >
                        Start Your Project
                        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>

                      <Link
                        href="/portfolio"
                        className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/5 px-6 py-4 text-sm font-semibold text-white/90 backdrop-blur transition-all duration-300 hover:border-white/20 hover:bg-white/10 sm:text-base"
                      >
                        View Portfolio
                      </Link>
                    </div>

                    {/* bottom trust strip */}
                    <div className="mt-5 grid gap-3 sm:grid-cols-3">
                      <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-center">
                        <p className="text-xl font-semibold text-white sm:text-2xl">
                          50+
                        </p>
                        <p className="mt-1 text-[10px] uppercase tracking-[0.24em] text-slate-400 sm:text-[11px]">
                          Projects
                        </p>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-center">
                        <p className="text-xl font-semibold text-white sm:text-2xl">
                          Premium
                        </p>
                        <p className="mt-1 text-[10px] uppercase tracking-[0.24em] text-slate-400 sm:text-[11px]">
                          UI Focus
                        </p>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-center">
                        <p className="text-xl font-semibold text-white sm:text-2xl">
                          Long-term
                        </p>
                        <p className="mt-1 text-[10px] uppercase tracking-[0.24em] text-slate-400 sm:text-[11px]">
                          Support
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* RIGHT CTA PANEL END */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}