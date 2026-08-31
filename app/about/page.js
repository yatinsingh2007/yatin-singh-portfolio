"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { FileText, Coffee, Heart, Search, BookOpen, Gamepad, Soup } from "lucide-react";
import { FaFutbol } from "react-icons/fa";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { Reveal, SectionHeading, Kicker, btnPrimary, btnGhost } from "@/components/aurora-ui";

const facts = [
  ["Education", "3rd Year B.Tech @ NST"],
  ["Focus", "AI & Scalable Systems"],
  ["From", "Visakhapatnam, IN"],
  ["Status", "Open to work"],
];

const disciplines = [
  { title: "Full-Stack Development", desc: "End-to-end web apps & clean architecture." },
  { title: "MERN Stack", desc: "React, Node, Express & Mongo systems." },
  { title: "DevOps", desc: "Docker, CI/CD, VPS & cloud deployment." },
  { title: "AI / ML", desc: "Neural nets, LLMs & agentic pipelines." },
];

const bio = [
  "I'm from Visakhapatnam — a coastal city that's equal parts calm and chaotic. Growing up, I was always the kind of person who needed to know why things worked, not just that they did. I remember wondering how a simple calculator slowly turned into the machine the entire world now depends on. That question is the reason I ended up in CS.",
  "Before that, I was deep in PCM — physics, chemistry, math — the classic competitive-exam track at FIITJEE. I loved physics especially; it had this satisfying way of explaining the world with clean logic. But at some point I realised I didn't just want to understand the world — I wanted to build things in it. So here I am, third year B.Tech at Newton School of Technology.",
  "My early years in CS were spent building for the web — full-stack apps, backends, taking an idea to something real people could use. Then in 2025, AI started moving fast enough to be impossible to ignore. I got pulled into machine learning and deep learning, and I've been deep in it since.",
  "Outside of all that — I play football, game, cook occasionally, and read about history and science more than I probably should. The curiosity that got me into physics is the same one that keeps me building things now.",
];

const interests = [
  { icon: <FaFutbol size={18} />, label: "Football", desc: "Weekend warrior" },
  { icon: <Search size={18} />, label: "Science", desc: "Always curious" },
  { icon: <BookOpen size={18} />, label: "History", desc: "Deep diver" },
  { icon: <Soup size={18} />, label: "Cooking", desc: "Occasional chef" },
  { icon: <Gamepad size={18} />, label: "Gaming", desc: "Stress relief" },
];

export default function About() {
  return (
    <main className="min-h-screen w-full text-ink">
      <SiteNav />

      <section className="relative">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 pt-28 sm:pt-32">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-between border-y border-line-2 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft"
          >
            <span>Chapter — About</span>
            <span className="hidden sm:block">The human behind the code</span>
          </motion.div>

          <div className="grid grid-cols-1 items-start gap-12 pt-12 md:grid-cols-12">
            {/* portrait + facts */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="md:col-span-5 lg:col-span-4"
            >
              <figure className="border border-ink/70 bg-paper p-2">
                <div className="relative aspect-4/5 w-full overflow-hidden">
                  <Image src="/yatin_singh.jpeg" alt="Yatin Singh" fill priority className="object-cover grayscale-[0.4] transition-all duration-700 hover:grayscale-0" />
                </div>
                <figcaption className="flex items-center justify-between border-t border-line px-1 pt-2.5 font-mono text-[10px] uppercase tracking-widest text-ink-soft">
                  <span className="text-flare">Fig. 02</span>
                  <span>Yatin Singh</span>
                </figcaption>
              </figure>
              <div className="mt-3 grid grid-cols-2 border-l border-t border-line">
                {facts.map(([k, v]) => (
                  <div key={k} className="border-b border-r border-line p-4">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-ink-soft">{k}</div>
                    <div className="mt-1 text-sm text-ink">{v}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* bio */}
            <div className="md:col-span-7 lg:col-span-8">
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
                <Kicker>About me</Kicker>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.28 }}
                className="mt-6 font-display text-[clamp(2.8rem,6.5vw,5rem)] font-extrabold uppercase leading-[0.92] tracking-[-0.03em] text-ink"
              >
                The human behind <span className="text-flare">the code</span>
              </motion.h1>

              <div className="mt-8 columns-1 gap-8 space-y-5 text-lg leading-relaxed text-ink-2 lg:columns-2">
                {bio.map((p, i) => (
                  <Reveal key={i} delay={i * 0.05} y={14}>
                    <p className={i === 0 ? "first-letter:float-left first-letter:mr-2 first-letter:font-display first-letter:text-6xl first-letter:font-medium first-letter:leading-[0.8] first-letter:text-flare" : ""}>
                      {p}
                    </p>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.1} className="mt-9 flex flex-wrap items-center gap-3">
                <a href="https://drive.google.com/file/d/13pgBfgDfxREFM-vZvG8W4ZrQ4YFoGdUW/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={btnPrimary}>
                  <FileText size={15} /> Download résumé
                </a>
                <span className="inline-flex items-center gap-2 border border-line px-4 py-3 font-mono text-xs uppercase tracking-widest text-ink-soft">
                  <Coffee size={14} className="text-flare" /> Coffee powered
                </span>
                <span className="inline-flex items-center gap-2 border border-line px-4 py-3 font-mono text-xs uppercase tracking-widest text-ink-soft">
                  <Heart size={14} className="text-flare" /> Design driven
                </span>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* disciplines */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-20">
        <SectionHeading index="01" eyebrow="The arsenal" title="What I work with" />
        <div className="mt-12 grid grid-cols-1 border-l border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {disciplines.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 0.06}>
              <div className="group h-full border-b border-r border-line p-6 transition-colors duration-300 hover:bg-paper-2">
                <span className="font-mono text-xs text-flare">§{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 font-display text-lg font-medium text-ink">{s.title}</h3>
                <p className="mt-2 leading-relaxed text-ink-2">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* interests */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-20">
        <SectionHeading index="02" eyebrow="Marginalia" title="Beyond the desk" />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {interests.map((it, i) => (
            <Reveal key={it.label} delay={i * 0.05}>
              <div className="group flex h-full flex-col items-start gap-4 border border-line bg-paper p-5 transition-colors duration-300 hover:bg-paper-2">
                <div className="border border-line p-3 text-flare">{it.icon}</div>
                <div>
                  <div className="font-display text-base font-medium text-ink">{it.label}</div>
                  <div className="mt-0.5 font-mono text-[10px] uppercase tracking-widest text-ink-soft">{it.desc}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <p className="border-l-2 border-flare pl-5 font-display text-2xl font-bold uppercase leading-tight tracking-tight text-ink sm:text-3xl">
            &quot;The curiosity that got me into physics is the same one that keeps me building things now.&quot;
          </p>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 pb-24">
        <Reveal className="flex flex-wrap items-center justify-between gap-6 border border-ink/70 bg-paper-2 p-8 sm:p-10">
          <div>
            <h3 className="font-display text-2xl font-medium text-ink">Want to see what I've built?</h3>
            <p className="mt-2 text-ink-2">Explore my projects or reach out directly.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="/project" className={btnPrimary}>View projects</a>
            <a href="/contact" className={btnGhost}>Contact me</a>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </main>
  );
}
