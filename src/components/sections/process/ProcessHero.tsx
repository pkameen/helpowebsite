"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Workflow, Layers3, Rocket } from "lucide-react";

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
  return (
    <section className="relative overflow-hidden pt-10 pb-24 md:pt-14 md:pb-28">
      {/* background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-6%] top-12 h-[320px] w-[320px] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute right-[-6%] top-8 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[140px]" />
        <div className="absolute bottom-[-120px] left-1/2 h-[260px] w-[70%] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
            <Sparkles className="h-4 w-4" />
            HELPO Process
          </div>

          <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl xl:text-7xl">
            A Clear Process for Building
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-600 bg-clip-text text-transparent">
              Premium Digital Solutions
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-slate-300 md:text-xl">
            From the first discussion to final launch, HELPO follows a structured
            process to design, build and deliver premium websites, web apps and
            business systems with clarity, quality and business focus.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#2563ff] px-7 py-4 text-base font-semibold text-white shadow-[0_20px_60px_rgba(37,99,235,0.35)] transition hover:-translate-y-0.5 hover:bg-[#1d4ed8]"
            >
              Start Your Project
              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/5 px-7 py-4 text-base font-semibold text-white/90 backdrop-blur transition hover:border-white/20 hover:bg-white/10"
            >
              View Portfolio
            </Link>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-base leading-8 text-slate-300">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}