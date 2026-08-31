"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { FileText, Coffee, Heart, Search, BookOpen, Gamepad, Soup } from "lucide-react";
import { FaFutbol } from "react-icons/fa";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import {
  Reveal,
  SectionHeading,
  Kicker,
  GlassCard,
  Tilt,
  Magnetic,
  btnPrimary,
  btnGhost,
} from "@/components/aurora-ui";

const facts = [
  ["Education", "3rd Year B.Tech @ NST"],
  ["Focus", "AI & Scalable Systems"],
  ["From", "Visakhapatnam, IN"],
  ["Status", "Open to work"],
];

const stack = [
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
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8 pt-32 sm:pt-40 pb-16">
          {/* hero */}
          <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-5 lg:col-span-4"
            >
              <Tilt className="relative" max={7}>
                <div className="absolute -inset-3 rounded-[1.75rem] bg-gradient-to-tr from-brand-3/25 via-brand/15 to-brand-2/25 blur-2xl" />
                <GlassCard hover={false} className="relative overflow-hidden p-2">
                  <div className="relative aspect-4/5 w-full overflow-hidden rounded-xl">
                    <Image src="/yatin_singh.jpeg" alt="Yatin Singh" fill priority className="object-cover" />
                  </div>
                </GlassCard>
              </Tilt>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {facts.map(([k, v]) => (
                  <GlassCard key={k} hover={false} className="p-4">
                    <div className="text-[11px] uppercase tracking-widest text-ink-faint">{k}</div>
                    <div className="mt-1 text-sm text-ink">{v}</div>
                  </GlassCard>
                ))}
              </div>
            </motion.div>

            <div className="md:col-span-7 lg:col-span-8">
              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }}>
                <Kicker>About me</Kicker>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-6 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1] tracking-tight text-ink"
              >
                The human behind <span className="text-shimmer">the code</span>
              </motion.h1>

              <div className="mt-8 space-y-5 text-base leading-relaxed text-ink-dim">
                {bio.map((p, i) => (
                  <Reveal key={i} delay={i * 0.05} y={16}>
                    <p>{p}</p>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={0.1} className="mt-9 flex flex-wrap items-center gap-3">
                <a href="https://drive.google.com/file/d/13pgBfgDfxREFM-vZvG8W4ZrQ4YFoGdUW/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={btnPrimary}>
                  <FileText size={16} /> Download résumé
                </a>
                <span className="inline-flex items-center gap-2 rounded-full border border-hair bg-white/[0.02] px-4 py-3 text-sm text-ink-dim">
                  <Coffee size={15} className="text-brand-2" /> Coffee powered
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-hair bg-white/[0.02] px-4 py-3 text-sm text-ink-dim">
                  <Heart size={15} className="text-brand-2" /> Design driven
                </span>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* stack */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-20">
        <SectionHeading eyebrow="The arsenal" title="What I work with" />
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stack.map((s, i) => (
            <Reveal key={s.title} delay={(i % 4) * 0.06}>
              <GlassCard className="h-full p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-3/25 to-brand-2/25 font-mono text-sm font-semibold text-brand-2">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-dim">{s.desc}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* interests */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-20">
        <SectionHeading eyebrow="Beyond the code" title="Outside of work" />
        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-5">
          {interests.map((it, i) => (
            <Reveal key={it.label} delay={i * 0.05}>
              <GlassCard className="flex h-full flex-col items-start gap-4 p-5">
                <div className="rounded-xl border border-hair bg-white/[0.03] p-3 text-brand-2">{it.icon}</div>
                <div>
                  <div className="text-sm font-semibold text-ink">{it.label}</div>
                  <div className="mt-0.5 text-xs text-ink-faint">{it.desc}</div>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <p className="border-l-2 border-brand pl-5 font-display text-xl italic text-ink-dim sm:text-2xl">
            &quot;The curiosity that got me into physics is the same one that keeps me building things now.&quot;
          </p>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 pb-24">
        <Reveal className="flex flex-wrap items-center justify-between gap-6 rounded-3xl border border-hair bg-white/[0.02] p-8 sm:p-10">
          <div>
            <h3 className="font-display text-2xl font-semibold text-ink">Want to see what I've built?</h3>
            <p className="mt-2 text-sm text-ink-dim">Explore my projects or reach out directly.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Magnetic>
              <a href="/project" className={btnPrimary}>View projects</a>
            </Magnetic>
            <a href="/contact" className={btnGhost}>Contact me</a>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </main>
  );
}
