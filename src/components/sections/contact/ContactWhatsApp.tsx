"use client";

import Link from "next/link";
import { MessageCircle, Sparkles, ArrowRight } from "lucide-react";

export default function ContactWhatsApp() {
  return (
    <section className="relative pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2.75rem] border border-white/10 bg-gradient-to-br from-[#07101d] via-[#0a1220] to-[#07101d] p-6 shadow-[0_30px_120px_rgba(0,0,0,0.28)] backdrop-blur md:p-8 lg:p-10">
          {/* glow */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-50px] top-[-40px] h-56 w-56 rounded-full bg-blue-500/10 blur-[110px]" />
            <div className="absolute right-[-40px] bottom-[-40px] h-64 w-64 rounded-full bg-cyan-400/10 blur-[120px]" />
          </div>

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
                <Sparkles className="h-4 w-4" />
                Quick Contact
              </div>

              <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Prefer a Direct WhatsApp Conversation?
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-300">
                If you want to quickly discuss your website or web app idea, you can contact HELPO directly on WhatsApp for a faster initial conversation.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur md:p-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-300">
                <MessageCircle className="h-8 w-8" />
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-white">
                Start a WhatsApp Chat
              </h3>

              <p className="mt-3 text-base leading-8 text-slate-300">
                Share your project type, business goal or website requirement and we’ll help you understand the next step clearly.
              </p>

              <Link
                href="https://wa.me/918592824137"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-6 py-4 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-emerald-600"
              >
                Chat on WhatsApp
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}