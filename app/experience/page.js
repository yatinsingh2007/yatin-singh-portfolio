"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { FileText, ExternalLink, ArrowUpRight, Zap } from "lucide-react";
import TerminalNav from "@/section/TerminalNav";
import TerminalFooter from "@/section/TerminalFooter";
import { Reveal, PageGlow, btnPrimary, btnGhost } from "@/components/terminal-ui";

const experiences = [
  {
    hash: "a1f9c7d",
    company: "ByteBlock Technologies",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQFe6iYKRwjKHQ/company-logo_200_200/company-logo_200_200/0/1729863208386?e=2147483647&v=beta&t=kZz3W83vbFgwQRxQzivUKyFAEtPdEArdZmAR5SgnuqE",
    description: "Building tailored software solutions and digital strategies to help businesses thrive in the modern tech landscape.",
    offerLetterUrl: "https://drive.google.com/file/d/1S98KZtj4OYWdcR1ZsIEORwe5d9NUp9bc/view?usp=sharing",
    roles: [
      {
        title: "Software Development Engineer (Full-Stack)",
        period: "Sep 2026 — Present",
        location: "Remote",
        type: "Internship",
        current: true,
        tags: [],
        features: [],
      },
      {
        title: "Full Stack Developer",
        period: "Jun 2026 — Sep 2026",
        location: "Remote",
        type: "Internship",
        current: false,
        tags: ["50+ Merged PRs & RBAC", "Open-Source LLMs (vLLM & Qwen 2.5)", "CI/CD & VPS (<3 min builds)"],
        features: [
          "Built a client-facing contract-management platform for Technology Associates (Tanzania) with RBAC, role-based dashboards, contract lifecycle workflows and CRUD across 10+ core modules.",
          "Delivered 50+ merged PRs of production frontend & backend features using Next.js, TypeScript, Prisma and SQL, improving maintainability with reusable components and structured APIs.",
          "Designed a Dockerized CI/CD pipeline with GitHub Actions, cutting deploy time from 45 min to under 3 min (~93% faster).",
          "Built a cron-based notification engine for payment & maintenance alerts with scheduled jobs, email delivery and status-based handling.",
          "Deployed the Qwen 2.5 1.5B open-source LLM via vLLM on a VPS, exposing inference APIs to power an AI chatbot feature.",
        ],
      },
    ],
  },
  {
    hash: "3b7e04a",
    company: "AssuredGig",
    logo: "https://landing-page-ag-sable.vercel.app/assuredgiglogo.webp",
    description: "Architecting the future of secure freelancing — connecting verified professionals with clients through intelligent, trust-first systems.",
    offerLetterUrl: "https://drive.google.com/file/d/1Y7g_iSAYbwe8d8bll0hXNRTvqVmoUCbD/view?usp=sharing",
    completionLetterUrl: "https://drive.google.com/file/d/1KCeFWM5e_lQdpjEVBcJNGlJZ6pm_aahM/view?usp=sharing",
    roles: [
      {
        title: "Full Stack Developer",
        period: "Jun 2025 — Aug 2025",
        location: "Remote",
        type: "Internship",
        current: false,
        tags: ["Lighthouse 35 → 75 (+114%)", "Django & DRF for 500+ users", "AWS EC2 & S3"],
        features: [
          "Scaled backend infra from prototype to production, building REST APIs for auth, job management and transactions serving 500+ users.",
          "Built a scalable backend with Python, Django & DRF — secure auth flows, business logic and DB integrations across 10+ features.",
          "Deployed on AWS EC2 with S3 for asset storage, reducing server load by 20% and improving asset retrieval.",
          "Improved Lighthouse mobile performance from 35 to 75 (+114%) via rendering, asset and UI optimizations.",
          "Developed 30+ API endpoints with structured error handling and validation for reliability at scale.",
        ],
      },
    ],
  },
];

function TypeChip({ type }) {
  return (
    <span className="inline-flex items-center border border-edge px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-fg-dim">
      {type}
    </span>
  );
}

