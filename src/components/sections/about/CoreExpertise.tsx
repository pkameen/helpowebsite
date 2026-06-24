"use client";

import { useState } from "react";
import {
  Globe,
  ShoppingBag,
  Database,
  BriefcaseBusiness,
  Sparkles,
  Plus,
} from "lucide-react";

const expertise = [
  {
    title: "Website Development",
    icon: Globe,
    description:
      "Corporate websites, brand websites, landing pages and premium business websites designed for credibility and conversion.",
  },
  {
    title: "Ecommerce Solutions",
    icon: ShoppingBag,
    description:
      "Modern ecommerce stores with premium UI, product-focused experiences and scalable selling workflows.",
  },
  {
    title: "ERP Systems",
    icon: Database,
    description:
      "Business management systems for operations, inventory, finance, reporting and workflow control.",
  },
  {
    title: "CRM & Custom Web Apps",
    icon: BriefcaseBusiness,
    description:
      "Customer management systems, internal dashboards and custom business tools built around your process.",
  },
];

export default function CoreExpertise() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative py-24">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[6%] top-10 h-64 w-64 rounded-full bg-blue-500/10 blur-[110px]" />
        <div className="absolute right-[6%] bottom-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* left heading */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200 shadow-[0_0_30px_rgba(37,99,235,0.12)]">
              <Sparkles className="h-4 w-4" />
              What We Build
            </div>

            <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              HELPO Builds Premium Digital Products For Modern Businesses
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
              Our work spans premium websites, ecommerce platforms, ERP systems,
              CRM solutions and custom web applications — all designed to help
              businesses grow with stronger digital presence and better internal
              efficiency.
            </p>
          </div>

          {/* right cards */}
          <div className="grid gap-5 md:grid-cols-2">
            {expertise.map((item, index) => {
              const Icon = item.icon;
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-[0_20px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.06]"
                >
                  {/* glow */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                    <div className="absolute -left-8 top-0 h-32 w-32 rounded-full bg-blue-500/10 blur-[80px]" />
                    <div className="absolute right-0 bottom-0 h-28 w-28 rounded-full bg-cyan-400/10 blur-[80px]" />
                  </div>

                  {/* Desktop / Tablet card */}
                  <div className="relative z-10 hidden h-full p-7 md:block">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/15 bg-blue-500/15 text-blue-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="mt-6 text-2xl font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-base leading-8 text-slate-300">
                      {item.description}
                    </p>
                  </div>

                  {/* Mobile accordion card */}
                  <div className="relative z-10 md:hidden">
                    <button
                      type="button"
                      onClick={() => toggleItem(index)}
                      className="flex w-full items-start gap-4 p-5 text-left"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-400/15 bg-blue-500/15 text-blue-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                        <Icon className="h-5 w-5" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3 className="text-lg font-semibold leading-7 text-white">
                          {item.title}
                        </h3>
                      </div>

                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      >
                        <Plus className="h-5 w-5" />
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
                        <div className="px-5 pb-5">
                          <div className="rounded-[1.5rem] border border-white/10 bg-[#07101d]/55 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                            <p className="text-sm leading-7 text-slate-300">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* subtle top highlight */}
                  <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}