"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AlertCircle, Mail, Send, CheckCircle2, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Kicker } from "@/components/aurora-ui";

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
    "w-full border bg-paper px-4 py-3 text-ink placeholder-ink-soft outline-none transition-colors duration-200 focus:border-flare";

  return (
    <section className="relative w-full text-ink">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 pt-28 sm:pt-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-between border-y border-line-2 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft"
        >
          <span>Correspondence</span>
          <span className="hidden sm:block">Reply within 48 hours</span>
        </motion.div>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 sm:px-8 pb-24 pt-14 lg:grid-cols-2 lg:gap-16">
        {/* left: copy */}
        <div className="flex flex-col justify-center">
          <motion.div initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <Kicker>Get in touch</Kicker>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="mt-6 font-display text-[clamp(2.8rem,6.5vw,5rem)] font-extrabold uppercase leading-[0.92] tracking-[-0.03em] text-ink"
          >
            Let's build something <span className="text-flare">worth keeping</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 max-w-md text-lg leading-relaxed text-ink-2"
          >
            I'm currently open to software &amp; ML opportunities and collaborations.
            Have a project in mind or just want to say hi? I'm always up for a good
            conversation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-8 space-y-4"
          >
            <a
              href="mailto:yatin.singh.dev@gmail.com"
              className="inline-flex items-center gap-2.5 border border-line px-4 py-3 text-ink transition-colors hover:border-flare"
            >
              <Mail size={16} className="text-flare" /> yatin.singh.dev@gmail.com
            </a>
            <div className="flex items-center gap-2.5 text-ink-2">
              <MapPin size={16} className="text-flare" /> Visakhapatnam, India — remote friendly
            </div>
            <div className="flex gap-2.5 pt-1">
              {socials.map(({ name, icon: Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="flex h-11 w-11 items-center justify-center border border-ink/70 text-ink transition-colors duration-200 hover:bg-ink hover:text-paper"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* right: form */}
        <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div className="border border-ink/70 bg-paper p-6 sm:p-8">
            <h2 className="font-display text-xl font-medium text-ink">Send me a message</h2>
            <p className="mt-1 text-ink-2">I'll get back to you as soon as I can.</p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div className="space-y-2">
                <label htmlFor="email" className="block font-mono text-[11px] uppercase tracking-widest text-ink-soft">
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={`${inputBase} ${errors.email ? "border-flare" : "border-line-2"}`}
                />
                <AnimatePresence>
                  {errors.email && (
                    <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="flex items-center gap-1.5 text-xs text-flare">
                      <AlertCircle className="h-3.5 w-3.5" /> {errors.email}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block font-mono text-[11px] uppercase tracking-widest text-ink-soft">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me what you're building..."
                  className={`${inputBase} resize-none ${errors.message ? "border-flare" : "border-line-2"}`}
                />
                <AnimatePresence>
                  {errors.message && (
                    <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="flex items-center gap-1.5 text-xs text-flare">
                      <AlertCircle className="h-3.5 w-3.5" /> {errors.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex w-full items-center justify-center gap-2 border border-ink bg-ink px-6 py-3.5 font-mono text-xs uppercase tracking-[0.15em] text-paper transition-colors duration-300 hover:border-flare hover:bg-flare disabled:opacity-50"
              >
                {isSubmitting ? "Sending…" : "Send message"}
                {!isSubmitting && <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />}
              </button>

              <AnimatePresence>
                {submitStatus === "success" && (
                  <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-2 border border-flare/50 bg-paper-2 px-4 py-3 text-sm text-ink">
                    <CheckCircle2 className="h-4 w-4 text-flare" /> Message sent! I'll respond shortly.
                  </motion.p>
                )}
                {submitStatus === "error" && (
                  <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-2 border border-flare/50 bg-paper-2 px-4 py-3 text-sm text-flare">
                    <AlertCircle className="h-4 w-4" /> Something went wrong. Try again or email me directly.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
