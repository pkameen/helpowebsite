"use client";

import {
  ShieldCheck,
  Sparkles,
  LayoutDashboard,
  Layers3,
  Gauge,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Premium UI & Brand Presence",
    description:
      "We craft polished, modern interfaces that elevate your business image and create a premium first impression.",
  },
  {
    icon: LayoutDashboard,
    title: "Business-Focused Digital Systems",
    description:
      "From websites to ERP and CRM solutions, every product is designed around real business workflow and usability.",
  },
  {
    icon: Layers3,
    title: "Custom Solutions, Not Generic Templates",
    description:
      "HELPO builds tailored digital products based on your goals, operations and growth needs instead of one-size-fits-all solutions.",
  },
  {
    icon: Gauge,
    title: "Performance, Scalability & Modern Stack",
    description:
      "We focus on fast, scalable and future-ready systems built with clean architecture and modern technologies.",
  },
  {
    icon: Headphones,
    title: "Support & Long-Term Improvement",
    description:
      "A project should not stop at launch. We believe in supporting, refining and improving systems over time.",
  },
  {
    icon: ShieldCheck,
    title: "Trust, Clarity & Professional Delivery",
    description:
      "We value transparency, structured execution and quality delivery that gives clients confidence in every stage of the project.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
            <Sparkles className="h-4 w-4" />
            Why HELPO
          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Why Businesses Choose HELPO
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            We combine premium design, practical software thinking and modern
            digital execution to create systems that look better, work smarter
            and support long-term growth.
          </p>
        </div>

        {/* feature grid */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.05]"
              >
                <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                  <div className="absolute -left-8 top-0 h-32 w-32 rounded-full bg-blue-500/10 blur-[80px]" />
                </div>

                <div className="relative z-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-4 text-base leading-8 text-slate-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}