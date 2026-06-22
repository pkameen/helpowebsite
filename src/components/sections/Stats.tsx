"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, Users, Layers3, Sparkles } from "lucide-react";

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
  return (
    <section id="stats" className="py-10 md:py-14">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:gap-8 md:grid-cols-2 xl:grid-cols-4"
        >
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.label}
                variants={cardVariants}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 md:p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30"
              >
                {/* hover glow */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.16),transparent_40%)]" />

                <div className="relative z-10">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.12)]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <div className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                    {item.value}
                  </div>

                  <h3 className="mt-4 text-lg md:text-xl font-semibold text-white">
                    {item.label}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {item.description}
                  </p>
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-transparent transition-all duration-300 group-hover:ring-blue-500/30 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.10)]" />
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}