"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2.75rem] border border-white/10 bg-gradient-to-br from-[#07101d] via-[#0a1220] to-[#07101d] px-6 py-14 text-center shadow-[0_30px_120px_rgba(0,0,0,0.28)] md:px-10 md:py-16">
          {/* glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-60px] top-[-40px] h-56 w-56 rounded-full bg-blue-500/10 blur-[110px]" />
            <div className="absolute right-[-40px] bottom-[-40px] h-64 w-64 rounded-full bg-cyan-400/10 blur-[120px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
              <Sparkles className="h-4 w-4" />
              Let’s Start
            </div>

            <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Ready to Discuss Your Website or Web App Project?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              HELPO is ready to help you shape a premium digital experience with clarity, structure and a business-focused execution approach.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {["Premium Websites", "Web Apps", "Structured Process"].map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="#contact-form"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#2563ff] px-7 py-4 text-base font-semibold text-white shadow-[0_20px_60px_rgba(37,99,235,0.35)] transition hover:-translate-y-0.5 hover:bg-[#1d4ed8]"
              >
                Send an Enquiry
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/5 px-7 py-4 text-base font-semibold text-white/90 backdrop-blur transition hover:border-white/20 hover:bg-white/10"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}