"use client";

import { Quote, Star, Sparkles } from "lucide-react";

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

export default function ContactTrustStrip() {
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
              A Professional Experience Begins from the First Conversation
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              HELPO focuses on making project discussions clear, structured and business-oriented so clients feel confident even before development begins.
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