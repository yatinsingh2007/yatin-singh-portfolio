"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { FileText, Coffee, Heart } from "lucide-react";
import { FaFutbol } from "react-icons/fa";
import { Search, BookOpen, Gamepad, Soup } from "lucide-react";
import TerminalNav from "@/section/TerminalNav";
import TerminalFooter from "@/section/TerminalFooter";
import { SectionHead, Reveal, PageGlow, btnPrimary, btnGhost } from "@/components/terminal-ui";

const facts = [
  ["edu", "3rd Year B.Tech @ NST"],
  ["focus", "AI & Scalable Systems"],
  ["from", "Visakhapatnam, IN"],
  ["status", "open to work"],
];

const stack = [
  { module: "web", title: "Full-Stack Development", desc: "End-to-end web apps & architecture." },
  { module: "mern", title: "MERN Stack", desc: "React, Node, Express & Mongo systems." },
  { module: "ops", title: "DevOps", desc: "Docker, CI/CD, VPS & cloud deployment." },
  { module: "ml", title: "AI / ML", desc: "Neural nets, LLMs & agentic pipelines." },
];

const bio = [
  "I'm from Visakhapatnam — a coastal city that's equal parts calm and chaotic. Growing up, I was always the kind of person who needed to know why things worked, not just that they did. I remember wondering how a simple calculator slowly turned into the machine the entire world now depends on. That question is the reason I ended up in CS.",
  "Before that, I was deep in PCM — physics, chemistry, math — the classic competitive-exam track at FIITJEE. I loved physics especially; it had this satisfying way of explaining the world with clean logic. But at some point I realised I didn't just want to understand the world — I wanted to build things in it. So here I am, third year B.Tech at Newton School of Technology.",
  "My early years in CS were spent building for the web — full-stack apps, backends, taking an idea to something real people could use. Then in 2025, AI started moving fast enough to be impossible to ignore. I got pulled into machine learning and deep learning, and I've been deep in it since.",
  "Outside of all that — I play football, game, cook occasionally, and read about history and science more than I probably should. The curiosity that got me into physics is the same one that keeps me building things now.",
];

const interests = [
  { icon: <FaFutbol size={18} />, label: "football", desc: "weekend warrior" },
  { icon: <Search size={18} />, label: "science", desc: "always curious" },
  { icon: <BookOpen size={18} />, label: "history", desc: "deep diver" },
  { icon: <Soup size={18} />, label: "cooking", desc: "occasional chef" },
  { icon: <Gamepad size={18} />, label: "gaming", desc: "stress relief" },
];

export default function About() {
  return (
    <main className="min-h-screen w-full bg-term font-mono text-fg">
      <TerminalNav />
      <div className="scanlines relative overflow-hidden">
        <PageGlow />

        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 pt-28 sm:pt-32 pb-20">
          {/* meta */}
          <Reveal>
            <div className="flex items-center justify-between border-y border-edge py-2.5 text-[10px] uppercase tracking-[0.2em] text-fg-dim">
              <span className="text-cy">$ cat about/README.md</span>
              <span>// the human behind the code</span>
            </div>
          </Reveal>

          {/* hero */}
          <div className="grid grid-cols-1 items-start gap-10 pt-12 lg:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-4"
            >
              <div className="group relative border border-edge shadow-[8px_8px_0_0_rgba(34,211,238,0.12)]">
                <div className="relative aspect-4/5 w-full overflow-hidden">
                  <Image src="/yatin_singh.jpeg" alt="Yatin Singh" fill priority className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0" />
                </div>
                <div className="flex items-center justify-between border-t border-edge px-3 py-2 text-[10px] uppercase tracking-widest text-fg-dim">
                  <span className="text-cy">fig.01</span>
                  <span>the_engineer.jpg</span>
                </div>
              </div>
              <div className="grid grid-cols-2 border-x border-b border-edge">
                {facts.map(([k, v], i) => (
                  <div key={k} className={`border-edge p-3 ${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b" : ""}`}>
                    <div className="text-[9px] uppercase tracking-widest text-fg-dim">{k}</div>
                    <div className="mt-1 text-[11px] text-fg">{v}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="lg:col-span-8">
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="mb-4 text-xs uppercase tracking-[0.25em] text-fg-dim"
              >
                // full-stack engineer &amp; ai enthusiast
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-[clamp(2.6rem,7vw,5rem)] font-bold uppercase leading-[0.88] tracking-tight text-fg"
              >
                I&apos;m Yatin<span className="text-cy">.</span>
              </motion.h1>

              <div className="mt-8 space-y-5 border-l border-edge pl-5 text-sm leading-relaxed text-fg-dim">
                {bio.map((p, i) => (
                  <Reveal key={i} delay={i * 0.05} y={16}>
                    <p>
                      <span className="mr-2 text-cy">{String(i + 1).padStart(2, "0")}</span>
                      {p}
                    </p>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.1} className="mt-9 flex flex-wrap items-center gap-3">
                <a href="https://drive.google.com/file/d/13pgBfgDfxREFM-vZvG8W4ZrQ4YFoGdUW/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={btnPrimary}>
                  <FileText size={15} /> resume.pdf
                </a>
                <span className="flex items-center gap-2 border border-edge px-4 py-3 text-[10px] uppercase tracking-widest text-fg-dim">
                  <Coffee size={14} className="text-cy" /> coffee_powered
                </span>
                <span className="flex items-center gap-2 border border-edge px-4 py-3 text-[10px] uppercase tracking-widest text-fg-dim">
                  <Heart size={14} className="text-cy" /> design_driven
                </span>
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      {/* stack */}
      <section className="mx-auto max-w-[1400px] px-4 sm:px-6 py-20">
        <SectionHead n="01" cmd="$ cat stack.json" note="the arsenal" />
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stack.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 0.06}>
              <div className="group h-full border border-edge bg-term-2/40 p-6 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:border-cy hover:shadow-[6px_6px_0_0_#22d3ee]">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-fg-dim">
                  <span className="text-cy">[{String(i + 1).padStart(2, "0")}]</span>
                  <span>//{s.module}</span>
                </div>
                <h3 className="mt-6 text-lg font-bold uppercase tracking-tight text-fg group-hover:text-cy">{s.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-fg-dim">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* interests */}
      <section className="mx-auto max-w-[1400px] px-4 sm:px-6 py-20">
        <SectionHead n="02" cmd="$ ls ~/interests" note="beyond the terminal" />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {interests.map((it, i) => (
            <Reveal key={it.label} delay={i * 0.05}>
              <div className="group flex h-full flex-col items-start gap-4 border border-edge bg-term-2/40 p-5 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:border-cy hover:shadow-[6px_6px_0_0_#22d3ee]">
                <div className="border border-edge p-2.5 text-fg-dim transition-colors group-hover:border-cy group-hover:text-cy">{it.icon}</div>
                <div>
                  <div className="text-sm font-bold lowercase text-fg">{it.label}</div>
                  <div className="mt-0.5 text-[10px] uppercase tracking-widest text-fg-dim">{it.desc}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 border-l-2 border-cy pl-4 text-sm italic text-fg-dim">
          &quot;the curiosity that got me into physics is the same one that keeps me building things now.&quot;
        </p>
      </section>

      <TerminalFooter />
    </main>
  );
}
