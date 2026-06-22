"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Website Development",
    message: "",
  });

  const [loading, setLoading] = useState(false);
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
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-20">
          <p className="text-blue-400 uppercase tracking-widest text-sm">
            Contact Us
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mt-4">
            Let&apos;s Discuss Your Project
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Tell us about your project and we&apos;ll help you build a premium
            digital solution.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="
              bg-white/5
              border
              border-white/10
              backdrop-blur-xl
              rounded-3xl
              p-8
              md:p-12
            "
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-2">Full Name</label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="
                    w-full
                    bg-white/5
                    border
                    border-white/10
                    rounded-xl
                    px-4
                    py-4
                    text-white
                    outline-none
                    focus:border-blue-500
                  "
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="
                    w-full
                    bg-white/5
                    border
                    border-white/10
                    rounded-xl
                    px-4
                    py-4
                    text-white
                    outline-none
                    focus:border-blue-500
                  "
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  className="
                    w-full
                    bg-white/5
                    border
                    border-white/10
                    rounded-xl
                    px-4
                    py-4
                    text-white
                    outline-none
                    focus:border-blue-500
                  "
                />
              </div>

              <div> 
                <label className="block text-gray-300 mb-2">
                  Service Type
                </label>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="
                    w-full
                    rounded-2xl
                    border
                    border-white/10
                    bg-[#07101d]/70
                    px-4
                    py-4
                    text-white
                    outline-none
                    transition
                    focus:border-blue-400/50
                  "
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

            <div className="mt-6">
              <label className="block text-gray-300 mb-2">
                Project Details
              </label>

              <textarea
                rows={6}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                className="
                  w-full
                  bg-white/5
                  border
                  border-white/10
                  rounded-xl
                  px-4
                  py-4
                  text-white
                  outline-none
                  resize-none
                  focus:border-blue-500
                "
              />
            </div>

            {status.message && (
              <div
                className={`mt-6 rounded-2xl px-4 py-4 text-sm ${
                  status.type === "success"
                    ? "bg-green-500/10 text-green-400 border border-green-500/20"
                    : "bg-red-500/10 text-red-400 border border-red-500/20"
                }`}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="
                mt-8
                w-full
                bg-blue-600
                hover:bg-blue-500
                transition-all
                duration-300
                py-4
                rounded-2xl
                text-white
                font-semibold
                disabled:opacity-60
                disabled:cursor-not-allowed
              "
            >
              {loading ? "Sending..." : "Submit Project Request"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}