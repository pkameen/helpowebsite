"use client";

import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  MessageSquareText,
  Rocket,
} from "lucide-react";

const points = [
  "Clear discussion before development begins",
  "Premium execution with business-focused thinking",
  "Structured workflow from enquiry to launch",
];

export default function ContactCTA() {
  return (
    <section className="relative pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2.75rem] border border-white/10 bg-gradient-to-br from-[#07101d] via-[#0a1220] to-[#07101d] p-6 shadow-[0_30px_120px_rgba(0,0,0,0.30)] backdrop-blur md:p-8 lg:p-10">
          {/* ambient glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-70px] top-[-50px] h-64 w-64 rounded-full bg-blue-500/12 blur-[120px]" />
            <div className="absolute right-[-50px] bottom-[-50px] h-72 w-72 rounded-full bg-cyan-400/10 blur-[130px]" />
            <div className="absolute left-1/2 top-1/2 h-72 w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/6 blur-[120px]" />
          </div>

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            {/* LEFT CONTENT */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
                <Sparkles className="h-4 w-4" />
                Let’s Start Your Project
              </div>

              <h2 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl xl:text-[3.3rem] xl:leading-[1.08]">
                Ready to Build a Premium Website or Web App
                <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-blue-600 bg-clip-text text-transparent">
                  For Your Business?
                </span>
              </h2>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                If you already have a project idea — or even if you only have an
                early concept — HELPO can help shape it into a premium digital
                experience with clear planning, professional execution and a
                strong business-focused approach.
              </p>

              {/* trust points */}
              <div className="mt-8 grid gap-3 sm:grid-cols-1 md:max-w-2xl">
                {points.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-[1.35rem] border border-white/10 bg-white/[0.03] px-4 py-4 backdrop-blur"
                  >
                    <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-blue-300" />
                    <p className="text-sm leading-7 text-slate-300 md:text-base">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT CTA CARD */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.28)] backdrop-blur md:p-7">
                {/* inner glow */}
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute right-[-30px] top-[-20px] h-36 w-36 rounded-full bg-blue-500/10 blur-[80px]" />
                  <div className="absolute left-[-20px] bottom-[-30px] h-36 w-36 rounded-full bg-cyan-400/10 blur-[80px]" />
                </div>

                <div className="relative z-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
                    <Rocket className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold text-white md:text-[1.75rem]">
                    Start the Conversation
                  </h3>

                  <p className="mt-4 text-base leading-8 text-slate-300">
                    Tell us what you want to build, what your business needs and
                    where you need clarity. We’ll help you move in the right
                    direction with a structured project discussion.
                  </p>

                  {/* mini badges */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    {["Premium Websites", "Web Apps", "Business Systems"].map(
                      (item) => (
                        <div
                          key={item}
                          className="rounded-full border border-white/10 bg-[#07101d]/70 px-4 py-2 text-sm text-slate-200"
                        >
                          {item}
                        </div>
                      )
                    )}
                  </div>

                  {/* buttons */}
                  <div className="mt-8 flex flex-col gap-3">
                    <Link
                      href="#contact-form"
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#2563ff] px-6 py-4 text-base font-semibold text-white shadow-[0_20px_60px_rgba(37,99,235,0.35)] transition hover:-translate-y-0.5 hover:bg-[#1d4ed8]"
                    >
                      Send Project Enquiry
                      <ArrowRight className="h-5 w-5" />
                    </Link>

                    <Link
                      href="/services"
                      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/12 bg-white/5 px-6 py-4 text-base font-semibold text-white/90 backdrop-blur transition hover:border-white/20 hover:bg-white/10"
                    >
                      <MessageSquareText className="h-5 w-5" />
                      Explore Services
                    </Link>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-slate-400">
                    HELPO focuses on premium digital execution, structured
                    planning and long-term business value — not just visual
                    output.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}