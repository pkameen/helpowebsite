"use client";

import { Award, Users, Clock3, Headphones } from "lucide-react";

const items = [
  {
    icon: Award,
    title: "Quality First",
    text: "We focus on polished execution, clean UI and attention to detail in every project.",
  },
  {
    icon: Users,
    title: "Client Focused",
    text: "Every website and web app is built around your business goals and practical needs.",
  },
  {
    icon: Clock3,
    title: "On-Time Delivery",
    text: "We work with clear structure and timelines to deliver projects professionally.",
  },
  {
    icon: Headphones,
    title: "Long-Term Support",
    text: "HELPO stays available for updates, improvements and support after launch.",
  },
];

export default function ServicesTrust() {
  return (
    <section className="relative pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur md:p-8">
          <div className="mb-8 text-center">
            <div className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
              Why Clients Trust HELPO
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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