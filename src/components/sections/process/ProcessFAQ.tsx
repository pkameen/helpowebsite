"use client";

import { useState } from "react";
import { Sparkles, Plus } from "lucide-react";

const faqs = [
  {
    question: "How long does a project usually take?",
    answer:
      "The timeline depends on the type of project, number of pages, complexity of features and overall scope. Smaller business websites may take less time, while web apps, ecommerce projects or ERP systems usually require a longer process.",
  },
  {
    question: "Will I be updated during the project?",
    answer:
      "Yes. HELPO follows a structured workflow with clear communication so you understand the progress, direction and important updates throughout the project.",
  },
  {
    question: "Can I request changes during the process?",
    answer:
      "Yes, reasonable refinements and improvements can be discussed during the project. The exact nature of changes depends on the stage of work and the scope of the project.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. After launch, HELPO can provide guidance, post-launch support and help with future improvements depending on the project requirements.",
  },
];

export default function ProcessFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative pb-24">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[8%] top-10 h-56 w-56 rounded-full bg-blue-500/10 blur-[110px]" />
        <div className="absolute right-[10%] bottom-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-[130px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        {/* heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200 shadow-[0_0_30px_rgba(37,99,235,0.12)]">
            <Sparkles className="h-4 w-4" />
            Process FAQ
          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Common Questions About the HELPO Process
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            Here are a few common questions clients may have before starting a
            project with HELPO.
          </p>
        </div>

        {/* faq wrapper */}
        <div className="relative mt-12 overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.03] p-3 shadow-[0_30px_120px_rgba(2,6,23,0.35)] backdrop-blur sm:p-4 md:p-5">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-blue-500/10 blur-[90px]" />
            <div className="absolute right-0 bottom-0 h-52 w-52 rounded-full bg-cyan-400/10 blur-[100px]" />
          </div>

          <div className="relative z-10 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`group overflow-hidden rounded-[1.6rem] border transition-all duration-300 ${
                    isOpen
                      ? "border-blue-400/25 bg-[#08111f]/90 shadow-[0_18px_60px_rgba(37,99,235,0.12)]"
                      : "border-white/10 bg-[#07101d]/55 hover:border-white/15 hover:bg-[#08111f]/75"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left sm:px-6 sm:py-6"
                  >
                    <div className="flex min-w-0 items-start gap-4">
                      {/* number badge */}
                      <div
                        className={`mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border text-sm font-semibold transition-all duration-300 ${
                          isOpen
                            ? "border-blue-400/25 bg-blue-500/15 text-blue-200 shadow-[0_0_25px_rgba(37,99,235,0.16)]"
                            : "border-white/10 bg-white/[0.04] text-slate-300"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div className="min-w-0">
                        <h3
                          className={`text-lg font-semibold leading-7 transition-colors sm:text-xl ${
                            isOpen ? "text-white" : "text-white/95"
                          }`}
                        >
                          {faq.question}
                        </h3>

                        {!isOpen && (
                          <p className="mt-2 line-clamp-2 text-sm leading-7 text-slate-400 sm:text-[15px]">
                            {faq.answer}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* plus icon */}
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border transition-all duration-300 ${
                        isOpen
                          ? "border-blue-400/25 bg-blue-500/15 text-blue-200"
                          : "border-white/10 bg-white/[0.04] text-slate-200"
                      }`}
                    >
                      <Plus
                        className={`h-5 w-5 transition-transform duration-300 ${
                          isOpen ? "rotate-45" : "rotate-0"
                        }`}
                      />
                    </div>
                  </button>

                  {/* expandable content */}
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                        <div className="ml-[3.4rem] border-t border-white/10 pt-4 sm:ml-[3.7rem]">
                          <p className="max-w-3xl text-sm leading-8 text-slate-300 sm:text-base">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}