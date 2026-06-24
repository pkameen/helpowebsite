"use client";

import { useState } from "react";
import {
  Mail,
  PhoneCall,
  Clock3,
  Sparkles,
  Plus,
  Minus,
} from "lucide-react";

const contactCards = [
  {
    icon: Mail,
    title: "Email Us",
    value: "helposoftwars@gmail.com",
    description:
      "Send your project enquiry with details about the website, web app or system you want to build.",
  },
  {
    icon: PhoneCall,
    title: "Call / WhatsApp",
    value: "+91 8592824137",
    description:
      "For direct discussion, quick questions or project clarity, you can contact HELPO directly.",
  },
  {
    icon: Clock3,
    title: "Response & Discussion",
    value: "Project-focused support",
    description:
      "We review enquiries carefully and respond with a clear direction for the next step.",
  },
];

export default function ContactInfo() {
  const [openCard, setOpenCard] = useState<number | null>(0);

  const toggleCard = (index: number) => {
    setOpenCard(openCard === index ? null : index);
  };

  return (
    <section className="relative pb-24">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[8%] top-10 h-56 w-56 rounded-full bg-blue-500/10 blur-[110px]" />
        <div className="absolute right-[10%] bottom-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200 shadow-[0_0_30px_rgba(37,99,235,0.15)]">
            <Sparkles className="h-4 w-4" />
            Reach HELPO
          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Multiple Ways to Start the Conversation
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            Whether you prefer email, WhatsApp or a detailed project enquiry
            form, HELPO makes it easy to start the discussion in the way that
            feels most convenient for you.
          </p>
        </div>

        {/* cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {contactCards.map((card, index) => {
            const Icon = card.icon;
            const isOpen = openCard === index;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.025] p-5 shadow-[0_25px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-white/[0.05] md:p-7"
              >
                {/* hover glow */}
                <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                  <div className="absolute -left-10 top-0 h-32 w-32 rounded-full bg-blue-500/10 blur-[80px]" />
                  <div className="absolute right-0 bottom-0 h-28 w-28 rounded-full bg-cyan-400/10 blur-[80px]" />
                </div>

                {/* top highlight */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                <div className="relative z-10">
                  {/* mobile clickable header / desktop static */}
                  <button
                    type="button"
                    onClick={() => toggleCard(index)}
                    className="flex w-full items-start justify-between gap-4 text-left md:pointer-events-none"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-400/15 bg-blue-500/15 text-blue-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                        <Icon className="h-6 w-6" />
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                          {card.title}
                        </h3>
                        <p className="mt-2 text-sm font-medium text-blue-200 md:text-base">
                          {card.value}
                        </p>
                      </div>
                    </div>

                    {/* mobile toggle */}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 md:hidden">
                      {isOpen ? (
                        <Minus className="h-4 w-4" />
                      ) : (
                        <Plus className="h-4 w-4" />
                      )}
                    </div>
                  </button>

                  {/* desktop always visible */}
                  <p className="mt-5 hidden text-base leading-8 text-slate-300 md:block">
                    {card.description}
                  </p>

                  {/* mobile accordion content */}
                  <div
                    className={`grid overflow-hidden transition-all duration-300 md:hidden ${
                      isOpen
                        ? "mt-4 grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-base leading-8 text-slate-300">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}