"use client";
import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiDjango,
  SiPytorch,
  SiPostgresql,
  SiPrisma,
  SiMongodb,
  SiDocker,
  SiTailwindcss,
  SiExpress,
  SiGit,
} from "react-icons/si";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { Marquee } from "@/components/magicui/marquee";
import { NumberTicker } from "@/components/magicui/number-ticker";
import {
  Reveal,
  SectionHeading,
  Panel,
  Tag,
  RevealImage,
  Divider,
  Container,
  Grid,
  Prose,
  Section,
  Signal,
  Kicker,
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
  { title: "Software development", desc: "Full-stack web apps, clean architecture and reusable systems built to last." },
  { title: "Machine learning & deep learning", desc: "Neural networks, predictive models and end-to-end training pipelines." },
  { title: "Agentic & AI systems", desc: "LLM workflows, autonomous agents and self-hosted inference." },
  { title: "Cloud & deployment", desc: "AWS, VPS, Docker and CI/CD pipelines that deploy in under three minutes." },
  { title: "Backend engineering", desc: "Scalable REST APIs and high-throughput services with solid data modelling." },
  { title: "Systems & tooling", desc: "Developer tooling, automation and performance-focused engineering." },
];

// Real brand marks, not text pills — and only entries with a genuine
// recognisable logo make the cut (no AWS, no vLLM).
const stack = [
  { name: "TypeScript", Icon: SiTypescript },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "React", Icon: SiReact },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Python", Icon: SiPython },
  { name: "Django", Icon: SiDjango },
  { name: "PyTorch", Icon: SiPytorch },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "Prisma", Icon: SiPrisma },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Docker", Icon: SiDocker },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "Express", Icon: SiExpress },
  { name: "Git", Icon: SiGit },
];

const stats = [
  { value: 50, suffix: "+", label: "Merged pull requests", note: "In production codebases" },
  { value: 93, suffix: "%", label: "Faster deployments", note: "45 min → under 3 min" },
  { value: 500, suffix: "+", label: "Users served", note: "Across shipped products" },
  { value: 14, suffix: "", label: "Projects shipped", note: "Web, ML and tooling" },
];

/* ── Split wordmark ───────────────────────────────────────────────
   Letters resolve inward from the edges of the frame as the field
   behind them settles — the launch-title gesture, borrowed. */
function Word({ text, direction = "left" }) {
  const chars = text.split("");
  return (
    <p className="t-h1 select-none text-ink" aria-hidden>
      {chars.map((ch, i) => {
        // outermost letters arrive last, so the name closes on the centre
        const order = direction === "left" ? chars.length - 1 - i : i;
        return (
          <span
            key={`${ch}-${i}`}
            className="astra-letter"
            style={{
              "--shift": direction === "left" ? "-44px" : "44px",
              "--delay": `${0.85 + order * 0.1}s`,
              "--dur": "1s",
            }}
          >
            {ch}
          </span>
        );
      })}
    </p>
  );
}

/* ── Hero ─────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative flex min-h-svh w-full flex-col justify-between pt-24 pb-10">
      <div className="flex flex-1 items-center">
        <Container className="flex items-center justify-between gap-4">
          <Word text="Yatin" direction="left" />
          <Word text="Singh" direction="right" />
        </Container>
      </div>

      <Container>
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-end md:justify-between">
          <p className="astra-fade-in t-meta text-ink-soft" style={{ "--delay": "1.7s" }}>
            Software / Machine learning engineer
          </p>

          {/* the field is interactive; say so, quietly */}
          <div
            className="astra-fade-in flex flex-col items-center gap-3"
            style={{ "--delay": "2s" }}
          >
            <span className="astra-cue h-14 w-px bg-line" />
            <span className="t-meta text-ink-faint">Scroll</span>
          </div>

          <p className="astra-fade-in t-meta text-ink-soft md:text-right" style={{ "--delay": "1.7s" }}>
            Visakhapatnam, IN — Est. 2024
          </p>
        </div>
      </Container>
    </section>
  );
}

/* ── Introduction ─────────────────────────────────────────────── */
function Introduction() {
  return (
    <Section className="pt-10 md:pt-16">
      <Container>
        <Grid>
          <div className="astra-wide flex flex-col items-center text-center">
            <Reveal>
              <Signal className="mb-8">Available for opportunities</Signal>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="t-h2 max-w-[18ch] text-balance text-ink">
                I turn ideas into systems that run in production.
              </h2>
            </Reveal>
          </div>
        </Grid>

        <Grid className="mt-10">
          <Prose>
            <Reveal delay={0.1}>
              <p className="t-lead text-pretty text-ink-2">
                I build intelligent systems end to end — full-stack products, scalable
                backends, and self-hosted machine learning. Currently a Software
                Development Engineer at ByteBlock Technologies, where I ship
                production features, cut a 45-minute deploy down to under three
                minutes, and run open-weight models on our own infrastructure.
              </p>
              <p className="t-body mt-6 text-ink-2">
                Before that I spent a summer scaling AssuredGig&apos;s backend from
                prototype to a platform serving 500 users. I&apos;m in my third year of a
                B.Tech in Computer Science &amp; AI, and most of what I know came from
                building things that had to work for someone other than me.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Link href="/project" className={btnPrimary}>
                  View my work
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
                <Link href="/contact" className={btnGhost}>
                  Get in touch
                </Link>
                <div className="flex items-center gap-1.5">
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
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-paper-2 text-ink-2 backdrop-blur-xl transition-colors duration-300 hover:bg-paper-3 hover:text-ink"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </Prose>
        </Grid>
      </Container>
    </Section>
  );
}

