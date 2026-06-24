"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function ProcessCTA() {
  return (
    <section className="relative pb-24">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[8%] top-8 h-56 w-56 rounded-full bg-blue-500/10 blur-[110px]" />
        <div className="absolute right-[8%] bottom-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(8,15,30,0.96),rgba(8,18,35,0.92),rgba(6,12,24,0.98))] shadow-[0_30px_120px_rgba(0,0,0,0.35)] backdrop-blur md:rounded-[2.75rem]">
          {/* layered glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-60px] top-[-40px] h-56 w-56 rounded-full bg-blue-500/12 blur-[110px]" />
            <div className="absolute right-[-40px] top-10 h-56 w-56 rounded-full bg-cyan-400/10 blur-[120px]" />
            <div className="absolute bottom-0 left-1/2 h-40 w-[60%] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>

          <div className="relative z-10 px-5 py-10 sm:px-7 sm:py-12 md:px-10 md:py-14 lg:px-12 lg:py-16">
            <div className="mx-auto max-w-5xl">
              {/* top label */}
              <div className="flex justify-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200 shadow-[0_10px_30px_rgba(37,99,235,0.12)] backdrop-blur">
                  <Sparkles className="h-4 w-4" />
                  Let’s Build with Clarity
                </div>
              </div>

              {/* main content */}
              <div className="mt-7 text-center">
                <h2 className="mx-auto max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
                  Ready to Start Your Project with a Clear, Premium Process?
                </h2>

                <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                  Whether you need a business website, ecommerce platform, web
                  application or internal system, HELPO can help you move from
                  idea to launch with a structured, premium workflow.
                </p>
              </div>

              {/* premium mini cards / tags */}
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  "Premium Design",
                  "Structured Workflow",
                  "Business-Focused Execution",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="group relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/[0.04] px-4 py-4 text-center backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-blue-400/25 hover:bg-white/[0.06]"
                  >
                    <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                      <div className="absolute left-1/2 top-0 h-20 w-20 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[50px]" />
                    </div>

                    <div className="relative z-10">
                      <p className="text-sm font-medium text-slate-100 sm:text-[15px]">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#2563ff] px-7 py-4 text-base font-semibold text-white shadow-[0_20px_60px_rgba(37,99,235,0.35)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#1d4ed8]"
                >
                  Start Your Project
                  <ArrowRight className="h-5 w-5" />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/[0.05] px-7 py-4 text-base font-semibold text-white/90 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08]"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}