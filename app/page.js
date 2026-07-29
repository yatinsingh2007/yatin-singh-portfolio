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
import { ChevronDown } from "lucide-react";
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

const stats = [
  { value: 14, suffix: "+", label: "Projects Built" },
  { value: 2,  suffix: "+", label: "Internships" },
  { value: 3,  suffix: "+", label: "Years Coding" },
  { value: 10, suffix: "+", label: "Technologies" },
];

function AnimatedStat({ value, suffix, label, index }) {
  const numRef  = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const num  = numRef.current;
    if (!card || !num) return;

    const proxy = { val: 0 };

    const st = ScrollTrigger.create({
      trigger: card,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.fromTo(card,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.7, delay: index * 0.1, ease: "power3.out" }
        );
        gsap.to(proxy, {
          val: value,
          duration: 1.4,
          delay: index * 0.1,
          ease: "power2.out",
          onUpdate: () => { num.textContent = Math.round(proxy.val) + suffix; },
        });
      },
    });

    gsap.set(card, { opacity: 0, y: 24 });

    return () => st.kill();
  }, [value, suffix, index]);

  return (
    <div ref={cardRef} className="text-center group cursor-default">
      <div
        ref={numRef}
        className="text-4xl md:text-5xl font-bold text-white tracking-tighter group-hover:text-indigo-400 transition-colors duration-300"
      >
        0{suffix}
      </div>
      <div className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.25em] mt-2">
        {label}
      </div>
    </div>
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
      <main className="relative w-full min-h-screen bg-black text-white selection:bg-indigo-500/30">

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
              {["Student At NST", "Ex-Intern @AssuredGig", "Full Stack Engineer"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-zinc-400 hover:text-white hover:border-white/20 transition-all duration-300"
                >
                  {tag}
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

        {/* ── Stats Strip ── */}
        <section className="relative z-10 py-20 border-y border-white/5 bg-black/40 backdrop-blur-xl">
          <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((stat, i) => (
              <AnimatedStat key={i} {...stat} index={i} />
            ))}
          </div>
        </section>

        {/* ── Skills ── */}
        <section
          id="skills"
          className="relative w-full py-32 flex flex-col items-center justify-center bg-black overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.06)_0%,_transparent_60%)] pointer-events-none" />

          <div
            ref={skillsHeadRef}
            className="text-center mb-16 z-10 px-4"
          >
            <p className="text-xs font-bold text-indigo-400 tracking-[0.5em] uppercase mb-4 opacity-80">
              Expertise
            </p>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              Tech Stack &{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-500">
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
