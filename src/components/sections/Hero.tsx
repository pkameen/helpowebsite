"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Globe2, ShieldCheck, Layers3 } from "lucide-react";
import { useEffect, useState } from "react";

const words = [
  "High-Performance Software for Modern Operations",
  "Premium Websites That Build Trust",
  "Web Apps & Systems Built For Modern Brands",
];

export default function HeroSection() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const speed = isDeleting ? 35 : 70;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1400);
        }
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <section className="relative overflow-hidden bg-[#030712] pb-20 pt-12 md:pb-28 md:pt-16">
      {/* background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* base gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.18),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(0, 0, 0, 0.12),transparent_25%),linear-gradient(180deg,#040816_0%,#030712_45%,#030712_100%)]" />

        {/* premium mesh glow */}
        <div className="absolute left-[-12%] top-[-6%] h-[28rem] w-[28rem] rounded-full bg-blue-500/15 blur-[120px] animate-pulse" />
        <div className="absolute right-[-8%] top-[8%] h-[26rem] w-[26rem] rounded-full bg-cyan-400/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-8rem] left-1/2 h-[20rem] w-[75%] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

        {/* soft grid */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* large top word */}
        <div className="pointer-events-none absolute left-1/2 top-10 hidden w-full -translate-x-1/2 select-none text-center text-[110px] font-semibold tracking-[0.18em] text-white/[0.03] md:block lg:text-[170px]">
          HELPO
        </div>

        {/* floating glass streaks */}
        <div className="absolute left-[8%] top-[18%] hidden h-[3px] w-28 rounded-full bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent blur-[1px] md:block animate-[floatX_8s_ease-in-out_infinite]" />
        <div className="absolute right-[12%] top-[30%] hidden h-[2px] w-24 rounded-full bg-gradient-to-r from-transparent via-blue-300/70 to-transparent blur-[1px] md:block animate-[floatX_10s_ease-in-out_infinite]" />
        <div className="absolute left-[18%] bottom-[22%] hidden h-[3px] w-36 rounded-full bg-gradient-to-r from-transparent via-blue-400/70 to-transparent blur-[1px] md:block animate-[floatX_9s_ease-in-out_infinite]" />
      </div>

      <div className="relative pt-20 z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr]">
          {/* LEFT CONTENT */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200 backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Premium Digital Solutions by HELPO
            </div>

            <h1 className="mt-6 min-h-[150px] text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:min-h-[170px] sm:text-5xl md:min-h-[190px] md:text-6xl xl:min-h-[220px] xl:text-7xl">
              <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                {text}
              </span>
              <span className="ml-1 inline-block h-[1em] w-[2px] translate-y-1 bg-blue-400 align-middle animate-pulse" />
            </h1>

            <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg md:text-xl md:leading-9">
              HELPO builds premium websites, ecommerce platforms, ERP systems,
              CRM tools and custom web applications that help businesses look
              stronger, operate smarter and grow with confidence.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#2563ff] px-7 py-4 text-base font-semibold text-white shadow-[0_20px_60px_rgba(37,99,235,0.35)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#1d4ed8]"
              >
                Start Your Project
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-2xl border border-white/12 bg-white/[0.05] px-7 py-4 text-base font-semibold text-white/90 backdrop-blur transition duration-300 hover:border-white/20 hover:bg-white/[0.08]"
              >
                View Portfolio
              </Link>
            </div>

            {/* trust mini highlights */}
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {[
                {
                  icon: Globe2,
                  title: "Premium Websites",
                  text: "High-end business web presence",
                },
                {
                  icon: Layers3,
                  title: "Custom Systems",
                  text: "ERP, CRM & internal platforms",
                },
                {
                  icon: ShieldCheck,
                  title: "Business Trust",
                  text: "Professional delivery & clarity",
                },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-sm font-semibold text-white md:text-base">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[720px]">
              {/* glass floating bars */}
              <div className="absolute left-[10%] top-[-10%] z-30 hidden rounded-[1.25rem] px-5 py-4 border border-white/10 bg-white/[0.06] backdrop-blur-xl md:block animate-[floatY_6s_ease-in-out_infinite]">
                <p className="text-3xl font-semibold text-white">50+</p>
                <p className="mt-1 text-xs uppercase tracking-[0.32em] text-slate-300">
                  Projects <br /> Delivered
                </p>
              </div>

              <div className="absolute right-[-10%] top-[10%] z-30 hidden rounded-[1.25rem] px-5 py-4 border border-cyan-400/15 bg-cyan-400/[0.05] backdrop-blur-xl md:block animate-[floatY_7s_ease-in-out_infinite]">
                <p className="text-3xl font-semibold text-white">20+</p>
                <p className="mt-1 text-xs uppercase tracking-[0.32em] text-slate-300">
                  Happy <br /> Clients
                </p>
              </div>

              <div className="absolute left-[10%] bottom-[18%] z-20 hidden rounded-[1.25rem]  px-3 py-2 border border-blue-400/15 bg-blue-500/[0.05] backdrop-blur-xl md:block animate-[floatY_8s_ease-in-out_infinite]">
                <p className="text-2xl font-semibold text-white">100%
                  <span className="mt-1 text-xs uppercase tracking-[0.32em] text-slate-400"> Trust</span>
                </p>
              </div>

              {/* glow behind laptop */}
              <div className="absolute left-1/2 top-[42%] z-0 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[110px]" />
              <div className="absolute left-1/2 top-[52%] z-0 h-[260px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[100px]" />

              {/* bottom runway line */}
              <div className="absolute bottom-[10%] left-1/2 z-0 h-[160px] w-[92%] -translate-x-1/2 rounded-full border border-blue-400/10 bg-gradient-to-r from-blue-500/5 via-cyan-400/10 to-blue-500/5 blur-0" />
              <div className="absolute bottom-[13%] left-1/2 z-10 h-[2px] w-[72%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-300/80 to-transparent shadow-[0_0_30px_rgba(34,211,238,0.6)]" />

              {/* laptop card wrapper */}
              <div className="relative z-10 mx-auto w-full max-w-[760px]">
                <div className="hero-dashboard-wrap relative">
                  {/* outer cinematic frame */}
                  <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/10 via-white/[0.03] to-transparent blur-xl" />

                  {/* laptop image */}
                  <div className="hero-dashboard relative rounded-[2.2rem] border border-white/10 bg-white/[0.03] p-3 shadow-[0_40px_120px_rgba(0,0,0,0.55)] backdrop-blur-xl">
                    <div className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#050b16]">
                      <Image
                        src="/images/hero/hero-dashboard.jpg"
                        alt="HELPO premium digital experience"
                        width={1400}
                        height={1000}
                        priority
                        className="h-auto w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* bottom trust bar */}
              <div className="mx-auto mt-6 max-w-[620px] rounded-[1.6rem] border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-xl">
                <div className="grid gap-4 sm:grid-cols-3">
                  <div>
                    <p className="text-2xl font-semibold text-white">Premium</p>
                    <p className="text-sm text-slate-400">Business-first execution</p>
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-white">Modern</p>
                    <p className="text-sm text-slate-400">Design + workflow clarity</p>
                  </div>
                  <div>
                    <p className="text-2xl font-semibold text-white">Scalable</p>
                    <p className="text-sm text-slate-400">Built for long-term growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END RIGHT */}
        </div>
      </div>

      {/* custom animation styles */}
      <style jsx>{`
        .hero-dashboard-wrap {
          perspective: 1800px;
        }

        .hero-dashboard {
          transform-style: preserve-3d;
          animation: laptopEntrance 1.5s cubic-bezier(0.22, 1, 0.36, 1) both,
            laptopFloat 7s ease-in-out 1.6s infinite;
          will-change: transform, opacity;
        }

        @keyframes laptopEntrance {
          0% {
            opacity: 0;
            transform: translate3d(140px, 60px, 0) rotateY(-20deg) rotateX(8deg)
              scale(0.88);
            filter: blur(8px);
          }
          55% {
            opacity: 1;
            transform: translate3d(-10px, 0, 0) rotateY(4deg) rotateX(0deg)
              scale(1.02);
            filter: blur(0);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)
              scale(1);
            filter: blur(0);
          }
        }

        @keyframes laptopFloat {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes floatY {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes floatX {
          0%,
          100% {
            transform: translateX(0px);
            opacity: 0.6;
          }
          50% {
            transform: translateX(18px);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}