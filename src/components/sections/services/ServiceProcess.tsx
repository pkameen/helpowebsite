"use client";

import {
  Search,
  ClipboardList,
  PencilRuler,
  Code2,
  ShieldCheck,
  Rocket,
  Sparkles,
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

export default function ServiceProcess() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
            <Sparkles className="h-4 w-4" />
            Our Process
          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Our Proven Development Process
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
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

        {/* tablet/mobile version */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:hidden">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-sm font-medium tracking-wider text-blue-200">
                    {step.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-4 text-base leading-8 text-slate-300">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}