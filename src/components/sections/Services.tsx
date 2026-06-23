"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  MonitorSmartphone,
  ShoppingBag,
  Database,
  LayoutDashboard,
  Smartphone,
  ChevronDown,
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
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="services" className="relative py-18 sm:py-22 lg:py-28">
      {/* subtle background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-8%] top-10 h-56 w-56 rounded-full bg-blue-500/8 blur-3xl" />
        <div className="absolute right-[-10%] bottom-0 h-64 w-64 rounded-full bg-cyan-400/8 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 lg:mb-14"
        >
          <p className="mb-3 text-[11px] uppercase tracking-[0.24em] text-blue-400 sm:mb-4 sm:text-xs md:text-sm">
            Our Services
          </p>

          <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl xl:text-5xl">
            Premium Digital Solutions for Modern Businesses
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-400 sm:mt-5 sm:text-base">
            HELPO builds premium websites, business software, ecommerce systems,
            ERP platforms, and digital products that help brands grow with
            clarity, performance, and trust.
          </p>
        </motion.div>

        {/* =========================
            MOBILE / TABLET ACCORDION
        ========================= */}
        <div className="space-y-3 lg:hidden">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isOpen = openIndex === index;

            return (
              <div
                key={service.title}
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

                    <h3 className="text-sm font-semibold leading-6 text-white sm:text-base">
                      {service.title}
                    </h3>
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
                          {service.description}
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
          viewport={{ once: true, amount: 0.15 }}
          className="hidden gap-6 md:grid md:grid-cols-2 lg:gap-6 xl:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                variants={cardVariants}
                className="group relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/[0.07] xl:p-7"
              >
                {/* glow */}
                <div className="pointer-events-none absolute inset-0 rounded-[1.6rem] bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.16),transparent_42%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative z-10">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.12)]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-xl font-semibold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {service.description}
                  </p>
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-[1.6rem] ring-1 ring-transparent transition-all duration-300 group-hover:ring-blue-500/30 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.10)]" />
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}