"use client";

import { BarChart3, Sparkles, Workflow, TrendingUp } from "lucide-react";

const items = [
  {
    icon: Sparkles,
    title: "Stronger Brand Presence",
    text: "Premium websites and digital experiences help businesses present themselves more professionally and build trust faster.",
  },
  {
    icon: TrendingUp,
    title: "Better Conversion Potential",
    text: "Well-structured interfaces, stronger presentation and clearer user flow help improve engagement and conversion.",
  },
  {
    icon: Workflow,
    title: "Smarter Internal Workflows",
    text: "ERP, CRM and custom systems are built to reduce complexity, organize work and improve operational clarity.",
  },
  {
    icon: BarChart3,
    title: "Scalable Digital Foundations",
    text: "HELPO focuses on building digital systems that can support business growth over time rather than short-term fixes.",
  },
];

export default function PortfolioImpact() {
  return (
    <section className="relative pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur md:p-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
              Project Impact
            </div>

            <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              More Than Just Beautiful Interfaces
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              Our work is designed to improve presentation, simplify operations
              and support long-term business growth.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {items.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-[1.75rem] border border-white/8 bg-[#07101d]/60 p-6"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}