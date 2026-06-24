"use client";

import { useState } from "react";
import {
  Search,
  ClipboardList,
  PencilRuler,
  Code2,
  ShieldCheck,
  Rocket,
  Sparkles,
  ChevronDown,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We understand your business goals, audience and exact project requirements.",
    icon: Search,
  },
  {
    number: "02",
    title: "Planning",
    description:
      "We define structure, features, scope and project roadmap before execution.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Design",
    description:
      "We create the premium visual direction, UI layout and modern user experience.",
    icon: PencilRuler,
  },
  {
    number: "04",
    title: "Development",
    description:
      "The approved design is transformed into a clean, scalable and high-quality product.",
    icon: Code2,
  },
  {
    number: "05",
    title: "Testing",
    description:
      "We review responsiveness, polish and functionality before launch.",
    icon: ShieldCheck,
  },
  {
    number: "06",
    title: "Launch",
    description:
      "We deploy the project properly and support the post-launch stage.",
    icon: Rocket,
  },
];

type ProcessCardProps = {
  step: (typeof steps)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
};

function MobileProcessCard({
  step,
  index,
  isOpen,
  onToggle,
}: ProcessCardProps) {
  const Icon = step.icon;

  return (
    <div
      className={`group relative overflow-hidden rounded-[1.7rem] border backdrop-blur transition-all duration-300 ${
        isOpen
          ? "border-blue-400/30 bg-white/[0.06] shadow-[0_20px_70px_rgba(37,99,235,0.12)]"
          : "border-white/10 bg-white/[0.03]"
      }`}
    >
      {/* active glow */}
      <div
        className={`pointer-events-none absolute inset-0 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute -left-10 top-0 h-28 w-28 rounded-full bg-blue-500/10 blur-[80px]" />
      </div>

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`process-step-${index}`}
        className="relative z-10 w-full px-4 py-4 text-left sm:px-5 sm:py-5"
      >
        <div className="flex items-start gap-3">
          {/* step number */}
          <div className="flex shrink-0 flex-col items-center">
            <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-[11px] font-medium tracking-[0.22em] text-blue-200 sm:text-xs">
              {step.number}
            </span>

            <div className="mt-3 h-full w-px bg-gradient-to-b from-blue-500/25 to-transparent" />
          </div>

          {/* content */}
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl transition-all duration-300 ${
                      isOpen
                        ? "bg-blue-500/18 text-blue-300 shadow-[0_0_30px_rgba(59,130,246,0.12)]"
                        : "bg-blue-500/12 text-blue-300"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="text-base font-semibold leading-6 text-white sm:text-lg">
                    {step.title}
                  </h3>
                </div>
              </div>

              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                  isOpen
                    ? "border-blue-400/30 bg-blue-500/10 text-blue-300"
                    : "border-white/10 bg-white/5 text-slate-300"
                }`}
              >
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
            </div>

            <div
              id={`process-step-${index}`}
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] pt-4" : "grid-rows-[0fr] pt-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="border-t border-white/8 pt-4">
                  <p className="text-sm leading-7 text-slate-300 sm:text-[15px]">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

export default function ServiceProcess() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative py-20 md:py-24">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-8%] top-16 h-[260px] w-[260px] rounded-full bg-blue-500/8 blur-[120px]" />
        <div className="absolute right-[-10%] bottom-10 h-[300px] w-[300px] rounded-full bg-cyan-400/8 blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6">
        {/* heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs text-blue-200 shadow-[0_0_30px_rgba(37,99,235,0.12)] sm:text-sm">
            <Sparkles className="h-4 w-4" />
            Our Process
          </div>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:mt-6 md:text-5xl">
            Our Proven Development Process
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8 md:mt-5 md:text-lg">
            A structured process that ensures clarity, quality and smooth
            delivery from idea to launch.
          </p>
        </div>

        {/* desktop timeline */}
        <div className="mt-16 hidden xl:block">
          <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.03] px-8 py-10 backdrop-blur">
            <div className="relative grid grid-cols-6 gap-6">
              {/* center line */}
              <div className="absolute left-[8%] right-[8%] top-[4.8rem] h-px bg-gradient-to-r from-blue-500/0 via-blue-500/60 to-blue-500/0" />

              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div key={index} className="relative text-center">
                    {/* number */}
                    <div className="mx-auto mb-4 flex w-fit items-center justify-center rounded-full border border-blue-400/20 bg-blue-500/15 px-3 py-1 text-sm font-medium tracking-wider text-blue-200">
                      {step.number}
                    </div>

                    {/* icon circle */}
                    <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-blue-400/20 bg-[#08101d] shadow-[0_0_40px_rgba(37,99,235,0.15)]">
                      <div className="absolute inset-2 rounded-full border border-blue-500/10" />
                      <Icon className="h-8 w-8 text-blue-300" />
                    </div>

                    <h3 className="mt-6 text-2xl font-semibold text-white">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* tablet / mobile accordion version */}
        <div className="mt-10 space-y-4 md:mt-14 xl:hidden">
          {steps.map((step, index) => (
            <MobileProcessCard
              key={index}
              step={step}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}