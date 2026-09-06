"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AlertCircle, Send, CheckCircle2, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { PageHeader, Container, Grid, Prose, Section, Reveal } from "@/components/aurora-ui";

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
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputBase =
    "w-full rounded-xl border bg-paper-2 px-4 py-3.5 t-body text-ink placeholder:text-ink-faint outline-none backdrop-blur-xl transition-colors duration-300 focus:border-line-2 focus:bg-paper-3";

  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title="Let's build something worth keeping"
        description="I'm open to software and ML engineering roles and collaborations. Have a project in mind, or just want to say hi? I reply within 48 hours."
      />

      <Section className="pt-14 md:pt-20">
        <Container>
          <Grid>
            <Prose>
              <Reveal>
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2.5">
                    <label htmlFor="email" className="t-meta text-ink-soft">
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`${inputBase} ${errors.email ? "border-flare" : "border-line"}`}
                    />
                    <AnimatePresence>
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="t-caption flex items-center gap-1.5 text-flare"
                        >
                          <AlertCircle className="h-3.5 w-3.5" /> {errors.email}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="flex flex-col gap-2.5">
                    <label htmlFor="message" className="t-meta text-ink-soft">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me what you're building…"
                      className={`${inputBase} resize-none ${errors.message ? "border-flare" : "border-line"}`}
                    />
                    <AnimatePresence>
                      {errors.message && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="t-caption flex items-center gap-1.5 text-flare"
                        >
                          <AlertCircle className="h-3.5 w-3.5" /> {errors.message}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-ink px-6 t-cta font-medium text-void transition-colors duration-300 hover:bg-ink-1 disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending…" : "Send message"}
                    {!isSubmitting && (
                      <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    )}
                  </button>

                  <AnimatePresence>
                    {submitStatus === "success" && (
                      <motion.p
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="t-caption flex items-center gap-2 rounded-xl border border-line bg-paper-2 px-4 py-3.5 text-ink"
                      >
                        <CheckCircle2 className="h-4 w-4 text-flare" /> Message sent — I&apos;ll
                        respond shortly.
                      </motion.p>
                    )}
                    {submitStatus === "error" && (
                      <motion.p
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="t-caption flex items-center gap-2 rounded-xl border border-line bg-paper-2 px-4 py-3.5 text-ink-2"
                      >
                        <AlertCircle className="h-4 w-4" /> Something went wrong. Try again,
                        or email me directly.
                      </motion.p>
                    )}
                  </AnimatePresence>
                </form>
              </Reveal>
            </Prose>
          </Grid>

          {/* direct channels */}
          <Reveal delay={0.08}>
            <dl className="mx-auto mt-20 grid max-w-4xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
              <div className="bg-void/40 p-6 backdrop-blur-xl">
                <dt className="t-meta text-ink-faint">Email</dt>
                <dd className="mt-3">
                  <a
                    href="mailto:yatin.singh.dev@gmail.com"
                    className="group t-h5 inline-flex items-start gap-1 break-all text-ink transition-colors hover:text-ink-2"
                  >
                    yatin.singh.dev@gmail.com
                    <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </dd>
              </div>
              <div className="bg-void/40 p-6 backdrop-blur-xl">
                <dt className="t-meta text-ink-faint">Location</dt>
                <dd className="t-h5 mt-3 text-ink">Visakhapatnam, India</dd>
                <dd className="t-caption mt-1 text-ink-soft">Remote friendly</dd>
              </div>
              <div className="bg-void/40 p-6 backdrop-blur-xl">
                <dt className="t-meta text-ink-faint">Elsewhere</dt>
                <dd className="mt-3 flex gap-2">
                  {socials.map(({ name, icon: Icon, href }) => (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={name}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-2 transition-colors duration-300 hover:bg-paper-3 hover:text-ink"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </dd>
              </div>
            </dl>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
