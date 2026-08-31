"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { FileText, ExternalLink, ArrowRight, Zap, Check } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { Reveal, Kicker, GlassCard, Magnetic, btnPrimary, btnGhost } from "@/components/aurora-ui";

const experiences = [
  {
    id: "byteblock",
    company: "ByteBlock Technologies",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQFe6iYKRwjKHQ/company-logo_200_200/company-logo_200_200/0/1729863208386?e=2147483647&v=beta&t=kZz3W83vbFgwQRxQzivUKyFAEtPdEArdZmAR5SgnuqE",
    description: "Building tailored software solutions and digital strategies to help businesses thrive in the modern tech landscape.",
    offerLetterUrl: "https://drive.google.com/file/d/1lJ_FGAIe7B3M-zEG3b12Y0Az95lZ_hrB/view?usp=sharing",
    extensionLetterUrl: "https://drive.google.com/file/d/1bc_2evAhrGGjRzJnnuz0JE2-wroSP8JT/view?usp=sharing",
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
          "Developed and maintained a client-facing contract management platform for Technology Associates (Tanzania) at ByteBlock Technologies, implementing RBAC, role-based dashboards, contract lifecycle workflows, CRUD operations, data validation, and business logic automation across 10+ core application modules.",
          "Delivered 50+ merged pull requests through Git-based workflows, contributing to production-grade frontend and backend features using Next.js, TypeScript, Prisma, and SQL, while improving maintainability through reusable components and structured API design.",
          "Designed and deployed a Dockerized CI/CD pipeline using GitHub Actions, automating application builds, deployment workflows, and VPS releases, reducing deployment time from 45 minutes to under 3 minutes (~93% improvement).",
          "Built an automated cron-based notification and reminder engine for payment and maintenance alerts, integrating scheduled jobs, email delivery services, database persistence, and status-based notification handling.",
          "Deployed and integrated the Qwen 2.5 1.5B open-source LLM using vLLM on a VPS, exposing inference APIs to power an AI chatbot feature and demonstrating self-hosted LLM deployment in production.",
          "Managed end-to-end production deployment workflows including Docker containerization, environment configuration, database migrations, reverse proxy configuration, and VPS infrastructure optimization.",
        ],
      },
    ],
  },
  {
    id: "assuredgig",
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
          "Optimized frontend performance and mobile responsiveness, increasing the Lighthouse mobile performance score from 35 to 75 (+114%).",
          "Developed and maintained 20+ API endpoints with structured error handling, validation, and optimized request flows to improve reliability and scalability of the platform.",
        ],
      },
    ],
  },
];

// parse a "Mon YYYY" token (or "Present") into a Date
function parsePoint(token) {
  if (/present/i.test(token)) return new Date();
  const d = new Date(`${token.trim()} 1`);
  return isNaN(d) ? null : d;
}

// derive a human duration like "3 months" / "1 year 2 months" from a period string
function formatDuration(period) {
  const [startStr, endStr] = period.split(/[—–-]/).map((s) => s.trim());
  const start = parsePoint(startStr);
  const end = parsePoint(endStr);
  if (!start || !end) return null;

  let months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  if (months < 1) months = 1;

  const years = Math.floor(months / 12);
  const rem = months % 12;
  const parts = [];
  if (years) parts.push(`${years} year${years > 1 ? "s" : ""}`);
  if (rem) parts.push(`${rem} month${rem > 1 ? "s" : ""}`);
  return parts.join(" ") || "1 month";
}

function LetterLink({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-hair bg-white/[0.03] px-3.5 py-1.5 text-xs text-ink-dim transition-colors hover:border-brand/50 hover:text-ink">
      {children}
    </a>
  );
}

