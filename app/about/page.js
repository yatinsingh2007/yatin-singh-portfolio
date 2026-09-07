"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FileText, Search, BookOpen, Gamepad, Soup } from "lucide-react";
import { FaFutbol } from "react-icons/fa";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import {
  Reveal,
  SectionHeading,
  PageHeader,
  Container,
  Grid,
  Prose,
  Section,
  Panel,
  Divider,
  btnPrimary,
  btnGhost,
} from "@/components/aurora-ui";

const facts = [
  ["Education", "3rd year B.Tech — NST"],
  ["Focus", "AI & scalable systems"],
  ["Based in", "Visakhapatnam, IN"],
  ["Status", "Open to work"],
];

const disciplines = [
  { title: "Full-stack development", desc: "End-to-end web apps and clean architecture." },
  { title: "MERN stack", desc: "React, Node, Express and Mongo systems." },
  { title: "DevOps", desc: "Docker, CI/CD, VPS and cloud deployment." },
  { title: "AI / ML", desc: "Neural nets, LLMs and agentic pipelines." },
];

const bio = [
  "I'm from Visakhapatnam — a coastal city that's equal parts calm and chaotic. Growing up, I was always the kind of person who needed to know why things worked, not just that they did. I remember wondering how a simple calculator slowly turned into the machine the entire world now depends on. That question is the reason I ended up in CS.",
  "Before that, I was deep in PCM — physics, chemistry, math — the classic competitive-exam track at FIITJEE. I loved physics especially; it had this satisfying way of explaining the world with clean logic. But at some point I realised I didn't just want to understand the world — I wanted to build things in it. So here I am, third year B.Tech at Newton School of Technology.",
  "My early years in CS were spent building for the web — full-stack apps, backends, taking an idea to something real people could use. Then in 2025, AI started moving fast enough to be impossible to ignore. I got pulled into machine learning and deep learning, and I've been deep in it since.",
  "Outside of all that — I play football, game, cook occasionally, and read about history and science more than I probably should. The curiosity that got me into physics is the same one that keeps me building things now.",
];

const interests = [
  { icon: <FaFutbol size={16} />, label: "Football", desc: "Weekend warrior" },
  { icon: <Search size={16} />, label: "Science", desc: "Always curious" },
  { icon: <BookOpen size={16} />, label: "History", desc: "Deep diver" },
  { icon: <Soup size={16} />, label: "Cooking", desc: "Occasional chef" },
  { icon: <Gamepad size={16} />, label: "Gaming", desc: "Stress relief" },
];

export default function About() {
  return (
    <main className="min-h-screen w-full text-ink">
      <SiteNav />

      <PageHeader
        eyebrow="About"
        title="The human behind the code"
        description="Curious by default, an engineer by training, and happiest when an idea finally becomes something other people can use."
        meta={["Visakhapatnam, IN", "B.Tech CS & AI", "Open to work"]}
      />

      <Section className="pt-14 md:pt-20">
        <Container>
          {/* portrait (large, rectangular, left) + fact strip */}
          <Reveal>
            <div className="mx-auto grid max-w-5xl grid-cols-1 items-stretch gap-8 md:grid-cols-[minmax(0,1fr)_1.1fr] md:gap-10">
              <figure className="group relative">
                <div className="relative aspect-3/4 w-full overflow-hidden rounded-3xl border border-line bg-paper-2">
                  <Image
                    src="/yatin_singh.jpeg"
                    alt="Yatin Singh"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 480px"
                    className="object-cover object-[center_18%] grayscale-[0.35] transition-[filter,transform] duration-700 group-hover:grayscale-0 group-hover:scale-[1.02]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/60 via-transparent to-transparent" />
                </div>
              </figure>

              <dl className="grid grid-cols-2 gap-px self-stretch overflow-hidden rounded-3xl border border-line bg-line">
                {facts.map(([k, v]) => (
                  <div
                    key={k}
                    className="flex flex-col justify-center bg-void/40 p-6 backdrop-blur-xl md:p-8"
                  >
                    <dt className="t-meta text-ink-faint">{k}</dt>
                    <dd className="t-h4 mt-3 text-ink">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          {/* bio */}
          <Grid className="mt-20 md:mt-28">
            <Prose>
              {bio.map((p, i) => (
                <Reveal key={i} delay={i * 0.04} y={14}>
                  <p className={i === 0 ? "t-lead mb-6 text-pretty text-ink-1" : "t-body mb-6 text-ink-2"}>
                    {p}
                  </p>
                </Reveal>
              ))}

              <Reveal delay={0.1}>
                <div className="mt-10 flex flex-wrap items-center gap-3">
                  <a
                    href="https://drive.google.com/file/d/13pgBfgDfxREFM-vZvG8W4ZrQ4YFoGdUW/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={btnPrimary}
                  >
                    <FileText size={15} /> Download résumé
                  </a>
                  <Link href="/project" className={btnGhost}>
                    See the work
                  </Link>
                </div>
              </Reveal>
            </Prose>
          </Grid>
        </Container>
      </Section>

      <Divider />

      <Section>
        <Container>
          <SectionHeading
            eyebrow="The arsenal"
            title="What I work with"
            description="Four areas I keep returning to, and the ones I'd want to be hired for."
          />
          <div className="mt-14 border-t border-line md:mt-20">
            {disciplines.map((s, i) => (
              <Reveal key={s.title} delay={(i % 4) * 0.05}>
                <div className="grid grid-cols-1 items-baseline gap-3 border-b border-line py-7 transition-colors duration-500 hover:bg-paper-2 md:grid-cols-12 md:gap-6 md:px-4">
                  <span className="t-meta text-ink-faint md:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="t-h4 text-ink md:col-span-4">{s.title}</h3>
                  <p className="t-body text-ink-2 md:col-span-7">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Divider />

      <Section>
        <Container>
          <SectionHeading eyebrow="Off the clock" title="Beyond the desk" />
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 md:mt-20">
            {interests.map((it, i) => (
              <Reveal key={it.label} delay={i * 0.05}>
                <Panel className="flex h-full flex-col items-start gap-5 p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-2">
                    {it.icon}
                  </div>
                  <div>
                    <div className="t-h5 text-ink">{it.label}</div>
                    <div className="t-caption mt-1 text-ink-soft">{it.desc}</div>
                  </div>
                </Panel>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <blockquote className="mx-auto mt-16 max-w-3xl text-center">
              <p className="t-h3 text-balance text-ink">
                &ldquo;The curiosity that got me into physics is the same one that keeps
                me building things now.&rdquo;
              </p>
            </blockquote>
          </Reveal>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <Reveal>
            <div className="astra-surface flex flex-col items-center gap-8 rounded-3xl px-6 py-16 text-center md:px-16">
              <div>
                <h3 className="t-h3 text-ink">Want to see what I&apos;ve built?</h3>
                <p className="t-lead mt-4 text-ink-2">
                  Explore the projects, or reach out directly.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/project" className={btnPrimary}>View projects</Link>
                <Link href="/contact" className={btnGhost}>Contact me</Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <SiteFooter />
    </main>
  );
}
