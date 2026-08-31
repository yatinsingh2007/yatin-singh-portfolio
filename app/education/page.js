"use client";
import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { Reveal, GlassCard } from "@/components/aurora-ui";

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
        <div className="mx-auto max-w-4xl px-5 sm:px-8 pt-28 sm:pt-32 pb-14">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }} className="flex items-center justify-between border-y border-line-2 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">
            <span>Academic record</span>
            <span className="hidden sm:block">2012 — 2028</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.15 }} className="mt-10 font-display text-[clamp(3.2rem,10vw,7rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.03em] text-ink">
            Education
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-2">
            Milestones and the foundational knowledge behind my technical pursuits.
          </motion.p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 sm:px-8 pb-24">
        <div className="relative space-y-8">
          <div className="absolute left-[7px] sm:left-[15px] top-4 bottom-4 w-px bg-line-2" />
          {educationData.map((edu, i) => (
            <Reveal key={i} className="relative pl-8 sm:pl-12">
              <span className={`absolute left-[7px] sm:left-[15px] top-8 z-10 h-3.5 w-3.5 -translate-x-1/2 rotate-45 ${edu.current ? "bg-flare" : "border border-ink-soft bg-paper"}`} />

              <GlassCard className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-flare">{edu.period}</span>
                  <span className="inline-flex items-center gap-1.5 border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-ink-soft">
                    <GraduationCap size={13} className="text-flare" /> {edu.status}
                  </span>
                </div>

                <h2 className="mt-4 font-display text-xl font-medium tracking-tight text-ink sm:text-2xl">{edu.degree}</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-ink-soft">Institution</div>
                    <div className="mt-1 text-ink">{edu.institution}</div>
                    {edu.university && <div className="text-sm text-ink-2">{edu.university}</div>}
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-ink-soft">Location</div>
                    <div className="mt-1 text-ink">{edu.location}</div>
                  </div>
                  <div className="sm:col-span-2 border-t border-line pt-5">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-ink-soft">Performance</div>
                    <div className="mt-1 font-display text-3xl font-medium text-flare">{edu.grade}</div>
                  </div>
                </div>

                <p className="mt-5 leading-relaxed text-ink-2">{edu.description}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
