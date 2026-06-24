"use client";

import { BarChart3, Sparkles, Workflow, TrendingUp } from "lucide-react";

const items = [
  {
    icon: Sparkles,
    title: "Brand Presence",
    text: "Premium digital experiences help businesses present themselves with more trust and clarity.",
  },
  {
    icon: TrendingUp,
    title: "Better Conversion",
    text: "Stronger structure and clearer user flow can improve engagement and conversion potential.",
  },
  {
    icon: Workflow,
    title: "Smarter Workflows",
    text: "ERP, CRM and custom systems help organize operations and reduce internal complexity.",
  },
  {
    icon: BarChart3,
    title: "Scalable Growth",
    text: "Digital systems are built with long-term business growth and future expansion in mind.",
  },
];

export default function PortfolioImpact() {
  return (
    <section className="relative pb-16 md:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur md:p-7">
          {/* glow */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-[8%] top-0 h-44 w-44 rounded-full bg-blue-500/10 blur-[90px]" />
            <div className="absolute right-[10%] bottom-0 h-44 w-44 rounded-full bg-cyan-400/10 blur-[90px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <div className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-medium text-blue-200 sm:text-sm">
              Project Impact
            </div>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              More Than Just Beautiful Interfaces
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">
              Our work is designed to improve presentation, simplify workflows
              and support business growth.
            </p>
          </div>

          <div className="relative z-10 mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {items.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group rounded-[1.5rem] border border-white/10 bg-[#07101d]/60 p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-[#0b1628]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-300">
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