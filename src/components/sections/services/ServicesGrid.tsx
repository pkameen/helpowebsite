"use client";

import { useState } from "react";
import {
  Globe,
  MonitorSmartphone,
  LayoutTemplate,
  ShoppingBag,
  PanelsTopLeft,
  Workflow,
  ShieldCheck,
  Sparkles,
  ChevronDown,
} from "lucide-react";

const websiteServices = [
  {
    icon: Globe,
    title: "Corporate Website Development",
    description:
      "Professional business websites designed to strengthen trust, improve brand presence and clearly present your company online.",
  },
  {
    icon: LayoutTemplate,
    title: "Landing Pages & Showcase Pages",
    description:
      "High-converting landing pages and premium presentation pages built for product launches, campaigns and service showcases.",
  },
  {
    icon: ShoppingBag,
    title: "Business Website UI Enhancement",
    description:
      "Modern premium website layouts with stronger visual hierarchy, cleaner structure and improved digital presentation.",
  },
];

const webAppServices = [
  {
    icon: MonitorSmartphone,
    title: "Custom Web Applications",
    description:
      "Tailored web apps designed around your internal workflow, operational needs and business-specific functionality.",
  },
  {
    icon: PanelsTopLeft,
    title: "Admin Dashboards & Internal Tools",
    description:
      "Powerful dashboards, management panels and internal systems to organize business tasks, information and daily operations.",
  },
  {
    icon: Workflow,
    title: "Workflow-Focused Business Systems",
    description:
      "Custom systems built to simplify processes, centralize work and improve digital efficiency across your business.",
  },
];

type ServiceItem = {
  icon: React.ElementType;
  title: string;
  description: string;
};

function ServiceCard({
  icon: Icon,
  title,
  description,
  isOpen = false,
  onToggle,
  mobile = false,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  isOpen?: boolean;
  onToggle?: () => void;
  mobile?: boolean;
}) {
  // MOBILE ACCORDION CARD
  if (mobile) {
    return (
      <button
        type="button"
        onClick={onToggle}
        className="group relative w-full overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.04] text-left backdrop-blur-xl transition-all duration-300"
      >
        {/* glow */}
        <div
          className={`pointer-events-none absolute inset-0 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
        >
          <div className="absolute -left-10 top-0 h-32 w-32 rounded-full bg-blue-500/12 blur-[80px]" />
          <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-cyan-400/8 blur-[70px]" />
        </div>

        <div className="relative z-10 p-4">
          {/* top row */}
          <div className="flex items-start gap-3">
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border transition-all duration-300 ${
                isOpen
                  ? "border-blue-400/30 bg-blue-500/15 text-blue-300 shadow-[0_0_30px_rgba(59,130,246,0.12)]"
                  : "border-white/10 bg-blue-500/10 text-blue-300"
              }`}
            >
              <Icon className="h-5 w-5" />
            </div>

            <div className="min-w-0 flex-1 pr-2">
              <h3 className="text-base font-semibold leading-6 text-white">
                {title}
              </h3>
            </div>

            <div
              className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                isOpen
                  ? "border-blue-400/25 bg-blue-500/10 text-blue-300"
                  : "border-white/10 bg-white/[0.03] text-slate-400"
              }`}
            >
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </div>
          </div>

          {/* expandable content */}
          <div
            className={`grid transition-all duration-300 ease-out ${
              isOpen
                ? "mt-4 grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="border-t border-white/10 pt-4">
                <p className="text-sm leading-7 text-slate-300">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ring */}
        <div
          className={`pointer-events-none absolute inset-0 rounded-[1.6rem] ring-1 transition-all duration-300 ${
            isOpen
              ? "ring-blue-500/25 shadow-[0_0_40px_rgba(59,130,246,0.08)]"
              : "ring-transparent"
          }`}
        />
      </button>
    );
  }

  // DESKTOP CARD
  return (
    <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.05]">
      <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute -left-8 top-0 h-32 w-32 rounded-full bg-blue-500/10 blur-[80px]" />
      </div>

      <div className="relative z-10">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
          <Icon className="h-6 w-6" />
        </div>

        <h3 className="mt-6 text-2xl font-semibold text-white">{title}</h3>

        <p className="mt-4 text-base leading-8 text-slate-300">
          {description}
        </p>
      </div>
    </div>
  );
}

function ServiceCategory({
  icon: Icon,
  title,
  subtitle,
  services,
  sectionKey,
}: {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  services: ServiceItem[];
  sectionKey: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mt-16 first:mt-16">
      {/* Section heading */}
      <div className="mb-8 flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
          <Icon className="h-5 w-5" />
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-white md:text-3xl">
            {title}
          </h3>
          <p className="mt-1 text-sm leading-7 text-slate-400 md:text-base">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Desktop / tablet grid */}
      <div className="hidden gap-6 md:grid md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard
            key={`${sectionKey}-desktop-${index}`}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>

      {/* Mobile accordion */}
      <div className="space-y-3 md:hidden">
        {services.map((service, index) => {
          const isOpen = openIndex === index;

          return (
            <ServiceCard
              key={`${sectionKey}-mobile-${index}`}
              icon={service.icon}
              title={service.title}
              description={service.description}
              mobile
              isOpen={isOpen}
              onToggle={() => setOpenIndex(isOpen ? null : index)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default function ServicesGrid() {
  return (
    <section className="relative py-20 md:py-24">
      {/* subtle background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-24 h-72 w-72 rounded-full bg-blue-500/8 blur-[120px]" />
        <div className="absolute right-[-10%] top-1/3 h-80 w-80 rounded-full bg-cyan-400/8 blur-[130px]" />
        <div className="absolute bottom-0 left-1/2 h-56 w-[60%] -translate-x-1/2 rounded-full bg-blue-500/8 blur-[110px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs text-blue-200 shadow-[0_0_30px_rgba(59,130,246,0.08)] sm:text-sm">
            <Sparkles className="h-4 w-4" />
            Our Core Services
          </div>

          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            Services Designed Around Real Business Needs
          </h2>

          <p className="mt-5 text-sm leading-8 text-slate-300 sm:text-base md:text-lg">
            HELPO focuses on premium website development and web application
            development — helping businesses build stronger digital presence and
            smarter online systems.
          </p>
        </div>

        {/* Website development block */}
        <ServiceCategory
          icon={Globe}
          title="Website Development"
          subtitle="Premium websites built for trust, presentation and conversion."
          services={websiteServices}
          sectionKey="website"
        />

        {/* Web app development block */}
        <ServiceCategory
          icon={MonitorSmartphone}
          title="Web App Development"
          subtitle="Custom web systems and dashboards for better business workflows."
          services={webAppServices}
          sectionKey="webapp"
        />

        {/* bottom trust strip */}
        <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 backdrop-blur md:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
                <ShieldCheck className="h-5 w-5" />
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white md:text-xl">
                  Focused Service Model
                </h4>
                <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-300 md:text-base md:leading-8">
                  HELPO focuses on doing fewer things at a higher standard —
                  building premium websites and web applications instead of
                  offering too many unrelated services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}