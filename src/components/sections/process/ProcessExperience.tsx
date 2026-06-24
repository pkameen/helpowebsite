"use client";

import { useState } from "react";
import {
  MessageSquareText,
  Sparkles,
  Clock3,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";

const items = [
  {
    icon: MessageSquareText,
    title: "Clear Communication",
    text: "We keep communication simple, professional and focused so you always know what is happening in your project.",
  },
  {
    icon: Clock3,
    title: "Structured Progress",
    text: "Each phase of the project is handled in a logical order, reducing confusion and helping work move smoothly.",
  },
  {
    icon: ShieldCheck,
    title: "Professional Handling",
    text: "From planning to launch, the project is handled with a premium agency mindset and attention to quality.",
  },
];

export default function ProcessExperience() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="relative pb-24">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-40px] top-10 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute right-[-40px] bottom-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 backdrop-blur md:p-7 lg:p-8">
          {/* inner glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[8%] top-[10%] h-48 w-48 rounded-full bg-blue-500/10 blur-[90px]" />
            <div className="absolute right-[10%] bottom-[8%] h-52 w-52 rounded-full bg-cyan-400/10 blur-[100px]" />
          </div>

          <div className="relative z-10 grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr] xl:gap-10">
            {/* left */}
            <div className="rounded-[1.75rem] border border-white/10 bg-[#07101d]/45 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur md:p-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200 shadow-[0_0_30px_rgba(37,99,235,0.12)]">
                <Sparkles className="h-4 w-4" />
                Client Experience
              </div>

              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white md:text-4xl xl:text-5xl">
                A Smooth, Professional Experience from Start to Finish
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
                HELPO’s process is designed not only to build a good final product,
                but also to make the entire journey easier for the client. We focus
                on clarity, structure and premium handling throughout the project.
              </p>

              {/* optional subtle supporting block for premium feel */}
              <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4 md:p-5">
                <p className="text-sm leading-7 text-slate-300 md:text-base">
                  Every phase is handled with a clear structure — from requirement
                  discussion to final delivery — so the project feels organized,
                  transparent and professionally managed throughout.
                </p>
              </div>
            </div>

            {/* right cards */}
            <div className="grid gap-4">
              {items.map((item, index) => {
                const Icon = item.icon;
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className={`group relative overflow-hidden rounded-[1.75rem] border transition-all duration-300 ${
                      isOpen
                        ? "border-blue-400/30 bg-[#07101d]/85 shadow-[0_20px_60px_rgba(37,99,235,0.12)]"
                        : "border-white/10 bg-white/[0.03] hover:border-white/15 hover:bg-white/[0.045]"
                    }`}
                  >
                    {/* hover / active glow */}
                    <div className="pointer-events-none absolute inset-0">
                      <div
                        className={`absolute -left-10 top-0 h-28 w-28 rounded-full bg-blue-500/10 blur-[70px] transition-opacity duration-300 ${
                          isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                        }`}
                      />
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        setOpenIndex(isOpen ? -1 : index)
                      }
                      className="relative z-10 flex w-full items-start gap-4 p-5 text-left md:p-6"
                    >
                      {/* icon */}
                      <div
                        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border transition-all duration-300 ${
                          isOpen
                            ? "border-blue-400/20 bg-blue-500/15 text-blue-300"
                            : "border-white/10 bg-[#0b1627]/70 text-blue-300"
                        }`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>

                      {/* content */}
                      <div className="min-w-0 flex-1">
                        <h3 className="text-xl font-semibold text-white md:text-2xl">
                          {item.title}
                        </h3>

                        <div
                          className={`grid transition-all duration-300 ease-out ${
                            isOpen
                              ? "mt-3 grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <p className="pr-2 text-sm leading-7 text-slate-300 md:text-base md:leading-8">
                              {item.text}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* arrow */}
                      <div
                        className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-all duration-300 ${
                          isOpen
                            ? "border-blue-400/20 bg-blue-500/10 text-blue-300"
                            : "border-white/10 bg-white/[0.03] text-slate-300"
                        }`}
                      >
                        <ChevronDown
                          className={`h-5 w-5 transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}