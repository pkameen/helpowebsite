"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function PortfolioCTA() {
  return (
    <section className="relative pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2.75rem] border border-white/10 bg-[#07101d]/80 px-6 py-14 backdrop-blur md:px-10 md:py-16">
          {/* glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-40px] top-[-20px] h-48 w-48 rounded-full bg-blue-500/15 blur-[100px]" />
            <div className="absolute bottom-[-40px] right-[-20px] h-56 w-56 rounded-full bg-cyan-400/10 blur-[120px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
              <Sparkles className="h-4 w-4" />
              Let’s Build Your Next Project
            </div>

            <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Need a Premium Website, Web App or Business System?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-slate-300">
              Whether you need a brand-focused website, a custom web application,
              an ecommerce platform or a business workflow system, HELPO can
              help you build a premium digital solution tailored to your goals.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {["Premium Design", "Business-Focused Systems", "Conversion-Oriented Execution"].map((item) => (
                <div
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur"
                >
                {item}
                </div>
            ))}
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#2563ff] px-7 py-4 text-base font-semibold text-white shadow-[0_20px_60px_rgba(37,99,235,0.35)] transition hover:-translate-y-0.5 hover:bg-[#1d4ed8]"
              >
                Start Your Project
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/5 px-7 py-4 text-base font-semibold text-white/90 backdrop-blur transition hover:border-white/20 hover:bg-white/10"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}