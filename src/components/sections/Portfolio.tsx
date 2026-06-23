"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { portfolioItems, PortfolioCategory } from "../../data/portfolio";

type FilterType = "All" | PortfolioCategory;

const filters: FilterType[] = ["All", "Website", "Web App", "Ecommerce", "ERP"];

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
      staggerChildren: 0.12,
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
      duration: 0.65,
      ease: "easeOut" as const,
    },
  },
};

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");
  const [openId, setOpenId] = useState<string | null>(null);

  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);
  
  const mobileCategoryItems = [
  portfolioItems.find((item) => item.category === "Website"),
  portfolioItems.find((item) => item.category === "Web App"),
  portfolioItems.find((item) => item.category === "Ecommerce"),
  portfolioItems.find((item) => item.category === "ERP"),
  ].filter(Boolean);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="portfolio" className="relative py-18 sm:py-22 lg:py-28">
      {/* subtle background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-8%] top-12 h-56 w-56 rounded-full bg-blue-500/8 blur-3xl" />
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
            Our Portfolio
          </p>

          <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl xl:text-5xl">
            Selected Projects & Digital Solutions
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-400 sm:mt-5 sm:text-base">
            Explore a selection of premium websites, web applications,
            ecommerce platforms, and ERP solutions crafted to elevate brands
            and business operations.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 flex flex-wrap items-center justify-center gap-2 sm:mb-10 sm:gap-3 lg:mb-12"
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setOpenId(null);
                }}
                className={`rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-300 sm:px-5 sm:py-3 ${
                  isActive
                    ? "border-blue-500 bg-blue-600 text-white shadow-[0_0_30px_rgba(59,130,246,0.25)]"
                    : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </motion.div>

        {/* =========================
            MOBILE / TABLET CATEGORY ACCORDION
        ========================= */}
        <div className="space-y-4 lg:hidden">
          {mobileCategoryItems.map((item) => {
            if (!item) return null;

            const isOpen = openId === item.category;

            return (
              <div
                key={item.category}
                className="overflow-hidden rounded-[1.45rem] border border-white/10 bg-white/[0.045] backdrop-blur-sm"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenId((prev) => (prev === item.category ? null : item.category))
                  }
                  className="block w-full text-left"
                >
                  {/* top preview */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.category}
                      fill
                      sizes="100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/45 to-transparent" />

                    <div className="absolute left-4 top-4 z-10">
                      <span className="inline-flex rounded-full border border-white/15 bg-black/30 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-md">
                        {item.category}
                      </span>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 z-10 flex items-end justify-between gap-3 px-4 pb-4">
                      <div className="min-w-0">
                        <h3 className="text-lg font-semibold leading-snug text-white">
                          {item.category}
                        </h3>
                      </div>

                      <div
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#07101d]/80 text-slate-300 backdrop-blur transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        <ChevronDown className="h-5 w-5" />
                      </div>
                    </div>
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
                        <p className="text-sm leading-7 text-slate-400">
                          {item.description}
                        </p>

                        <div className="mt-5">
                          <a
                            href={item.href || "#"}
                            className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
                          >
                            View Project
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                        </div>
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
          key={activeFilter}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hidden gap-6 md:grid md:grid-cols-2 xl:grid-cols-4"
        >
          {filteredItems.map((item) => (
            <motion.article
              key={item.id}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/40 to-transparent" />

                <div className="absolute left-4 top-4 z-10">
                  <span className="inline-flex rounded-full border border-white/15 bg-black/30 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold leading-snug text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>

                <div className="mt-6">
                  <a
                    href={item.href || "#"}
                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition-colors hover:text-blue-300"
                  >
                    View Project
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Hover Ring */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-transparent transition-all duration-300 group-hover:ring-blue-500/40 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.12)]" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}