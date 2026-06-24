"use client";

import { useState } from "react";
import { Quote, Star, Sparkles, Plus } from "lucide-react";

const testimonials = [
  {
    name: "Business Website Client",
    role: "Corporate Web Project",
    text: "HELPO handled the project discussion clearly and professionally, which made the entire website process feel structured and easy to trust.",
  },
  {
    name: "Ecommerce Client",
    role: "Online Store Project",
    text: "From the first enquiry itself, the communication felt premium and business-focused. The final result matched that same quality.",
  },
  {
    name: "Web App Client",
    role: "Internal System Project",
    text: "The project was approached with clarity, planning and a professional workflow. That made a big difference in the overall experience.",
  },
];

function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function ContactTrustStrip() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleCard = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2.75rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur md:p-8 lg:p-10">
          {/* glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-60px] top-[-40px] h-56 w-56 rounded-full bg-blue-500/10 blur-[110px]" />
            <div className="absolute right-[-40px] bottom-[-40px] h-64 w-64 rounded-full bg-cyan-400/10 blur-[120px]" />
          </div>

          {/* heading */}
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
              <Sparkles className="h-4 w-4" />
              Client Confidence
            </div>

            <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              A Professional Experience Begins from the First Conversation
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              HELPO focuses on making project discussions clear, structured and
              business-oriented so clients feel confident even before development
              begins.
            </p>
          </div>

          {/* desktop cards */}
          <div className="relative z-10 mt-12 hidden gap-6 lg:grid lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#07101d]/70 p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-[#091426]/80"
              >
                <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                  <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-blue-500/10 blur-[90px]" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1 text-blue-300">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-blue-300/80">
                      <Quote className="h-5 w-5" />
                    </div>
                  </div>

                  <p className="mt-6 text-base leading-8 text-slate-300">
                    “{item.text}”
                  </p>

                  <div className="mt-8 border-t border-white/10 pt-5">
                    <h4 className="text-base font-semibold text-white">
                      {item.name}
                    </h4>
                    <p className="mt-1 text-sm text-slate-400">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* mobile / tablet interactive stacked cards */}
          <div className="relative z-10 mt-12 space-y-4 lg:hidden">
            {testimonials.map((item, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={index}
                  className={cn(
                    "overflow-hidden rounded-[1.8rem] border backdrop-blur transition-all duration-300",
                    isActive
                      ? "border-blue-400/30 bg-[#081120]/90 shadow-[0_20px_70px_rgba(37,99,235,0.14)]"
                      : "border-white/10 bg-white/[0.03]"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => toggleCard(index)}
                    className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left"
                  >
                    <div>
                      <div className="flex gap-1 text-blue-300">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>

                      <h4 className="mt-4 text-lg font-semibold text-white">
                        {item.name}
                      </h4>
                      <p className="mt-1 text-sm text-slate-400">{item.role}</p>
                    </div>

                    <div
                      className={cn(
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition duration-300",
                        isActive
                          ? "rotate-45 border-blue-400/30 bg-blue-500/15 text-blue-200"
                          : "border-white/10 bg-white/5 text-slate-200"
                      )}
                    >
                      <Plus className="h-5 w-5" />
                    </div>
                  </button>

                  <div
                    className={cn(
                      "grid transition-all duration-500 ease-in-out",
                      isActive
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5">
                        <div className="rounded-[1.4rem] border border-white/10 bg-[#07101d]/70 p-5">
                          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-blue-300/80">
                            <Quote className="h-5 w-5" />
                          </div>

                          <p className="text-sm leading-8 text-slate-300">
                            “{item.text}”
                          </p>
                        </div>
                      </div>
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