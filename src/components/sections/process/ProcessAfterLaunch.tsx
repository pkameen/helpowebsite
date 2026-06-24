"use client";

import { useState } from "react";
import { CheckCircle2, Sparkles, Plus } from "lucide-react";

const points = [
  "Deployment guidance and launch support",
  "Help with small post-launch fixes or adjustments if needed",
  "Guidance for future improvements, upgrades or new features",
  "Support for maintaining a premium and professional digital presence",
];

const pointDescriptions = [
  "We help ensure the project is launched properly with deployment guidance, go-live support and final checks so the transition from development to live environment feels smooth and professional.",
  "If small issues, refinements or post-launch adjustments come up after release, HELPO stays available to help review and handle them in a practical and structured way.",
  "As your business grows, we can guide you on what to improve next — whether that means adding features, upgrading sections of the system or planning a better future version of the project.",
  "Launch is only one part of the journey. We also help businesses maintain a polished digital presence over time through continued refinement, quality improvements and strategic support when needed.",
];

export default function ProcessAfterLaunch() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const togglePoint = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative pb-24">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[8%] top-10 h-56 w-56 rounded-full bg-blue-500/10 blur-[110px]" />
        <div className="absolute right-[10%] bottom-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2.75rem] border border-white/10 bg-white/[0.03] p-4 shadow-[0_30px_120px_rgba(2,6,23,0.35)] backdrop-blur md:p-6 lg:p-8">
          {/* inner glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-50px] top-[-40px] h-56 w-56 rounded-full bg-blue-500/10 blur-[110px]" />
            <div className="absolute right-[-40px] bottom-[-40px] h-64 w-64 rounded-full bg-cyan-400/10 blur-[120px]" />
          </div>

          <div className="relative z-10 grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
            {/* left accordion cards */}
            <div className="order-2 grid gap-3 lg:order-1">
              {points.map((point, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={index}
                    className={`group overflow-hidden rounded-[1.6rem] border transition-all duration-300 ${
                      isOpen
                        ? "border-blue-400/25 bg-[#08111f]/90 shadow-[0_18px_60px_rgba(37,99,235,0.12)]"
                        : "border-white/10 bg-[#07101d]/60 hover:border-white/15 hover:bg-[#08111f]/75"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => togglePoint(index)}
                      className="flex w-full items-start justify-between gap-4 px-4 py-4 text-left sm:px-5 sm:py-5"
                    >
                      <div className="flex min-w-0 items-start gap-3 sm:gap-4">
                        <div
                          className={`mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border transition-all duration-300 ${
                            isOpen
                              ? "border-blue-400/25 bg-blue-500/15 text-blue-200 shadow-[0_0_25px_rgba(37,99,235,0.16)]"
                              : "border-white/10 bg-white/[0.04] text-blue-300"
                          }`}
                        >
                          <CheckCircle2 className="h-5 w-5" />
                        </div>

                        <div className="min-w-0">
                          <h3 className="text-base font-semibold leading-7 text-white sm:text-lg">
                            {point}
                          </h3>

                          {!isOpen && (
                            <p className="mt-2 line-clamp-2 text-sm leading-7 text-slate-400">
                              {pointDescriptions[index]}
                            </p>
                          )}
                        </div>
                      </div>

                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border transition-all duration-300 ${
                          isOpen
                            ? "border-blue-400/25 bg-blue-500/15 text-blue-200"
                            : "border-white/10 bg-white/[0.04] text-slate-200"
                        }`}
                      >
                        <Plus
                          className={`h-5 w-5 transition-transform duration-300 ${
                            isOpen ? "rotate-45" : "rotate-0"
                          }`}
                        />
                      </div>
                    </button>

                    <div
                      className={`grid transition-all duration-500 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-4 pb-4 sm:px-5 sm:pb-5">
                          <div className="ml-[3.15rem] border-t border-white/10 pt-4 sm:ml-[3.5rem]">
                            <p className="text-sm leading-8 text-slate-300 sm:text-base">
                              {pointDescriptions[index]}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* right content */}
            <div className="order-1 lg:order-2 lg:pl-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200 shadow-[0_0_30px_rgba(37,99,235,0.12)]">
                <Sparkles className="h-4 w-4" />
                After Launch
              </div>

              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
                Support Doesn’t End at Launch
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Launch is an important milestone, but it is not the end of the
                journey. HELPO stays available to support the project after
                go-live with guidance, refinement and future growth support where
                needed.
              </p>

              {/* premium support note */}
              <div className="mt-7 rounded-[1.6rem] border border-white/10 bg-[#07101d]/55 p-5 backdrop-blur">
                <p className="text-sm leading-8 text-slate-300 sm:text-base">
                  Post-launch support helps keep the project polished, usable and
                  ready for future improvements instead of treating launch as the
                  final endpoint.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}