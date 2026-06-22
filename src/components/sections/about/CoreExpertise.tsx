"use client";

import { Globe, ShoppingBag, Database, BriefcaseBusiness, Sparkles } from "lucide-react";

const expertise = [
  {
    title: "Website Development",
    icon: Globe,
    description:
      "Corporate websites, brand websites, landing pages and premium business websites designed for credibility and conversion.",
  },
  {
    title: "Ecommerce Solutions",
    icon: ShoppingBag,
    description:
      "Modern ecommerce stores with premium UI, product-focused experiences and scalable selling workflows.",
  },
  {
    title: "ERP Systems",
    icon: Database,
    description:
      "Business management systems for operations, inventory, finance, reporting and workflow control.",
  },
  {
    title: "CRM & Custom Web Apps",
    icon: BriefcaseBusiness,
    description:
      "Customer management systems, internal dashboards and custom business tools built around your process.",
  },
];

export default function CoreExpertise() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* left heading */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
              <Sparkles className="h-4 w-4" />
              What We Build
            </div>

            <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              HELPO Builds Premium Digital Products For Modern Businesses
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
              Our work spans premium websites, ecommerce platforms, ERP systems,
              CRM solutions and custom web applications — all designed to help
              businesses grow with stronger digital presence and better internal
              efficiency.
            </p>
          </div>

          {/* right cards */}
          <div className="grid gap-5 md:grid-cols-2">
            {expertise.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.05]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-base leading-8 text-slate-300">
                    {item.description}
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