"use client";

import { Quote, Star, Sparkles } from "lucide-react";

const testimonials = [
  {
    name: "Business Website Client",
    role: "Corporate Brand Project",
    text: "HELPO delivered a clean, premium and highly professional website experience that elevated our brand presentation significantly.",
  },
  {
    name: "ERP System Client",
    role: "Operations Management Project",
    text: "The dashboard structure, workflow thinking and overall execution felt very business-focused and professionally handled.",
  },
  {
    name: "Ecommerce Client",
    role: "Online Store Project",
    text: "The final ecommerce presentation looked premium, modern and conversion-focused. The overall quality exceeded expectations.",
  },
];

export default function PortfolioTrustStrip() {
  return (
    <section className="relative pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-4 shadow-[0_30px_120px_rgba(2,6,23,0.38)] backdrop-blur sm:rounded-[2.25rem] sm:p-6 md:p-8 lg:rounded-[2.75rem]">
          {/* glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-60px] top-[-40px] h-56 w-56 rounded-full bg-blue-500/10 blur-[110px]" />
            <div className="absolute right-[-40px] bottom-[-40px] h-64 w-64 rounded-full bg-cyan-400/10 blur-[120px]" />
            <div className="absolute left-1/2 top-1/2 h-48 w-[45%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/6 blur-[120px]" />
          </div>

          {/* subtle grid overlay */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:34px_34px]" />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs text-blue-200 shadow-[0_0_30px_rgba(37,99,235,0.12)] sm:text-sm">
              <Sparkles className="h-4 w-4" />
              Client Confidence
            </div>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:mt-6 md:text-5xl">
              Businesses Choose HELPO for Premium Digital Execution
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8 md:mt-5 md:text-lg">
              From brand websites to ecommerce platforms and internal business
              systems, our work is designed to feel premium, structured and
              business-focused from start to finish.
            </p>
          </div>

          {/* cards */}
          <div className="relative z-10 mt-10 grid gap-4 sm:gap-5 lg:mt-12 lg:grid-cols-3 lg:gap-6">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#07101d]/72 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-blue-400/25 hover:bg-[#081325]/90 sm:rounded-[1.75rem] sm:p-6 lg:rounded-[2rem]"
              >
                {/* hover glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                  <div className="absolute -left-10 top-0 h-32 w-32 rounded-full bg-blue-500/12 blur-[90px]" />
                  <div className="absolute right-0 bottom-0 h-28 w-28 rounded-full bg-cyan-400/10 blur-[80px]" />
                </div>

                <div className="relative z-10">
                  {/* top row */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex gap-1 text-blue-300">
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                      <Star className="h-4 w-4 fill-current" />
                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-blue-300/80">
                      <Quote className="h-5 w-5" />
                    </div>
                  </div>

                  {/* testimonial text */}
                  <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-[15px] sm:leading-8">
                    “{item.text}”
                  </p>

                  {/* footer */}
                  <div className="mt-6 border-t border-white/10 pt-5 sm:mt-8">
                    <h4 className="text-[15px] font-semibold text-white sm:text-base">
                      {item.name}
                    </h4>
                    <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* bottom trust note */}
          <div className="relative z-10 mt-8 rounded-[1.5rem] border border-white/10 bg-[#07101d]/45 px-4 py-4 text-center backdrop-blur sm:mt-10 sm:px-6 sm:py-5">
            <p className="text-sm leading-7 text-slate-300 sm:text-base">
              HELPO focuses on <span className="font-medium text-white">premium presentation</span>,{" "}
              <span className="font-medium text-white">structured execution</span> and{" "}
              <span className="font-medium text-white">business-focused digital products</span>{" "}
              that look polished and feel professional across every project type.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}