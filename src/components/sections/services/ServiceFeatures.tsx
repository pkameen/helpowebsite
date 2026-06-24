"use client";

import { useState } from "react";
import {
  MonitorSmartphone,
  Sparkles,
  Gauge,
  ShieldCheck,
  Settings2,
  CloudUpload,
  ChevronDown,
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

type FeatureCardProps = {
  feature: (typeof features)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
};

function FeatureCard({ feature, index, isOpen, onToggle }: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <>
      {/* =========================
         Desktop / Tablet Card
      ========================= */}
      <div
        className="group relative hidden overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.05] md:block"
      >
        <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
          <div className="absolute -left-8 top-0 h-32 w-32 rounded-full bg-blue-500/10 blur-[80px]" />
        </div>

        <div className="relative z-10">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300 shadow-[0_0_30px_rgba(59,130,246,0.10)]">
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

      {/* =========================
         Mobile Accordion Card
      ========================= */}
      <div className="md:hidden">
        <div
          className={`group relative overflow-hidden rounded-[1.6rem] border backdrop-blur transition-all duration-300 ${
            isOpen
              ? "border-blue-400/30 bg-white/[0.06] shadow-[0_18px_60px_rgba(37,99,235,0.12)]"
              : "border-white/10 bg-white/[0.03]"
          }`}
        >
          {/* glow */}
          <div
            className={`pointer-events-none absolute inset-0 transition-opacity duration-300 ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute -left-10 top-0 h-28 w-28 rounded-full bg-blue-500/10 blur-[80px]" />
          </div>

          <button
            type="button"
            onClick={onToggle}
            className="relative z-10 flex w-full items-center gap-3 px-4 py-4 text-left"
            aria-expanded={isOpen}
            aria-controls={`feature-content-${index}`}
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300 shadow-[0_0_25px_rgba(59,130,246,0.10)]">
              <Icon className="h-5 w-5" />
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="text-base font-semibold leading-6 text-white">
                {feature.title}
              </h3>
            </div>

            <div
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                isOpen
                  ? "border-blue-400/30 bg-blue-500/10 text-blue-300"
                  : "border-white/10 bg-white/5 text-slate-300"
              }`}
            >
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </div>
          </button>

          <div
            id={`feature-content-${index}`}
            className={`grid transition-all duration-300 ease-out ${
              isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <div className="relative z-10 px-4 pb-4 pl-[4.75rem]">
                <div className="mb-3 h-px w-full bg-gradient-to-r from-blue-500/20 via-white/10 to-transparent" />
                <p className="text-sm leading-7 text-slate-300">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default function ServiceFeatures() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative py-20 md:py-24">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-8%] top-20 h-[260px] w-[260px] rounded-full bg-blue-500/8 blur-[120px]" />
        <div className="absolute right-[-10%] bottom-10 h-[280px] w-[280px] rounded-full bg-cyan-400/8 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6">
        {/* heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs text-blue-200 shadow-[0_0_30px_rgba(37,99,235,0.12)] sm:text-sm">
            <Sparkles className="h-4 w-4" />
            What’s Included
          </div>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:mt-6 md:text-5xl">
            Everything You Need For a Premium Digital Product
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8 md:mt-5 md:text-lg">
            Every HELPO project is built with a premium presentation standard,
            practical functionality and a strong focus on usability, performance
            and long-term value.
          </p>
        </div>

        {/* feature cards */}
        <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}