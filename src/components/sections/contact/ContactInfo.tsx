"use client";

import { Mail, PhoneCall, Clock3, Sparkles } from "lucide-react";

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
  return (
    <section className="relative pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
            <Sparkles className="h-4 w-4" />
            Reach HELPO
          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Multiple Ways to Start the Conversation
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            Whether you prefer email, WhatsApp or a detailed project enquiry form,
            HELPO makes it easy to start the discussion in the way that feels most convenient for you.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {contactCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <div
                key={index}
                className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold text-white">
                  {card.title}
                </h3>

                <p className="mt-3 text-base font-medium text-blue-200">
                  {card.value}
                </p>

                <p className="mt-4 text-base leading-8 text-slate-300">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}