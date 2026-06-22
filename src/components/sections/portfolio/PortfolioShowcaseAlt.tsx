"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, } from "lucide-react";

const points = [
  "Luxury-style product presentation and modern shopping experience",
  "Clear content structure with strong visual hierarchy",
  "Responsive design crafted for mobile and desktop browsing",
  "Premium brand presentation focused on trust and conversion",
];

export default function PortfolioShowcaseAlt() {
  return (
    <section className="relative pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative grid items-center gap-10 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-5 backdrop-blur lg:grid-cols-[0.95fr_1.05fr] lg:p-8">
          {/* left content */}
          <div className="order-2 px-2 lg:order-1 lg:px-4">
            <div className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
              Ecommerce / Brand Showcase
            </div>

            <h3 className="mt-6 text-3xl font-semibold leading-tight text-white md:text-4xl">
              Premium Ecommerce Experience Built for Brand Presentation & Sales
            </h3>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              This showcase represents HELPO’s approach to building ecommerce
              experiences that combine elegant visual presentation, structured
              product discovery and a smoother conversion-focused shopping flow.
            </p>

            <div className="mt-8 space-y-4">
              {points.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-300" />
                  <p className="text-base leading-8 text-slate-300">{point}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.5rem] border border-white/10 bg-[#07101d]/60 p-5">
                <p className="text-2xl font-semibold text-white">Elegant</p>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Brand-focused design
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-[#07101d]/60 p-5">
                <p className="text-2xl font-semibold text-white">Smooth</p>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Shopping flow & UX
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-[#07101d]/60 p-5">
                <p className="text-2xl font-semibold text-white">Scalable</p>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  Ready for growth
                </p>
              </div>
            </div>

            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-[#2563ff] px-6 py-4 text-base font-semibold text-white shadow-[0_20px_60px_rgba(37,99,235,0.35)] transition hover:-translate-y-0.5 hover:bg-[#1d4ed8]"
              >
                Build a Similar Store
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* right image */}
          <div className="order-1 relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#07101d] lg:order-2">
            <Image
              src="/images/portfolio/ecommerce-1.jpg"
              alt="Portfolio Ecommerce Showcase"
              width={1600}
              height={1100}
              className="h-auto w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020617]/50 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}