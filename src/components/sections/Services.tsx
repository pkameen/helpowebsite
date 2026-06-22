"use client";

import { motion } from "framer-motion";
import {
  Globe,
  MonitorSmartphone,
  ShoppingBag,
  Database,
  LayoutDashboard,
  Smartphone,
} from "lucide-react";

const services = [
  {
    title: "Website Development",
    description:
      "Premium business websites designed to build trust, attract customers, and present your brand with a polished digital presence.",
    icon: Globe,
  },
  {
    title: "Web App Development",
    description:
      "Custom web applications with modern UI, smooth workflows, and scalable architecture for serious business operations.",
    icon: MonitorSmartphone,
  },
  {
    title: "Ecommerce Solutions",
    description:
      "Conversion-focused online stores with premium storefront design, product browsing, cart flow, and seamless shopping experience.",
    icon: ShoppingBag,
  },
  {
    title: "ERP Systems",
    description:
      "Powerful ERP software to manage inventory, staff, finance, reporting, and day-to-day business operations in one place.",
    icon: Database,
  },
  {
    title: "CRM Systems",
    description:
      "Customer relationship management platforms built to organize leads, sales follow-ups, communication, and client records efficiently.",
    icon: LayoutDashboard,
  },
  {
    title: "Mobile App Solutions",
    description:
      "Modern mobile app interfaces and connected digital experiences tailored for businesses that need mobile-first reach.",
    icon: Smartphone,
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
  hidden: { opacity: 0, y: 50, scale: 0.96 },
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

export default function Services() {
  return (
    <section id="services" className="py-28 md:py-32">
      <div className="container-custom">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center mb-14 md:mb-16"
        >
          <p className="text-blue-400 uppercase tracking-[0.25em] text-xs md:text-sm mb-4">
            Our Services
          </p>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
            Premium Digital Solutions for Modern Businesses
          </h2>

          <p className="text-slate-400 mt-5 text-sm md:text-base leading-7">
            HELPO builds premium websites, business software, ecommerce systems,
            ERP platforms, and digital products that help brands grow with
            clarity, performance, and trust.
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
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                variants={cardVariants}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 md:p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/[0.07]"
              >
                {/* glow */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.16),transparent_40%)]" />

                <div className="relative z-10">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.12)]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-xl font-semibold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {service.description}
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