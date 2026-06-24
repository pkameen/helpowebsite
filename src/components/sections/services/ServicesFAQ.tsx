"use client";

import { useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";

const faqs = [
  {
    question: "What types of services does HELPO provide?",
    answer:
      "HELPO provides premium website development, web application development, ecommerce solutions, ERP systems, CRM systems and custom business-focused digital solutions.",
  },
  {
    question: "Can you build custom websites and web applications?",
    answer:
      "Yes. We build custom websites and web applications based on your business goals, design expectations and functional requirements rather than using generic one-size-fits-all solutions.",
  },
  {
    question: "Do you redesign existing websites or systems?",
    answer:
      "Yes. If you already have a website, admin panel or business system, HELPO can redesign and improve it with a more modern UI, better structure and a stronger premium presentation.",
  },
  {
    question: "Do you provide support after project delivery?",
    answer:
      "Yes. We provide post-launch support, fixes, improvements and guidance so your project remains stable and can continue to grow after launch.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "The timeline depends on the scope, number of pages, design complexity and required features. Smaller websites can be completed faster, while web apps, ERP and CRM systems usually take longer due to their business logic and workflow requirements.",
  },
  {
    question: "Can HELPO build ERP or CRM systems for businesses?",
    answer:
      "Absolutely. HELPO can build custom ERP, CRM and workflow-based business systems designed to improve operations, organization, reporting and team productivity.",
  },
];

export default function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-5xl px-6">
        {/* heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
            <Sparkles className="h-4 w-4" />
            Frequently Asked Questions
          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Common Questions About Our Services
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            Here are some common questions clients ask before starting a project
            with HELPO.
          </p> 
        </div>

        {/* faq list */}
        <div className="mt-14 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] backdrop-blur"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left md:px-7"
                >
                  <span className="text-lg font-medium text-white md:text-xl">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown className="h-5 w-5" />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-white/8 px-6 pb-6 pt-4 md:px-7">
                      <p className="text-base leading-8 text-slate-300">
                        {faq.answer}
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