"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { portfolioItems, PortfolioCategory } from "../../../data/portfolio";
import { motion } from "framer-motion";

type FilterType = "All" | PortfolioCategory;

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const filters: FilterType[] = ["All", "Website", "Web App", "Ecommerce", "ERP"];

export default function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return portfolioItems;
    return portfolioItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="relative pb-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
            <Sparkles className="h-4 w-4" />
            Project Showcase
          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Explore Our Selected Work
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            A curated showcase of premium digital projects designed for real
            business impact, stronger presentation and smarter systems.
          </p>
        </div>

        {/* filters */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-5 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-[#2563ff] text-white shadow-[0_15px_40px_rgba(37,99,235,0.35)]"
                    : "border border-white/10 bg-white/[0.03] text-slate-200 hover:bg-white/[0.06]"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* project grid */}
        <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-3"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-blue-400/30"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                {/* overlay layers */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/40 to-transparent opacity-95 transition duration-300 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-[#020617]/10 opacity-0 transition duration-300 group-hover:opacity-100" />

                {/* category badge */}
                <div className="absolute left-5 top-5">
                  <span className="inline-flex rounded-full border border-white/10 bg-[#07101d]/80 px-3 py-1 text-xs font-medium tracking-wide text-slate-200 backdrop-blur">
                    {project.category}
                  </span>
                </div>

                {/* hover button top-right */}
                <div className="absolute right-5 top-5 translate-y-2 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <Link
                    href="/contact"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </Link>
                </div>

                {/* content */}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-2xl font-semibold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-300">
                    {project.description}
                  </p>

                  <Link
                    href="/contact"
                    className="mt-5 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-200 transition hover:bg-blue-500/20"
                  >
                    View Project
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}