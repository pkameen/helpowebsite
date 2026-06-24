"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const points = [
  "Luxury-style product presentation and modern shopping experience",
  "Clear content structure with strong visual hierarchy",
  "Responsive design crafted for mobile and desktop browsing",
  "Premium brand presentation focused on trust and conversion",
];

export default function PortfolioShowcaseAlt() {
  return (
    <section className="relative pb-20 sm:pb-24">
      {/* ambient background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-8%] top-10 h-[260px] w-[260px] rounded-full bg-blue-500/10 blur-[110px]" />
        <div className="absolute right-[-10%] bottom-0 h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-[130px]" />
        <div className="absolute left-1/2 top-1/2 h-[260px] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#07101d]/60 shadow-[0_25px_90px_rgba(0,0,0,0.38)] backdrop-blur-xl sm:rounded-[2.2rem] lg:rounded-[2.5rem]">
          {/* layered premium background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.08),transparent_28%)]" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#07101d]/90 via-[#08111e]/90 to-[#0a1425]/90" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
          <div className="pointer-events-none absolute inset-3 rounded-[1.3rem] border border-white/[0.05] sm:inset-4 sm:rounded-[1.8rem] lg:rounded-[2rem]" />

          <div className="relative z-10 grid items-center gap-6 p-3 sm:gap-8 sm:p-5 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 lg:p-8">
            {/* left content */}
            <div className="order-2 px-1 py-2 sm:px-2 lg:order-1 lg:px-4">
              <div className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-[11px] font-medium text-blue-200 shadow-[0_0_30px_rgba(37,99,235,0.12)] sm:px-4 sm:py-2 sm:text-sm">
                Ecommerce / Brand Showcase
              </div>

              <h3 className="mt-4 text-2xl font-semibold leading-[1.18] text-white sm:mt-5 sm:text-3xl md:text-4xl">
                Premium Ecommerce Experience Built for Brand Presentation & Sales
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-300 sm:mt-5 sm:text-base sm:leading-8 lg:mt-6 lg:text-lg">
                This showcase represents HELPO’s approach to building ecommerce
                experiences that combine elegant visual presentation, structured
                product discovery and a smoother conversion-focused shopping flow.
              </p>

              {/* points */}
              <div className="mt-6 grid gap-3 sm:mt-7 sm:gap-4">
                {points.map((point) => (
                  <div
                    key={point}
                    className="group flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.025] px-3.5 py-3 backdrop-blur transition-all duration-300 hover:border-blue-400/20 hover:bg-white/[0.04] sm:px-4 sm:py-3.5"
                  >
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-500/12 text-blue-300">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <p className="text-sm leading-6 text-slate-300 sm:text-[15px] sm:leading-7">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              {/* stat cards */}
              <div className="mt-6 grid grid-cols-3 gap-2.5 sm:mt-8 sm:gap-4">
                <div className="rounded-[1.2rem] border border-white/10 bg-[#07101d]/65 px-3 py-3.5 shadow-[0_10px_35px_rgba(0,0,0,0.2)] sm:rounded-[1.5rem] sm:p-5">
                  <p className="text-lg font-semibold text-white sm:text-2xl">
                    Elegant
                  </p>
                  <p className="mt-1 text-[11px] leading-5 text-slate-300 sm:mt-2 sm:text-sm sm:leading-7">
                    Brand-focused design
                  </p>
                </div>

                <div className="rounded-[1.2rem] border border-white/10 bg-[#07101d]/65 px-3 py-3.5 shadow-[0_10px_35px_rgba(0,0,0,0.2)] sm:rounded-[1.5rem] sm:p-5">
                  <p className="text-lg font-semibold text-white sm:text-2xl">
                    Smooth
                  </p>
                  <p className="mt-1 text-[11px] leading-5 text-slate-300 sm:mt-2 sm:text-sm sm:leading-7">
                    Shopping flow & UX
                  </p>
                </div>

                <div className="rounded-[1.2rem] border border-white/10 bg-[#07101d]/65 px-3 py-3.5 shadow-[0_10px_35px_rgba(0,0,0,0.2)] sm:rounded-[1.5rem] sm:p-5">
                  <p className="text-lg font-semibold text-white sm:text-2xl">
                    Scalable
                  </p>
                  <p className="mt-1 text-[11px] leading-5 text-slate-300 sm:mt-2 sm:text-sm sm:leading-7">
                    Ready for growth
                  </p>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 lg:mt-10">
                <Link
                  href="/contact"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#2563ff] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_20px_60px_rgba(37,99,235,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1d4ed8] sm:w-auto sm:px-6 sm:py-4 sm:text-base"
                >
                  Build a Similar Store
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* right image */}
            <div className="order-1 relative lg:order-2">
              {/* image glow */}
              <div className="absolute inset-0 rounded-[1.5rem] bg-blue-500/10 blur-2xl sm:rounded-[2rem]" />

              <div className="relative overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#07101d] shadow-[0_25px_70px_rgba(0,0,0,0.35)] sm:rounded-[2rem]">
                {/* top premium strip */}
                <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between border-b border-white/10 bg-[#07101d]/80 px-4 py-3 backdrop-blur sm:px-5">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                  </div>

                  <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-slate-300 sm:text-[11px]">
                    Premium Showcase
                  </div>
                </div>

                <Image
                  src="/images/portfolio/ecommerce-1.jpg"
                  alt="Portfolio Ecommerce Showcase"
                  width={1600}
                  height={1100}
                  className="h-auto w-full object-cover pt-[52px]"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020617]/55 via-transparent to-transparent" />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/[0.05]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}