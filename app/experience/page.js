"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { FileText, ExternalLink, ArrowRight } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { Reveal, GlassCard, btnPrimary, btnGhost } from "@/components/aurora-ui";

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
          "Developed and maintained a client-facing contract management platform for Technology Associates (Tanzania), implementing RBAC, role-based dashboards, contract lifecycle workflows, CRUD operations, data validation, and business logic automation across 10+ core application modules.",
          "Delivered 50+ merged pull requests through Git-based workflows, contributing to production-grade frontend and backend features using Next.js, TypeScript, Prisma, and SQL, while improving maintainability through reusable components and structured API design.",
          "Designed and deployed a Dockerized CI/CD pipeline using GitHub Actions, automating builds, deployment workflows and VPS releases, reducing deployment time from 45 minutes to under 3 minutes (~93% improvement).",
          "Built an automated cron-based notification and reminder engine for payment and maintenance alerts, integrating scheduled jobs, email delivery services and status-based notification handling.",
          "Deployed and integrated the Qwen 2.5 1.5B open-source LLM using vLLM on a VPS, exposing inference APIs to power an AI chatbot feature and demonstrating self-hosted LLM deployment in production.",
          "Managed end-to-end production deployment workflows including Docker containerization, environment configuration, database migrations, reverse-proxy configuration and VPS infrastructure optimization.",
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
          "Engineered and scaled backend infrastructure from an early-stage prototype to a production-ready platform, developing RESTful APIs that powered core client–freelancer workflows including authentication, job management and transaction processing for 500 users.",
          "Designed and implemented a scalable backend architecture using Python, Django and Django REST Framework, building secure authentication flows, business logic layers, API endpoints and database integrations across 10+ core features.",
          "Deployed and maintained production infrastructure on AWS EC2, integrating Amazon S3 for static asset storage and delivery, reducing application server load by 20%.",
          "Optimized frontend performance and mobile responsiveness, increasing the Lighthouse mobile performance score from 35 to 75 (+114%).",
          "Developed and maintained 20+ API endpoints with structured error handling, validation and optimized request flows to improve reliability and scalability of the platform.",
        ],
      },
    ],
  },
];

function parsePoint(token) {
  if (/present/i.test(token)) return new Date();
  const d = new Date(`${token.trim()} 1`);
  return isNaN(d) ? null : d;
}

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
    <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 border border-line px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-widest text-ink-2 transition-colors hover:border-flare hover:text-flare">
      {children}
    </a>
  );
}

function Role({ role, branched }) {
  const duration = formatDuration(role.period);

  const body = (
    <>
      <div className="flex flex-wrap items-center gap-2.5">
        <h3 className={`font-display text-lg font-medium ${role.current ? "text-flare" : "text-ink"}`}>{role.title}</h3>
        {role.current && (
          <span className="border border-flare px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-flare">Current</span>
        )}
        <span className="border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-ink-soft">{role.type}</span>
      </div>
      <div className="mt-1.5 flex flex-wrap items-center gap-x-2 font-mono text-[11px] uppercase tracking-wide text-ink-soft">
        <span>{role.period}</span>
        {duration && (<><span className="text-line-2">/</span><span className="text-flare">{duration}</span></>)}
        <span className="text-line-2">/</span>
        <span>{role.location}</span>
      </div>

      {role.features.length > 0 && (
        <ul className="mt-4 space-y-2.5">
          {role.features.map((f, fi) => (
            <li key={fi} className="flex gap-3 leading-relaxed text-ink-2">
              <span className="mt-2 h-1 w-1 shrink-0 bg-flare" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  );

  // Single role at a company — simple node.
  if (!branched) {
    return (
      <div className="relative pl-7">
        <span className={`absolute left-0 top-2 h-2.5 w-2.5 -translate-x-1/2 rotate-45 ${role.current ? "bg-flare" : "border border-ink-soft bg-paper"}`} />
        {body}
      </div>
    );
  }

  // Multiple roles — curved branch peeling off the company trunk.
  return (
    <div className="relative pl-12 pt-5">
      <svg aria-hidden width="40" height="34" viewBox="0 0 40 34" fill="none" className="absolute left-[5px] top-0 overflow-visible">
        <motion.path
          d="M1 0 C 1 22, 5 30, 34 30"
          strokeWidth="1.5"
          strokeLinecap="round"
          className={role.current ? "stroke-flare" : "stroke-line-2"}
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }}
        />
      </svg>
      <span className={`absolute left-[39px] top-[30px] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 ${role.current ? "bg-flare" : "bg-ink-soft"}`} />
      {body}
    </div>
  );
}

function ExperienceEntry({ exp }) {
  return (
    <Reveal className="relative pl-8 sm:pl-12">
      <span className="absolute left-[7px] sm:left-[15px] top-8 z-10 h-3.5 w-3.5 -translate-x-1/2 rotate-45 bg-ink" />

      <GlassCard className="p-6 sm:p-8">
        <div className="flex items-start gap-4">
          <div className="relative h-12 w-12 shrink-0 overflow-hidden border border-line bg-paper-2">
            <Image src={exp.logo} alt={exp.company} fill className="object-cover" />
          </div>
          <div className="flex-1">
            <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-ink">{exp.company}</h2>
            <p className="mt-2 max-w-2xl leading-relaxed text-ink-2">{exp.description}</p>
          </div>
        </div>

        {(exp.offerLetterUrl || exp.extensionLetterUrl || exp.completionLetterUrl) && (
          <div className="mt-5 flex flex-wrap gap-2">
            {exp.offerLetterUrl && <LetterLink href={exp.offerLetterUrl}><FileText size={13} /> Offer letter</LetterLink>}
            {exp.extensionLetterUrl && <LetterLink href={exp.extensionLetterUrl}><FileText size={13} /> Extension letter</LetterLink>}
            {exp.completionLetterUrl && <LetterLink href={exp.completionLetterUrl}><ExternalLink size={13} /> Experience letter</LetterLink>}
          </div>
        )}

        <div className="relative mt-7 border-t border-line pt-7">
          {exp.roles.length > 1 && (
            <span className="absolute left-[5px] top-7 bottom-8 w-px bg-line-2" />
          )}
          <div className="space-y-8">
            {exp.roles.map((role, ri) => (
              <Role key={ri} role={role} branched={exp.roles.length > 1} />
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
        <div className="mx-auto max-w-4xl px-5 sm:px-8 pt-28 sm:pt-32 pb-14">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }} className="flex items-center justify-between border-y border-line-2 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">
            <span>Career record</span>
            <span className="hidden sm:block">2025 — present</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.15 }} className="mt-10 font-display text-[clamp(3.2rem,10vw,7rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.03em] text-ink">
            Experience
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-2">
            Professional growth, technical contributions and the impact I've shipped
            across startups.
          </motion.p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 sm:px-8 pb-24">
        <div className="relative space-y-8">
          <div className="absolute left-[7px] sm:left-[15px] top-4 bottom-4 w-px bg-line-2" />
          {experiences.map((exp) => (
            <ExperienceEntry key={exp.id} exp={exp} />
          ))}
        </div>

        <Reveal className="mt-12">
          <div className="flex flex-col items-center gap-6 border border-ink/70 bg-paper-2 p-10 text-center">
            <div>
              <h3 className="font-display text-2xl font-medium text-ink">Want to see more?</h3>
              <p className="mt-2 text-ink-2">Explore my projects or read more about how I work.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/project" className={btnPrimary}>View projects <ArrowRight className="h-4 w-4" /></Link>
              <Link href="/about" className={btnGhost}>About me</Link>
            </div>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </main>
  );
}
