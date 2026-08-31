"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AlertCircle, Mail, Send, CheckCircle2, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Kicker, GlassCard } from "@/components/aurora-ui";

const socials = [
  { name: "GitHub", icon: FaGithub, href: "https://github.com/yatinsingh2007" },
  { name: "LinkedIn", icon: FaLinkedin, href: "https://www.linkedin.com/in/yatin-singh-b37817323/" },
  { name: "Instagram", icon: FaInstagram, href: "https://www.instagram.com/yatin_singh27" },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ email: "", message: "" });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputBase =
    "w-full rounded-xl border bg-white/[0.02] px-4 py-3 text-sm text-ink placeholder-ink-faint outline-none transition-colors duration-200 focus:border-brand/60 focus:bg-white/[0.04]";

  return (
    <section className="relative w-full text-ink">
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 sm:px-8 pt-32 sm:pt-40 pb-24 lg:grid-cols-2 lg:gap-16">
        {/* left: copy */}
        <div className="flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <Kicker>Get in touch</Kicker>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="mt-6 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1] tracking-tight text-ink"
          >
            Let's build something <span className="text-shimmer">great</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 max-w-md text-base leading-relaxed text-ink-dim"
          >
            I'm currently open to software &amp; ML opportunities and collaborations.
            Have a project in mind or just want to say hi? I'm always up for a good
            conversation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-8 space-y-4"
          >
            <a
              href="mailto:yatin.singh.dev@gmail.com"
              className="inline-flex items-center gap-2.5 rounded-xl border border-hair bg-white/[0.02] px-4 py-3 text-sm text-ink transition-colors hover:border-brand/60"
            >
              <Mail size={16} className="text-brand-2" /> yatin.singh.dev@gmail.com
            </a>
            <div className="flex items-center gap-2.5 text-sm text-ink-dim">
              <MapPin size={16} className="text-brand-2" /> Visakhapatnam, India — remote friendly
            </div>
            <div className="flex gap-2.5 pt-1">
              {socials.map(({ name, icon: Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-hair bg-white/[0.02] text-ink-dim transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/60 hover:text-ink"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* right: form */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <GlassCard hover={false} className="p-6 sm:p-8">
            <h2 className="font-display text-xl font-semibold text-ink">Send me a message</h2>
            <p className="mt-1 text-sm text-ink-dim">I'll get back to you as soon as I can.</p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-ink">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={`${inputBase} ${errors.email ? "border-red-500/60" : "border-hair"}`}
                />
                <AnimatePresence>
                  {errors.email && (
                    <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="flex items-center gap-1.5 text-xs text-red-400">
                      <AlertCircle className="h-3.5 w-3.5" /> {errors.email}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium text-ink">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me what you're building..."
                  className={`${inputBase} resize-none ${errors.message ? "border-red-500/60" : "border-hair"}`}
                />
                <AnimatePresence>
                  {errors.message && (
                    <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="flex items-center gap-1.5 text-xs text-red-400">
                      <AlertCircle className="h-3.5 w-3.5" /> {errors.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-3 via-brand to-brand-2 px-6 py-3.5 text-sm font-semibold text-white btn-glow transition-all duration-300 hover:brightness-110 disabled:opacity-50"
              >
                {isSubmitting ? "Sending…" : "Send message"}
                {!isSubmitting && <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />}
              </button>

              <AnimatePresence>
                {submitStatus === "success" && (
                  <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
                    <CheckCircle2 className="h-4 w-4" /> Message sent! I'll respond shortly.
                  </motion.p>
                )}
                {submitStatus === "error" && (
                  <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                    <AlertCircle className="h-4 w-4" /> Something went wrong. Try again or email me directly.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
