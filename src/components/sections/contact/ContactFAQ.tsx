"use client";

import { Sparkles, Plus } from "lucide-react";

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
  return (
    <section className="relative pb-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
            <Sparkles className="h-4 w-4" />
            Contact FAQ
          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Common Questions Before You Get in Touch
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            A few quick answers to help you understand how the HELPO enquiry and project discussion process works.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold text-white">
                  {faq.question}
                </h3>

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200">
                  <Plus className="h-5 w-5" />
                </div>
              </div>

              <p className="mt-4 text-base leading-8 text-slate-300">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}