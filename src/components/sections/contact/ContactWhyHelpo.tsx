"use client";

import { useState } from "react";
import { CheckCircle2, Sparkles, ChevronDown } from "lucide-react";

const points = [
  "Premium website and web app execution with a clean, professional approach.",
  "Clear process from discussion to launch, so the project feels structured and easier to manage.",
  "Business-focused thinking that goes beyond visuals and considers usability, clarity and long-term value.",
  "Supportive project discussion to help define the right direction before development begins.",
  "A modern digital presentation style designed to strengthen trust and brand perception.",
  "Launch-oriented execution with room for future improvements, upgrades and scaling.",
];

export default function ContactWhyHelpo() {
  const [openBenefits, setOpenBenefits] = useState(false);

  return (
    <section className="relative pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2.75rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur shadow-[0_30px_120px_rgba(0,0,0,0.22)] md:p-8 lg:p-10">
          {/* glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-50px] top-[-40px] h-56 w-56 rounded-full bg-blue-500/10 blur-[110px]" />
            <div className="absolute right-[-40px] bottom-[-40px] h-64 w-64 rounded-full bg-cyan-400/10 blur-[120px]" />
          </div>

          <div className="relative z-10 grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
            {/* LEFT CONTENT - always visible */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
                <Sparkles className="h-4 w-4" />
                Why Contact HELPO
              </div>

              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                A Premium Agency Approach to Every Project Discussion
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
                HELPO is focused on building premium digital solutions with clarity,
                structure and a strong business mindset. From the first enquiry itself,
                the goal is to understand the project properly and guide it in the right direction.
              </p>
            </div>

            {/* RIGHT SIDE */}
            <div>
              {/* MOBILE ACCORDION HEADER */}
              <button
                type="button"
                onClick={() => setOpenBenefits((prev) => !prev)}
                className="group relative flex w-full items-center justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-[#07101d]/65 p-5 text-left shadow-[0_20px_80px_rgba(0,0,0,0.18)] backdrop-blur lg:hidden"
              >
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute -left-8 top-0 h-24 w-24 rounded-full bg-blue-500/10 blur-[70px]" />
                  <div className="absolute right-0 bottom-0 h-20 w-20 rounded-full bg-cyan-400/10 blur-[70px]" />
                </div>

                <div className="relative z-10 pr-4">
                  <p className="text-lg font-semibold text-white">
                    Why clients contact HELPO
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-400">
                    Tap to view the key reasons and benefits
                  </p>
                </div>

                <div
                  className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-200 transition duration-300 ${
                    openBenefits ? "rotate-180" : ""
                  }`}
                >
                  <ChevronDown className="h-5 w-5" />
                </div>
              </button>

              {/* DESKTOP + MOBILE EXPANDABLE CONTENT */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-out ${
                  openBenefits ? "max-h-[2000px] opacity-100 mt-4" : "max-h-0 opacity-0 lg:mt-0"
                } lg:max-h-none lg:opacity-100`}
              >
                <div className="grid gap-4">
                  {points.map((point, index) => (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#07101d]/60 p-5 shadow-[0_10px_40px_rgba(0,0,0,0.14)] transition duration-300 hover:border-blue-400/20 hover:bg-[#0a1526]"
                    >
                      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                        <div className="absolute -left-6 top-0 h-20 w-20 rounded-full bg-blue-500/10 blur-[60px]" />
                      </div>

                      <div className="relative z-10 flex items-start gap-4">
                        <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-blue-500/12 text-blue-300 ring-1 ring-blue-400/10">
                          <CheckCircle2 className="h-5 w-5" />
                        </div>

                        <p className="text-base leading-8 text-slate-300">
                          {point}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* END RIGHT */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}