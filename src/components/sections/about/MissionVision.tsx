"use client";

import { useState } from "react";
import {
  Rocket,
  Eye,
  ShieldCheck,
  Sparkles,
  ChevronDown,
} from "lucide-react";

const cards = [
  {
    id: "mission",
    title: "Our Mission",
    icon: Rocket,
    glow: "bg-blue-500/10",
    border: "hover:border-blue-400/30",
    description:
      "To help modern businesses grow through premium websites, ecommerce platforms, ERP systems, CRM tools and custom digital products that combine elegant design, practical workflows and dependable technology.",
    points: [
      "Build solutions that are clean, scalable and business-focused",
      "Improve operations, user experience and digital trust",
      "Deliver software that creates measurable value for clients",
    ],
  },
  {
    id: "vision",
    title: "Our Vision",
    icon: Eye,
    glow: "bg-cyan-500/10",
    border: "hover:border-cyan-400/30",
    description:
      "To become a trusted premium digital partner for businesses by creating world-class web and software experiences that combine innovation, strategy, design and performance into one powerful ecosystem.",
    points: [
      "Shape better digital experiences for modern businesses",
      "Build future-ready systems that support long-term growth",
      "Raise the standard of premium software delivery",
    ],
  },
];

export default function MissionVision() {
  const [openCard, setOpenCard] = useState<string | null>("mission");

  const toggleCard = (id: string) => {
    setOpenCard((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative py-24">
      {/* background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[8%] top-10 h-64 w-64 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute right-[10%] bottom-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200 shadow-[0_0_30px_rgba(37,99,235,0.12)]">
            <Sparkles className="h-4 w-4" />
            Our Purpose
          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Mission, Vision & What Drives HELPO
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            We focus on building premium digital systems that help businesses
            grow faster, operate better and present themselves with a stronger,
            more modern digital identity.
          </p>
        </div>

        {/* DESKTOP / TABLET */}
        <div className="mt-14 hidden gap-6 lg:grid lg:grid-cols-2">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.id}
                className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-1 ${card.border} hover:bg-white/[0.05] shadow-[0_25px_80px_rgba(0,0,0,0.25)]`}
              >
                {/* glow */}
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div
                    className={`absolute ${
                      card.id === "mission" ? "-left-12 top-0" : "-right-12 top-0"
                    } h-44 w-44 rounded-full ${card.glow} blur-[100px]`}
                  />
                </div>

                {/* subtle inner gradient */}
                <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/[0.04] to-transparent" />

                <div className="relative z-10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-[1.4rem] border border-white/10 bg-gradient-to-br from-blue-500/20 to-cyan-400/10 text-blue-300 shadow-[0_10px_35px_rgba(37,99,235,0.18)]">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-7 text-3xl font-semibold tracking-tight text-white">
                    {card.title}
                  </h3>

                  <p className="mt-5 text-lg leading-8 text-slate-300">
                    {card.description}
                  </p>

                  <div className="mt-8 space-y-3">
                    {card.points.map((point) => (
                      <div
                        key={point}
                        className="flex items-start gap-3 rounded-2xl border border-white/8 bg-[#07101d]/45 px-4 py-3"
                      >
                        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                          <ShieldCheck className="h-4.5 w-4.5" />
                        </div>
                        <p className="text-[15px] leading-7 text-slate-300">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* MOBILE */}
        <div className="mt-12 space-y-4 lg:hidden">
          {cards.map((card) => {
            const Icon = card.icon;
            const isOpen = openCard === card.id;

            return (
              <div
                key={card.id}
                className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.035] backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.22)]"
              >
                {/* mobile glow */}
                <div className="pointer-events-none absolute inset-0">
                  <div
                    className={`absolute ${
                      card.id === "mission"
                        ? "-left-12 top-0"
                        : "-right-12 top-0"
                    } h-36 w-36 rounded-full ${card.glow} blur-[90px] opacity-70`}
                  />
                </div>

                <button
                  type="button"
                  onClick={() => toggleCard(card.id)}
                  className="relative z-10 flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[1.2rem] border border-white/10 bg-gradient-to-br from-blue-500/20 to-cyan-400/10 text-blue-300 shadow-[0_10px_30px_rgba(37,99,235,0.18)]">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-xl font-semibold text-white">
                        {card.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-400">
                        Tap to {isOpen ? "collapse" : "view details"}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown className="h-5 w-5" />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-90"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="relative z-10 px-5 pb-5">
                      <div className="border-t border-white/10 pt-5">
                        <p className="text-base leading-8 text-slate-300">
                          {card.description}
                        </p>

                        <div className="mt-6 space-y-3">
                          {card.points.map((point) => (
                            <div
                              key={point}
                              className="flex items-start gap-3 rounded-2xl border border-white/8 bg-[#07101d]/45 px-4 py-3"
                            >
                              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-300">
                                <ShieldCheck className="h-4.5 w-4.5" />
                              </div>
                              <p className="text-sm leading-7 text-slate-300">
                                {point}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}