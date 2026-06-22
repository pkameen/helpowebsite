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
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2.75rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur md:p-8">
          {/* glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-60px] top-[-40px] h-56 w-56 rounded-full bg-blue-500/10 blur-[110px]" />
            <div className="absolute right-[-40px] bottom-[-40px] h-64 w-64 rounded-full bg-cyan-400/10 blur-[120px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
              <Sparkles className="h-4 w-4" />
              Client Confidence
            </div>

            <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Businesses Choose HELPO for Premium Digital Execution
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              From brand websites to ecommerce platforms and internal business
              systems, our work is designed to feel premium, structured and
              business-focused from start to finish.
            </p>
          </div>

          <div className="relative z-10 mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="rounded-[2rem] border border-white/10 bg-[#07101d]/70 p-6 backdrop-blur"
              >
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-blue-300">
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                    <Star className="h-4 w-4 fill-current" />
                  </div>

                  <Quote className="h-6 w-6 text-blue-300/70" />
                </div>

                <p className="mt-6 text-sm leading-8 text-slate-300">
                  “{item.text}”
                </p>

                <div className="mt-8 border-t border-white/10 pt-5">
                  <h4 className="text-base font-semibold text-white">
                    {item.name}
                  </h4>
                  <p className="mt-1 text-sm text-slate-400">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}