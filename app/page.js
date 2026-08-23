"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import TerminalNav from "@/section/TerminalNav";
import TerminalFooter from "@/section/TerminalFooter";
import { Marquee } from "@/components/magicui/marquee";
import { NumberTicker } from "@/components/magicui/number-ticker";

/* ── Data ─────────────────────────────────────────────────────── */
const bootLog = [
  { c: "whoami", o: "K. Yatin Singh" },
  { c: "cat role.txt", o: "Software & Machine Learning Engineer" },
  { c: "./status --now", o: "[OK] SDE @ ByteBlock Technologies" },
  { c: "echo $LOCATION", o: "Visakhapatnam, IN — remote friendly" },
];

const roleTicker = ["SOFTWARE_DEV", "CLOUD_INFRA", "BACKEND_ENG", "MACHINE_LEARNING", "DEEP_LEARNING", "AGENTIC_SYSTEMS"];

const projects = [
  {
    name: "cordis-sentinel", tag: "ml · agentic", year: "2026", domain: "github.com/Cordis-Sentinel",
    link: "https://github.com/yatinsingh2007/Cordis-Sentinel", thumbnail: "/cordis-sentinel.png",
    desc: "Agentic AI pipeline for heart-attack risk prediction with SHAP explainability and a Plan-Execute-Reflect agent.",
    stack: ["Python", "LangGraph", "SHAP", "Llama 3"],
  },
  {
    name: "reportlens-ai", tag: "llm · docs", year: "2025", domain: "github.com/ReportLens-AI",
    link: "https://github.com/yatinsingh2007/ReportLens-AI", thumbnail: "/ReportLensAI.jpeg",
    desc: "AI platform that extracts insights from PDF reports and answers complex questions with NLP.",
    stack: ["Next.js", "Gemini AI", "Prisma", "Docker"],
  },
  {
    name: "velox", tag: "systems · go", year: "2025", domain: "github.com/Velox",
    link: "https://github.com/yatinsingh2007/Velox", thumbnail: "/Velox.png",
    desc: "High-performance containerized code-execution engine (Online Judge) built with Go and Docker.",
    stack: ["Go", "Docker", "Compose"],
  },
  {
    name: "creditiq", tag: "ml · rag", year: "2025", domain: "creditiq123.streamlit.app",
    link: "https://creditiq123.streamlit.app", thumbnail: "/creditIQ.jpeg",
    desc: "Agentic credit-risk system pairing ML classifiers with a RAG-retrieved policy rulebook for explainable decisions.",
    stack: ["Python", "LangGraph", "ChromaDB", "Streamlit"],
  },
  {
    name: "next-horizon", tag: "web · mern", year: "2025", domain: "next-horizon-nine.vercel.app",
    link: "https://next-horizon-nine.vercel.app/", thumbnail: "/NextHorizon.png",
    desc: "A professional network reimagined — share milestones, connect with peers and discover opportunities.",
    stack: ["React", "MongoDB", "Express", "Node"],
  },
  {
    name: "create-prism", tag: "oss · cli", year: "2025", domain: "npmjs.com/create-prism",
    link: "https://www.npmjs.com/package/create-prism", thumbnail: "/create-prism.png",
    desc: "A fast CLI to scaffold Node.js + Express + Prisma starter projects in JavaScript or TypeScript.",
    stack: ["Node.js", "Express", "Prisma", "CLI"],
  },
];

const capabilities = [
  { module: "web", title: "Software Development", desc: "Full-stack web apps, architecture & reusable systems." },
  { module: "ml", title: "Machine Learning & DL", desc: "Neural networks, predictive models & training pipelines." },
  { module: "ai", title: "Agentic & AI Systems", desc: "LLM workflows, autonomous agents & self-hosted inference." },
  { module: "ops", title: "Cloud & Deployment", desc: "AWS, VPS, Docker & sub-3-minute CI/CD pipelines." },
  { module: "api", title: "Backend Engineering", desc: "Scalable REST APIs & high-throughput services." },
  { module: "sys", title: "Systems & Tooling", desc: "Developer tooling, automation & performance work." },
];

