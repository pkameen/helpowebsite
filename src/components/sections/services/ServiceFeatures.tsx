"use client";

import {
  MonitorSmartphone,
  Sparkles,
  Gauge,
  ShieldCheck,
  Settings2,
  CloudUpload,
} from "lucide-react";

const features = [
  {
    icon: MonitorSmartphone,
    title: "Responsive Design",
    description:
      "Pixel-perfect layouts that work beautifully across desktop, tablet and mobile devices.",
  },
  {
    icon: Sparkles,
    title: "Premium UI/UX",
    description:
      "Clean, modern and conversion-focused interfaces that strengthen your brand presence.",
  },
  {
    icon: Gauge,
    title: "Fast Performance",
    description:
      "Optimized structure, clean code and smooth loading experience for better usability.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    description:
      "Professional development practices with stability, security and long-term maintainability in mind.",
  },
  {
    icon: Settings2,
    title: "Admin & Dashboard Logic",
    description:
      "For web apps, we build dashboards, management flows and business-oriented control systems.",
  },
  {
    icon: CloudUpload,
    title: "Deployment & Support",
    description:
      "We help launch your project properly and provide guidance for updates, fixes and improvements.",
  },
];

export default function ServiceFeatures() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
            <Sparkles className="h-4 w-4" />
            What’s Included
          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Everything You Need For a Premium Digital Product
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            Every HELPO project is built with a premium presentation standard,
            practical functionality and a strong focus on usability, performance
            and long-term value.
          </p>
        </div>

        {/* feature cards */}
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