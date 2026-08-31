"use client";
import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { Reveal, Kicker, GlassCard } from "@/components/aurora-ui";

const educationData = [
  {
    degree: "B.Tech — Computer Science & Artificial Intelligence",
    period: "2024 — 2028",
    institution: "Newton School of Technology",
    university: "Rishihood University",
    location: "Sonipat, Haryana (Delhi NCR), India",
    status: "3rd Year — Sem 5",
    grade: "CGPA 7.91 / 10",
    description: "Intensive program focused on software engineering, data structures, algorithms and artificial intelligence — with active research & development work.",
    current: true,
  },
  {
    degree: "Higher Secondary Education (12th Grade)",
    period: "2022 — 2024",
    institution: "FIITJEE Junior College",
    location: "Visakhapatnam, Andhra Pradesh, India",
    status: "Completed",
    grade: "93.3%",
    description: "Advanced study in Physics, Chemistry & Mathematics (PCM) with a focus on competitive-examination preparation.",
    current: false,
  },
  {
    degree: "Secondary School Education (10th Grade)",
    period: "2012 — 2022",
    institution: "Visakha Valley School",
    location: "Visakhapatnam, Andhra Pradesh, India",
    status: "Completed",
    grade: "85%",
    description: "Foundational academic education with a strong emphasis on science and mathematics.",
    current: false,
  },
];

export default function Education() {
  return (
    <main className="min-h-screen w-full text-ink">
      <SiteNav />

      <section className="relative">
        <div className="relative mx-auto max-w-4xl px-5 sm:px-8 pt-32 sm:pt-40 pb-14">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
            <Kicker>Academic journey</Kicker>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }} className="mt-6 font-display text-[clamp(2.75rem,9vw,6rem)] font-semibold leading-[0.95] tracking-tight text-ink">
            Education
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="mt-5 max-w-2xl text-base leading-relaxed text-ink-dim sm:text-lg">
            Milestones and the foundational knowledge behind my technical pursuits.
          </motion.p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 sm:px-8 pb-24">
        <div className="relative space-y-8">
          <div className="absolute left-[7px] sm:left-[15px] top-4 bottom-4 w-px bg-hair" />
          {educationData.map((edu, i) => (
            <Reveal key={i} className="relative pl-8 sm:pl-12">
              <span className={`absolute left-[7px] sm:left-[15px] top-8 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full ring-4 ring-bg ${edu.current ? "bg-gradient-to-br from-brand-3 to-brand-2 shadow-[0_0_14px_2px_rgba(139,124,246,0.6)]" : "bg-ink-faint"}`} />

              <GlassCard className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="font-mono text-sm text-brand-2">{edu.period}</span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-hair bg-white/[0.03] px-3 py-1 text-xs text-ink-dim">
                    <GraduationCap size={13} className="text-brand-2" /> {edu.status}
                  </span>
                </div>

                <h2 className="mt-4 font-display text-xl font-semibold text-ink sm:text-2xl">{edu.degree}</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
                  <div>
                    <div className="text-[11px] uppercase tracking-widest text-ink-faint">Institution</div>
                    <div className="mt-1 text-sm text-ink">{edu.institution}</div>
                    {edu.university && <div className="text-xs text-ink-dim">{edu.university}</div>}
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-widest text-ink-faint">Location</div>
                    <div className="mt-1 text-sm text-ink">{edu.location}</div>
                  </div>
                  <div className="sm:col-span-2 border-t border-hair pt-5">
                    <div className="text-[11px] uppercase tracking-widest text-ink-faint">Performance</div>
                    <div className="mt-1 font-display text-2xl font-semibold text-gradient">{edu.grade}</div>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-ink-dim">{edu.description}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
