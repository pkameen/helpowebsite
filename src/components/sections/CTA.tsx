"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section id="cta" className="py-28 md:py-32">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 px-6 py-14 md:px-12 md:py-16 backdrop-blur-sm"
        >
          {/* Background glow layers */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.20),transparent_35%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_35%)]" />

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <p className="text-blue-400 uppercase tracking-[0.25em] text-xs md:text-sm mb-4">
              Start Your Project
            </p>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
              Build a Premium Website or Business System with HELPO
            </h2>

            <p className="mt-6 text-sm md:text-lg leading-8 text-slate-300 max-w-3xl mx-auto">
              Whether you need a premium website, a modern web app, an ecommerce
              platform, or a custom ERP / CRM system, HELPO helps you launch a
              digital solution that looks professional, performs well, and
              supports real business growth.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 text-sm md:text-base font-semibold text-white transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.35)]"
              >
                Start a Project
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="https://wa.me/918592824137"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm md:text-base font-semibold text-white transition-all duration-300 hover:border-blue-500/30 hover:bg-white/10"
              >
                Chat on WhatsApp
                <MessageCircle className="h-4 w-4" />
              </Link>
            </div>

            {/* mini trust line */}
            <div className="mt-8 text-sm text-slate-400">
              Premium websites • Web apps • Ecommerce • ERP • CRM
            </div>
          </div>

          {/* Outer hover ring feel */}
          <div className="pointer-events-none absolute inset-0 rounded-[32px] ring-1 ring-transparent shadow-[0_0_60px_rgba(59,130,246,0.06)]" />
        </motion.div>
      </div>
    </section>
  );
}