const stack = ["typescript", "next.js", "react", "node.js", "python", "django", "pytorch", "postgresql", "prisma", "mongodb", "docker", "aws", "vLLM", "tailwind", "express", "git"];

const stats = [
  { value: 50, suffix: "+", label: "merged PRs", note: "// production" },
  { value: 93, suffix: "%", label: "faster deploys", note: "// ci/cd" },
  { value: 500, suffix: "+", label: "users served", note: "// scale" },
  { value: 14, suffix: "", label: "projects shipped", note: "// builds" },
];

const btnPrimary =
  "group inline-flex items-center gap-2 border border-cy bg-cy px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-term transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-term hover:text-cy hover:shadow-[4px_4px_0_0_#22d3ee]";
const btnGhost =
  "group inline-flex items-center gap-2 border border-edge px-6 py-3.5 text-xs uppercase tracking-wider text-fg transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-cy hover:text-cy hover:shadow-[4px_4px_0_0_#22d3ee]";

/* ── Section header ───────────────────────────────────────────── */
function SectionHead({ n, cmd, note }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="flex items-end justify-between border-b border-edge pb-4"
    >
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className="text-xs text-cy">§{n}</span>
        <h2 className="text-base uppercase tracking-[0.15em] text-fg sm:text-lg">{cmd}</h2>
      </div>
      {note && <span className="hidden text-[10px] uppercase tracking-widest text-fg-dim sm:block">{note}</span>}
    </motion.div>
  );
}

/* ── Hero ─────────────────────────────────────────────────────── */
const logContainer = { hidden: {}, show: { transition: { staggerChildren: 0.16, delayChildren: 0.5 } } };
const logLine = { hidden: { opacity: 0, x: -8 }, show: { opacity: 1, x: 0, transition: { duration: 0.35 } } };

function Hero() {
  return (
    <section className="scanlines relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(120%_80%_at_70%_-10%,rgba(34,211,238,0.10),transparent_60%)]" />

      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 pt-24 sm:pt-28 pb-14">
        {/* meta bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-between border-y border-edge py-2.5 text-[10px] uppercase tracking-[0.2em] text-fg-dim"
        >
          <span className="text-cy">yatin@portfolio:~$</span>
          <span className="hidden sm:block">lat 17.68°N · lng 83.21°E</span>
          <span>[ sys: online ]</span>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-10 pt-12 lg:grid-cols-12 lg:gap-8">
          {/* headline */}
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mb-5 text-xs uppercase tracking-[0.25em] text-fg-dim"
            >
              // software &amp; machine learning engineer
            </motion.p>

            <h1 className="font-bold uppercase leading-[0.85] tracking-tight text-fg">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.35 }}
                className="block text-[clamp(3rem,11vw,9rem)]"
              >
                Yatin
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.46 }}
                className="block text-[clamp(3rem,11vw,9rem)]"
              >
                Singh<span className="term-blink text-cy">_</span>
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.66 }}
              className="mt-7 max-w-md text-sm leading-relaxed text-fg-dim"
            >
              I build intelligent systems end-to-end — from full-stack products and
              scalable backends to self-hosted machine learning.
            </motion.p>

            {/* boot bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-7 max-w-md"
            >
              <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-fg-dim">
                <span>system.boot</span>
                <span className="text-cy">
                  <NumberTicker value={100} delay={0.8} />%
                </span>
              </div>
              <div className="mt-2 h-1.5 w-full border border-edge">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.6, delay: 0.8, ease: "easeInOut" }}
                  className="h-full bg-cy"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Link href="/project" className={btnPrimary}>
                view_work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link href="/about" className={btnGhost}>./about</Link>
              <div className="ml-1 flex items-center gap-1.5">
                {[
                  { icon: FaGithub, href: "https://github.com/yatinsingh2007" },
                  { icon: FaLinkedin, href: "https://www.linkedin.com/in/yatin-singh-b37817323/" },
                  { icon: FaInstagram, href: "https://www.instagram.com/yatin_singh27" },
                ].map(({ icon: Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center border border-edge text-fg-dim transition-all duration-200 hover:border-cy hover:text-cy hover:shadow-[3px_3px_0_0_#22d3ee] hover:-translate-x-0.5 hover:-translate-y-0.5"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* terminal window */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-5"
          >
            <div className="border border-edge bg-term-2 shadow-[8px_8px_0_0_rgba(34,211,238,0.12)]">
              <div className="flex items-center gap-2 border-b border-edge px-4 py-2.5">
                <span className="h-2.5 w-2.5 bg-cy" />
                <span className="h-2.5 w-2.5 bg-edge-2" />
                <span className="h-2.5 w-2.5 bg-edge-2" />
                <span className="ml-2 text-[11px] text-fg-dim">yatin@portfolio: ~ — bash</span>
              </div>
              <motion.div variants={logContainer} initial="hidden" animate="show" className="space-y-2.5 p-5 text-[13px] leading-relaxed">
                {bootLog.map((l) => (
                  <motion.div key={l.c} variants={logLine}>
                    <div className="text-fg-dim">
                      <span className="mr-2 text-cy">$</span>
                      {l.c}
                    </div>
                    <div className="pl-4 text-fg">
                      <span className="mr-2 text-cy">→</span>
                      {l.o}
                    </div>
                  </motion.div>
                ))}
                <motion.div variants={logLine} className="pt-1 text-fg-dim">
                  <span className="mr-2 text-cy">$</span>
                  <span className="term-blink text-cy">▋</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div className="mt-14 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-fg-dim">
          <ArrowDown className="h-3.5 w-3.5 animate-bounce text-cy" />
          scroll_to_explore
        </div>
      </div>
    </section>
  );
}

