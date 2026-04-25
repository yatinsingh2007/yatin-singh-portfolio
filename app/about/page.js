"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Navbar } from "@/section/Navbar";
import GlowingButton from "@/section/GlowingButton";
import Footer from "@/section/Footer";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Database,
  Server,
  Cpu,
  Globe,
  Terminal,
  FileText,
  Sparkles,
  Zap,
  Coffee,
  Heart,
  Search,
  BookOpen,
  Gamepad
} from "lucide-react";
import { cn } from "@/lib/utils";

const MagneticImage = ({ src, alt }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const mouseX = useSpring(x, springConfig);
  const mouseY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((clientX - centerX) * 0.15);
    y.set((clientY - centerY) * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: mouseX, y: mouseY }}
      className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] group cursor-none"
    >
      <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-cyan-500/20 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000" />
      <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-neutral-900">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transform transition-transform duration-700 group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500" />
      </div>
      
      {/* Floating UI elements */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-6 -right-6 p-4 rounded-2xl bg-black/80 border border-white/10 backdrop-blur-xl shadow-2xl z-20 hidden md:block"
      >
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-bold tracking-widest text-white/80 uppercase">Available for Hire</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function About() {
  const skills = [
    { name: "Full Stack Development", icon: <Globe className="w-4 h-4 text-blue-400" />, color: "border-blue-500/20 bg-blue-500/5" },
    { name: "MERN Stack", icon: <Database className="w-4 h-4 text-emerald-400" />, color: "border-emerald-500/20 bg-emerald-500/5" },
    { name: "DevOps", icon: <Terminal className="w-4 h-4 text-zinc-400" />, color: "border-zinc-500/20 bg-zinc-500/5" },
    { name: "AI/ML", icon: <Cpu className="w-4 h-4 text-purple-400" />, color: "border-purple-500/20 bg-purple-500/5" },
  ];

  const milestones = [
    { label: "Experience", value: "Internship @AssuredGig", icon: <Zap size={16} className="text-amber-400" /> },
    { label: "Education", value: "2nd Year B.Tech @NST", icon: <BookOpen size={16} className="text-indigo-400" /> },
    { label: "Focus", value: "AI & Scalable Systems", icon: <Sparkles size={16} className="text-purple-400" /> },
  ];

  return (
    <div className="min-h-screen w-full bg-black text-white relative flex flex-col overflow-x-hidden">
      <Navbar />

      <main className="flex-grow relative z-10 pt-40 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <MagneticImage src="/yatin_singh.jpeg" alt="Yatin Singh" />
            </div>

            <div className="lg:col-span-7 flex flex-col gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3 text-indigo-400 font-bold tracking-[0.3em] uppercase text-xs">
                  <span className="w-8 h-[1px] bg-indigo-500/50" />
                  The Architect Behind the Code
                </div>
                <h1 className="text-5xl md:text-8xl font-bold tracking-tighter bg-gradient-to-b from-white via-white/90 to-white/30 bg-clip-text text-transparent">
                  I'm Yatin Singh.
                </h1>
                <p className="text-2xl md:text-3xl text-zinc-400 font-light leading-relaxed max-w-2xl">
                  A visionary <span className="text-white">Full-Stack Engineer</span> and <span className="text-white">AI Enthusiast</span> dedicated to crafting the digital frontier.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                {milestones.map((item, i) => (
                  <div key={i} className="p-6 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-xl hover:bg-white/10 transition-colors group">
                    <div className="p-2 w-fit rounded-xl bg-white/5 border border-white/10 mb-4 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">{item.label}</div>
                    <div className="text-sm font-medium text-white tracking-wide">{item.value}</div>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="prose prose-invert prose-lg text-zinc-400 max-w-3xl space-y-6"
              >
                <p>
                  Currently in my second year of <span className="text-indigo-400 font-semibold">B.Tech at Newton School of Technology</span>, I thrive at the intersection of complex engineering and creative problem-solving.
                </p>
                <p>
                  My journey is fueled by a relentless curiosity for how things work—from the low-level architecture of backend systems to the high-level intelligence of Large Language Models. My experience as an <span className="text-white">Intern at AssuredGig</span> allowed me to apply these passions to real-world challenges, building systems that scale and matter.
                </p>
                <p>
                  I don't just write code; I architect experiences. Whether it's mastering the MERN stack, diving deep into Django and GoLang, or orchestrating DevOps pipelines, my goal is always excellence.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap gap-6 items-center pt-4"
              >
                <a href="https://drive.google.com/file/d/1C-CYeAOXZ7S24WUoa2gvARVeP9KN18bt/view?usp=sharing" target="_blank">
                  <GlowingButton
                    text="Download CV"
                    icon={<FileText size={20} />}
                  />
                </a>
                
                <div className="flex items-center gap-6 text-zinc-500 ml-2">
                  <div className="flex items-center gap-2 hover:text-white transition-colors cursor-default group">
                    <Coffee size={18} className="group-hover:text-amber-500 transition-colors" />
                    <span className="text-xs font-bold uppercase tracking-widest">Coffee Powered</span>
                  </div>
                  <div className="flex items-center gap-2 hover:text-white transition-colors cursor-default group">
                    <Heart size={18} className="group-hover:text-red-500 transition-colors" />
                    <span className="text-xs font-bold uppercase tracking-widest">Design Driven</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Tech Stack Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mt-40 border-t border-white/5 pt-24"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4 space-y-4">
                <h2 className="text-xs font-bold text-indigo-400 tracking-[0.4em] uppercase">The Arsenal</h2>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                  Technologies <br /> That I Command
                </h1>
                <p className="text-zinc-500 text-lg font-light leading-relaxed">
                  A curated selection of tools and frameworks I use to bring complex ideas to life.
                </p>
              </div>
              
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div 
                    key={index}
                    className={cn(
                      "p-6 rounded-[2rem] border transition-all duration-500 hover:scale-[1.02] flex items-center gap-5 group",
                      skill.color
                    )}
                  >
                    <div className="p-4 rounded-2xl bg-black/40 border border-white/5 group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </div>
                    <div className="space-y-1">
                      <div className="text-white font-bold tracking-wide">{skill.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Interests / Footer Info */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-40 p-12 rounded-[3rem] bg-neutral-950/50 border border-white/5 backdrop-blur-3xl text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }} />
            
            <div className="relative z-10 space-y-8">
              <div className="flex justify-center gap-12">
                {[
                  { icon: <Search size={24} />, label: "Science" },
                  { icon: <BookOpen size={24} />, label: "History" },
                  { icon: <Coffee size={24} />, label: "Cooking" },
                  { icon: <Gamepad size={24} />, label: "Gaming" }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-3 group">
                    <div className="text-zinc-500 group-hover:text-white transition-colors group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em]">{item.label}</span>
                  </div>
                ))}
              </div>
              <p className="text-zinc-500 italic text-lg max-w-2xl mx-auto">
                "When I'm not orchestrating servers or refining UI, you'll find me exploring the mysteries of science, the depths of history, or the creative art of cooking."
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <BackgroundBeams />
      </div>

      <Footer />
    </div>
  );
}
