"use client";

import { MessageSquareText, Sparkles, Clock3, ShieldCheck } from "lucide-react";

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
  return (
    <section className="relative pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          {/* left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
              <Sparkles className="h-4 w-4" />
              Client Experience
            </div>

            <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              A Smooth, Professional Experience from Start to Finish
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              HELPO’s process is designed not only to build a good final product,
              but also to make the entire journey easier for the client. We focus
              on clarity, structure and premium handling throughout the project.
            </p>
          </div>

          {/* right cards */}
          <div className="grid gap-5">
            {items.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-2xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-base leading-8 text-slate-300">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}