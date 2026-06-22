"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, BadgeCheck, Layers3 } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-[120px]" />
        <div className="absolute right-[8%] top-16 h-80 w-80 rounded-full bg-cyan-400/10 blur-[140px]" />
        <div className="absolute bottom-0 left-1/2 h-64 w-[34rem] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/10 px-4 py-2 text-sm text-blue-200 shadow-[0_0_30px_rgba(37,99,235,0.15)]">
              <Sparkles className="h-4 w-4" />
              About HELPO — Premium Web & Software Agency
            </div>

            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl xl:text-7xl">
              We Build Modern Digital Systems
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-600 bg-clip-text text-transparent">
                For Growing Businesses
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-9 text-slate-300 md:text-xl">
              HELPO is a premium web and software agency focused on building
              modern websites, ecommerce platforms, ERP systems, CRM solutions
              and custom digital products that help businesses scale with better
              design, stronger workflows and reliable technology.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
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
                View Our Work
              </Link>
            </div>

            {/* feature chips */}
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 backdrop-blur">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-white">
                  Premium Quality
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-400">
                  Clean design, polished interfaces and strong user experience.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 backdrop-blur">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
                  <Layers3 className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-white">
                  Business Systems
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-400">
                  Websites, ERP, CRM, ecommerce and custom internal platforms.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 backdrop-blur">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-white">
                  Growth Focused
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-400">
                  Built to improve brand presence, operations and conversion.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="relative mx-auto flex min-h-[620px] max-w-[620px] items-center justify-center">
              {/* back glow */}
              <div className="absolute inset-x-10 bottom-10 h-48 rounded-full bg-blue-600/20 blur-[100px]" />
              <div className="absolute inset-0 rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.02]" />

              {/* main image card */}
              <Image
                src="/images/hero/hero-dashboard.jpg"  
                alt="HELPO agency showcase"
                width={1200}
                height={900}
                className="h-auto w-full object-cover"
                priority
              />

              {/* floating stats */}
              <div className="absolute -left-8 top-14 z-20 rounded-[1.8rem] border border-white/10 bg-[#081120]/90 px-6 py-5 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur">
                <p className="text-4xl font-semibold text-white">50+</p>
                <p className="mt-1 text-xs uppercase tracking-[0.35em] text-slate-400">
                  Projects
                </p>
              </div>

              <div className="absolute -right-8 bottom-16 z-20 rounded-[1.8rem] border border-white/10 bg-[#081120]/90 px-6 py-5 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur">
                <p className="text-4xl font-semibold text-white">20+</p>
                <p className="mt-1 text-xs uppercase tracking-[0.35em] text-slate-400">
                  Clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}