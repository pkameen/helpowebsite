"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

const features = [
  "Premium dashboard UI and structured business modules",
  "Responsive admin experience with clean workflow layout",
  "Reporting, operations and management oriented architecture",
  "Scalable system foundation for long-term business use",
];

export default function FeaturedCaseStudy() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
            <Sparkles className="h-4 w-4" />
            Featured Case Study
          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            A Closer Look at a Premium Business System
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            A featured showcase of how HELPO approaches premium interface
            design, structured business workflows and modern system execution.
          </p>
        </div>

        {/* case study block */}
        <div className="relative mt-14 grid items-center gap-10 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-5 backdrop-blur lg:grid-cols-[1.05fr_0.95fr] lg:p-8">
          {/* left image */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#07101d]">
            <Image
              src="/images/portfolio/erp-2.jpg"
              alt="Featured ERP Case Study"
              width={1600}
              height={1100}
              className="h-auto w-full object-cover"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020617]/50 via-transparent to-transparent" />
          </div>

          {/* right content */}
          <div className="px-2 lg:px-4">
            <div className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
              ERP / Business Operations System
            </div>

            <h3 className="mt-6 text-3xl font-semibold leading-tight text-white md:text-4xl">
              Enterprise-Style ERP Platform for Business Workflow Management
            </h3>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              This project was designed as a premium business operations system
              focused on structured workflow management, reporting visibility,
              internal organization and a clean enterprise dashboard experience.
            </p>

            <div className="mt-8 space-y-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-300" />
                  <p className="text-base leading-8 text-slate-300">{feature}</p>
                </div>
              ))}
            </div>

            {/* small stat row */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.5rem] border border-white/10 bg-[#07101d]/60 p-5">
                <p className="text-2xl font-semibold text-white">Dashboard</p>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Premium admin experience
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-[#07101d]/60 p-5">
                <p className="text-2xl font-semibold text-white">Modules</p>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Finance, reporting, workflow
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-[#07101d]/60 p-5">
                <p className="text-2xl font-semibold text-white">Scalable</p>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Built for long-term growth
                </p>
              </div>
            </div>

            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-[#2563ff] px-6 py-4 text-base font-semibold text-white shadow-[0_20px_60px_rgba(37,99,235,0.35)] transition hover:-translate-y-0.5 hover:bg-[#1d4ed8]"
              >
                Build a Similar Project
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}