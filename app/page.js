"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, ArrowRight, ArrowDown, MapPin, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { Marquee } from "@/components/magicui/marquee";
import { NumberTicker } from "@/components/magicui/number-ticker";
import {
  Reveal,
  SectionHeading,
  Kicker,
  GlassCard,
  Tag,
  Tilt,
  Magnetic,
  RevealImage,
  Divider,
  btnPrimary,
  btnGhost,
} from "@/components/aurora-ui";

/* ── Data ─────────────────────────────────────────────────────── */
const roleMarquee = [
  "Software Development",
  "Machine Learning",
  "Backend Engineering",
  "Agentic AI Systems",
  "Cloud & DevOps",
  "Deep Learning",
];

const projects = [
  {
    title: "Cordis Sentinel", category: "ML · Agentic AI", year: "2026",
    link: "https://github.com/yatinsingh2007/Cordis-Sentinel", image: "/cordis-sentinel.png",
    desc: "An agentic AI pipeline for heart-attack risk prediction with SHAP explainability and a Plan-Execute-Reflect agent.",
    stack: ["Python", "LangGraph", "SHAP", "Llama 3"],
  },
  {
    title: "ReportLens AI", category: "LLM · Documents", year: "2025",
    link: "https://github.com/yatinsingh2007/ReportLens-AI", image: "/ReportLensAI.jpeg",
    desc: "An AI platform that extracts insights from PDF reports and answers complex questions using NLP.",
    stack: ["Next.js", "Gemini AI", "Prisma", "Docker"],
  },
  {
    title: "Velox", category: "Systems · Go", year: "2025",
    link: "https://github.com/yatinsingh2007/Velox", image: "/Velox.png",
    desc: "A high-performance, containerized code-execution engine (online judge) built with Go and Docker.",
    stack: ["Go", "Docker", "Compose"],
  },
  {
    title: "CreditIQ", category: "ML · RAG", year: "2025",
    link: "https://creditiq123.streamlit.app", image: "/creditIQ.jpeg",
    desc: "An agentic credit-risk system pairing ML classifiers with a RAG-retrieved policy rulebook for explainable decisions.",
    stack: ["Python", "LangGraph", "ChromaDB", "Streamlit"],
  },
  {
    title: "Next Horizon", category: "Web · MERN", year: "2025",
    link: "https://next-horizon-nine.vercel.app/", image: "/NextHorizon.png",
    desc: "A professional network reimagined — share milestones, connect with peers and discover opportunities.",
    stack: ["React", "MongoDB", "Express", "Node"],
  },
  {
    title: "create-prism", category: "Open Source · CLI", year: "2025",
    link: "https://www.npmjs.com/package/create-prism", image: "/create-prism.png",
    desc: "A fast CLI to scaffold Node.js + Express + Prisma starter projects in JavaScript or TypeScript.",
    stack: ["Node.js", "Express", "Prisma", "CLI"],
  },
];

const capabilities = [
  { title: "Software Development", desc: "Full-stack web apps, clean architecture and reusable systems built to last." },
  { title: "Machine Learning & DL", desc: "Neural networks, predictive models and end-to-end training pipelines." },
  { title: "Agentic & AI Systems", desc: "LLM workflows, autonomous agents and self-hosted inference." },
  { title: "Cloud & Deployment", desc: "AWS, VPS, Docker and CI/CD pipelines that deploy in under three minutes." },
  { title: "Backend Engineering", desc: "Scalable REST APIs and high-throughput services with solid data modelling." },
  { title: "Systems & Tooling", desc: "Developer tooling, automation and performance-focused engineering." },
];

const stack = ["TypeScript", "Next.js", "React", "Node.js", "Python", "Django", "PyTorch", "PostgreSQL", "Prisma", "MongoDB", "Docker", "AWS", "vLLM", "Tailwind", "Express", "Git"];

const stats = [
  { value: 50, suffix: "+", label: "Merged pull requests", note: "In production codebases" },
  { value: 93, suffix: "%", label: "Faster deployments", note: "45 min → under 3 min" },
  { value: 500, suffix: "+", label: "Users served", note: "Across shipped products" },
  { value: 14, suffix: "", label: "Projects shipped", note: "Web, ML & tooling" },
];