function Role({ role }) {
  const duration = formatDuration(role.period);
  return (
    <div className="relative pl-7">
      {/* node */}
      <span className={`absolute left-0 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full ring-4 ring-bg ${role.current ? "bg-brand shadow-[0_0_12px_2px_rgba(139,124,246,0.7)]" : "bg-ink-faint"}`} />
      <div className="flex flex-wrap items-center gap-2">
        <h3 className={`font-display text-lg font-semibold ${role.current ? "text-gradient-brand" : "text-ink"}`}>{role.title}</h3>
        {role.current && (
          <span className="inline-flex items-center gap-1 rounded-full border border-brand/40 bg-brand/10 px-2.5 py-0.5 text-[11px] font-semibold text-brand-2">
            <Zap size={11} /> Current
          </span>
        )}
        <span className="rounded-full border border-hair bg-white/[0.03] px-2.5 py-0.5 text-[11px] text-ink-dim">{role.type}</span>
      </div>
      <div className="mt-1.5 flex flex-wrap items-center gap-x-2 font-mono text-xs text-ink-faint">
        <span>{role.period}</span>
        {duration && (<><span>·</span><span className="text-brand-2">{duration}</span></>)}
        <span>·</span>
        <span>{role.location}</span>
      </div>

      {role.features.length > 0 && (
        <ul className="mt-4 space-y-2.5">
          {role.features.map((f, fi) => (
            <li key={fi} className="flex gap-2.5 text-sm leading-relaxed text-ink-dim">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-2" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function ExperienceCard({ exp }) {
  return (
    <Reveal className="relative pl-8 sm:pl-12">
      {/* company node on the main spine */}
      <span className="absolute left-[7px] sm:left-[15px] top-8 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-gradient-to-br from-brand-3 to-brand-2 ring-4 ring-bg shadow-[0_0_14px_2px_rgba(139,124,246,0.6)]" />

      <GlassCard className="p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-hair bg-white/5">
            <Image src={exp.logo} alt={exp.company} fill className="object-cover" />
          </div>
          <div className="flex-1">
            <h2 className="font-display text-2xl font-semibold text-ink">{exp.company}</h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-dim">{exp.description}</p>
          </div>
        </div>

        {(exp.offerLetterUrl || exp.extensionLetterUrl || exp.completionLetterUrl) && (
          <div className="mt-5 flex flex-wrap gap-2">
            {exp.offerLetterUrl && <LetterLink href={exp.offerLetterUrl}><FileText size={13} /> Offer letter</LetterLink>}
            {exp.extensionLetterUrl && <LetterLink href={exp.extensionLetterUrl}><FileText size={13} /> Extension letter</LetterLink>}
            {exp.completionLetterUrl && <LetterLink href={exp.completionLetterUrl}><ExternalLink size={13} /> Experience letter</LetterLink>}
          </div>
        )}

        {/* roles */}
        <div className="relative mt-7 border-t border-hair pt-7">
          {exp.roles.length > 1 && (
            <span className="absolute left-[5px] top-9 bottom-8 w-px bg-gradient-to-b from-brand/60 via-brand/30 to-transparent" />
          )}
          <div className="space-y-8">
            {exp.roles.map((role, ri) => (
              <Role key={ri} role={role} />
            ))}
          </div>
        </div>
      </GlassCard>
    </Reveal>
  );
}

export default function ExperiencePage() {
  return (
    <main className="min-h-screen w-full text-ink">
      <SiteNav />

      <section className="relative">
        <div className="relative mx-auto max-w-4xl px-5 sm:px-8 pt-32 sm:pt-40 pb-14">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
            <Kicker>Career history</Kicker>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }} className="mt-6 font-display text-[clamp(2.75rem,9vw,6rem)] font-semibold leading-[0.95] tracking-tight text-ink">
            Experience
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="mt-5 max-w-2xl text-base leading-relaxed text-ink-dim sm:text-lg">
            Professional growth, technical contributions and the impact I've shipped
            across startups.
          </motion.p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 sm:px-8 pb-24">
        <div className="relative space-y-8">
          <div className="absolute left-[7px] sm:left-[15px] top-4 bottom-4 w-px bg-hair" />
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} exp={exp} />
          ))}
        </div>

        <Reveal className="mt-12">
          <div className="flex flex-col items-center gap-6 rounded-3xl border border-hair bg-white/[0.02] p-10 text-center">
            <div>
              <h3 className="font-display text-2xl font-semibold text-ink">Want to see more?</h3>
              <p className="mt-2 text-sm text-ink-dim">Explore my projects or read more about how I work.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <Magnetic>
                <Link href="/project" className={btnPrimary}>View projects <ArrowRight className="h-4 w-4" /></Link>
              </Magnetic>
              <Link href="/about" className={btnGhost}>About me</Link>
            </div>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </main>
  );
}
