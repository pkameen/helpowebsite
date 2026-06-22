"use client";

import {
  Globe,
  MonitorSmartphone,
  LayoutTemplate,
  ShoppingBag,
  PanelsTopLeft,
  Workflow,
  ShieldCheck,
  Sparkles,
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

function ServiceCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
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

export default function ServicesGrid() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
            <Sparkles className="h-4 w-4" />
            Our Core Services
          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Services Designed Around Real Business Needs
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            HELPO focuses on premium website development and web application
            development — helping businesses build stronger digital presence and
            smarter online systems.
          </p>
        </div>

        {/* Website development block */}
        <div className="mt-16">
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
              <Globe className="h-5 w-5" />
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-white">
                Website Development
              </h3>
              <p className="mt-1 text-slate-400">
                Premium websites built for trust, presentation and conversion.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {websiteServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>

        {/* Web app development block */}
        <div className="mt-20">
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
              <MonitorSmartphone className="h-5 w-5" />
            </div>

            <div>
              <h3 className="text-3xl font-semibold text-white">
                Web App Development
              </h3>
              <p className="mt-1 text-slate-400">
                Custom web systems and dashboards for better business workflows.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {webAppServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>

        {/* bottom trust strip */}
        <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
                <ShieldCheck className="h-5 w-5" />
              </div>

              <div>
                <h4 className="text-xl font-semibold text-white">
                  Focused Service Model
                </h4>
                <p className="mt-2 max-w-3xl text-base leading-8 text-slate-300">
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