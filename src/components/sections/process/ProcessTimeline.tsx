"use client";

import { useState } from "react";
import { Sparkles, Plus, ArrowUpRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery & Requirement Discussion",
    description:
      "We begin by understanding your business, project goals, audience and the exact type of website, web app or system you need.",
  },
  {
    number: "02",
    title: "Strategy & Project Planning",
    description:
      "After understanding the requirements, we define the structure, page flow, features, priorities and execution direction for the project.",
  },
  {
    number: "03",
    title: "UI / UX Design & Visual Direction",
    description:
      "We craft the visual style, layout direction, interface presentation and premium design structure that fits your business image.",
  },
  {
    number: "04",
    title: "Development & System Building",
    description:
      "Once the direction is clear, we start building the actual website, web app or business system with modern development standards.",
  },
  {
    number: "05",
    title: "Testing, Refinement & Final Review",
    description:
      "Before launch, the project is reviewed carefully to improve polish, responsiveness, usability and overall quality.",
  },
  {
    number: "06",
    title: "Launch, Handover & Support",
    description:
      "After final approval, the project is launched and handed over properly with support for deployment, guidance and future improvements.",
  },
];

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState("01");

  const toggleStep = (stepNumber: string) => {
    setActiveStep((prev) => (prev === stepNumber ? "" : stepNumber));
  };

  return (
    <section className="relative pb-24 md:pb-28">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[6%] top-10 h-64 w-64 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute right-[8%] top-28 h-72 w-72 rounded-full bg-cyan-400/10 blur-[140px]" />
        <div className="absolute bottom-0 left-1/2 h-72 w-[55%] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        {/* heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200 shadow-[0_0_30px_rgba(37,99,235,0.12)]">
            <Sparkles className="h-4 w-4" />
            Our Working Process
          </div>

          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            From Idea to Launch — Step by Step
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
            Every HELPO project follows a structured workflow designed to reduce
            confusion, improve execution quality and keep the final result aligned
            with real business goals.
          </p>
        </div>

        <div className="relative mt-14 md:mt-16">
          {/* center timeline line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-blue-500/40 via-white/10 to-transparent xl:block" />

          <div className="space-y-5 sm:space-y-6 xl:space-y-8">
            {steps.map((step, index) => {
              const isRight = index % 2 !== 0;
              const isOpen = activeStep === step.number;

              return (
                <div
                  key={step.number}
                  className={`relative grid gap-5 xl:grid-cols-2 ${
                    isRight ? "xl:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* empty side for alternating desktop layout */}
                  <div className="hidden xl:block" />

                  {/* CARD */}
                  <div
                    className={`group relative xl:max-w-[560px] ${
                      isRight ? "xl:ml-auto" : ""
                    }`}
                  >
                    {/* desktop timeline connector dot */}
                    <div
                      className={`absolute top-10 hidden xl:block ${
                        isRight ? "left-[-43px]" : "right-[-43px]"
                      }`}
                    >
                      <div
                        className={`relative flex h-5 w-5 items-center justify-center rounded-full border-4 border-[#020617] transition-all duration-300 ${
                          isOpen ? "bg-blue-400" : "bg-slate-500/60"
                        }`}
                      >
                        <div
                          className={`absolute h-10 w-10 rounded-full blur-xl transition ${
                            isOpen ? "bg-blue-500/35" : "bg-transparent"
                          }`}
                        />
                      </div>
                    </div>

                    {/* premium outer glow */}
                    <div
                      className={`absolute inset-0 rounded-[2rem] transition duration-500 ${
                        isOpen
                          ? "bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_42%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.10),transparent_35%)] opacity-100"
                          : "opacity-70"
                      }`}
                    />

                    <div
                      onClick={() => toggleStep(step.number)}
                      className={`relative cursor-pointer overflow-hidden rounded-[1.7rem] border backdrop-blur transition-all duration-300 sm:rounded-[2rem] ${
                        isOpen
                          ? "border-blue-400/30 bg-[linear-gradient(180deg,rgba(9,18,34,0.92),rgba(7,16,29,0.88))] shadow-[0_25px_80px_rgba(37,99,235,0.16)]"
                          : "border-white/10 bg-white/[0.035] hover:border-white/15 hover:bg-white/[0.05]"
                      }`}
                    >
                      {/* decorative glows */}
                      <div className="pointer-events-none absolute inset-0 overflow-hidden">
                        <div
                          className={`absolute -left-10 top-0 h-36 w-36 rounded-full bg-blue-500/10 blur-[90px] transition ${
                            isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                          }`}
                        />
                        <div
                          className={`absolute right-0 top-0 h-24 w-24 rounded-full bg-cyan-400/10 blur-[70px] transition ${
                            isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                          }`}
                        />
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                      </div>

                      {/* compact premium header */}
                      <div className="relative z-10 p-4 sm:p-5 xl:p-6">
                        <div className="flex items-start gap-4">
                          {/* left number block */}
                          <div className="shrink-0">
                            <div
                              className={`relative flex h-14 w-14 items-center justify-center rounded-2xl border text-sm font-semibold transition sm:h-16 sm:w-16 sm:text-base ${
                                isOpen
                                  ? "border-blue-400/25 bg-blue-500/15 text-blue-200 shadow-[0_10px_40px_rgba(37,99,235,0.18)]"
                                  : "border-white/10 bg-[#0b1425]/70 text-slate-200"
                              }`}
                            >
                              <div className="absolute inset-[6px] rounded-[1rem] border border-white/10" />
                              <span className="relative z-10">{step.number}</span>
                            </div>
                          </div>

                          {/* right content */}
                          <div className="min-w-0 flex-1">
                            {/* desktop badge */}
                            <div className="hidden xl:block">
                              <span
                                className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium tracking-[0.18em] uppercase transition ${
                                  isOpen
                                    ? "border-blue-500/20 bg-blue-500/10 text-blue-200"
                                    : "border-white/10 bg-white/[0.03] text-slate-300"
                                }`}
                              >
                                Step {step.number}
                              </span>
                            </div>

                            <div className="mt-0 xl:mt-4 flex items-start justify-between gap-4">
                              <div>
                                <h3 className="text-lg font-semibold leading-snug text-white sm:text-xl xl:text-2xl">
                                  {step.title}
                                </h3>

                                {/* mobile short label */}
                                <p className="mt-2 text-xs uppercase tracking-[0.24em] text-slate-400 xl:hidden">
                                  Step {step.number}
                                </p>
                              </div>

                              {/* open-close icon */}
                              <div
                                className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border transition ${
                                  isOpen
                                    ? "border-blue-400/25 bg-blue-500/15 text-blue-200"
                                    : "border-white/10 bg-white/[0.03] text-slate-300"
                                }`}
                              >
                                <Plus
                                  className={`h-4 w-4 transition duration-300 ${
                                    isOpen ? "rotate-45" : "rotate-0"
                                  }`}
                                />
                              </div>
                            </div>

                            {/* small preview line when closed */}
                            {!isOpen && (
                              <p className="mt-4 line-clamp-2 max-w-[92%] text-sm leading-7 text-slate-400 sm:text-[15px]">
                                {step.description}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* expandable content */}
                        <div
                          className={`grid transition-all duration-500 ease-out ${
                            isOpen
                              ? "mt-5 grid-rows-[1fr] opacity-100"
                              : "mt-0 grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <div className="ml-0 border-t border-white/10 pt-5 sm:pt-6">
                              <div className="rounded-[1.4rem] border border-white/10 bg-[#07101d]/60 p-4 sm:p-5">
                                <div className="mb-3 flex items-center gap-2 text-blue-200">
                                  <ArrowUpRight className="h-4 w-4" />
                                  <span className="text-xs font-medium uppercase tracking-[0.22em] text-blue-200/90">
                                    Process Details
                                  </span>
                                </div>

                                <p className="text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
                                  {step.description}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* bottom premium accent */}
                      <div
                        className={`pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent transition ${
                          isOpen ? "opacity-100" : "opacity-0"
                        }`}
                      />
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