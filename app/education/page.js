"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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

const educationData = [
  {
    degree: "B.Tech — Computer Science & Artificial Intelligence",
    period: "2024 — 2028",
    institution: "Newton School of Technology",
    university: "Rishihood University",
    location: "Sonipat, Haryana (Delhi NCR), India",
    status: "3rd Year — Sem 5",
    grade: "CGPA 7.91 / 10",
    description: "Intensive program focused on software engineering, data structures, algorithms and artificial intelligence — with active research & development work.",
    current: true,
  },
  {
    degree: "Higher Secondary Education (12th Grade)",
    period: "2022 — 2024",
    institution: "FIITJEE Junior College",
    location: "Visakhapatnam, Andhra Pradesh, India",
    status: "Completed",
    grade: "93.3%",
    description: "Advanced study in Physics, Chemistry & Mathematics (PCM) with a focus on competitive-examination preparation.",
    current: false,
  },
  {
    degree: "Secondary School Education (10th Grade)",
    period: "2012 — 2022",
    institution: "Visakha Valley School",
    location: "Visakhapatnam, Andhra Pradesh, India",
    status: "Completed",
    grade: "85%",
    description: "Foundational academic education with a strong emphasis on science and mathematics.",
    current: false,
  },
];

export default function Education() {
  return (
    <main className="min-h-screen w-full text-ink">
      <SiteNav />

      <PageHeader
        eyebrow="Academic record"
        title="Where the foundations came from"
        description="Milestones and the groundwork behind the engineering — from a physics-heavy start to computer science and AI."
        meta={["2012 — 2028", "CGPA 7.91 / 10"]}
      />

      <Section className="pt-14 md:pt-20">
        <div className="mx-auto w-full max-w-4xl px-6 md:px-8">
          <div className="relative space-y-6">
            <span aria-hidden className="absolute bottom-6 left-[7px] top-6 w-px bg-line sm:left-[15px]" />

            {educationData.map((edu, i) => (
              <Reveal key={i} className="relative pl-8 sm:pl-12">
                <span
                  aria-hidden
                  className={`absolute left-[7px] top-9 z-10 h-2.5 w-2.5 -translate-x-1/2 rounded-full sm:left-[15px] ${
                    edu.current ? "signal-dot bg-flare" : "bg-ink-faint"
                  }`}
                />

                <Panel hover={false} className="p-6 sm:p-9">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="t-meta text-ink-soft">{edu.period}</span>
                    <span className="t-meta rounded-full border border-line px-2.5 py-1 text-ink-faint">
                      {edu.status}
                    </span>
                  </div>

                  <h2 className="t-h3 mt-5 text-ink">{edu.degree}</h2>

                  <dl className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                      <dt className="t-meta text-ink-faint">Institution</dt>
                      <dd className="t-h5 mt-2 text-ink">{edu.institution}</dd>
                      {edu.university && (
                        <dd className="t-caption mt-1 text-ink-2">{edu.university}</dd>
                      )}
                    </div>
                    <div>
                      <dt className="t-meta text-ink-faint">Location</dt>
                      <dd className="t-h5 mt-2 text-ink">{edu.location}</dd>
                    </div>
                    <div className="border-t border-line pt-6 sm:col-span-2">
                      <dt className="t-meta text-ink-faint">Performance</dt>
                      <dd className="t-h2 mt-3 text-ink">{edu.grade}</dd>
                    </div>
                  </dl>

                  <p className="t-body mt-6 text-ink-2">{edu.description}</p>
                </Panel>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <Container>
          <Reveal>
            <div className="astra-surface flex flex-col items-center gap-8 rounded-3xl px-6 py-16 text-center md:px-16">
              <div>
                <h3 className="t-h3 text-ink">Theory is only half of it</h3>
                <p className="t-lead mt-4 text-ink-2">
                  The rest lives in the things I&apos;ve actually shipped.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/project" className={btnPrimary}>
                  View projects
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
                <Link href="/experience" className={btnGhost}>Experience</Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <SiteFooter />
    </main>
  );
}
