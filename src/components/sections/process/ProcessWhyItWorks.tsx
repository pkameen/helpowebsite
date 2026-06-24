"use client";

import { useState } from "react";
import { CheckCircle2, Sparkles, Plus } from "lucide-react";

const points = [
  {
    title: "Clarity From the Start",
    preview:
      "A clear process reduces confusion and keeps the project aligned from the beginning.",
    expanded:
      "Instead of jumping directly into design or development, the project starts with clarity around goals, scope and expectations. This helps both sides stay aligned and reduces unnecessary back-and-forth later.",
  },
  {
    title: "Smarter Planning Before Execution",
    preview:
      "Planning before development helps build the right structure instead of rushing into random execution.",
    expanded:
      "By deciding page flow, features, priorities and system direction early, the project gets a stronger foundation. That leads to better decision-making during design and development.",
  },
  {
    title: "Better Brand Presentation",
    preview:
      "Premium design direction improves presentation, trust and the overall brand experience.",
    expanded:
      "A strong visual direction is not only about aesthetics. It shapes how your business is perceived online, improves credibility and helps the final product feel more premium and intentional.",
  },
  {
    title: "Higher Quality Final Output",
    preview:
      "Testing and refinement help ensure quality, responsiveness and a cleaner final result.",
    expanded:
      "Reviewing the project before launch helps catch visual inconsistencies, responsiveness issues and usability problems. That extra refinement stage makes the final product feel much more polished.",
  },
  {
    title: "Easier Launch & Future Growth",
    preview:
      "A structured launch and handover process makes the project easier to use, manage and grow later.",
    expanded:
      "A project should not feel confusing after delivery. Proper launch support, handover guidance and organized structure make it easier to manage the product and expand it in the future.",
  },
  {
    title: "Business-Focused Thinking",
    preview:
      "HELPO focuses on business goals, not just visual output — so the final result is more useful in the long run.",
    expanded:
      "The goal is not only to make something look good. The process is built around practical business use, user experience, presentation quality and long-term value so the project serves a real purpose.",
  },
];

export default function ProcessWhyItWorks() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const toggleCard = (index: number) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section className="relative pb-24 md:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 backdrop-blur sm:rounded-[2.5rem] sm:p-6 md:p-8 lg:p-10">
          {/* glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-50px] top-[-40px] h-56 w-56 rounded-full bg-blue-500/10 blur-[110px]" />
            <div className="absolute right-[-40px] bottom-[-40px] h-64 w-64 rounded-full bg-cyan-400/10 blur-[120px]" />
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[120px]" />
          </div>

          <div className="relative z-10 grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
            {/* LEFT CONTENT */}
            <div className="lg:sticky lg:top-24">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200 shadow-[0_0_30px_rgba(37,99,235,0.12)]">
                <Sparkles className="h-4 w-4" />
                Why This Process Works
              </div>

              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
                A Better Process Leads to a Better Final Product
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
                A strong digital project is not created by design alone or by
                coding quickly. It comes from a structured process where planning,
                execution, refinement and launch all work together with purpose.
              </p>
            </div>

            {/* RIGHT ACCORDION CARDS */}
            <div className="grid gap-4">
              {points.map((point, index) => {
                const isOpen = activeIndex === index;

                return (
                  <div
                    key={index}
                    className={`group relative overflow-hidden rounded-[1.4rem] border transition-all duration-300 sm:rounded-[1.6rem] ${
                      isOpen
                        ? "border-blue-400/30 bg-[linear-gradient(180deg,rgba(9,18,34,0.92),rgba(7,16,29,0.88))] shadow-[0_20px_70px_rgba(37,99,235,0.14)]"
                        : "border-white/10 bg-[#07101d]/55 hover:border-white/15 hover:bg-[#07101d]/70"
                    }`}
                  >
                    {/* glow */}
                    <div className="pointer-events-none absolute inset-0 overflow-hidden">
                      <div
                        className={`absolute -left-8 top-0 h-28 w-28 rounded-full bg-blue-500/10 blur-[80px] transition ${
                          isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                        }`}
                      />
                      <div
                        className={`absolute right-0 top-0 h-24 w-24 rounded-full bg-cyan-400/10 blur-[70px] transition ${
                          isOpen ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    </div>

                    {/* header */}
                    <button
                      type="button"
                      onClick={() => toggleCard(index)}
                      className="relative z-10 flex w-full items-start gap-4 p-4 text-left sm:p-5"
                    >
                      <div
                        className={`mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border transition ${
                          isOpen
                            ? "border-blue-400/25 bg-blue-500/15 text-blue-300"
                            : "border-white/10 bg-white/[0.03] text-blue-300"
                        }`}
                      >
                        <CheckCircle2 className="h-5 w-5" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="text-sm font-medium uppercase tracking-[0.22em] text-blue-200/80">
                              Point {String(index + 1).padStart(2, "0")}
                            </p>

                            <h3 className="mt-2 text-base font-medium leading-7 text-white sm:text-lg sm:leading-8">
                              {point.title}
                            </h3>
                          </div>

                          <div
                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border transition ${
                              isOpen
                                ? "border-blue-400/25 bg-blue-500/15 text-blue-200"
                                : "border-white/10 bg-white/[0.03] text-slate-300"
                            }`}
                          >
                            <Plus
                              className={`h-4 w-4 transition duration-300 ${
                                isOpen ? "rotate-45" : ""
                              }`}
                            />
                          </div>
                        </div>
                      </div>
                    </button>

                    {/* expandable content */}
                    <div
                      className={`grid transition-all duration-500 ease-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="relative z-10 px-4 pb-4 sm:px-5 sm:pb-5">
                          <div className="ml-[3.4rem] rounded-[1.2rem] border border-white/10 bg-white/[0.03] p-4 sm:ml-[3.75rem]">
                            <p className="text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                              {point.expanded}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* bottom accent */}
                    <div
                      className={`pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent transition ${
                        isOpen ? "opacity-100" : "opacity-0"
                      }`}
                    />
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