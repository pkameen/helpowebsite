"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  Sparkles,
  MessageSquareText,
  Globe2,
  Layers3,
  PhoneCall,
  Plus,
  Minus,
} from "lucide-react";

const highlights = [
  {
    icon: Globe2,
    title: "Premium Websites",
    text: "Business websites designed for stronger presentation, trust and long-term growth.",
  },
  {
    icon: Layers3,
    title: "Web Apps & Systems",
    text: "Structured web applications, dashboards and internal systems built for real business use.",
  },
  {
    icon: MessageSquareText,
    title: "Clear Project Discussion",
    text: "Share your goals, requirements and ideas — HELPO helps shape the right execution direction.",
  },
];

export default function ContactHero() {
  const [openCard, setOpenCard] = useState<number | null>(0);

  const toggleCard = (index: number) => {
    setOpenCard(openCard === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden pt-14 pb-24 md:pt-20 md:pb-28 xl:pt-24">
      {/* background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-8%] top-10 h-[320px] w-[320px] rounded-full bg-blue-500/15 blur-[120px]" />
        <div className="absolute right-[-8%] top-8 h-[420px] w-[420px] rounded-full bg-cyan-400/12 blur-[140px]" />
        <div className="absolute bottom-[-140px] left-1/2 h-[260px] w-[72%] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] px-6 py-10 shadow-[0_30px_120px_rgba(0,0,0,0.35)] backdrop-blur-xl md:px-8 md:py-12 xl:px-10 xl:py-14">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-16 top-0 h-48 w-48 rounded-full bg-blue-500/10 blur-[100px]" />
            <div className="absolute right-0 top-10 h-56 w-56 rounded-full bg-cyan-400/10 blur-[110px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200 shadow-[0_0_30px_rgba(37,99,235,0.15)]">
              <Sparkles className="h-4 w-4" />
              Contact HELPO
            </div>

            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl">
              Let’s Build a Premium
              <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-600 bg-clip-text text-transparent">
                Website or Web App
              </span>
              <span className="block text-white/95">for Your Business</span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg md:text-xl md:leading-9">
              If you’re planning a premium business website, ecommerce experience,
              web application or internal business system, HELPO is ready to
              discuss your project and help shape the right solution with a clear,
              professional and business-focused process.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {[
                "Premium UI / UX",
                "Business-Focused Execution",
                "Clear Communication",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200 backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="#contact-form"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#2563ff] px-7 py-4 text-base font-semibold text-white shadow-[0_20px_60px_rgba(37,99,235,0.35)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#1d4ed8]"
              >
                Start Your Enquiry
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/5 px-7 py-4 text-base font-semibold text-white/90 backdrop-blur transition duration-300 hover:border-white/20 hover:bg-white/10"
              >
                View Portfolio
              </Link>
            </div>

            <div className="mt-6 flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#081120]/70 px-4 py-2 text-sm text-slate-300 backdrop-blur">
                <PhoneCall className="h-4 w-4 text-blue-300" />
                Project discussion • Website • Ecommerce • ERP • CRM • Web Apps
              </div>
            </div>
          </div>

          {/* CARDS */}
          <div className="relative z-10 mt-14 grid gap-6 md:grid-cols-3">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              const isOpen = openCard === index;

              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-5 shadow-[0_20px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl transition duration-300 hover:border-blue-400/30 md:p-7"
                >
                  <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                    <div className="absolute -left-10 top-0 h-32 w-32 rounded-full bg-blue-500/10 blur-[80px]" />
                    <div className="absolute right-0 bottom-0 h-28 w-28 rounded-full bg-cyan-400/10 blur-[80px]" />
                  </div>

                  <div className="relative z-10">
                    {/* Top row */}
                    <button
                      type="button"
                      onClick={() => toggleCard(index)}
                      className="flex w-full items-start justify-between gap-4 text-left md:pointer-events-none"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-400/15 bg-blue-500/15 text-blue-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                          <Icon className="h-6 w-6" />
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                            {item.title}
                          </h3>
                        </div>
                      </div>

                      {/* mobile toggle icon only */}
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 md:hidden">
                        {isOpen ? (
                          <Minus className="h-4 w-4" />
                        ) : (
                          <Plus className="h-4 w-4" />
                        )}
                      </div>
                    </button>

                    {/* desktop always visible */}
                    <p className="mt-4 hidden text-base leading-8 text-slate-300 md:block">
                      {item.text}
                    </p>

                    {/* mobile expandable */}
                    <div
                      className={`grid overflow-hidden transition-all duration-300 md:hidden ${
                        isOpen
                          ? "mt-4 grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-base leading-8 text-slate-300">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}