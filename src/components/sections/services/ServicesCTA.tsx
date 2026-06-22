"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function ServicesCTA() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[#07101f] via-[#081223] to-[#0a1428] px-8 py-14 shadow-[0_30px_120px_rgba(0,0,0,0.45)] md:px-12 md:py-16">
          {/* glow */}
          <div className="absolute -left-10 top-0 h-48 w-48 rounded-full bg-blue-500/15 blur-[90px]" />
          <div className="absolute right-0 bottom-0 h-56 w-56 rounded-full bg-cyan-400/10 blur-[100px]" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
                <Sparkles className="h-4 w-4" />
                Let’s Build Together
              </div>

              <h2 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Ready to Build a Premium Website or Web Application?
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                If you need a modern website or a custom web application for
                your business, HELPO can help you build a digital product that
                looks professional, works smoothly and supports real growth.
              </p>
            </div>

            <div className="flex flex-col gap-4 lg:items-end">
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
        </div>
      </div>
    </section>
  );
}