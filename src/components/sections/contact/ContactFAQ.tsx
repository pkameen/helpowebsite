"use client";

import { useState } from "react";
import { Sparkles, Plus } from "lucide-react";

function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

const faqs = [
  {
    question: "What type of projects can I discuss with HELPO?",
    answer:
      "You can contact HELPO for premium business websites, corporate websites, ecommerce websites, web applications, dashboards and custom business-focused web systems.",
  },
  {
    question: "Do I need a full project plan before contacting you?",
    answer:
      "No. Even if your idea is still in the early stage, you can contact HELPO with the available details. The discussion can help shape the right direction for the project.",
  },
  {
    question: "Will I get support after the project is completed?",
    answer:
      "Yes. Depending on the project, HELPO can provide guidance, post-launch support and help with future improvements or enhancements.",
  },
  {
    question: "How do I start the enquiry process?",
    answer:
      "You can fill out the project enquiry form, send an email or contact HELPO through WhatsApp for an initial discussion.",
  },
];

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative pb-24">
      <div className="mx-auto max-w-5xl px-6">
        {/* heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
            <Sparkles className="h-4 w-4" />
            Contact FAQ
          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Common Questions Before You Get in Touch
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            A few quick answers to help you understand how the HELPO enquiry and
            project discussion process works.
          </p>
        </div>

        {/* FAQ list */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={cn(
                  "group overflow-hidden rounded-[1.8rem] border backdrop-blur transition-all duration-300",
                  isOpen
                    ? "border-blue-400/30 bg-white/[0.05] shadow-[0_20px_70px_rgba(37,99,235,0.12)]"
                    : "border-white/10 bg-white/[0.03] hover:border-white/15 hover:bg-white/[0.04]"
                )}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-start justify-between gap-4 px-6 py-6 text-left md:px-7"
                >
                  <div className="pr-2">
                    <h3 className="text-lg font-semibold leading-8 text-white md:text-xl">
                      {faq.question}
                    </h3>

                    {/* desktop preview line when closed */}
                    {!isOpen && (
                      <p className="mt-2 hidden text-sm leading-7 text-slate-400 md:block">
                        Click to view the answer
                      </p>
                    )}
                  </div>

                  <div
                    className={cn(
                      "mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                      isOpen
                        ? "border-blue-400/30 bg-blue-500/15 text-blue-200 rotate-45"
                        : "border-white/10 bg-white/5 text-slate-200"
                    )}
                  >
                    <Plus className="h-5 w-5" />
                  </div>
                </button>

                <div
                  className={cn(
                    "grid transition-all duration-500 ease-in-out",
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 md:px-7 md:pb-7">
                      <div className="rounded-[1.4rem] border border-white/8 bg-[#07101d]/60 p-5 md:p-6">
                        <p className="text-base leading-8 text-slate-300">
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
    </section>
  );
}