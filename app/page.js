"use client";
import React, { useState, useEffect, useRef } from "react";
import { Navbar } from "../section/Navbar";
import Prism from "../components/Prism";
import Skills from "@/section/Skills";
import GlowingButton from "@/section/GlowingButton";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Footer from "@/section/Footer";
import Hero from "@/section/Hero";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Terminal, Cpu, Cloud, Brain, Zap } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const roles = [
  "Software Development",
  "Cloud Infrastructure",
  "Backend Engineering",
  "Machine Learning & Deep Learning",
  "Agentic Systems",
];

const corePillars = [
  {
    icon: Terminal,
    title: "Software Development",
    subtitle: "Full-Stack Web Apps & Architecture",
  },
  {
    icon: Brain,
    title: "Machine Learning & DL",
    subtitle: "Neural Networks & Predictive Models",
  },
  {
    icon: Cpu,
    title: "Agentic & AI Systems",
    subtitle: "LLM Workflows & Autonomous Agents",
  },
  {
    icon: Cloud,
    title: "Cloud & Deployment",
    subtitle: "AWS, VPS, Docker & CI/CD Pipelines",
  },
  {
    icon: Zap,
    title: "Backend Engineering",
    subtitle: "Scalable APIs & High-Throughput Systems",
  },
];

function EngineeringPillarsSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    gsap.set(el.children, { opacity: 0, y: 30 });

    const st = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(el.children, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
        });
      },
    });

    return () => st.kill();
  }, []);

  return (
    <section className="relative z-10 py-24 border-y border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 space-y-10">
        <div className="text-center space-y-3">
          <p className="text-xs font-bold text-zinc-500 tracking-[0.4em] uppercase opacity-80">
            Engineering Focus
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            What I Build & Solve
          </h2>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
          {corePillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 hover:bg-white/[0.04] transition-all duration-500 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-zinc-300 transition-colors leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">
                    {pillar.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const skillsHeadRef = useRef(null);
  const skillsBodyRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Skills section scroll reveal
  useEffect(() => {
    const head = skillsHeadRef.current;
    const body = skillsBodyRef.current;
    if (!head || !body) return;

    gsap.set([head, body], { opacity: 0, y: 40 });

    const st1 = ScrollTrigger.create({
      trigger: head,
      start: "top 80%",
      once: true,
      onEnter: () => gsap.to(head, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }),
    });
    const st2 = ScrollTrigger.create({
      trigger: body,
      start: "top 85%",
      once: true,
      onEnter: () => gsap.to(body, { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power3.out" }),
    });

    return () => { st1.kill(); st2.kill(); };
  }, []);

  return (
    <>
      <Navbar />
      <main className="relative w-full min-h-screen bg-black text-white selection:bg-white/20">

        {/* ── Hero ── */}
        <div className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Prism
              animationType="rotate"
              timeScale={0.45}
              height={3.5}
              baseWidth={5.5}
              scale={3.8}
              hueShift={0}
              colorFrequency={1}
              noise={0.25}
              glow={1.2}
              suspendWhenOffscreen
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black z-0" />

          <div className="z-10 text-center px-4 sm:px-6 flex flex-col items-center gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <h1 className="text-6xl sm:text-7xl md:text-9xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/30 pb-2">
                K. Yatin Singh
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl sm:text-2xl md:text-3xl text-zinc-400 font-light max-w-3xl leading-relaxed flex flex-wrap justify-center gap-2 items-center min-h-[3rem]"
            >
              Focused on
              <span className="relative inline-flex overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentRoleIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="text-white font-medium"
                  >
                    {roles[currentRoleIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap justify-center gap-3 text-sm sm:text-base"
            >
              {[
                { label: "Student At NST, Rishihood University", current: false },
                { label: "SDE (Full-Stack) @ByteBlock Technologies", current: true },
                { label: "Ex-Intern @AssuredGig", current: false },
              ].map(({ label, current }) => (
                <span
                  key={label}
                  className={`px-4 py-1.5 rounded-full border backdrop-blur-md transition-all duration-300 flex items-center gap-2 ${
                    current
                      ? "border-white/20 bg-white/10 text-white"
                      : "border-white/10 bg-white/5 text-zinc-400 hover:text-white hover:border-white/20"
                  }`}
                >
                  {current && (
                    <span className="relative flex h-1.5 w-1.5 shrink-0">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white" />
                    </span>
                  )}
                  {label}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap justify-center gap-4 pt-4"
            >
              <GlowingButton
                text="GitHub"
                icon={<FaGithub size={18} />}
                onClick={() => window.open("https://github.com/yatinsingh2007", "_blank")}
              />
              <GlowingButton
                text="LinkedIn"
                icon={<FaLinkedin size={18} />}
                onClick={() => window.open("https://www.linkedin.com/in/yatin-singh-b37817323/", "_blank")}
              />
              <GlowingButton
                text="Instagram"
                icon={<FaInstagram size={18} />}
                onClick={() => window.open("https://www.instagram.com/yatin_singh27", "_blank")}
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 z-10 text-zinc-500 cursor-pointer hover:text-white transition-colors"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-[10px] uppercase tracking-[0.3em] font-medium opacity-50">Scroll</span>
              <ChevronDown size={20} className="animate-bounce" />
            </div>
          </motion.div>
        </div>

        {/* ── Projects Parallax ── */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-10 -mt-20"
        >
          <Hero />
        </motion.section>

        {/* ── Engineering Focus ── */}
        <EngineeringPillarsSection />

        {/* ── Skills ── */}
        <section
          id="skills"
          className="relative w-full py-32 flex flex-col items-center justify-center bg-black overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.03)_0%,_transparent_60%)] pointer-events-none" />

          <div
            ref={skillsHeadRef}
            className="text-center mb-16 z-10 px-4"
          >
            <p className="text-xs font-bold text-zinc-500 tracking-[0.5em] uppercase mb-4 opacity-80">
              Expertise
            </p>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              Tech Stack &{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-zinc-400">
                Toolbox
              </span>
            </h2>
          </div>

          <div
            ref={skillsBodyRef}
            className="w-full max-w-5xl px-4 z-10"
          >
            <Skills />
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
