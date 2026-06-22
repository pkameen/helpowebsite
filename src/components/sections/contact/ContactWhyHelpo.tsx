"use client";

import { CheckCircle2, Sparkles } from "lucide-react";

const points = [
  "Premium website and web app execution with a clean, professional approach.",
  "Clear process from discussion to launch, so the project feels structured and easier to manage.",
  "Business-focused thinking that goes beyond visuals and considers usability, clarity and long-term value.",
  "Supportive project discussion to help define the right direction before development begins.",
  "A modern digital presentation style designed to strengthen trust and brand perception.",
  "Launch-oriented execution with room for future improvements, upgrades and scaling.",
];

export default function ContactWhyHelpo() {
  return (
    <section className="relative pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2.75rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur md:p-8 lg:p-10">
          {/* glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-50px] top-[-40px] h-56 w-56 rounded-full bg-blue-500/10 blur-[110px]" />
            <div className="absolute right-[-40px] bottom-[-40px] h-64 w-64 rounded-full bg-cyan-400/10 blur-[120px]" />
          </div>

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
                <Sparkles className="h-4 w-4" />
                Why Contact HELPO
              </div>

              <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                A Premium Agency Approach to Every Project Discussion
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-300">
                HELPO is focused on building premium digital solutions with clarity,
                structure and a strong business mindset. From the first enquiry itself,
                the goal is to understand the project properly and guide it in the right direction.
              </p>
            </div>

            <div className="grid gap-4">
              {points.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-[1.5rem] border border-white/10 bg-[#07101d]/60 p-5"
                >
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-300" />
                  <p className="text-base leading-8 text-slate-300">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}