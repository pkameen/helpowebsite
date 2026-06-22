"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

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
  return (
    <section id="testimonials" className="py-28 md:py-32">
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
            Testimonials
          </p>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
            What Clients Say About Working With HELPO
          </h2>

          <p className="text-slate-400 mt-5 text-sm md:text-base leading-7">
            We focus on premium execution, clear communication, and building
            digital solutions that genuinely help businesses grow with
            confidence.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-6 md:gap-8 md:grid-cols-2 xl:grid-cols-3"
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

                <p className="text-sm md:text-base leading-8 text-slate-300">
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