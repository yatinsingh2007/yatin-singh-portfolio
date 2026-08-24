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
        features: [],
      },
      {
        title: "Full Stack Developer",
        period: "Jun 2026 — Sep 2026",
        location: "Remote",
        type: "Internship",
        current: false,
        features: [
          "Developed and maintained a client-facing contract management platform for Technology Associates (Tanzania) at ByteBlock Technologies, implementing RBAC, role-based dashboards, contract lifecycle workflows, CRUD operations, data validation, and business logic automation across 10+ core application modules",
          "Delivered 50+ merged pull requests through Git-based workflows, contributing to production-grade frontend and backend features using Next.js,TypeScript, Prisma, and SQL, while improving maintainability through reusable components and structured API design.",
          "Designed and deployed a Dockerized CI/CD pipeline using GitHub Actions, automating application builds, deployment workflows, and VPS releases, reducing deployment time from 45 minutes to under 3 minutes (~93% improvement).",
          "Built an automated cron-based notification and reminder engine for payment and maintenance alerts, integrating scheduled jobs, email delivery services, database persistence, and status-based notification handling to improve reliability of contract operations.",
          "Deployed and integrated Qwen 2.5 1.5B open-source LLM using vLLM on a VPS, exposing inference APIs to enable an AI chatbot feature and demonstrating self-hosted LLM deployment within a production application environment.",
          "Managed end-to-end production deployment workflows including Docker containerization, environment configuration, database migrations, reverse proxy configuration, and VPS infrastructure optimization."
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
        features: [
          "Engineered and scaled backend infrastructure from an early-stage prototype to a production-ready platform, developing RESTful APIs that powered core client–freelancer workflows including authentication, job management, and transaction processing for 500 users.",
          "Designed and implemented a scalable backend architecture using Python, Django, and Django REST Framework, building secure authentication flows, business logic layers, API endpoints, and database integrations across 10+ core features.",
          "Deployed and maintained production infrastructure on AWS EC2, integrating Amazon S3 for static asset storage and delivery, reducing application server load by 20% and improving asset retrieval performance.",
          "Optimized frontend performance and mobile responsiveness by improving rendering efficiency, asset handling, and UI responsiveness, increasing the Lighthouse mobile performance score from 35 to 75 (+114%).",
          "Developed and maintained 20+ API endpoints with structured error handling, validation, and optimized request flows to improve reliability and scalability of the platform.",
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
            <span className="hidden sm:inline">// career history</span>
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
