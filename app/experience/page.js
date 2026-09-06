"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { FileText, ExternalLink, ArrowRight } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import {
  Reveal,
  Panel,
  PageHeader,
  Container,
  Section,
  btnPrimary,
  btnGhost,
} from "@/components/aurora-ui";

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
        title: "Software Development Engineer",
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
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="t-caption inline-flex items-center gap-1.5 rounded-full border border-line px-3.5 py-1.5 text-ink-2 transition-colors duration-300 hover:border-line-2 hover:text-ink"
    >
      {children}
    </a>
  );
}

function Role({ role, branched }) {
  const duration = formatDuration(role.period);

  const body = (
    <>
      <div className="flex flex-wrap items-center gap-2.5">
        <h3 className="t-h4 text-ink">{role.title}</h3>
        {role.current && (
          <span className="t-meta inline-flex items-center gap-2 rounded-full border border-line px-2.5 py-1 text-ink-soft">
            <span className="signal-dot h-1.5 w-1.5 rounded-full bg-flare" />
            Current
          </span>
        )}
        <span className="t-meta rounded-full border border-line px-2.5 py-1 text-ink-faint">
          {role.type}
        </span>
      </div>

      <div className="t-meta mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-ink-soft">
        <span>{role.period}</span>
        {duration && (
          <>
            <span aria-hidden className="h-3 w-px bg-line-2" />
            <span>{duration}</span>
          </>
        )}
        <span aria-hidden className="h-3 w-px bg-line-2" />
        <span>{role.location}</span>
      </div>

      {role.features.length > 0 && (
        <ul className="mt-5 space-y-3">
          {role.features.map((f, fi) => (
            <li key={fi} className="t-body flex gap-3.5 text-ink-2">
              <span aria-hidden className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-ink-faint" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  );

  // Single role at a company — a plain node on the trunk.
  if (!branched) {
    return (
      <div className="relative pl-7">
        <span
          aria-hidden
          className={`absolute left-0 top-2.5 h-2 w-2 -translate-x-1/2 rounded-full ${
            role.current ? "bg-flare" : "bg-ink-faint"
          }`}
        />
        {body}
      </div>
    );
  }

  // Multiple roles — a curve peeling off the company trunk.
  return (
    <div className="relative pl-12 pt-5">
      <svg
        aria-hidden
        width="40"
        height="34"
        viewBox="0 0 40 34"
        fill="none"
        className="absolute left-[5px] top-0 overflow-visible"
      >
        <motion.path
          d="M1 0 C 1 22, 5 30, 34 30"
          strokeWidth="1.25"
          strokeLinecap="round"
          className={role.current ? "stroke-flare" : "stroke-line-2"}
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
        />
      </svg>
      <span
        aria-hidden
        className={`absolute left-[39px] top-[30px] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full ${
          role.current ? "bg-flare" : "bg-ink-faint"
        }`}
      />
      {body}
    </div>
  );
}

function ExperienceEntry({ exp }) {
  return (
    <Reveal className="relative pl-8 sm:pl-12">
      <span
        aria-hidden
        className="absolute left-[7px] top-9 z-10 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-ink sm:left-[15px]"
      />

      <Panel hover={false} className="p-6 sm:p-9">
        <div className="flex items-start gap-4">
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-line bg-paper-2">
            <Image src={exp.logo} alt={exp.company} fill className="object-cover" />
          </div>
          <div className="flex-1">
            <h2 className="t-h3 text-ink">{exp.company}</h2>
            <p className="t-body mt-3 max-w-2xl text-ink-2">{exp.description}</p>
          </div>
        </div>

        {(exp.offerLetterUrl || exp.extensionLetterUrl || exp.completionLetterUrl) && (
          <div className="mt-6 flex flex-wrap gap-2">
            {exp.offerLetterUrl && (
              <LetterLink href={exp.offerLetterUrl}><FileText size={13} /> Offer letter</LetterLink>
            )}
            {exp.extensionLetterUrl && (
              <LetterLink href={exp.extensionLetterUrl}><FileText size={13} /> Extension letter</LetterLink>
            )}
            {exp.completionLetterUrl && (
              <LetterLink href={exp.completionLetterUrl}><ExternalLink size={13} /> Experience letter</LetterLink>
            )}
          </div>
        )}

        <div className="relative mt-8 border-t border-line pt-8">
          {exp.roles.length > 1 && (
            <span aria-hidden className="absolute bottom-8 left-[5px] top-8 w-px bg-line" />
          )}
          <div className="space-y-9">
            {exp.roles.map((role, ri) => (
              <Role key={ri} role={role} branched={exp.roles.length > 1} />
            ))}
          </div>
        </div>
      </Panel>
    </Reveal>
  );
}

export default function ExperiencePage() {
  return (
    <main className="min-h-screen w-full text-ink">
      <SiteNav />

      <PageHeader
        eyebrow="Career record"
        title="Where I've shipped"
        description="Professional growth, technical contributions and the impact I've delivered across startups."
        meta={["2025 — present", "2 companies", "Remote"]}
      />

      <Section className="pt-14 md:pt-20">
        <div className="mx-auto w-full max-w-4xl px-6 md:px-8">
          <div className="relative space-y-6">
            <span aria-hidden className="absolute bottom-6 left-[7px] top-6 w-px bg-line sm:left-[15px]" />
            {experiences.map((exp) => (
              <ExperienceEntry key={exp.id} exp={exp} />
            ))}
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <Container>
          <Reveal>
            <div className="astra-surface flex flex-col items-center gap-8 rounded-3xl px-6 py-16 text-center md:px-16">
              <div>
                <h3 className="t-h3 text-ink">Want to see more?</h3>
                <p className="t-lead mt-4 text-ink-2">
                  Explore the projects, or read about how I work.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/project" className={btnPrimary}>
                  View projects
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
                <Link href="/about" className={btnGhost}>About me</Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <SiteFooter />
    </main>
  );
}
