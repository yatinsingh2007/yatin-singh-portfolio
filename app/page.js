"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, ArrowRight, ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { Marquee } from "@/components/magicui/marquee";
import { NumberTicker } from "@/components/magicui/number-ticker";
import {
  Reveal,
  SectionHeading,
  GlassCard,
  Tag,
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
    <section className="relative">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 pt-28 sm:pt-32">
        {/* masthead */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-between border-y border-line-2 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft"
        >
          <span>Portfolio № 01</span>
          <span className="hidden sm:block">Software &amp; ML Engineer</span>
          <span>Est. 2024 — Visakhapatnam, IN</span>
        </motion.div>

        <div className="grid grid-cols-1 items-end gap-10 pt-12 lg:grid-cols-12 lg:gap-10">
          {/* headline */}
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.25em] text-ink-soft"
            >
              <span className="inline-flex h-2 w-2 bg-flare" />
              Available for opportunities
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.16 }}
              className="font-display text-[clamp(3.4rem,10vw,8rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.03em] text-ink"
            >
              Yatin Singh
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.28 }}
              className="mt-6 font-mono text-sm uppercase tracking-[0.3em] text-ink-2 sm:text-base"
            >
              Software / Machine Learning Engineer
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.38 }}
              className="mt-7 max-w-xl text-lg leading-relaxed text-ink-2"
            >
              I build intelligent systems end to end — from full-stack products and
              scalable backends to self-hosted machine learning. Currently a Software
              Development Engineer at ByteBlock Technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.48 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Link href="/project" className={btnPrimary}>
                View my work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
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
                    className="flex h-11 w-11 items-center justify-center border border-ink/70 text-ink transition-colors duration-200 hover:bg-ink hover:text-paper"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* portrait figure */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.4 }}
            className="lg:col-span-5"
          >
            <figure className="border border-ink/70 bg-paper p-2">
              <div className="relative aspect-4/5 w-full overflow-hidden">
                <Image
                  src="/yatin_singh.jpeg"
                  alt="Yatin Singh"
                  fill
                  priority
                  sizes="(max-width:1024px) 100vw, 40vw"
                  className="object-cover grayscale-[0.35] transition-all duration-700 hover:grayscale-0"
                />
              </div>
              <figcaption className="flex items-center justify-between border-t border-line px-1 pt-2.5 font-mono text-[10px] uppercase tracking-widest text-ink-soft">
                <span className="text-flare">Fig. 01</span>
                <span>The engineer at work</span>
              </figcaption>
            </figure>
          </motion.div>
        </div>

        <div className="mt-14 flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.25em] text-ink-soft">
          <ArrowDown className="h-4 w-4 animate-bounce text-flare" />
          Scroll to read on
        </div>
      </div>
    </section>
  );
}

/* ── Role marquee band ────────────────────────────────────────── */
function RoleBand() {
  return (
    <div className="mt-16 border-y border-line-2 py-5">
      <Marquee className="[--duration:38s]">
        {roleMarquee.map((r) => (
          <span key={r} className="mx-7 flex items-center gap-7 font-display text-2xl font-extrabold uppercase tracking-tight text-ink/25 md:text-3xl">
            {r}
            <span className="text-flare">✳</span>
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
          index="01"
          eyebrow="Selected work"
          title="A field guide to things I've built"
          description="Full-stack products, ML pipelines, agentic systems and developer tooling."
        />
        <Link href="/project" className="group hidden items-center gap-2 font-mono text-xs uppercase tracking-widest text-ink-2 transition-colors hover:text-ink sm:flex">
          <span className="link-underline">All projects</span>
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 0.08}>
            <a href={p.link} target="_blank" rel="noopener noreferrer" className="group block h-full">
              <GlassCard className="flex h-full flex-col">
                <div className="relative aspect-video overflow-hidden border-b border-line">
                  <RevealImage
                    src={p.image}
                    alt={p.title}
                    sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                    imgClassName="grayscale-[0.3] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.03]"
                  />
                  <span className="absolute left-0 top-0 bg-ink px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-paper">
                    № {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-ink-soft">
                    <span className="text-flare">{p.category}</span>
                    <span>{p.year}</span>
                  </div>
                  <h3 className="mt-3 font-display text-xl font-bold uppercase tracking-tight text-ink transition-colors group-hover:text-flare">
                    {p.title}
                  </h3>
                  <p className="mt-2.5 leading-relaxed text-ink-2">{p.desc}</p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <Tag key={s}>{s}</Tag>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-1.5 border-t border-line pt-4 font-mono text-xs uppercase tracking-widest text-ink-2 transition-colors group-hover:text-flare">
                    Read entry
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </GlassCard>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ── Capabilities ─────────────────────────────────────────────── */
function Capabilities() {
  return (
    <section className="mx-auto max-w-6xl px-5 sm:px-8 py-24">
      <SectionHeading
        index="02"
        eyebrow="Disciplines"
        title="What I practise"
        description="From product front-ends to the models and infrastructure that power them."
      />
      <div className="mt-12 grid grid-cols-1 border-l border-t border-line sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((c, i) => (
          <Reveal key={c.title} delay={(i % 3) * 0.07}>
            <div className="group h-full border-b border-r border-line p-7 transition-colors duration-300 hover:bg-paper-2">
              <span className="font-mono text-xs text-flare">§{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-5 font-display text-xl font-medium text-ink">{c.title}</h3>
              <p className="mt-2.5 leading-relaxed text-ink-2">{c.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ── Tech stack ───────────────────────────────────────────────── */
function StackRow({ reverse }) {
  return (
    <Marquee reverse={reverse} pauseOnHover className={reverse ? "[--duration:46s]" : "[--duration:38s]"}>
      {stack.map((t) => (
        <span
          key={t}
          className="mx-2 border border-line bg-paper px-5 py-2.5 font-mono text-sm text-ink-2 transition-colors duration-200 hover:border-flare hover:text-flare"
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
        <SectionHeading index="03" eyebrow="Toolkit" title="Instruments of the trade" />
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
      <SectionHeading index="04" eyebrow="By the numbers" title="A short ledger of impact" />
      <div className="mt-12 grid grid-cols-2 border-l border-t border-line lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.07}>
            <div className="h-full border-b border-r border-line p-6 sm:p-7">
              <div className="flex items-baseline font-display text-5xl font-medium text-ink sm:text-6xl">
                <NumberTicker value={s.value} />
                <span className="text-flare">{s.suffix}</span>
              </div>
              <div className="mt-4 text-sm font-medium text-ink">{s.label}</div>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-wide text-ink-soft">{s.note}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ── Closing ──────────────────────────────────────────────────── */
function Closing() {
  return (
    <section className="mx-auto max-w-6xl px-5 sm:px-8 py-24">
      <Reveal>
        <div className="border border-ink/70 bg-paper-2 px-6 py-16 text-center sm:px-16 sm:py-24">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-flare">Colophon</p>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-tight text-ink sm:text-6xl">
            Let's build something <span className="text-flare">worth keeping</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-2">
            Have a role, a project or an idea in mind? I'd love to hear about it.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact" className={btnPrimary}>
              Start a conversation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a href="mailto:yatin.singh.dev@gmail.com" className={btnGhost}>
              yatin.singh.dev@gmail.com
            </a>
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
