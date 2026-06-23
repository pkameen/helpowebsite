"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section id="cta" className="py-18 sm:py-22 lg:py-28">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.05] px-5 py-10 sm:px-7 sm:py-12 md:px-10 md:py-14 lg:rounded-[32px] lg:px-12 lg:py-16 backdrop-blur-sm"
        >
          {/* background glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.20),transparent_35%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_35%)]" />

          {/* subtle extra glow */}
          <div className="pointer-events-none absolute left-[-10%] top-0 h-44 w-44 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="pointer-events-none absolute right-[-8%] bottom-0 h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            {/* label */}
            <p className="mb-3 text-[11px] uppercase tracking-[0.24em] text-blue-400 sm:mb-4 sm:text-xs md:text-sm">
              Start Your Project
            </p>

            {/* heading */}
            <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
              Build a Premium Website or Web App with HELPO
            </h2>

            {/* description */}
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-slate-300 sm:mt-5 sm:text-base md:text-lg md:leading-8">
              Whether you need a premium website or a modern web application,
              HELPO helps you launch a digital solution that looks professional,
              performs smoothly, and supports real business growth.
            </p>

            {/* buttons */}
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:justify-center sm:gap-4 md:mt-10">
              <Link
                href="#contact"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)] sm:px-7 sm:py-3.5 sm:text-base"
              >
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="https://wa.me/918592824137"
                target="_blank"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-blue-500/30 hover:bg-white/10 sm:px-7 sm:py-3.5 sm:text-base"
              >
                Chat on WhatsApp
                <MessageCircle className="h-4 w-4" />
              </Link>
            </div>

            {/* trust line */}
            <div className="mt-6 border-t border-white/10 pt-5 text-xs leading-6 text-slate-400 sm:mt-7 sm:pt-6 sm:text-sm">
              Premium websites • Web apps • Modern UI • Business-focused execution
            </div>
          </div>

          {/* outer ring */}
          <div className="pointer-events-none absolute inset-0 rounded-[28px] ring-1 ring-transparent shadow-[0_0_60px_rgba(59,130,246,0.06)] lg:rounded-[32px]" />
        </motion.div>
      </div>
    </section>
  );
}