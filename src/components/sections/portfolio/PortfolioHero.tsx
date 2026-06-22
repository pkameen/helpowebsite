"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, FolderKanban, Globe2, Layers3 } from "lucide-react";

export default function PortfolioHero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-20 md:pt-14 md:pb-24">
      {/* glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[8%] top-16 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute right-[10%] top-12 h-80 w-80 rounded-full bg-cyan-400/10 blur-[140px]" />
        <div className="absolute bottom-[-80px] left-1/2 h-56 w-[65%] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
            <Sparkles className="h-4 w-4" />
            HELPO Portfolio
          </div>

          <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl xl:text-7xl">
            Real Projects. Premium Digital
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-600 bg-clip-text text-transparent">
              Experiences.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-slate-300 md:text-xl">
            Explore HELPO’s portfolio of premium websites, ecommerce platforms,
            web applications and business systems designed to help modern
            businesses present better, operate smarter and grow stronger.
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
              href="/services"
              className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/5 px-7 py-4 text-base font-semibold text-white/90 backdrop-blur transition hover:border-white/20 hover:bg-white/10"
            >
              View Services
            </Link>
          </div>
        </div>

        {/* bottom stat cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
              <FolderKanban className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-3xl font-semibold text-white">50+</h3>
            <p className="mt-3 text-base leading-8 text-slate-300">
              Projects crafted across websites, ecommerce platforms and business systems.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
              <Globe2 className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-3xl font-semibold text-white">Premium</h3>
            <p className="mt-3 text-base leading-8 text-slate-300">
              Every project is designed with strong visual presentation, clarity and brand-focused structure.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
              <Layers3 className="h-6 w-6" />
            </div>
            <h3 className="mt-6 text-3xl font-semibold text-white">Custom</h3>
            <p className="mt-3 text-base leading-8 text-slate-300">
              HELPO builds digital products tailored to real business needs instead of generic one-size-fits-all solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}