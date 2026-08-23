"use client";
import { motion } from "motion/react";
import { GraduationCap } from "lucide-react";
import TerminalNav from "@/section/TerminalNav";
import TerminalFooter from "@/section/TerminalFooter";
import { Reveal, PageGlow } from "@/components/terminal-ui";

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
    <main className="min-h-screen w-full bg-term font-mono text-fg">
      <TerminalNav />
      <div className="scanlines relative overflow-hidden">
        <PageGlow />
        <div className="relative mx-auto max-w-[1100px] px-4 sm:px-6 pt-28 sm:pt-32 pb-14">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="flex items-center justify-between border-y border-edge py-2.5 text-[10px] uppercase tracking-[0.2em] text-fg-dim">
            <span className="text-cy">$ cat education.log</span>
            <span>// academic journey</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }} className="mt-10 text-[clamp(2.6rem,9vw,7rem)] font-bold uppercase leading-[0.85] tracking-tight text-fg">
            Education<span className="term-blink text-cy">_</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="mt-5 max-w-xl text-sm leading-relaxed text-fg-dim">
            // milestones and the foundational knowledge behind my technical pursuits.
          </motion.p>
        </div>
      </div>

      <section className="mx-auto max-w-[1100px] px-4 sm:px-6 pb-24">
        <div className="relative space-y-8">
          <div className="absolute left-2.5 sm:left-[22px] top-2 bottom-2 w-px bg-edge" />
          {educationData.map((edu, i) => (
            <Reveal key={i} className="relative pl-10 sm:pl-14">
              <span className={`absolute left-2.5 sm:left-[22px] top-1.5 z-10 h-3 w-3 -translate-x-1/2 ${edu.current ? "bg-cy shadow-[0_0_10px_rgba(34,211,238,0.6)]" : "bg-edge-2"}`} />

              <div className="group border border-edge bg-term-2/40 p-6 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:border-cy hover:shadow-[6px_6px_0_0_#22d3ee] sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="text-[11px] uppercase tracking-wider text-cy">{edu.period}</span>
                  <span className="inline-flex items-center gap-1.5 border border-edge px-2.5 py-1 text-[10px] uppercase tracking-widest text-fg-dim">
                    <GraduationCap size={12} className="text-cy" /> {edu.status}
                  </span>
                </div>

                <h2 className="mt-4 text-lg font-bold uppercase tracking-tight text-fg group-hover:text-cy sm:text-2xl">{edu.degree}</h2>

                <div className="mt-5 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-fg-dim">institution</div>
                    <div className="mt-1 text-sm text-fg">{edu.institution}</div>
                    {edu.university && <div className="text-xs text-fg-dim">{edu.university}</div>}
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-fg-dim">location</div>
                    <div className="mt-1 text-sm text-fg">{edu.location}</div>
                  </div>
                  <div className="sm:col-span-2 border-t border-edge pt-4">
                    <div className="text-[10px] uppercase tracking-widest text-fg-dim">performance</div>
                    <div className="mt-1 text-2xl font-bold text-fg">
                      {edu.grade}
                    </div>
                  </div>
                </div>

                <p className="mt-5 text-xs leading-relaxed text-fg-dim">{edu.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <TerminalFooter />
    </main>
  );
}
