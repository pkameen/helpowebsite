"use client";

import Image from "next/image";
import { Quote, Globe, Mail, Sparkles, BadgeCheck } from "lucide-react";

export default function FounderSection() {
  return (
    <section className="relative py-24 md:py-28">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[8%] top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute right-[6%] top-24 h-80 w-80 rounded-full bg-cyan-400/10 blur-[140px]" />
        <div className="absolute bottom-[-100px] left-1/2 h-64 w-[60%] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 xl:grid-cols-[0.95fr_1.05fr] xl:gap-16">
          {/* ========================= LEFT PREMIUM FOUNDER VISUAL ========================= */}
          <div className="relative order-1">
            {/* decorative glow */}
            <div className="absolute -left-10 top-14 h-44 w-44 rounded-full bg-blue-500/15 blur-[100px]" />
            <div className="absolute right-0 bottom-6 h-52 w-52 rounded-full bg-cyan-400/10 blur-[120px]" />

            {/* outer premium frame */}
            <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.03] to-white/[0.02] p-3 shadow-[0_35px_120px_rgba(0,0,0,0.45)] backdrop-blur md:p-4">
              {/* subtle lines / overlays */}
              <div className="pointer-events-none absolute inset-0 rounded-[2.25rem] border border-white/6" />
              <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

              {/* inner image panel */}
              <div className="relative overflow-hidden rounded-[1.9rem] border border-white/10 bg-[#07101f]">
                {/* soft image glow */}
                <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_38%)]" />

                <Image
                  src="/images/about/founder-ceo.jpg"
                  alt="Founder and CEO of HELPO"
                  width={700}
                  height={900}
                  className="h-full w-full object-cover"
                />

                {/* image gradient overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-[#020617]/20 to-transparent" />

                {/* bottom premium identity strip */}
                <div className="absolute inset-x-4 bottom-4 z-20 rounded-[1.5rem] border border-white/10 bg-[#081120]/80 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur md:inset-x-5 md:bottom-5 md:p-5">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                        Sajid Ameen PK
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-[0.32em] text-slate-400 md:text-sm">
                        Founder & CEO
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-2 text-xs font-medium text-blue-200 md:text-sm">
                      <BadgeCheck className="h-4 w-4" />
                      HELPO Leadership
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================= RIGHT CONTENT ========================= */}
          <div className="order-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200 shadow-[0_0_30px_rgba(37,99,235,0.12)]">
              <Sparkles className="h-4 w-4" />
              Leadership
            </div>

            <h2 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-5xl xl:text-6xl">
              Meet the Founder Behind HELPO
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-300">
              HELPO is led by a vision to build premium digital experiences for
              modern businesses — combining beautiful interfaces, strategic
              thinking and powerful software systems that solve real operational
              and growth challenges.
            </p>

            {/* quote / founder statement */}
            <div className="relative mt-8 overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.05] via-white/[0.03] to-white/[0.02] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.28)] backdrop-blur md:p-7">
              <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-500/10 blur-[90px]" />
              <div className="relative z-10">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
                    <Quote className="h-7 w-7" />
                  </div>

                  <div>
                    <p className="text-lg leading-8 text-slate-100 md:text-xl md:leading-9">
                      “Our goal is not just to build websites or software — it is to
                      create digital systems that make businesses look better, work
                      smarter and grow with confidence.”
                    </p>

                    <div className="mt-5 flex flex-wrap items-center gap-3">
                      <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-[0.24em] text-slate-300">
                        Founder’s Vision
                      </div>
                      <div className="rounded-full text-center border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-xs uppercase tracking-[0.24em] text-blue-200">
                        Premium Software Growth
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* founder description block */}
            <div className="mt-8 grid gap-5">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur md:p-7">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-semibold text-white md:text-3xl">
                    Sajid Ameen PK
                  </h3>
                  <p className="text-base font-medium text-blue-300 md:text-lg">
                    Founder & CEO, HELPO
                  </p>
                </div>

                <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 md:text-lg md:leading-9">
                  With a focus on premium design, business systems and practical
                  digital execution, HELPO aims to deliver websites, ecommerce
                  solutions, ERP/CRM tools and custom web applications that bring
                  real value to clients.
                </p>
              </div>

              {/* premium value strip */}
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-[1.5rem] border border-white/10 bg-[#07101d]/70 p-5">
                  <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
                    Focus
                  </p>
                  <p className="mt-3 text-lg font-semibold text-white">
                    Premium Execution
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-[#07101d]/70 p-5">
                  <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
                    Systems
                  </p>
                  <p className="mt-3 text-lg font-semibold text-white">
                    ERP / CRM / Web
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-[#07101d]/70 p-5">
                  <p className="text-sm uppercase tracking-[0.22em] text-slate-400">
                    Goal
                  </p>
                  <p className="mt-3 text-lg font-semibold text-white">
                    Software Growth
                  </p>
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:helposoftwars@gmail.com"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white shadow-[0_12px_40px_rgba(0,0,0,0.2)] backdrop-blur transition hover:-translate-y-0.5 hover:border-blue-400/25 hover:bg-white/[0.07]"
              >
                <Mail className="h-4 w-4 text-blue-300" />
                Email
              </a>

              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white shadow-[0_12px_40px_rgba(0,0,0,0.2)] backdrop-blur transition hover:-translate-y-0.5 hover:border-blue-400/25 hover:bg-white/[0.07]"
              >
                <Globe className="h-4 w-4 text-blue-300" />
                Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}