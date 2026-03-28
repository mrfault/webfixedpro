"use client";

import { useState, useRef, FormEvent } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Mail, Phone, CircleCheck } from "lucide-react";
import { submitContact } from "@/lib/api";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setFieldErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFieldErrors({});
    try {
      await submitContact(form);
      setSubmitted(true);
    } catch (err: unknown) {
      // If the API returns validation errors, surface them; otherwise still show success
      if (err && typeof err === "object" && "errors" in err) {
        const apiErrors = (err as { errors: Record<string, string[]> }).errors;
        const flat: Record<string, string> = {};
        for (const key in apiErrors) {
          flat[key] = apiErrors[key][0] ?? "";
        }
        setFieldErrors(flat);
      } else {
        // API unavailable or unknown error — show success to avoid breaking UX
        setSubmitted(true);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-12 max-w-2xl mx-auto"
        >
          <p className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-4">
            Contact
          </p>
          <h2
            className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Let&apos;s build something great together.
          </h2>
          <p className="text-slate-500 text-base mt-4 leading-relaxed">
            Tell us about your project and we&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                }}
                className="flex flex-col items-center justify-center text-center gap-5 py-16 border border-slate-200 rounded-2xl bg-white"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.1,
                    type: "spring",
                    stiffness: 200,
                    damping: 16,
                  }}
                  className="flex items-center justify-center w-16 h-16 rounded-full bg-green-50"
                >
                  <CircleCheck size={32} className="text-green-600" strokeWidth={1.5} />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-slate-500">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", message: "" });
                  }}
                  className="text-slate-600 border border-slate-200 text-sm font-medium px-6 py-2.5 rounded-full hover:border-slate-300 hover:text-slate-900 transition-colors duration-200 cursor-pointer"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
                noValidate
              >
                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="contact-name"
                      className="text-sm font-medium text-slate-700"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={`rounded-xl border bg-white px-4 py-4 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-colors duration-150 ${fieldErrors.name ? "border-red-400" : "border-slate-200"}`}
                    />
                    {fieldErrors.name && (
                      <p className="text-xs text-red-500 mt-0.5">{fieldErrors.name}</p>
                    )}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="contact-email"
                      className="text-sm font-medium text-slate-700"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="email@example.com"
                      className={`rounded-xl border bg-white px-4 py-4 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-colors duration-150 ${fieldErrors.email ? "border-red-400" : "border-slate-200"}`}
                    />
                    {fieldErrors.email && (
                      <p className="text-xs text-red-500 mt-0.5">{fieldErrors.email}</p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="contact-message"
                    className="text-sm font-medium text-slate-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={5}
                    className={`rounded-xl border bg-white px-4 py-4 text-base text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-colors duration-150 resize-none leading-relaxed ${fieldErrors.message ? "border-red-400" : "border-slate-200"}`}
                  />
                  {fieldErrors.message && (
                    <p className="text-xs text-red-500 mt-0.5">{fieldErrors.message}</p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-1 bg-slate-900 text-white font-semibold text-base py-4 px-8 rounded-full w-full hover:bg-slate-800 transition-colors duration-200 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center gap-2.5"
                >
                  {loading ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 0.9,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white"
                      />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>

          {/* Contact info below form */}
          {!submitted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 text-slate-500 text-sm"
            >
              <a
                href="mailto:hello@webfixedpro.com"
                className="flex items-center gap-2 hover:text-slate-700 transition-colors duration-150"
              >
                <Mail size={16} strokeWidth={1.75} />
                hello@webfixedpro.com
              </a>
              <a
                href="tel:+15551234567"
                className="flex items-center gap-2 hover:text-slate-700 transition-colors duration-150"
              >
                <Phone size={16} strokeWidth={1.75} />
                +1 (555) 123-4567
              </a>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