/* ── Ticker band ──────────────────────────────────────────────── */
function TickerBand() {
  return (
    <div className="border-y border-edge bg-term-2/50 py-4">
      <Marquee className="[--duration:34s]">
        {roleTicker.map((r) => (
          <span key={r} className="mx-6 flex items-center gap-6 text-lg font-bold uppercase tracking-tight text-fg/70 md:text-2xl">
            {r}
            <span className="text-cy">//</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}

/* ── Selected work — featured project card grid ───────────────── */
function SelectedWork() {
  return (
    <section className="mx-auto max-w-[1600px] px-4 sm:px-6 py-24 sm:py-28">
      <SectionHead n="01" cmd="$ ls ~/projects --featured" note="6 of 14 builds" />

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <a
            key={p.name}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col border border-edge bg-term-2/40 [animation:fadeUp_0.6s_ease-out_both] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:border-cy hover:shadow-[8px_8px_0_0_#22d3ee]"
            style={{ animationDelay: `${(i % 3) * 80}ms` }}
          >
            {/* framed app window */}
            <div className="border-b border-edge">
              <div className="flex items-center gap-2 border-b border-edge bg-term px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-cy/80" />
                <span className="h-2 w-2 rounded-full bg-edge-2" />
                <span className="h-2 w-2 rounded-full bg-edge-2" />
                <span className="ml-1 truncate text-[10px] text-fg-dim">{p.domain}</span>
              </div>
              <div className="relative aspect-video overflow-hidden bg-term">
                <Image
                  src={p.thumbnail}
                  alt={p.name}
                  fill
                  sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <span className="absolute left-0 top-0 bg-cy px-2 py-0.5 text-[10px] font-bold uppercase text-term">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* meta */}
            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-xl font-bold lowercase tracking-tight text-fg transition-colors group-hover:text-cy">
                  {p.name}<span className="text-fg-dim group-hover:text-cy">/</span>
                </h3>
                <span className="shrink-0 text-[10px] uppercase tracking-wider text-fg-dim">{p.year}</span>
              </div>
              <p className="mt-3 line-clamp-2 text-xs leading-relaxed text-fg-dim">{p.desc}</p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span key={s} className="border border-edge px-2 py-0.5 text-[9px] uppercase tracking-wider text-fg-dim">{s}</span>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-edge pt-4">
                <span className="text-[10px] uppercase tracking-widest text-cy">{p.tag}</span>
                <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider text-fg-dim transition-colors group-hover:text-cy">
                  open <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-10">
        <Link href="/project" className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-fg-dim transition-colors hover:text-cy">
          <span className="text-cy">$</span> cd ~/all-projects
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </section>
  );
}

/* ── Capabilities ─────────────────────────────────────────────── */
function Capabilities() {
  return (
    <section className="mx-auto max-w-[1600px] px-4 sm:px-6 py-24 sm:py-28">
      <SectionHead n="02" cmd="$ cat capabilities.json" note="what i build & solve" />
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.06 }}
            className="group border border-edge bg-term-2/40 p-6 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:border-cy hover:shadow-[6px_6px_0_0_#22d3ee]"
          >
            <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-fg-dim">
              <span className="text-cy">[{String(i + 1).padStart(2, "0")}]</span>
              <span>//{c.module}</span>
            </div>
            <h3 className="mt-6 text-xl font-bold uppercase tracking-tight text-fg group-hover:text-cy">{c.title}</h3>
            <p className="mt-3 text-xs leading-relaxed text-fg-dim">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ── Stack ────────────────────────────────────────────────────── */
function StackRow({ reverse }) {
  return (
    <Marquee reverse={reverse} pauseOnHover className={reverse ? "[--duration:40s]" : "[--duration:32s]"}>
      {stack.map((t) => (
        <span
          key={t}
          className="mx-2 border border-edge px-4 py-2 text-sm lowercase tracking-wide text-fg-dim transition-colors duration-200 hover:border-cy hover:text-cy"
        >
          {t}
        </span>
      ))}
    </Marquee>
  );
}

function Stack() {
  return (
    <section className="py-24 sm:py-28">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6">
        <SectionHead n="03" cmd="$ npm ls --global" note="daily drivers" />
      </div>
      <div className="mt-10 flex flex-col gap-3">
        <StackRow />
        <StackRow reverse />
      </div>
    </section>
  );
}

/* ── Stats ────────────────────────────────────────────────────── */
function Stats() {
  return (
    <section className="mx-auto max-w-[1600px] px-4 sm:px-6 py-24 sm:py-28">
      <SectionHead n="04" cmd="$ ./impact --summary" note="selected metrics" />
      <div className="mt-10 grid grid-cols-2 border-l border-t border-edge md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="border-b border-r border-edge p-6 sm:p-8"
          >
            <div className="flex items-baseline text-5xl font-bold text-fg sm:text-6xl">
              <NumberTicker value={s.value} />
              <span className="text-cy">{s.suffix}</span>
            </div>
            <div className="mt-3 text-[11px] uppercase tracking-wider text-fg">{s.label}</div>
            <div className="mt-1 text-[10px] uppercase tracking-widest text-fg-dim">{s.note}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ── Closing ──────────────────────────────────────────────────── */
function Closing() {
  return (
    <section className="scanlines relative overflow-hidden border-t border-edge">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[420px] bg-[radial-gradient(120%_90%_at_50%_120%,rgba(34,211,238,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 py-28 sm:py-36 text-center">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-xs uppercase tracking-[0.3em] text-cy"
        >
          $ ./collaborate --init
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mx-auto mt-6 max-w-4xl text-[clamp(2.4rem,8vw,5.5rem)] font-bold uppercase leading-[0.9] tracking-tight text-fg"
        >
          Let&apos;s build<br />
          something <span className="text-cy">real_</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-11 flex flex-wrap items-center justify-center gap-3"
        >
          <Link href="/contact" className={btnPrimary}>
            start_conversation
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <a href="mailto:yatin.singh.dev@gmail.com" className={btnGhost}>yatin.singh.dev@gmail.com</a>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-term font-mono text-fg">
      <TerminalNav />
      <Hero />
      <TickerBand />
      <SelectedWork />
      <Capabilities />
      <Stack />
      <Stats />
      <Closing />
      <TerminalFooter />
    </main>
  );
}
