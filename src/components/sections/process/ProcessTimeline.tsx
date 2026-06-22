"use client";

import { Sparkles } from "lucide-react";

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
  return (
    <section className="relative pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
            <Sparkles className="h-4 w-4" />
            Our Working Process
          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            From Idea to Launch — Step by Step
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            Every HELPO project follows a structured workflow designed to reduce
            confusion, improve execution quality and keep the final result aligned
            with real business goals.
          </p>
        </div>

        <div className="relative mt-16">
          {/* center line */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-blue-500/40 via-white/10 to-transparent md:block xl:left-1/2 xl:-translate-x-1/2" />

          <div className="space-y-8 md:space-y-10">
            {steps.map((step, index) => {
              const isRight = index % 2 !== 0;

              return (
                <div
                  key={step.number}
                  className={`relative grid gap-6 xl:grid-cols-2 ${
                    isRight ? "xl:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="hidden xl:block" />

                  <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur xl:max-w-[560px] xl:px-8 xl:py-8 xl:shadow-[0_20px_60px_rgba(0,0,0,0.18)]">
                    {/* mobile / tablet marker */}
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-lg font-semibold text-blue-300 xl:hidden">
                      {step.number}
                    </div>

                    {/* desktop timeline dot */}
                    <div className="absolute top-10 hidden h-5 w-5 rounded-full border-4 border-[#020617] bg-blue-400 xl:block xl:left-auto xl:right-[-46px]" />
                    {!isRight && (
                      <div className="absolute top-10 hidden h-5 w-5 rounded-full border-4 border-[#020617] bg-blue-400 xl:left-[-46px] xl:block" />
                    )}

                    <div className="hidden xl:block">
                      <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-200">
                        Step {step.number}
                      </span>
                    </div>

                    <h3 className="mt-2 text-2xl font-semibold text-white xl:mt-5">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-base leading-8 text-slate-300">
                      {step.description}
                    </p>
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