/* ── Hero ─────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 sm:px-8 pt-32 pb-16 sm:pt-40 lg:grid-cols-12 lg:gap-8">
        {/* copy */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Kicker>
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.7)]" />
              Available for opportunities
            </Kicker>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 font-display text-[clamp(3rem,9vw,6.5rem)] font-semibold leading-[0.95] tracking-tight"
          >
            <span className="text-ink">Yatin Singh</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.32 }}
            className="mt-4 text-xl font-medium text-shimmer sm:text-2xl"
          >
            Software &amp; Machine Learning Engineer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.42 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-ink-dim sm:text-lg"
          >
            I build intelligent systems end to end — from full-stack products and
            scalable backends to self-hosted machine learning. Currently an SDE at
            ByteBlock Technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.52 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Magnetic>
              <Link href="/project" className={btnPrimary}>
                View my work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Magnetic>
            <Link href="/contact" className={btnGhost}>Get in touch</Link>

            <div className="ml-1 flex items-center gap-2">
              {[
                { icon: FaGithub, href: "https://github.com/yatinsingh2007", label: "GitHub" },
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/yatin-singh-b37817323/", label: "LinkedIn" },
                { icon: FaInstagram, href: "https://www.instagram.com/yatin_singh27", label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-hair bg-white/[0.02] text-ink-dim transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/60 hover:text-ink"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* portrait card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5"
        >
          <Tilt className="relative mx-auto max-w-sm" max={9}>
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-brand-3/30 via-brand/20 to-brand-2/30 blur-2xl" />
            <GlassCard hover={false} className="relative overflow-hidden p-2">
              <div className="relative aspect-4/5 w-full overflow-hidden rounded-xl">
                <Image
                  src="/yatin_singh.jpeg"
                  alt="Yatin Singh"
                  fill
                  priority
                  sizes="(max-width:1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
              </div>

              {/* floating info chips */}
              <div className="absolute left-5 top-5 flex items-center gap-1.5 rounded-full border border-hair bg-bg/70 px-3 py-1.5 text-xs text-ink backdrop-blur-md">
                <MapPin className="h-3.5 w-3.5 text-brand-2" /> Visakhapatnam, IN
              </div>
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-xl border border-hair bg-bg/70 px-4 py-3 backdrop-blur-md">
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-ink-faint">Currently</p>
                  <p className="text-sm font-medium text-ink">SDE @ ByteBlock</p>
                </div>
                <Sparkles className="h-5 w-5 text-brand-2" />
              </div>
            </GlassCard>
          </Tilt>
        </motion.div>
      </div>

      <div className="mx-auto mt-4 flex max-w-6xl items-center gap-2 px-5 sm:px-8 text-xs uppercase tracking-[0.25em] text-ink-faint">
        <ArrowDown className="h-4 w-4 animate-bounce text-brand-2" />
        Scroll to explore
      </div>
    </section>
  );
}

/* ── Role marquee band ────────────────────────────────────────── */
function RoleBand() {
  return (
    <div className="mt-16 border-y border-hair bg-white/[0.015] py-5">
      <Marquee className="[--duration:36s]">
        {roleMarquee.map((r) => (
          <span key={r} className="mx-8 flex items-center gap-8 font-display text-2xl font-medium text-ink/50 md:text-3xl">
            {r}
            <Sparkles className="h-5 w-5 text-brand/60" />
          </span>
        ))}
      </Marquee>
    </div>
  );
}

/* ── Selected work ────────────────────────────────────────────── */
function SelectedWork() {
  return (
    <section className="mx-auto max-w-6xl px-5 sm:px-8 py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Selected work"
          title="Things I've built"
          description="A mix of full-stack products, ML pipelines, agentic systems and developer tooling."
        />
        <Link href="/project" className="group hidden items-center gap-2 text-sm text-ink-dim transition-colors hover:text-ink sm:flex">
          <span className="link-underline">View all projects</span>
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 0.08}>
            <a href={p.link} target="_blank" rel="noopener noreferrer" className="block h-full">
              <GlassCard className="flex h-full flex-col overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <RevealImage
                    src={p.image}
                    alt={p.title}
                    sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                    imgClassName="transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/70 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-hair bg-bg/70 px-3 py-1 text-[11px] font-medium text-ink backdrop-blur-md">
                    {p.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl font-semibold text-ink transition-colors group-hover:text-brand-2">
                      {p.title}
                    </h3>
                    <span className="shrink-0 font-mono text-xs text-ink-faint">{p.year}</span>
                  </div>
                  <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-ink-dim">{p.desc}</p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <Tag key={s}>{s}</Tag>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-1.5 border-t border-hair pt-4 text-sm text-ink-dim transition-colors group-hover:text-brand-2">
                    View project
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </GlassCard>
            </a>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 sm:hidden">
        <Link href="/project" className={btnGhost}>
          View all projects <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

/* ── Capabilities ─────────────────────────────────────────────── */
function Capabilities() {
  return (
    <section className="mx-auto max-w-6xl px-5 sm:px-8 py-24">
      <SectionHeading
        eyebrow="What I do"
        title="Areas I work across"
        description="From product front-ends to the models and infrastructure that power them."
      />
      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((c, i) => (
          <Reveal key={c.title} delay={(i % 3) * 0.07}>
            <GlassCard className="h-full p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-3/25 to-brand-2/25 font-mono text-sm font-semibold text-brand-2">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-ink">{c.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-dim">{c.desc}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ── Tech stack ───────────────────────────────────────────────── */
function StackRow({ reverse }) {
  return (
    <Marquee reverse={reverse} pauseOnHover className={reverse ? "[--duration:44s]" : "[--duration:36s]"}>
      {stack.map((t) => (
        <span
          key={t}
          className="mx-2 rounded-full border border-hair bg-white/[0.02] px-5 py-2.5 text-sm text-ink-dim transition-colors duration-200 hover:border-brand/50 hover:text-ink"
        >
          {t}
        </span>
      ))}
    </Marquee>
  );
}

function Stack() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="Tech stack" title="Tools I reach for daily" />
      </div>
      <div className="mt-12 flex flex-col gap-4">
        <StackRow />
        <StackRow reverse />
      </div>
    </section>
  );
}

/* ── Stats ────────────────────────────────────────────────────── */
function Stats() {
  return (
    <section className="mx-auto max-w-6xl px-5 sm:px-8 py-24">
      <SectionHeading eyebrow="By the numbers" title="Impact, measured" />
      <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.07}>
            <GlassCard className="h-full p-6 sm:p-7">
              <div className="flex items-baseline font-display text-5xl font-semibold text-ink sm:text-6xl">
                <NumberTicker value={s.value} />
                <span className="text-gradient-brand">{s.suffix}</span>
              </div>
              <div className="mt-4 text-sm font-medium text-ink">{s.label}</div>
              <div className="mt-1 text-xs text-ink-faint">{s.note}</div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ── Closing CTA ──────────────────────────────────────────────── */
function Closing() {
  return (
    <section className="mx-auto max-w-6xl px-5 sm:px-8 py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-hair bg-white/[0.02] px-6 py-16 text-center sm:px-16 sm:py-24">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/25 blur-[120px]" />
          </div>
          <div className="relative">
            <Kicker className="mx-auto">Let's work together</Kicker>
            <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl">
              Let's build something <span className="text-shimmer">great</span> together
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-dim">
              Have a role, a project or an idea in mind? I'd love to hear about it.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Magnetic>
                <Link href="/contact" className={btnPrimary}>
                  Start a conversation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Magnetic>
              <a href="mailto:yatin.singh.dev@gmail.com" className={btnGhost}>
                yatin.singh.dev@gmail.com
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen w-full text-ink">
      <SiteNav />
      <Hero />
      <RoleBand />
      <SelectedWork />
      <Divider />
      <Capabilities />
      <Divider />
      <Stack />
      <Divider />
      <Stats />
      <Closing />
      <SiteFooter />
    </main>
  );
}
