"use client";

import { Rocket, Eye, ShieldCheck, Sparkles } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
            <Sparkles className="h-4 w-4" />
            Our Purpose
          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Mission, Vision & What Drives HELPO
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            We focus on building premium digital systems that help businesses
            grow faster, operate better and present themselves with a stronger,
            more modern digital identity.
          </p>
        </div>

        {/* cards */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Mission */}
          <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.05]">
            <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
              <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-blue-500/10 blur-[90px]" />
            </div>

            <div className="relative z-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
                <Rocket className="h-6 w-6" />
              </div>

              <h3 className="mt-6 text-3xl font-semibold text-white">
                Our Mission
              </h3>

              <p className="mt-5 text-lg leading-8 text-slate-300">
                To help modern businesses grow through premium websites,
                ecommerce platforms, ERP systems, CRM tools and custom digital
                products that combine elegant design, practical workflows and
                dependable technology.
              </p>

              <ul className="mt-8 space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-1 h-5 w-5 text-blue-400" />
                  Build solutions that are clean, scalable and business-focused
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-1 h-5 w-5 text-blue-400" />
                  Improve operations, user experience and digital trust
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-1 h-5 w-5 text-blue-400" />
                  Deliver software that creates measurable value for clients
                </li>
              </ul>
            </div>
          </div>

          {/* Vision */}
          <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.05]">
            <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
              <div className="absolute -right-10 top-0 h-40 w-40 rounded-full bg-cyan-500/10 blur-[90px]" />
            </div>

            <div className="relative z-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
                <Eye className="h-6 w-6" />
              </div>

              <h3 className="mt-6 text-3xl font-semibold text-white">
                Our Vision
              </h3>

              <p className="mt-5 text-lg leading-8 text-slate-300">
                To become a trusted premium digital partner for businesses by
                creating world-class web and software experiences that combine
                innovation, strategy, design and performance into one powerful
                ecosystem.
              </p>

              <ul className="mt-8 space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-1 h-5 w-5 text-blue-400" />
                  Shape better digital experiences for modern businesses
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-1 h-5 w-5 text-blue-400" />
                  Build future-ready systems that support long-term growth
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck className="mt-1 h-5 w-5 text-blue-400" />
                  Raise the standard of premium software delivery
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}