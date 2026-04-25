"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export default function LoadingScreen() {
    const [progress, setProgress] = useState(0)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer)
                    setTimeout(() => setIsLoading(false), 500)
                    return 100
                }
                return prev + Math.floor(Math.random() * 15) + 5
            })
        }, 150)

        return () => clearInterval(timer)
    }, [])

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030303] selection:bg-none"
                >
                    {/* Noise Texture */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none z-10" />
                    
                    <div className="relative z-20 w-full max-w-md px-10 space-y-8">
                        <div className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-end justify-between font-mono text-[10px] tracking-[0.2em] text-neutral-500 uppercase"
                            >
                                <span>System Calibration</span>
                                <span>{Math.min(progress, 100)}%</span>
                            </motion.div>
                            
                            <div className="h-[1px] w-full bg-neutral-800 overflow-hidden relative">
                                <motion.div 
                                    className="absolute inset-y-0 left-0 bg-white"
                                    initial={{ width: "0%" }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col items-center space-y-2">
                            <motion.h2 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                                className="text-white font-medium tracking-tighter text-2xl md:text-3xl"
                            >
                                YATIN SINGH
                            </motion.h2>
                            <p className="font-mono text-[10px] tracking-[0.3em] text-neutral-600 uppercase">
                                Full-Stack Developer & AI Enthusiast
                            </p>
                        </div>
                    </div>

                    <div className="absolute bottom-10 left-10 font-mono text-[9px] text-neutral-800 leading-relaxed uppercase tracking-widest hidden md:block">
                        // INITIALIZING BIOMETRIC PROTOCOLS <br />
                        // ESTABLISHING ENCRYPTED UPLINK <br />
                        // DEPLOYING NEURAL INTERFACE
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