/* ── Role marquee band ────────────────────────────────────────── */
function RoleBand() {
  return (
    <div className="edge-fade border-y border-line py-6">
      <Marquee className="[--duration:44s]">
        {roleMarquee.map((r) => (
          <span key={r} className="mx-6 flex items-center gap-6 t-h4 text-ink-faint">
            {r}
            <span className="h-1 w-1 rounded-full bg-flare" />
          </span>
        ))}
      </Marquee>
    </div>
  );
}

/* ── Selected work ────────────────────────────────────────────── */
function SelectedWork() {
  return (
    <Section id="work">
      <Container>
        <SectionHeading
          eyebrow="Selected work"
          title="Things I've built and shipped"
          description="Full-stack products, ML pipelines, agentic systems and developer tooling."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 md:mt-20">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.07}>
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="group block h-full">
                <Panel className="flex h-full flex-col group-hover:-translate-y-1">
                  <div className="relative aspect-video overflow-hidden border-b border-line">
                    <RevealImage
                      src={p.image}
                      alt={p.title}
                      sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
                      imgClassName="grayscale-[0.45] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="t-meta flex items-center justify-between text-ink-soft">
                      <span>{p.category}</span>
                      <span className="text-ink-faint">{p.year}</span>
                    </div>
                    <h3 className="t-h4 mt-4 text-ink">{p.title}</h3>
                    <p className="t-body mt-2.5 text-ink-2">{p.desc}</p>

                    <div className="mb-7 mt-6 flex flex-wrap gap-1.5">
                      {p.stack.map((s) => (
                        <Tag key={s}>{s}</Tag>
                      ))}
                    </div>

                    <div className="mt-auto flex items-center gap-1.5 border-t border-line pt-5 t-cta text-ink-2 transition-colors group-hover:text-ink">
                      Read more
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </Panel>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/project" className={btnGhost}>
            All projects
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}

/* ── Capabilities ─────────────────────────────────────────────── */
function Capabilities() {
  return (
    <Section>
      <Container>
        <SectionHeading
          eyebrow="Disciplines"
          title="What I practise"
          description="From product front-ends to the models and infrastructure that power them."
        />

        <div className="mt-14 border-t border-line md:mt-20">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={(i % 3) * 0.05}>
              <div className="group grid grid-cols-1 items-baseline gap-3 border-b border-line py-7 transition-colors duration-500 hover:bg-paper-2 md:grid-cols-12 md:gap-6 md:px-4">
                <span className="t-meta text-ink-faint md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="t-h4 text-ink md:col-span-4">{c.title}</h3>
                <p className="t-body text-ink-2 md:col-span-7">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ── Tech stack ───────────────────────────────────────────────── */
function StackRow({ reverse }) {
  return (
    <Marquee reverse={reverse} pauseOnHover className={reverse ? "[--duration:52s]" : "[--duration:44s]"}>
      {stack.map(({ name, Icon }) => (
        <span
          key={name}
          className="t-cta mx-1.5 inline-flex items-center gap-2.5 rounded-full border border-line bg-paper-2 px-5 py-2.5 text-ink-2 backdrop-blur-xl transition-colors duration-300 hover:border-line-2 hover:text-ink"
        >
          <Icon className="h-4 w-4 shrink-0" aria-hidden />
          {name}
        </span>
      ))}
    </Marquee>
  );
}

function Stack() {
  return (
    <Section>
      <Container>
        <SectionHeading eyebrow="Toolkit" title="Instruments of the trade" />
      </Container>
      <div className="edge-fade mt-14 flex flex-col gap-3 md:mt-20">
        <StackRow />
        <StackRow reverse />
      </div>
    </Section>
  );
}

/* ── Stats ────────────────────────────────────────────────────── */
function Stats() {
  return (
    <Section>
      <Container>
        <SectionHeading eyebrow="By the numbers" title="A short ledger of impact" />
        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4 md:mt-20">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06} className="bg-void/40 backdrop-blur-xl">
              <div className="h-full p-7">
                <div className="t-h2 flex items-baseline text-ink">
                  <NumberTicker value={s.value} />
                  <span className="text-ink-soft">{s.suffix}</span>
                </div>
                <div className="t-h5 mt-5 text-ink">{s.label}</div>
                <div className="t-caption mt-1.5 text-ink-soft">{s.note}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

/* ── Closing ──────────────────────────────────────────────────── */
function Closing() {
  return (
    <Section>
      <Container>
        <Reveal>
          <div className="astra-surface flex flex-col items-center rounded-3xl px-6 py-20 text-center md:px-16 md:py-28">
            <Kicker className="mb-7">Availability</Kicker>
            <h2 className="t-h2 max-w-[20ch] text-balance text-ink">
              Let&apos;s build something worth keeping
            </h2>
            <p className="t-lead mt-5 max-w-[46ch] text-pretty text-ink-2">
              Have a role, a project or an idea in mind? I&apos;d love to hear about it.
            </p>
            <div className="mt-11 flex flex-wrap items-center justify-center gap-3">
              <Link href="/contact" className={btnPrimary}>
                Start a conversation
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
              <a href="mailto:yatin.singh.dev@gmail.com" className={btnGhost}>
                yatin.singh.dev@gmail.com
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen w-full text-ink">
      <SiteNav />
      <Hero />
      <Introduction />
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
