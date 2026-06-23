"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronDown } from "lucide-react";

const testimonials = [
  {
    name: "Ameen Rahman",
    role: "Business Owner",
    company: "Retail Brand",
    review:
      "HELPO built a premium website for our business exactly the way we wanted. The design quality, clarity, and overall professional finish were far beyond what we expected.",
  },
  {
    name: "Fahad N",
    role: "Managing Director",
    company: "Food & Spices Company",
    review:
      "We needed a clean business website with a premium brand feel, and HELPO delivered it beautifully. The communication, speed, and final quality were excellent.",
  },
  {
    name: "Shameer K",
    role: "Operations Head",
    company: "Wholesale Business",
    review:
      "HELPO helped us with a business management system direction and web presence. Their approach feels modern, premium, and strongly focused on real business use.",
  },
];

const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.97 },
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

export default function Testimonials() {
  const [openName, setOpenName] = useState<string | null>(null);

  const toggleAccordion = (name: string) => {
    setOpenName((prev) => (prev === name ? null : name));
  };

  return (
    <section id="testimonials" className="relative py-18 sm:py-22 lg:py-28">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-8%] top-10 h-56 w-56 rounded-full bg-blue-500/8 blur-3xl" />
        <div className="absolute right-[-10%] bottom-0 h-64 w-64 rounded-full bg-cyan-400/8 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Heading */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 lg:mb-14"
        >
          <p className="mb-3 text-[11px] uppercase tracking-[0.24em] text-blue-400 sm:mb-4 sm:text-xs md:text-sm">
            Testimonials
          </p>

          <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl xl:text-5xl">
            What Clients Say About Working With HELPO
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-400 sm:mt-5 sm:text-base">
            We focus on premium execution, clear communication, and building
            digital solutions that genuinely help businesses grow with
            confidence.
          </p>
        </motion.div>

        {/* =========================
            MOBILE / TABLET ACCORDION
        ========================= */}
        <div className="space-y-4 lg:hidden">
          {testimonials.map((item) => {
            const isOpen = openName === item.name;

            return (
              <div
                key={item.name}
                className="overflow-hidden rounded-[1.45rem] border border-white/10 bg-white/[0.045] backdrop-blur-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.name)}
                  className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.12)]">
                      <Quote className="h-5 w-5" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="truncate text-base font-semibold text-white">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-sm text-slate-400">
                        {item.role} · {item.company}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#07101d]/80 text-slate-300 backdrop-blur transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown className="h-5 w-5" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-white/10 px-4 pb-5 pt-4">
                        <p className="text-sm leading-7 text-slate-300">
                          “{item.review}”
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
            DESKTOP GRID CARDS
        ========================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="hidden gap-6 md:grid lg:grid-cols-3"
        >
          {testimonials.map((item) => (
            <motion.article
              key={item.name}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 md:p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30"
            >
              {/* glow */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.16),transparent_40%)]" />

              <div className="relative z-10">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.12)]">
                  <Quote className="h-6 w-6" />
                </div>

                <p className="text-sm leading-8 text-slate-300 md:text-base">
                  “{item.review}”
                </p>

                <div className="mt-8 border-t border-white/10 pt-5">
                  <h3 className="text-lg font-semibold text-white">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">
                    {item.role} · {item.company}
                  </p>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-transparent transition-all duration-300 group-hover:ring-blue-500/30 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.10)]" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}