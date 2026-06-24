"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Workflow,
 Layers3,
  Rocket,
  Plus,
} from "lucide-react";

const highlights = [
  {
    icon: Workflow,
    title: "Structured Workflow",
    text: "Every project follows a clear step-by-step execution path.",
  },
  {
    icon: Layers3,
    title: "Premium Execution",
    text: "Design, development and delivery are handled with a polished agency approach.",
  },
  {
    icon: Rocket,
    title: "Launch-Focused",
    text: "We build with real business goals, usability and long-term value in mind.",
  },
];

export default function ProcessHero() {
  const [activeCard, setActiveCard] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden pt-10 pb-24 md:pt-14 md:pb-28">
      {/* background glow layers */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-8%] top-10 h-[320px] w-[320px] rounded-full bg-blue-500/12 blur-[120px]" />
        <div className="absolute right-[-8%] top-6 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[140px]" />
        <div className="absolute bottom-[-120px] left-1/2 h-[260px] w-[72%] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.08),transparent_35%)]" />
      </div>

      <div className="relative pt-15 z-10 mx-auto max-w-7xl px-4 sm:px-6">
        {/* top hero block */}
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] px-5 py-10 shadow-[0_30px_120px_rgba(0,0,0,0.28)] backdrop-blur md:rounded-[2.5rem] md:px-8 md:py-14 xl:px-12">
          {/* inner glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-40px] top-[-40px] h-52 w-52 rounded-full bg-blue-500/10 blur-[100px]" />
            <div className="absolute right-[-20px] bottom-[-40px] h-60 w-60 rounded-full bg-cyan-400/10 blur-[120px]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          </div>

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            {/* hero text */}
            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl">
              A Clear Process for Building
              <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-600 bg-clip-text text-transparent">
                Premium Web Solutions
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg md:text-xl md:leading-9">
              From the first discussion to final launch, HELPO follows a
              structured process to design, build and deliver premium websites,
              web apps and business systems with clarity, quality and business
              focus.
            </p>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#2563ff] px-7 py-4 text-base font-semibold text-white shadow-[0_20px_60px_rgba(37,99,235,0.35)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#1d4ed8] sm:w-auto"
              >
                Start Your Project
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex w-full items-center justify-center rounded-2xl border border-white/12 bg-white/5 px-7 py-4 text-base font-semibold text-white/90 backdrop-blur transition duration-300 hover:border-white/20 hover:bg-white/10 sm:w-auto"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>

        {/* highlight cards */}
        <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-3 md:gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            const isOpen = activeCard === index;

            return (
              <button
                key={index}
                type="button"
                onClick={() => setActiveCard(isOpen ? null : index)}
                className={`group relative overflow-hidden rounded-[1.6rem] border text-left backdrop-blur transition-all duration-300 md:rounded-[2rem] ${
                  isOpen
                    ? "border-blue-400/30 bg-white/[0.06] shadow-[0_20px_70px_rgba(37,99,235,0.14)]"
                    : "border-white/10 bg-white/[0.03] hover:-translate-y-1 hover:border-blue-400/20 hover:bg-white/[0.05]"
                }`}
              >
                {/* hover/open glow */}
                <div className="pointer-events-none absolute inset-0">
                  <div
                    className={`absolute -left-10 top-0 h-32 w-32 rounded-full bg-blue-500/10 blur-[80px] transition-opacity duration-300 ${
                      isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                  />
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>

                <div className="relative z-10 p-5 sm:p-6 md:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300 sm:h-14 sm:w-14">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>

                    {/* mobile/tablet expand icon */}
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition duration-300 md:hidden ${
                        isOpen ? "rotate-45 border-blue-400/30 text-blue-200" : ""
                      }`}
                    >
                      <Plus className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-white sm:text-2xl">
                    {item.title}
                  </h3>

                  {/* desktop always visible */}
                  <p className="mt-3 hidden text-base leading-8 text-slate-300 md:block">
                    {item.text}
                  </p>

                  {/* mobile / tablet expandable */}
                  <div
                    className={`grid overflow-hidden transition-all duration-300 md:hidden ${
                      isOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-sm leading-7 text-slate-300">
                        {item.text}
                      </p>
                    </div>
                  </div>

                  {/* subtle bottom accent */}
                  <div
                    className={`mt-5 h-px w-full bg-gradient-to-r from-blue-400/0 via-blue-400/40 to-blue-400/0 transition-opacity duration-300 ${
                      isOpen ? "opacity-100" : "opacity-0 md:opacity-100"
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}