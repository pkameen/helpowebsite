"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  PenTool,
  Code2,
  Rocket,
  ChevronDown,
} from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "Discovery & Consultation",
    description:
      "We understand your business, goals, target audience, required features, and project direction to define the right digital solution.",
    icon: MessageSquare,
  },
  {
    step: "02",
    title: "Planning & UI Strategy",
    description:
      "We map the structure, user journey, feature flow, and premium interface direction before moving into the actual build stage.",
    icon: PenTool,
  },
  {
    step: "03",
    title: "Development & Implementation",
    description:
      "Our team builds the website, web app, ecommerce platform, ERP, or CRM system with a clean, scalable, modern development approach.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Launch & Growth Support",
    description:
      "After testing and refinement, we launch the project and continue supporting your business with improvements, updates, and guidance.",
    icon: Rocket,
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

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

export default function Process() {
  const [openStep, setOpenStep] = useState<string | null>(processSteps[0].step);

  return (
    <section id="process" className="relative py-18 sm:py-22 lg:py-28">
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
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 lg:mb-16"
        >
          <p className="mb-3 text-[11px] uppercase tracking-[0.24em] text-blue-400 sm:mb-4 sm:text-xs md:text-sm">
            Our Process
          </p>

          <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl xl:text-5xl">
            A Clear Process to Build Premium Digital Solutions
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-400 sm:mt-5 sm:text-base">
            Every HELPO project follows a structured process—from understanding
            your business to designing, building, launching, and supporting your
            digital system with clarity and precision.
          </p>
        </motion.div>

        {/* =========================
            MOBILE / TABLET ACCORDION
        ========================= */}
        <div className="space-y-4 lg:hidden">
          {processSteps.map((item) => {
            const Icon = item.icon;
            const isOpen = openStep === item.step;

            return (
              <div
                key={item.step}
                className="overflow-hidden rounded-[1.45rem] border border-white/10 bg-white/[0.045] backdrop-blur-sm"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenStep((prev) => (prev === item.step ? null : item.step))
                  }
                  className="flex w-full items-start gap-4 px-4 py-4 text-left sm:px-5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.12)]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="mb-2 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-2.5 py-1 text-[10px] font-semibold tracking-[0.2em] text-blue-300">
                      STEP {item.step}
                    </div>

                    <h3 className="text-base font-semibold leading-snug text-white sm:text-lg">
                      {item.title}
                    </h3>
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
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-white/10 px-4 pb-5 pt-4 sm:px-5">
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
            DESKTOP ZIG-ZAG TIMELINE
        ========================= */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="relative mx-auto hidden max-w-5xl lg:block"
        >
          {/* center line */}
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-blue-500/0 via-blue-500/30 to-blue-500/0" />

          <div className="space-y-10">
            {processSteps.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.step}
                  variants={itemVariants}
                  className={`relative flex ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* center dot */}
                  <div className="absolute left-1/2 top-10 z-20 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full border border-blue-400/40 bg-[#0b1120] shadow-[0_0_25px_rgba(59,130,246,0.35)]" />

                  <div
                    className={`group relative w-[calc(50%-2rem)] overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 ${
                      isLeft ? "mr-8" : "ml-8"
                    }`}
                  >
                    {/* hover glow */}
                    <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.16),transparent_40%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <div className="relative z-10">
                      <div className="flex items-start gap-4">
                        <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.12)]">
                          <Icon className="h-6 w-6" />
                        </div>

                        <div className="flex-1">
                          <div className="mb-3 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-blue-300">
                            STEP {item.step}
                          </div>

                          <h3 className="text-2xl font-semibold leading-snug text-white">
                            {item.title}
                          </h3>

                          <p className="mt-4 text-base leading-7 text-slate-400">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-transparent transition-all duration-300 group-hover:ring-blue-500/30 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.10)]" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}