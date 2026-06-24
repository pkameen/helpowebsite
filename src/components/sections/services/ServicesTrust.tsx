"use client";

import {
  Award,
  Users,
  Clock3,
  Headphones,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const items = [
  {
    icon: Award,
    number: "01",
    title: "Quality First",
    text: "We focus on polished execution, clean UI and attention to detail in every project.",
  },
  {
    icon: Users,
    number: "02",
    title: "Client Focused",
    text: "Every website and web app is built around your business goals and practical needs.",
  },
  {
    icon: Clock3,
    number: "03",
    title: "On-Time Delivery",
    text: "We work with clear structure and timelines to deliver projects professionally.",
  },
  {
    icon: Headphones,
    number: "04",
    title: "Long-Term Support",
    text: "HELPO stays available for updates, improvements and support after launch.",
  },
];

export default function ServicesTrust() {
  return (
    <section className="relative pb-24 md:pb-28">
      {/* background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-10 h-[280px] w-[280px] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute right-[-8%] top-1/3 h-[320px] w-[320px] rounded-full bg-cyan-400/8 blur-[140px]" />
        <div className="absolute bottom-0 left-1/2 h-[220px] w-[60%] -translate-x-1/2 rounded-full bg-blue-500/8 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6">
        {/* Main premium wrapper */}
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 shadow-[0_30px_120px_rgba(0,0,0,0.28)] backdrop-blur md:rounded-[2.5rem] md:p-8 xl:p-10">
          {/* top heading area */}
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs text-blue-200 shadow-[0_0_30px_rgba(37,99,235,0.12)] sm:text-sm">
              <Sparkles className="h-4 w-4" />
              Why Clients Trust HELPO
            </div>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:mt-6 md:text-5xl">
              Built on Trust. Focused on Results.
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8 md:mt-5 md:text-lg">
              We don’t just build websites and web apps. We build long-term
              client relationships through quality execution, clear communication
              and dependable support.
            </p>
          </div>

          {/* cards */}
          <div className="relative mt-12 grid gap-4 md:mt-14 md:grid-cols-2 xl:mt-16 xl:grid-cols-4 xl:gap-6">
            {/* desktop connector line */}
            <div className="absolute left-[12%] right-[12%] top-[5.3rem] hidden h-px bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0 xl:block" />

            {items.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#07101d]/55 p-5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-[#091322]/75 hover:shadow-[0_20px_80px_rgba(37,99,235,0.12)] md:p-6"
                >
                  {/* hover glow */}
                  <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                    <div className="absolute -left-10 top-0 h-28 w-28 rounded-full bg-blue-500/12 blur-[80px]" />
                    <div className="absolute bottom-0 right-0 h-24 w-24 rounded-full bg-cyan-400/10 blur-[70px]" />
                  </div>

                  <div className="relative z-10">
                    {/* top icon + number */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/15 bg-blue-500/12 text-blue-300 shadow-[0_0_30px_rgba(59,130,246,0.08)]">
                        <Icon className="h-6 w-6" />
                      </div>

                      <span className="text-sm font-medium tracking-[0.25em] text-blue-300/90">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="mt-6 text-xl font-semibold text-white md:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-300 md:text-[15px]">
                      {item.text}
                    </p>

                    {/* bottom accent line */}
                    <div className="mt-6 h-1 w-14 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 opacity-80" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* bottom commitment strip */}
          <div className="mt-10 rounded-[1.7rem] border border-white/10 bg-[#07101d]/55 p-5 backdrop-blur md:mt-12 md:p-6 xl:p-7">
            <div className="grid gap-6 xl:grid-cols-[1.2fr_0.9fr] xl:items-center">
              {/* left */}
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-400/15 bg-blue-500/12 text-blue-300 shadow-[0_0_30px_rgba(59,130,246,0.08)]">
                  <ShieldCheck className="h-6 w-6" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white md:text-2xl">
                    Our Commitment
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                    We are committed to delivering premium digital solutions
                    that create real business value — not just visually polished
                    products, but systems and websites that support long-term
                    growth.
                  </p>
                </div>
              </div>

              {/* right */}
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                {[
                  "Transparent Communication",
                  "Professional Approach",
                  "Results That Matter",
                ].map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-blue-300" />
                    <span className="text-sm text-slate-200 sm:text-[15px]">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}