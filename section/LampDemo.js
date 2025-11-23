"use client"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { useState } from "react"

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
            const response = await fetch(
                "/api/contact",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: formData.email,
                        message: formData.message,
                    }),
                }
            );

            if (response.ok) {
                setSubmitStatus("success")
                setFormData({
                    email: "",
                    message: ""
                })
                
                setTimeout(() => setSubmitStatus(null), 5000)
            } else {
                setSubmitStatus("error")
            }
        } catch (error) {
            console.error('Error submitting form:', error)
            setSubmitStatus("error")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="w-full min-h-screen relative flex items-center justify-center p-4 py-20">
            <BackgroundBeams />
            
            <div className="w-full max-w-2xl relative z-10">

                <div className="text-center mb-8 md:mb-12">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-linear-to-r from-green-300 via-green-500 to-green-600 bg-clip-text text-transparent animate-gradient">
                        Want to Contact Me?
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl">
                        Fill out the form below and I'll get back to you as soon as possible.
                    </p>
                </div>


                <form onSubmit={handleSubmit} className="relative">

                    <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl">
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
                        
                        <div className="space-y-6">
                            <div className="group">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-3 bg-white/5 border ${errors.email ? 'border-red-500/50' : 'border-white/10'} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300 hover:bg-white/10`}
                                    placeholder="john@example.com"
                                />
                                {errors.email && (
                                    <p className="mt-1 text-sm text-red-400 animate-fadeIn">{errors.email}</p>
                                )}
                            </div>

                            <div className="group">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    className={`w-full px-4 py-3 bg-white/5 border ${errors.message ? 'border-red-500/50' : 'border-white/10'} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300 hover:bg-white/10 resize-none`}
                                ></textarea>
                                {errors.message && (
                                    <p className="mt-1 text-sm text-red-400 animate-fadeIn">{errors.message}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full relative group/btn overflow-hidden rounded-xl bg-blue-500 p-[2px] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                            >
                                <div className="relative bg-gray-900 rounded-[10px] px-6 py-3 transition-all duration-300 group-hover/btn:bg-transparent">
                                    <span className="relative z-10 font-semibold text-white">
                                        {isSubmitting ? (
                                            <span className="flex items-center justify-center gap-2">
                                                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Sending...
                                            </span>
                                        ) : (
                                            "Send Message"
                                        )}
                                    </span>
                                </div>
                            </button>

                            {submitStatus === "success" && (
                                <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl animate-fadeIn">
                                    <p className="text-green-400 text-center font-medium">
                                        ✓ Message sent successfully! I'll get back to you soon.
                                    </p>
                                </div>
                            )}
                            
                            {submitStatus === "error" && (
                                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl animate-fadeIn">
                                    <p className="text-red-400 text-center font-medium">
                                        ✗ Something went wrong. Please try again.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </form>

                <div className="mt-8 text-center">
                    <p className="text-gray-400 text-sm">
                        You can reach me directly at{" "}
                        <a href="mailto:your.email@example.com" className="text-purple-400 hover:text-purple-300 transition-colors duration-300 underline">
                            yatin.singh.dev@gmail.com
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}