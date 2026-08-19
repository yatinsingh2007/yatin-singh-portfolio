"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Navbar } from "@/section/Navbar";
import GlowingButton from "@/section/GlowingButton";
import Footer from "@/section/Footer";
import { useSpring, useMotionValue } from "framer-motion";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Code, Database, Server, Cpu, Globe, Terminal,
  FileText, Sparkles, Zap, Coffee, Heart, Search, BookOpen, Gamepad
} from "lucide-react";
import { FaFutbol } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MagneticImage = ({ src, alt }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { damping: 15, stiffness: 150 });
  const mouseY = useSpring(y, { damping: 15, stiffness: 150 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    x.set((clientX - (left + width / 2)) * 0.15);
    y.set((clientY - (top + height / 2)) * 0.15);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ x: mouseX, y: mouseY }}
      className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] group cursor-none"
    >
      <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-cyan-500/20 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000" />
      <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-neutral-900">
        <Image src={src} alt={alt} fill className="object-cover transform transition-transform duration-700 group-hover:scale-105" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500" />
      </div>
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
  const heroTextRef    = useRef(null);
  const techSectionRef = useRef(null);
  const techCardsRef   = useRef([]);
  const interestsRef   = useRef(null);
  const interestItemsRef = useRef([]);

  const skills = [
    { name: "Full Stack Development", icon: <Globe className="w-4 h-4 text-blue-400" />, color: "border-blue-500/20 bg-blue-500/5" },
    { name: "MERN Stack",             icon: <Database className="w-4 h-4 text-emerald-400" />, color: "border-emerald-500/20 bg-emerald-500/5" },
    { name: "DevOps",                 icon: <Terminal className="w-4 h-4 text-zinc-400" />,    color: "border-zinc-500/20 bg-zinc-500/5" },
    { name: "AI/ML",                  icon: <Cpu className="w-4 h-4 text-purple-400" />,       color: "border-purple-500/20 bg-purple-500/5" },
  ];

  const milestones = [
    { label: "Education", value: "3rd Year B.Tech @NST", icon: <BookOpen size={16} className="text-indigo-400" /> },
    { label: "Focus",     value: "AI & Scalable Systems", icon: <Sparkles size={16} className="text-purple-400" /> },
  ];

  useEffect(() => {
    // Hero text slides in
    if (heroTextRef.current) {
      gsap.from(heroTextRef.current.children, {
        opacity: 0,
        y: 24,
        duration: 0.85,
        stagger: 0.15,
        ease: "power3.out",
      });
    }

    // Tech section
    if (techSectionRef.current) {
      gsap.set(techSectionRef.current, { opacity: 0, y: 40 });
      ScrollTrigger.create({
        trigger: techSectionRef.current,
        start: "top 80%",
        once: true,
        onEnter: () =>
          gsap.to(techSectionRef.current, { opacity: 1, y: 0, duration: 1, ease: "power3.out" }),
      });
    }

    // Tech cards stagger
    techCardsRef.current.forEach((card, i) => {
      if (!card) return;
      gsap.set(card, { opacity: 0, scale: 0.94 });
      ScrollTrigger.create({
        trigger: card,
        start: "top 85%",
        once: true,
        onEnter: () =>
          gsap.to(card, {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            delay: i * 0.08,
            ease: "back.out(1.4)",
          }),
      });
    });

    // Interests
    if (interestsRef.current) {
      gsap.set(interestsRef.current, { opacity: 0, y: 30 });
      ScrollTrigger.create({
        trigger: interestsRef.current,
        start: "top 82%",
        once: true,
        onEnter: () =>
          gsap.to(interestsRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }),
      });
    }

    interestItemsRef.current.forEach((item, i) => {
      if (!item) return;
      gsap.set(item, { opacity: 0, y: 20 });
      ScrollTrigger.create({
        trigger: item,
        start: "top 88%",
        once: true,
        onEnter: () =>
          gsap.to(item, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: i * 0.07,
            ease: "power2.out",
          }),
      });
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

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

            <div ref={heroTextRef} className="lg:col-span-7 flex flex-col gap-8">
              <div className="space-y-4">
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
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {milestones.map((item, i) => (
                  <div key={i} className="p-6 rounded-3xl bg-white/5 border border-white/5 backdrop-blur-xl hover:bg-white/10 transition-colors group">
                    <div className="p-2 w-fit rounded-xl bg-white/5 border border-white/10 mb-4 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">{item.label}</div>
                    <div className="text-sm font-medium text-white tracking-wide">{item.value}</div>
                  </div>
                ))}
              </div>

              <div className="prose prose-invert prose-lg text-zinc-400 max-w-3xl space-y-6">
                <p>
                  I'm from <span className="text-white font-semibold">Visakhapatnam</span> — a coastal city that's equal parts calm and chaotic. Growing up, I was always the kind of person who needed to know <span className="text-white font-semibold">why</span> things worked, not just that they did. I remember wondering how a simple <span className="text-indigo-400 font-semibold">calculator</span> — a device that just adds numbers — slowly turned into the machine the entire world now depends on. That question stuck with me, and honestly, it's the reason I ended up in CS.
                </p>
                <p>
                  Before that, I was deep in <span className="text-white font-semibold">PCM</span> — physics, chemistry, math — the classic competitive exam track at FIITJEE. I genuinely loved it, especially physics. It had this satisfying way of explaining the world with clean logic. But at some point I realised I didn't just want to understand the world — I wanted to <span className="text-indigo-400 font-semibold">build things in it</span>. So here I am, third year B.Tech at Newton School of Technology.
                </p>
                <p>
                  My early years in CS were spent building for the web — full-stack apps, backends, figuring out how to make something go from an idea to something real that people could actually use. Then in 2025, AI started moving fast enough that it became impossible to ignore. Not in a hype way — but in a genuine <span className="text-purple-400 font-semibold">"something new is happening"</span> kind of way. I got pulled into machine learning and deep learning, and I've been deep in it since.
                </p>
                <p>
                  Outside of all that — I play <span className="text-white font-semibold">football</span>, game, cook occasionally, and read about history and science more than I probably should. I think the curiosity that got me into physics is the same one that keeps me building things now.
                </p>
              </div>

              <div className="flex flex-wrap gap-6 items-center pt-4">
                <a href="https://drive.google.com/file/d/1r0EKsnEGAwq-seUdRe2BgiQDahsrv_PH/view?usp=sharing" target="_blank">
                  <GlowingButton text="Resume" icon={<FileText size={20} />} />
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
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div ref={techSectionRef} className="mt-40 border-t border-white/5 pt-24">
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
                    ref={(el) => (techCardsRef.current[index] = el)}
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
          </div>

          {/* Interests */}
          <div ref={interestsRef} className="mt-40">
            <div className="flex items-center gap-3 text-indigo-400 font-bold tracking-[0.3em] uppercase text-xs mb-10">
              <span className="w-8 h-[1px] bg-indigo-500/50" />
              Beyond the Terminal
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {[
                { icon: <FaFutbol size={20} />, label: "Football", desc: "Weekend warrior" },
                { icon: <Search size={20} />,   label: "Science",  desc: "Always curious" },
                { icon: <BookOpen size={20} />, label: "History",  desc: "Deep diver" },
                { icon: <Coffee size={20} />,   label: "Cooking",  desc: "Occasional chef" },
                { icon: <Gamepad size={20} />,  label: "Gaming",   desc: "Stress relief" },
              ].map((item, i) => (
                <div
                  key={i}
                  ref={(el) => (interestItemsRef.current[i] = el)}
                  className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-white/10 transition-all duration-300 group flex flex-col items-center text-center gap-3"
                >
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-zinc-500 group-hover:text-white group-hover:border-indigo-500/20 group-hover:bg-indigo-500/10 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{item.label}</div>
                    <div className="text-[10px] text-zinc-600 mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-zinc-600 italic text-base mt-8 max-w-2xl leading-relaxed">
              "The curiosity that got me into physics is the same one that keeps me building things now."
            </p>
          </div>
        </div>
      </main>

      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <BackgroundBeams />
      </div>

      <Footer />
    </div>
  );
}
