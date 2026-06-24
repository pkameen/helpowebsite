"use client";

import { useState } from "react";
import { Send, Sparkles, ChevronDown } from "lucide-react";

export default function ContactFormSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // mobile accordion states
  const [openInfo, setOpenInfo] = useState(false);
  const [openForm, setOpenForm] = useState(true);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSuccessMessage("");

    try {
      // IMPORTANT:
      // ഇവിടെ നിങ്ങളുടെ homepage Contact.tsx-ൽ ഉള്ള same fetch logic paste ചെയ്യുക.
      // const response = await fetch("/api/contact", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(form),
      // });

      // if (!response.ok) throw new Error("Failed");

      await new Promise((resolve) => setTimeout(resolve, 1200));

      setSuccessMessage("Your project enquiry has been sent successfully.");
      setForm({
        name: "",
        phone: "",
        email: "",
        service: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="relative pb-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          {/* LEFT CONTENT */}
          <div className="relative">
            {/* Mobile Accordion Header */}
            <button
              type="button"
              onClick={() => setOpenInfo((prev) => !prev)}
              className="group relative flex w-full items-center justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 text-left shadow-[0_20px_80px_rgba(0,0,0,0.22)] backdrop-blur lg:hidden"
            >
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-8 top-0 h-28 w-28 rounded-full bg-blue-500/10 blur-[70px]" />
                <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-cyan-400/10 blur-[70px]" />
              </div>

              <div className="relative z-10 pr-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-xs text-blue-200">
                  <Sparkles className="h-3.5 w-3.5" />
                  Project Enquiry
                </div>
                <h2 className="mt-3 text-xl font-semibold text-white">
                  Tell Us About Your Project
                </h2>
                <p className="mt-2 text-sm leading-7 text-slate-400">
                  Tap to view project guidance and enquiry details
                </p>
              </div>

              <div
                className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-200 transition duration-300 ${
                  openInfo ? "rotate-180" : ""
                }`}
              >
                <ChevronDown className="h-5 w-5" />
              </div>
            </button>

            {/* Desktop content + Mobile expandable content */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-out ${
                openInfo ? "max-h-[1600px] opacity-100 mt-4" : "max-h-0 opacity-0 lg:mt-0"
              } lg:max-h-none lg:opacity-100`}
            >
              <div className="rounded-[2.25rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_25px_90px_rgba(0,0,0,0.18)] backdrop-blur lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none">
                <div className="hidden lg:inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
                  <Sparkles className="h-4 w-4" />
                  Project Enquiry
                </div>

                <h2 className="mt-0 text-3xl font-semibold tracking-tight text-white md:text-4xl lg:mt-6 lg:text-5xl">
                  Tell Us About Your Project
                </h2>

                <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
                  Share your business requirements, project idea and the type of
                  website or web application you want to build. The more clarity you
                  provide, the easier it becomes to guide you in the right direction.
                </p>

                <div className="mt-8 grid gap-4">
                  {[
                    "Business websites with premium presentation",
                    "Ecommerce stores and conversion-focused experiences",
                    "Web applications and internal business systems",
                    "Professional project discussion with structured guidance",
                  ].map((item) => (
                    <div
                      key={item}
                      className="group relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[#07101d]/70 px-5 py-4 text-base text-slate-300 shadow-[0_10px_40px_rgba(0,0,0,0.15)] transition duration-300 hover:border-blue-400/20 hover:bg-[#0a1526]"
                    >
                      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                        <div className="absolute -left-8 top-0 h-20 w-20 rounded-full bg-blue-500/10 blur-[60px]" />
                      </div>
                      <div className="relative z-10">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* FORM CARD */}
          <div className="relative">
            {/* Mobile Accordion Header */}
            <button
              type="button"
              onClick={() => setOpenForm((prev) => !prev)}
              className="group relative flex w-full items-center justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 text-left shadow-[0_20px_80px_rgba(0,0,0,0.22)] backdrop-blur lg:hidden"
            >
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-8 top-0 h-28 w-28 rounded-full bg-blue-500/10 blur-[70px]" />
                <div className="absolute right-0 bottom-0 h-24 w-24 rounded-full bg-cyan-400/10 blur-[70px]" />
              </div>

              <div className="relative z-10 pr-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-xs text-blue-200">
                  <Sparkles className="h-3.5 w-3.5" />
                  Contact Form
                </div>
                <h2 className="mt-3 text-xl font-semibold text-white">
                  Send Your Project Enquiry
                </h2>
                <p className="mt-2 text-sm leading-7 text-slate-400">
                  Tap to open the full enquiry form
                </p>
              </div>

              <div
                className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-200 transition duration-300 ${
                  openForm ? "rotate-180" : ""
                }`}
              >
                <ChevronDown className="h-5 w-5" />
              </div>
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-out ${
                openForm ? "max-h-[3000px] opacity-100 mt-4" : "max-h-0 opacity-0 lg:mt-0"
              } lg:max-h-none lg:opacity-100`}
            >
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_30px_120px_rgba(0,0,0,0.22)] backdrop-blur md:p-8">
                {/* premium glow */}
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-blue-500/10 blur-[90px]" />
                  <div className="absolute right-0 bottom-0 h-44 w-44 rounded-full bg-cyan-400/10 blur-[100px]" />
                </div>

                <div className="relative z-10">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-200">
                          Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          className="w-full rounded-2xl border border-white/10 bg-[#07101d]/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400/50 focus:bg-[#0a1526]"
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-200">
                          Phone
                        </label>
                        <input
                          type="text"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          required
                          className="w-full rounded-2xl border border-white/10 bg-[#07101d]/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400/50 focus:bg-[#0a1526]"
                          placeholder="Your phone number"
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-200">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          className="w-full rounded-2xl border border-white/10 bg-[#07101d]/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400/50 focus:bg-[#0a1526]"
                          placeholder="Your email address"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-200">
                          Service Type
                        </label>
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          required
                          className="w-full rounded-2xl border border-white/10 bg-[#07101d]/70 px-4 py-3 text-white outline-none transition focus:border-blue-400/50 focus:bg-[#0a1526]"
                        >
                          <option value="">Select a service</option>
                          <option value="Business Website">Business Website</option>
                          <option value="Corporate Website">Corporate Website</option>
                          <option value="Ecommerce Website">Ecommerce Website</option>
                          <option value="Web Application">Web Application</option>
                          <option value="ERP / Business System">ERP / Business System</option>
                          <option value="CRM / Dashboard">CRM / Dashboard</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-200">
                        Project Budget
                      </label>
                      <input
                        type="text"
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className="w-full rounded-2xl border border-white/10 bg-[#07101d]/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400/50 focus:bg-[#0a1526]"
                        placeholder="Approximate budget (optional)"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-200">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full rounded-2xl border border-white/10 bg-[#07101d]/70 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400/50 focus:bg-[#0a1526]"
                        placeholder="Tell us about your project, goals, features or business needs..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#2563ff] px-6 py-4 text-base font-semibold text-white shadow-[0_20px_60px_rgba(37,99,235,0.35)] transition hover:-translate-y-0.5 hover:bg-[#1d4ed8] disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {isSubmitting ? "Sending..." : "Send Project Enquiry"}
                      <Send className="h-5 w-5" />
                    </button>

                    <p className="text-center text-sm leading-7 text-slate-400">
                      We review project enquiries carefully and respond with a clear
                      next-step direction.
                    </p>

                    {successMessage && (
                      <p className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
                        {successMessage}
                      </p>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* END FORM */}
        </div>
      </div>
    </section>
  );
}