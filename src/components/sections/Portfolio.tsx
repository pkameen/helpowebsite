"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { portfolioItems, PortfolioCategory } from "../../data/portfolio";

type FilterType = "All" | PortfolioCategory;

const filters: FilterType[] = [
  "All",
  "Website", 
  "Web App",
  "Ecommerce",
  "ERP",
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

  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-28 md:py-32">
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
            Our Portfolio
          </p>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
            Selected Projects & Digital Solutions
          </h2>

          <p className="text-slate-400 mt-5 text-sm md:text-base leading-7">
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
          className="flex flex-wrap items-center justify-center gap-3 mb-12 md:mb-14"
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 md:px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 border ${
                  isActive
                    ? "bg-blue-600 text-white border-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.25)]"
                    : "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          key={activeFilter}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-6 md:gap-8 md:grid-cols-2 xl:grid-cols-4"
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
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/40 to-transparent" />

                <div className="absolute left-4 top-4 z-10">
                  <span className="inline-flex rounded-full border border-white/15 bg-black/30 backdrop-blur-md px-3 py-1 text-xs font-medium text-white">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white leading-snug">
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