function CommitBlock({ exp }) {
  return (
    <Reveal className="relative pl-10 sm:pl-14">
      {/* node */}
      <div className="absolute left-2.5 sm:left-[22px] top-1.5 z-10 h-3 w-3 -translate-x-1/2 bg-cy shadow-[0_0_10px_rgba(34,211,238,0.6)]" />

      <div className="group border border-edge bg-term-2/40 p-6 transition-colors duration-300 hover:border-edge-2 sm:p-8">
        {/* commit header */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
          <span className="text-cy">commit {exp.hash}</span>
          <span className="text-fg-dim">(HEAD)</span>
        </div>

        <div className="mt-5 flex items-start gap-4">
          <div className="relative hidden h-12 w-12 shrink-0 overflow-hidden border border-edge sm:block">
            <Image src={exp.logo} alt={exp.company} fill className="object-cover" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold uppercase tracking-tight text-fg sm:text-2xl">{exp.company}</h2>
            <p className="mt-2 max-w-2xl text-xs leading-relaxed text-fg-dim">{exp.description}</p>
          </div>
        </div>

        {/* letters */}
        {(exp.offerLetterUrl || exp.completionLetterUrl) && (
          <div className="mt-5 flex flex-wrap gap-2">
            {exp.offerLetterUrl && (
              <a href={exp.offerLetterUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 border border-edge px-3 py-1.5 text-[10px] uppercase tracking-wider text-fg-dim transition-colors hover:border-cy hover:text-cy">
                <FileText size={12} /> offer_letter
              </a>
            )}
            {exp.completionLetterUrl && (
              <a href={exp.completionLetterUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 border border-edge px-3 py-1.5 text-[10px] uppercase tracking-wider text-fg-dim transition-colors hover:border-cy hover:text-cy">
                <ExternalLink size={12} /> experience_letter
              </a>
            )}
          </div>
        )}

        {/* roles */}
        <div className="mt-7 space-y-7 border-t border-edge pt-6">
          {exp.roles.map((role, ri) => (
            <div key={ri} className="relative border-l border-edge pl-5">
              <span className={`absolute left-0 top-1.5 h-2 w-2 -translate-x-1/2 ${role.current ? "bg-cy" : "bg-edge-2"}`} />
              <div className="flex flex-wrap items-center gap-2">
                <h3 className={`text-sm font-bold ${role.current ? "text-cy" : "text-fg"}`}>{role.title}</h3>
                {role.current && (
                  <span className="inline-flex items-center gap-1 border border-cy px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-cy">
                    <Zap size={9} /> current
                  </span>
                )}
                <TypeChip type={role.type} />
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-wider text-fg-dim">
                {role.period} · {role.location}
              </div>

              {role.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {role.tags.map((t) => (
                    <span key={t} className="border border-edge px-2 py-1 text-[9px] uppercase tracking-wider text-fg-dim">{t}</span>
                  ))}
                </div>
              )}

              {role.features.length > 0 && (
                <div className="mt-4 space-y-1.5">
                  {role.features.map((f, fi) => (
                    <div key={fi} className="flex gap-2 text-xs leading-relaxed">
                      <span className="shrink-0 text-cy">+</span>
                      <span className="text-fg-dim">{f}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default function ExperiencePage() {
  return (
    <main className="min-h-screen w-full bg-term font-mono text-fg">
      <TerminalNav />
      <div className="scanlines relative overflow-hidden">
        <PageGlow />
        <div className="relative mx-auto max-w-[1100px] px-4 sm:px-6 pt-28 sm:pt-32 pb-14">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="flex items-center justify-between border-y border-edge py-2.5 text-[10px] uppercase tracking-[0.2em] text-fg-dim">
            <span className="text-cy">$ git log --experience</span>
            <span>// career history</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }} className="mt-10 text-[clamp(2.6rem,9vw,7rem)] font-bold uppercase leading-[0.85] tracking-tight text-fg">
            Experience<span className="term-blink text-cy">_</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="mt-5 max-w-xl text-sm leading-relaxed text-fg-dim">
            // professional growth, technical contributions and the impact I&apos;ve
            shipped across startups.
          </motion.p>
        </div>
      </div>

      <section className="mx-auto max-w-[1100px] px-4 sm:px-6 pb-24">
        <div className="relative space-y-8">
          <div className="absolute left-2.5 sm:left-[22px] top-2 bottom-2 w-px bg-edge" />
          {experiences.map((exp) => (
            <CommitBlock key={exp.hash} exp={exp} />
          ))}
        </div>

        <Reveal className="mt-14 border border-edge bg-term-2/40 p-8 text-center">
          <h3 className="text-lg font-bold uppercase tracking-tight text-fg">$ want to see more?</h3>
          <p className="mx-auto mt-3 max-w-md text-xs leading-relaxed text-fg-dim">
            // explore my projects or read more about how I work.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link href="/project" className={btnPrimary}>view_projects <ArrowUpRight className="h-4 w-4" /></Link>
            <Link href="/about" className={btnGhost}>./about</Link>
          </div>
        </Reveal>
      </section>

      <TerminalFooter />
    </main>
  );
}
