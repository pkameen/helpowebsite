"use client";

import { useState } from "react";
import {
  MessageCircle,
  Mail,
  Phone,
  ChevronDown,
  Send,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Website Development",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [isMobileFormOpen, setIsMobileFormOpen] = useState(false);

  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setStatus({
        type: "success",
        message: "Your project enquiry has been sent successfully.",
      });

      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "Website Development",
        message: "",
      });

      setIsMobileFormOpen(false);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Failed to send enquiry. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-18 sm:py-22 lg:py-28"
    >
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-8%] top-10 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-[-10%] bottom-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 lg:mb-14"
        >
          <p className="mb-3 text-[11px] uppercase tracking-[0.24em] text-blue-400 sm:mb-4 sm:text-xs md:text-sm">
            Contact Us
          </p>

          <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl xl:text-5xl">
            Let’s Discuss Your Project
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-400 sm:mt-5 sm:text-base">
            Tell us about your project and we’ll help you build a premium
            digital solution with the right design, structure, and user
            experience.
          </p>
        </motion.div>

        {/* =========================
            MOBILE / TABLET
        ========================= */}
        <div className="mx-auto max-w-3xl lg:hidden">
          <div className="space-y-4">
            {/* Quick contact cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href="https://wa.me/918592824137"
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-[1.45rem] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/30 hover:bg-white/[0.07]"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Chat on WhatsApp
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-400">
                  Quick discussion about your website or web app project.
                </p>
              </a>

              <div className="rounded-[1.45rem] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-sm">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                  <Mail className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  Contact Directly
                </h3>
                <div className="mt-3 space-y-2 text-sm text-slate-400">
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-blue-400" />
                    +91 85928 24137
                  </p>
                  <p className="flex items-center gap-2 break-all">
                    <Mail className="h-4 w-4 text-blue-400" />
                    hello@helpo.in
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile accordion form */}
            <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.05] backdrop-blur-sm">
              <button
                type="button"
                onClick={() => setIsMobileFormOpen((prev) => !prev)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                    <Send className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      Send Project Request
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">
                      Fill the enquiry form and we’ll get back to you.
                    </p>
                  </div>
                </div>

                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#07101d]/80 text-slate-300 transition-transform duration-300 ${
                    isMobileFormOpen ? "rotate-180" : ""
                  }`}
                >
                  <ChevronDown className="h-5 w-5" />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isMobileFormOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-white/10 px-5 pb-5 pt-5">
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Full Name"
                          className="w-full rounded-2xl border border-white/10 bg-[#07101d]/70 px-4 py-3.5 text-white outline-none transition focus:border-blue-400/50"
                        />

                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Phone Number"
                          className="w-full rounded-2xl border border-white/10 bg-[#07101d]/70 px-4 py-3.5 text-white outline-none transition focus:border-blue-400/50"
                        />

                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email Address"
                          className="w-full rounded-2xl border border-white/10 bg-[#07101d]/70 px-4 py-3.5 text-white outline-none transition focus:border-blue-400/50"
                        />

                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full rounded-2xl border border-white/10 bg-[#07101d]/70 px-4 py-3.5 text-white outline-none transition focus:border-blue-400/50"
                        >
                          <option>Website Development</option>
                          <option>Web App Development</option>
                          <option>Ecommerce Website</option>
                          <option>Corporate Website</option>
                          <option>Landing Page</option>
                          <option>Custom Web Solution</option>
                        </select>

                        <textarea
                          rows={5}
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project..."
                          className="w-full resize-none rounded-2xl border border-white/10 bg-[#07101d]/70 px-4 py-3.5 text-white outline-none transition focus:border-blue-400/50"
                        />

                        {status.message && (
                          <div
                            className={`rounded-2xl px-4 py-4 text-sm ${
                              status.type === "success"
                                ? "border border-green-500/20 bg-green-500/10 text-green-400"
                                : "border border-red-500/20 bg-red-500/10 text-red-400"
                            }`}
                          >
                            {status.message}
                          </div>
                        )}

                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full rounded-2xl bg-blue-600 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          {loading ? "Sending..." : "Submit Project Request"}
                        </button>
                      </form>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* =========================
            DESKTOP FORM
        ========================= */}
        <div className="mx-auto hidden max-w-5xl lg:block">
          <div className="grid items-start gap-8 xl:grid-cols-[0.95fr_1.25fr]">
            {/* Left info cards */}
            <div className="space-y-5">
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-7 backdrop-blur-sm">
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                  <MessageCircle className="h-6 w-6" />
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  Let’s build something premium
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  Share your requirement with HELPO and we’ll help you plan the
                  right website or web application experience for your business.
                </p>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-7 backdrop-blur-sm">
                <h4 className="text-lg font-semibold text-white">
                  Quick Contact
                </h4>

                <div className="mt-5 space-y-4 text-sm text-slate-400">
                  <p className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-blue-400" />
                    +91 85928 24137
                  </p>
                  <p className="flex items-center gap-3 break-all">
                    <Mail className="h-4 w-4 text-blue-400" />
                    hello@helpo.in
                  </p>
                </div>

                <a
                  href="https://wa.me/918592824137"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-blue-500/30 hover:bg-blue-500/10"
                >
                  Chat on WhatsApp
                  <MessageCircle className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-sm xl:p-10"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-slate-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full rounded-2xl border border-white/10 bg-[#07101d]/70 px-4 py-4 text-white outline-none transition focus:border-blue-400/50"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-300">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="w-full rounded-2xl border border-white/10 bg-[#07101d]/70 px-4 py-4 text-white outline-none transition focus:border-blue-400/50"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                    className="w-full rounded-2xl border border-white/10 bg-[#07101d]/70 px-4 py-4 text-white outline-none transition focus:border-blue-400/50"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-slate-300">
                    Service Type
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-white/10 bg-[#07101d]/70 px-4 py-4 text-white outline-none transition focus:border-blue-400/50"
                  >
                    <option>Website Development</option>
                    <option>Web App Development</option>
                    <option>Ecommerce Website</option>
                    <option>Corporate Website</option>
                    <option>Landing Page</option>
                    <option>Custom Web Solution</option>
                  </select>
                </div>
              </div>

              <div className="mt-5">
                <label className="mb-2 block text-sm text-slate-300">
                  Project Details
                </label>
                <textarea
                  rows={6}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  className="w-full resize-none rounded-2xl border border-white/10 bg-[#07101d]/70 px-4 py-4 text-white outline-none transition focus:border-blue-400/50"
                />
              </div>

              {status.message && (
                <div
                  className={`mt-6 rounded-2xl px-4 py-4 text-sm ${
                    status.type === "success"
                      ? "border border-green-500/20 bg-green-500/10 text-green-400"
                      : "border border-red-500/20 bg-red-500/10 text-red-400"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="mt-7 w-full rounded-2xl bg-blue-600 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Sending..." : "Submit Project Request"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}