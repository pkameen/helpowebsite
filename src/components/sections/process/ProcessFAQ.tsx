"use client";

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
  return (
    <section className="relative pb-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
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