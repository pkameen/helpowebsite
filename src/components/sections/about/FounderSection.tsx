"use client";

import Image from "next/image";
import { Quote, Globe, Mail, Sparkles } from "lucide-react";

export default function FounderSection() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* LEFT IMAGE SIDE */}
          <div className="relative">
            <div className="absolute -left-6 top-10 h-40 w-40 rounded-full bg-blue-500/15 blur-[90px]" />
            <div className="absolute right-0 bottom-0 h-44 w-44 rounded-full bg-cyan-400/10 blur-[100px]" />

            <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.03] p-4 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur">
              <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#07101f]">
                <Image
                  src="/images/about/founder-ceo.jpg"
                  alt="Founder and CEO of HELPO"
                  width={400}
                  height={500}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="absolute -bottom-6 left-6 rounded-[1.5rem] border border-white/10 bg-[#081120]/90 px-4 py-2 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur">
              <p className="text-xl font-semibold text-white">
                Sajid Ameen PK
              </p>
              <p className="mt-2 text-sm uppercase tracking-[0.35em] text-slate-400">
                Founder & CEO
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
              <Sparkles className="h-4 w-4" />
              Leadership
            </div>

            <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Meet the Founder Behind HELPO
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              HELPO is led by a vision to build premium digital experiences for
              modern businesses — combining beautiful interfaces, strategic
              thinking and powerful software systems that solve real operational
              and growth challenges.
            </p>

            <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
              <Quote className="h-8 w-8 text-blue-400" />
              <p className="mt-4 text-lg leading-8 text-slate-200">
                “Our goal is not just to build websites or software — it is to
                create digital systems that make businesses look better, work
                smarter and grow with confidence.”
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-white">
                Sajid Ameen PK
              </h3>
              <p className="mt-2 text-lg text-blue-300">Founder & CEO, HELPO</p>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                With a focus on premium design, business systems and practical
                digital execution, HELPO aims to deliver websites, ecommerce
                solutions, ERP/CRM tools and custom web applications that bring
                real value to clients.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:helposoftwars@gmail.com"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-white transition hover:bg-white/[0.06]"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>

              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-white transition hover:bg-white/[0.06]"
              >
                <Globe className="h-4 w-4" />
                Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}