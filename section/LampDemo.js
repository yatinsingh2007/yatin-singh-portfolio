"use client"

import { BackgroundBeams } from "@/components/ui/background-beams"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, Mail, MessageSquare, CheckCircle2, AlertCircle } from "lucide-react"

export default function LampDemo() {
    const [formData, setFormData] = useState({
        email: "",
        message: ""
    })
    
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null)

    const validateForm = () => {
        const newErrors = {}
        
        if (!formData.email.trim()) {
            newErrors.email = "Email is required"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email"
        }
        
        if (!formData.message.trim()) {
            newErrors.message = "Message is required"
        } else if (formData.message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters"
        }
        
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ""
            }))
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        if (!validateForm()) {
            return
        }
        
        setIsSubmitting(true)
        setSubmitStatus(null)

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

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

    return (
        <div className="w-full min-h-screen relative flex items-center justify-center p-6 py-32 overflow-hidden selection:bg-white/20">
            <BackgroundBeams className="opacity-40" />
            
            <div className="w-full max-w-4xl grid md:grid-cols-2 gap-12 relative z-10">
                {/* Left Side: Copy */}
                <div className="flex flex-col justify-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <h1 className="text-6xl md:text-7xl font-bold tracking-tighter text-white leading-[1.1]">
                            Let's build <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-400">
                                something epic.
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-neutral-400 text-xl font-light leading-relaxed max-w-md"
                    >
                        Have a project in mind or just want to say hi? I'm always open to new opportunities and interesting conversations.
                    </motion.p>

                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="space-y-4 pt-4"
                    >
                        <div className="flex items-center gap-4 group">
                            <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                                <Mail className="w-6 h-6 text-zinc-300" />
                            </div>
                            <div>
                                <div className="text-sm text-neutral-500 font-medium">Email Me</div>
                                <a href="mailto:yatin.singh.dev@gmail.com" className="text-lg text-white hover:text-zinc-300 transition-colors font-medium">
                                    yatin.singh.dev@gmail.com
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Side: Form */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/10 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                    
                    <div className="relative bg-neutral-900/40 backdrop-blur-3xl border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl overflow-hidden">
                        {/* Decorative background element */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.03] blur-[100px] -z-10" />
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-mono tracking-widest text-neutral-500 uppercase flex items-center gap-2">
                                    <Mail className="w-3.5 h-3.5" />
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full px-6 py-4 bg-white/5 border ${errors.email ? 'border-red-500/50' : 'border-white/10'} rounded-2xl text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all duration-300 hover:bg-white/10`}
                                    placeholder="your@email.com"
                                />
                                <AnimatePresence>
                                    {errors.email && (
                                        <motion.p 
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="text-xs text-red-400 flex items-center gap-1 pl-2"
                                        >
                                            <AlertCircle className="w-3 h-3" />
                                            {errors.email}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-mono tracking-widest text-neutral-500 uppercase flex items-center gap-2">
                                    <MessageSquare className="w-3.5 h-3.5" />
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    className={`w-full px-6 py-4 bg-white/5 border ${errors.message ? 'border-red-500/50' : 'border-white/10'} rounded-2xl text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all duration-300 hover:bg-white/10 resize-none`}
                                    placeholder="Tell me about your vision..."
                                />
                                <AnimatePresence>
                                    {errors.message && (
                                        <motion.p 
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="text-xs text-red-400 flex items-center gap-1 pl-2"
                                        >
                                            <AlertCircle className="w-3 h-3" />
                                            {errors.message}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full relative group/btn overflow-hidden rounded-2xl bg-white p-[1px] transition-all duration-300 hover:scale-[1.01] active:scale-[0.98] disabled:opacity-50"
                            >
                                <div className="relative bg-[#030303] rounded-[15px] px-8 py-4 transition-all duration-300 group-hover/btn:bg-transparent flex items-center justify-center gap-3 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-zinc-700 to-zinc-800 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                                    
                                    <span className="relative z-10 font-bold text-white tracking-tight">
                                        {isSubmitting ? "Initiating..." : "Launch Message"}
                                    </span>
                                    {!isSubmitting && <Send className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {submitStatus === "success" && (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="p-4 bg-white/5 border border-white/10 rounded-2xl"
                                    >
                                        <p className="text-white text-center text-sm font-medium flex items-center justify-center gap-2">
                                            <CheckCircle2 className="w-4 h-4" />
                                            Message intercepted. I'll respond shortly.
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </form>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}