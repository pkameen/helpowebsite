"use client";

import { useState } from "react";
import {
  ShieldCheck,
  Sparkles,
  LayoutDashboard,
  Layers3,
  Gauge,
  Headphones,
  Plus,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Premium UI & Brand Presence",
    description:
      "We craft polished, modern interfaces that elevate your business image and create a premium first impression.",
  },
  {
    icon: LayoutDashboard,
    title: "Business-Focused Digital Systems",
    description:
      "From websites to ERP and CRM solutions, every product is designed around real business workflow and usability.",
  },
  {
    icon: Layers3,
    title: "Custom Solutions, Not Generic Templates",
    description:
      "HELPO builds tailored digital products based on your goals, operations and growth needs instead of one-size-fits-all solutions.",
  },
  {
    icon: Gauge,
    title: "Performance, Scalability & Modern Stack",
    description:
      "We focus on fast, scalable and future-ready systems built with clean architecture and modern technologies.",
  },
  {
    icon: Headphones,
    title: "Support & Long-Term Improvement",
    description:
      "A project should not stop at launch. We believe in supporting, refining and improving systems over time.",
  },
  {
    icon: ShieldCheck,
    title: "Trust, Clarity & Professional Delivery",
    description:
      "We value transparency, structured execution and quality delivery that gives clients confidence in every stage of the project.",
  },
];

export default function WhyChooseUs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-24">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[8%] top-16 h-64 w-64 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute right-[10%] top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-[140px]" />
        <div className="absolute bottom-0 left-1/2 h-52 w-[40rem] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200 shadow-[0_0_30px_rgba(37,99,235,0.12)]">
            <Sparkles className="h-4 w-4" />
            Why HELPO
          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Why Businesses Choose HELPO
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            We combine premium design, practical software thinking and modern
            digital execution to create systems that look better, work smarter
            and support long-term growth.
          </p>
        </div>

        {/* ================= MOBILE ACCORDION CARDS ================= */}
        <div className="mt-14 grid gap-4 md:hidden">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-[1.75rem] border backdrop-blur transition-all duration-300 ${
                  isOpen
                    ? "border-blue-400/30 bg-white/[0.06] shadow-[0_24px_70px_rgba(37,99,235,0.12)]"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >
                {/* glow */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                  <div
                    className={`absolute -left-8 top-0 h-28 w-28 rounded-full bg-blue-500/10 blur-[80px] transition-opacity duration-300 ${
                      isOpen ? "opacity-100" : "opacity-0"
                    }`}
                  />
                  <div
                    className={`absolute right-0 top-0 h-24 w-24 rounded-full bg-cyan-400/10 blur-[70px] transition-opacity duration-300 ${
                      isOpen ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="relative z-10 flex w-full items-start gap-4 p-5 text-left"
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border transition-all duration-300 ${
                      isOpen
                        ? "border-blue-400/30 bg-blue-500/18 text-blue-200 shadow-[0_12px_35px_rgba(37,99,235,0.18)]"
                        : "border-white/10 bg-blue-500/12 text-blue-300"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="min-w-0 flex-1 pr-2">
                    <h3
                      className={`text-lg font-semibold leading-7 transition-colors ${
                        isOpen ? "text-white" : "text-white/95"
                      }`}
                    >
                      {feature.title}
                    </h3>
                  </div>

                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "border-blue-400/25 bg-blue-500/12 text-blue-200"
                        : "border-white/10 bg-white/5 text-slate-300"
                    }`}
                  >
                    <Plus
                      className={`h-5 w-5 transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="relative z-10 px-5 pb-5">
                      <div className="ml-16 border-t border-white/10 pt-4">
                        <p className="text-sm leading-7 text-slate-300">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= DESKTOP / TABLET PREMIUM GRID ================= */}
        <div className="mt-14 hidden gap-6 md:grid md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur transition duration-300 hover:-translate-y-1.5 hover:border-blue-400/30 hover:bg-white/[0.05] hover:shadow-[0_30px_90px_rgba(15,23,42,0.42)]"
              >
                {/* glow */}
                <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                  <div className="absolute -left-8 top-0 h-32 w-32 rounded-full bg-blue-500/10 blur-[80px]" />
                  <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-cyan-400/10 blur-[70px]" />
                </div>

                {/* subtle top highlight */}
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-60" />

                <div className="relative z-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/10 bg-blue-500/15 text-blue-300 shadow-[0_10px_30px_rgba(37,99,235,0.12)] transition duration-300 group-hover:border-blue-400/25 group-hover:bg-blue-500/18 group-hover:text-blue-200">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold leading-snug text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-4 text-base leading-8 text-slate-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}