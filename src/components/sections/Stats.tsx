"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BriefcaseBusiness,
  Users,
  Layers3,
  Sparkles,
  ChevronDown,
} from "lucide-react";

const stats = [
  {
    value: "50+",
    label: "Projects Delivered",
    description:
      "Premium websites, business systems, ecommerce platforms and custom digital solutions crafted for clients.",
    icon: BriefcaseBusiness,
  },
  {
    value: "20+",
    label: "Business Clients",
    description:
      "Brands and businesses trust HELPO for modern, premium, and conversion-focused digital experiences.",
    icon: Users,
  },
  {
    value: "5+",
    label: "Core Solution Categories",
    description:
      "Website development, web apps, ecommerce, ERP systems, CRM systems and custom business solutions.",
    icon: Layers3,
  },
  {
    value: "100%",
    label: "Custom Build Focus",
    description:
      "Every project is designed with a tailored approach to match your business goals, brand and workflow.",
    icon: Sparkles,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 45, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

export default function Stats() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="stats" className="relative py-12 sm:py-14 lg:py-18">
      {/* subtle glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-8%] top-6 h-48 w-48 rounded-full bg-blue-500/8 blur-3xl" />
        <div className="absolute right-[-10%] bottom-0 h-56 w-56 rounded-full bg-cyan-400/8 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* =========================
            MOBILE / TABLET ACCORDION
        ========================= */}
        <div className="space-y-3 lg:hidden">
          {stats.map((item, index) => {
            const Icon = item.icon;
            const isOpen = openIndex === index;

            return (
              <div
                key={item.label}
                className="overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/[0.045] backdrop-blur-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.10)]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xl font-bold leading-none text-white sm:text-2xl">
                        {item.value}
                      </p>
                      <h3 className="mt-1 text-sm font-semibold leading-6 text-white sm:text-base">
                        {item.label}
                      </h3>
                    </div>
                  </div>

                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-white/10 px-4 pb-4 pt-3">
                        <p className="text-sm leading-7 text-slate-400">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* =========================
            DESKTOP FULL CARDS
        ========================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="hidden gap-6 md:grid md:grid-cols-2 xl:grid-cols-4"
        >
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.label}
                variants={cardVariants}
                className="group relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.045] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 xl:p-8"
              >
                {/* hover glow */}
                <div className="pointer-events-none absolute inset-0 rounded-[1.8rem] bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.16),transparent_40%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.12)]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <div className="text-4xl font-bold tracking-tight text-white xl:text-5xl">
                    {item.value}
                  </div>

                  <h3 className="mt-4 text-lg font-semibold text-white xl:text-xl">
                    {item.label}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-[1.8rem] ring-1 ring-transparent transition-all duration-300 group-hover:ring-blue-500/30 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.10)]" />
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}