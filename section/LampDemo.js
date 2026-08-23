"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { AlertCircle } from "lucide-react"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"
import { PageGlow } from "@/components/terminal-ui"

const socials = [
    { name: "github", icon: FaGithub, href: "https://github.com/yatinsingh2007" },
    { name: "linkedin", icon: FaLinkedin, href: "https://www.linkedin.com/in/yatin-singh-b37817323/" },
    { name: "instagram", icon: FaInstagram, href: "https://www.instagram.com/yatin_singh27" },
]

export default function LampDemo() {
    const [formData, setFormData] = useState({ email: "", message: "" })
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null)

    const validateForm = () => {
        const newErrors = {}
        if (!formData.email.trim()) {
            newErrors.email = "email is required"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "invalid email"
        }
        if (!formData.message.trim()) {
            newErrors.message = "message is required"
        } else if (formData.message.trim().length < 10) {
            newErrors.message = "message must be at least 10 chars"
        }
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!validateForm()) return
        setIsSubmitting(true)
        setSubmitStatus(null)
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            })
            if (response.ok) {
                setSubmitStatus("success")
                setFormData({ email: "", message: "" })
                setTimeout(() => setSubmitStatus(null), 5000)
            } else {
                setSubmitStatus("error")
            }
        } catch (error) {
            setSubmitStatus("error")
        } finally {
            setIsSubmitting(false)
        }
    }

    const inputBase =
        "w-full bg-term border px-4 py-3 text-sm text-fg placeholder-fg-dim/60 outline-none transition-colors duration-200 focus:border-cy"

    return (
        <section className="scanlines relative w-full overflow-hidden bg-term font-mono text-fg">
            <PageGlow />
            <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-4 sm:px-6 pt-32 pb-28 lg:grid-cols-2 lg:gap-16">
                {/* left: copy */}
                <div className="flex flex-col justify-center">
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-xs uppercase tracking-[0.3em] text-cy"
                    >
                        $ ./send-message --to yatin
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.05 }}
                        className="mt-5 text-[clamp(2.6rem,7vw,5rem)] font-bold uppercase leading-[0.85] tracking-tight text-fg"
                    >
                        Let&apos;s build<br />something <span className="text-cy">real_</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="mt-6 max-w-md text-sm leading-relaxed text-fg-dim"
                    >
                        // currently open to software &amp; ML opportunities and open for
                        collaboration. have a project in mind or just want to say hi? I&apos;m
                        always up for a good conversation.
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
                            className="inline-flex items-center gap-2 border border-edge px-4 py-3 text-sm text-fg transition-colors hover:border-cy hover:text-cy"
                        >
                            <span className="text-cy">❯</span> yatin.singh.dev@gmail.com
                        </a>
                        <div className="flex gap-2">
                            {socials.map(({ name, icon: Icon, href }) => (
                                <a
                                    key={name}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={name}
                                    className="flex h-11 w-11 items-center justify-center border border-edge text-fg-dim transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-cy hover:text-cy hover:shadow-[3px_3px_0_0_#22d3ee]"
                                >
                                    <Icon className="h-4 w-4" />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* right: terminal form */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="border border-edge bg-term-2 shadow-[8px_8px_0_0_rgba(34,211,238,0.12)]"
                >
                    <div className="flex items-center gap-2 border-b border-edge px-4 py-2.5">
                        <span className="h-2.5 w-2.5 bg-cy" />
                        <span className="h-2.5 w-2.5 bg-edge-2" />
                        <span className="h-2.5 w-2.5 bg-edge-2" />
                        <span className="ml-2 text-[11px] text-fg-dim">contact.sh — bash</span>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6 p-6 sm:p-8">
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-[11px] uppercase tracking-widest text-fg-dim">
                                <span className="text-cy">&gt;</span> your_email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                className={`${inputBase} ${errors.email ? "border-red-500/60" : "border-edge"}`}
                            />
                            <AnimatePresence>
                                {errors.email && (
                                    <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="flex items-center gap-1.5 text-[11px] text-red-400">
                                        <AlertCircle className="h-3 w-3" /> [err] {errors.email}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="block text-[11px] uppercase tracking-widest text-fg-dim">
                                <span className="text-cy">&gt;</span> message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="tell me what you're building..."
                                className={`${inputBase} resize-none ${errors.message ? "border-red-500/60" : "border-edge"}`}
                            />
                            <AnimatePresence>
                                {errors.message && (
                                    <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="flex items-center gap-1.5 text-[11px] text-red-400">
                                        <AlertCircle className="h-3 w-3" /> [err] {errors.message}
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="group inline-flex w-full items-center justify-center gap-2 border border-cy bg-cy px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-term transition-all duration-200 hover:bg-term hover:text-cy disabled:opacity-50"
                        >
                            {isSubmitting ? "transmitting..." : "$ send_message"}
                            {!isSubmitting && <span className="term-blink">▋</span>}
                        </button>

                        <AnimatePresence>
                            {submitStatus === "success" && (
                                <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="border border-cy/40 bg-cy/5 px-4 py-3 text-xs text-cy">
                                    → [ok] message transmitted. I&apos;ll respond shortly.
                                </motion.p>
                            )}
                            {submitStatus === "error" && (
                                <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="border border-red-500/40 bg-red-500/5 px-4 py-3 text-xs text-red-400">
                                    → [err] transmission failed. try again or email directly.
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </form>
                </motion.div>
            </div>
        </section>
    )
}
