"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  PenTool,
  Code2,
  Rocket,
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
  return (
    <section id="process" className="py-28 md:py-32">
      <div className="container-custom">
        {/* Heading */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-3xl mx-auto text-center mb-14 md:mb-16"
        >
          <p className="text-blue-400 uppercase tracking-[0.25em] text-xs md:text-sm mb-4">
            Our Process
          </p>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
            A Clear Process to Build Premium Digital Solutions
          </h2>

          <p className="text-slate-400 mt-5 text-sm md:text-base leading-7">
            Every HELPO project follows a structured process—from understanding
            your business to designing, building, launching, and supporting your
            digital system with clarity and precision.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* center line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-blue-500/0 via-blue-500/30 to-blue-500/0" />

          <div className="space-y-8 md:space-y-10">
            {processSteps.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.step}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* step dot */}
                  <div className="hidden md:flex absolute left-1/2 top-10 z-20 h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full border border-blue-400/40 bg-[#0b1120] shadow-[0_0_25px_rgba(59,130,246,0.35)]" />

                  <div
                    className={`relative w-full md:w-[calc(50%-2rem)] group overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 md:p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 ${
                      isLeft ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    {/* mobile line */}
                    <div className="md:hidden absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/0 via-blue-500/20 to-blue-500/0" />

                    {/* hover glow */}
                    <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.16),transparent_40%)]" />

                    <div className="relative z-10">
                      <div className="flex items-start gap-4">
                        <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.12)]">
                          <Icon className="h-6 w-6" />
                        </div>

                        <div className="flex-1">
                          <div className="mb-3 inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-blue-300">
                            STEP {item.step}
                          </div>

                          <h3 className="text-xl md:text-2xl font-semibold text-white leading-snug">
                            {item.title}
                          </h3>

                          <p className="mt-4 text-sm md:text-base leading-7 text-slate-400">
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