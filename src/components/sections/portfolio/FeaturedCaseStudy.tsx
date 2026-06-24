"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const features = [
  "Premium dashboard UI and business modules",
  "Clean workflow-focused admin experience",
  "Scalable architecture for long-term use",
];

const stats = [
  {
    title: "Dashboard",
    text: "Admin UI",
  },
  {
    title: "Modules",
    text: "Workflow & reports",
  },
  {
    title: "Scalable",
    text: "Business growth ready",
  },
];

export default function FeaturedCaseStudy() {
  return (
    <section className="relative py-16 md:py-20 lg:py-24">
      {/* glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[8%] top-10 h-56 w-56 rounded-full bg-blue-500/10 blur-[100px]" />
        <div className="absolute right-[8%] top-16 h-64 w-64 rounded-full bg-cyan-400/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/2 h-56 w-[60%] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        {/* heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-medium text-blue-200 shadow-[0_0_30px_rgba(37,99,235,0.12)] sm:text-sm">
            <Sparkles className="h-4 w-4" />
            Featured Case Study
          </div>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Premium ERP System Showcase
          </h2>

          <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">
            A premium business operations platform focused on dashboard clarity,
            workflow structure and enterprise-style user experience.
          </p>
        </div>

        {/* main showcase block */}
        <div className="relative mt-12 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-[0_30px_120px_rgba(2,6,23,0.45)] backdrop-blur sm:p-5 lg:rounded-[2.5rem] lg:p-8">
          {/* inner ambient glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-12 top-10 h-40 w-40 rounded-full bg-blue-500/10 blur-[100px]" />
            <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-cyan-400/10 blur-[120px]" />
          </div>

          <div className="relative grid items-center gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
            {/* IMAGE SIDE */}
            <div className="order-1 relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#07101d] sm:rounded-[2rem]">
              <Image
                src="/images/portfolio/erp-2.jpg"
                alt="Featured ERP Case Study"
                width={1600}
                height={1100}
                className="h-full w-full object-cover"
              />

              {/* image overlays */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020617]/60 via-transparent to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_35%)]" />

              {/* floating top label desktop */}
              <div className="absolute left-1/2 top-4 z-20 hidden -translate-x-1/2 rounded-full border border-white/10 bg-[#07101d]/80 px-4 py-2 text-xs font-medium text-slate-200 backdrop-blur md:flex lg:top-5">
                ERP / Business Operations
              </div>

              {/* bottom floating mini card desktop */}
              <div className="absolute bottom-5 left-5 hidden max-w-[240px] rounded-[1.25rem] border border-white/10 bg-[#07101d]/80 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur lg:block">
                <p className="text-sm font-semibold text-white">
                  Enterprise-Style Platform
                </p>
                <p className="mt-2 text-xs leading-6 text-slate-300">
                  Dashboard clarity, workflow structure and premium system
                  presentation crafted for business operations.
                </p>
              </div>
            </div>

            {/* CONTENT SIDE */}
            <div className="order-2">
              {/* mobile badge */}
              <div className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-medium text-blue-200 shadow-[0_0_30px_rgba(37,99,235,0.12)] sm:text-sm md:hidden">
                ERP / Business Operations
              </div>

              <h3 className="mt-5 text-2xl font-semibold leading-tight text-white sm:text-3xl md:text-4xl">
                Enterprise-Style Workflow Management Platform
              </h3>

              <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
                Designed as a premium ERP solution for reporting, operations,
                internal workflow management and a refined dashboard experience.
              </p>

              {/* features */}
              <div className="mt-6 space-y-3">
                {features.map((feature) => (
                  <div
                    key={feature}
                    className="group flex items-start gap-3 rounded-2xl border border-transparent px-0 py-0 transition"
                  >
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/12 text-blue-300">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>

                    <p className="text-sm leading-7 text-slate-300 sm:text-base">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              {/* compact stats - showcaseAlt style */}
              <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {stats.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[1.25rem] border border-white/10 bg-[#07101d]/65 p-4 shadow-[0_10px_40px_rgba(0,0,0,0.18)] backdrop-blur transition duration-300 hover:border-blue-400/20 hover:bg-[#07101d]/80"
                  >
                    <p className="text-lg font-semibold text-white">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm text-slate-300">{item.text}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-2xl bg-[#2563ff] px-6 py-4 text-sm font-semibold text-white shadow-[0_20px_60px_rgba(37,99,235,0.35)] transition hover:-translate-y-0.5 hover:bg-[#1d4ed8] sm:text-base"
                >
                  Build a Similar Project
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}