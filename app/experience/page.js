"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { BackgroundBeams } from "@/components/ui/background-beams";
import React, { useEffect, useRef } from "react";
import { Navbar } from "@/section/Navbar";
import Footer from "@/section/Footer";
import { FileText, ExternalLink, Calendar, Briefcase, Zap, Rocket, GraduationCap, Clock } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ── Employment type badge — Internship / Part-time / Full-time ── */
const EMPLOYMENT_TYPES = {
  Internship: { label: "Internship", Icon: GraduationCap },
  "Part-time": { label: "Part-time", Icon: Clock },
  "Full-time": { label: "Full-time", Icon: Briefcase },
};

function EmploymentTypeBadge({ type }) {
  const cfg = EMPLOYMENT_TYPES[type];
  if (!cfg) return null;
  const { label, Icon } = cfg;
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-zinc-300">
      <Icon size={12} className="shrink-0 text-zinc-400" />
      {label}
    </span>
  );
}

/* ── Single-role card (used for every company except ByteBlock) ── */
function ExperienceCard({ logo, companyName, companyDescription, startDate, endDate, duration, role, location, employmentType, tags = [], features = [], offerLetterUrl, completionLetterUrl, isLast, cardRef }) {
  return (
    <div ref={cardRef} className="w-full relative group" style={{ opacity: 0, transform: "translateY(32px)" }}>
      <div className="absolute -inset-x-4 -inset-y-6 bg-white/[0.02] rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl pointer-events-none" />

      <div className="absolute left-[-24px] sm:left-[-40px] top-0.5 transform -translate-x-1/2 z-20">
        <div className="relative w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-zinc-950 border border-white/10 flex items-center justify-center overflow-hidden shadow-xl group-hover:border-white/30 transition-colors duration-500">
          {logo ? (
            <Image src={logo} alt={companyName} width={64} height={64} className="object-cover w-full h-full" />
          ) : (
            <Briefcase size={20} className="text-zinc-600" />
          )}
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-zinc-300 transition-colors duration-300 flex items-center gap-3">
              {companyName}
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed font-light mt-2 max-w-3xl">
              {companyDescription}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 sm:shrink-0">
            {offerLetterUrl && (
              <a href={offerLetterUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white border border-white/5 hover:border-white/20 bg-zinc-900/40 backdrop-blur-md px-3 py-1.5 rounded-full transition-all duration-300">
                <FileText size={14} /><span>Offer Letter</span>
              </a>
            )}
            {completionLetterUrl && (
              <a href={completionLetterUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white border border-white/5 hover:border-white/20 bg-zinc-900/40 backdrop-blur-md px-3 py-1.5 rounded-full transition-all duration-300">
                <ExternalLink size={14} /><span>Experience Letter</span>
              </a>
            )}
          </div>
        </div>

        <div className="space-y-1.5 pt-2">
          <div className="text-zinc-500 text-xs sm:text-sm font-medium tracking-wide">
            {startDate} — {endDate} {duration && `· ${duration}`}
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="text-white text-lg sm:text-xl font-bold">
              {role} {location && <span className="text-zinc-400 font-normal"> — {location}</span>}
            </div>
            <EmploymentTypeBadge type={employmentType} />
          </div>
        </div>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {tags.map((tag, idx) => (
              <Badge key={idx} className="bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-colors">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {features.length > 0 && (
          <div className="space-y-3 pt-3">
            <ul className="list-disc pl-5 space-y-2 text-zinc-400 font-light text-sm sm:text-base">
              {features.map((feature, i) => (
                <li key={i} className="leading-relaxed hover:text-zinc-300 transition-colors duration-200">{feature}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {!isLast && <div className="w-full my-16 border-t border-dashed border-zinc-800" />}
    </div>
  );
}

/* ── Multi-role card — dot-connector progression within one company ── */
function MultiRoleCard({ logo, companyName, companyDescription, roles = [], offerLetterUrl, isLast, cardRef }) {
  return (
    <div ref={cardRef} className="w-full relative group" style={{ opacity: 0, transform: "translateY(32px)" }}>
      <div className="absolute -inset-x-4 -inset-y-6 bg-white/[0.02] rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl pointer-events-none" />

      {/* Timeline logo */}
      <div className="absolute left-[-24px] sm:left-[-40px] top-0.5 transform -translate-x-1/2 z-20">
        <div className="relative w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-zinc-950 border border-white/10 flex items-center justify-center overflow-hidden shadow-xl group-hover:border-white/30 transition-colors duration-500">
          {logo ? (
            <Image src={logo} alt={companyName} width={64} height={64} className="object-cover w-full h-full" />
          ) : (
            <Briefcase size={20} className="text-zinc-600" />
          )}
        </div>
      </div>

      <div className="space-y-6">
        {/* Company header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-zinc-300 transition-colors duration-300">
              {companyName}
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed font-light mt-2 max-w-3xl">
              {companyDescription}
            </p>
          </div>
          {offerLetterUrl && (
            <div className="flex flex-wrap gap-2 sm:shrink-0">
              <a href={offerLetterUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white border border-white/5 hover:border-white/20 bg-zinc-900/40 backdrop-blur-md px-3 py-1.5 rounded-full transition-all duration-300">
                <FileText size={14} /><span>Offer Letter</span>
              </a>
            </div>
          )}
        </div>

        {/* Inner role progression — branching promotion tree */}
        <div className="relative mt-3">
          {roles.map((role, i) => {
            const isLast = i === roles.length - 1;
            const isCurrent = role.isCurrent;
            return (
              <div key={i} className="relative flex gap-3 sm:gap-4">
                {/* Connector column: continuous trunk + curved branch + node */}
                <div className="relative w-10 shrink-0">
                  {/* Continuous vertical trunk (seniority gradient) */}
                  <div
                    className={`role-beam absolute left-2 top-0 w-px bg-gradient-to-b from-white/35 via-white/20 to-white/10 ${isLast ? "h-3.5" : "bottom-0"}`}
                  />

                  {/* Curved branch peeling off the trunk toward the node */}
                  <svg
                    className="absolute left-0 top-0 h-7 w-10 overflow-visible"
                    viewBox="0 0 40 28"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M8 1 C 8 14, 20 14, 32 14"
                      stroke={isCurrent ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.22)"}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>

                  {/* Node at the branch tip */}
                  <div className="absolute left-8 top-3.5 -translate-x-1/2 -translate-y-1/2">
                    {isCurrent ? (
                      <span className="relative flex h-3.5 w-3.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40" />
                        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.7)]" />
                      </span>
                    ) : (
                      <span className="block h-2.5 w-2.5 rounded-full bg-zinc-500 ring-2 ring-zinc-800" />
                    )}
                  </div>
                </div>

                {/* Role content */}
                <div className={`flex-1 min-w-0 ${isLast ? "pb-1" : "pb-9"}`}>
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <span className={`text-base sm:text-lg font-bold ${isCurrent ? "text-white" : "text-zinc-300"}`}>
                      {role.title}
                    </span>
                    {isCurrent && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/10 border border-white/15 text-[10px] font-bold text-white uppercase tracking-widest">
                        <Zap size={10} className="shrink-0" />
                        Current
                      </span>
                    )}
                    <EmploymentTypeBadge type={role.employmentType} />
                  </div>
                  <div className="text-zinc-500 text-xs sm:text-sm font-medium tracking-wide mb-3">
                    {role.period} {role.location && `· ${role.location}`}
                  </div>

                  {role.tags && role.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {role.tags.map((tag, idx) => (
                        <Badge key={idx} className="bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 px-3 py-1 rounded-full text-xs font-semibold tracking-wide transition-colors">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {role.features && role.features.length > 0 && (
                    <ul className="list-disc pl-5 space-y-1.5 text-zinc-400 font-light text-sm">
                      {role.features.map((f, fi) => (
                        <li key={fi} className="leading-relaxed hover:text-zinc-300 transition-colors duration-200">{f}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {!isLast && <div className="w-full my-16 border-t border-dashed border-zinc-800" />}
    </div>
  );
}

export default function ExperiencePage() {
  const timelineLineRef = useRef(null);
  const headerBadgeRef  = useRef(null);
  const headerH1Ref     = useRef(null);
  const headerParaRef   = useRef(null);
  const ctaRef          = useRef(null);
  const cardRefs        = useRef([]);

  const experiences = [
    {
      multiRole: true,
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQFe6iYKRwjKHQ/company-logo_200_200/company-logo_200_200/0/1729863208386?e=2147483647&v=beta&t=kZz3W83vbFgwQRxQzivUKyFAEtPdEArdZmAR5SgnuqE",
      companyName: "ByteBlock Technologies",
      companyDescription: "Building tailored software solutions and digital strategies to help businesses thrive in the modern tech landscape.",
      offerLetterUrl: "https://drive.google.com/file/d/1S98KZtj4OYWdcR1ZsIEORwe5d9NUp9bc/view?usp=sharing",
      roles: [
        {
          title: "Software Development Engineer (Full-Stack)",
          period: "Sep 2026 — Present",
          location: "Remote",
          employmentType: "Internship",
          isCurrent: true,
        },
        {
          title: "Full Stack Developer",
          period: "Jun 2026 — Sep 2026",
          location: "Remote",
          employmentType: "Internship",
          isCurrent: false,
          tags: ["50+ Merged PRs & Full-Stack RBAC", "Open-Source LLMs (vLLM & Qwen 2.5)", "CI/CD Pipeline & VPS Deployment (<3 min builds)"],
          features: [
            "Developed and maintained a client-facing contract management platform for Technology Associates (Tanzania), implementing RBAC, role-based dashboards, contract lifecycle workflows, CRUD operations, data validation, and business logic automation across 10+ core application modules.",
            "Delivered 50+ merged pull requests through Git-based workflows, contributing to production-grade frontend and backend features using Next.js, TypeScript, Prisma, and SQL, while improving maintainability through reusable components and structured API design.",
            "Designed and deployed a Dockerized CI/CD pipeline using GitHub Actions, automating application builds, deployment workflows, and VPS releases, reducing deployment time from 45 minutes to under 3 minutes (~93% improvement).",
            "Built an automated cron-based notification and reminder engine for payment and maintenance alerts, integrating scheduled jobs, email delivery services, database persistence, and status-based notification handling to improve reliability of contract operations.",
            "Deployed and integrated the Qwen 2.5 1.5B open-source LLM using vLLM on a VPS, exposing inference APIs to enable an AI chatbot feature and demonstrating self-hosted LLM deployment within a production application environment.",
            "Managed end-to-end production deployment workflows including Docker containerization, environment configuration, database migrations, reverse proxy configuration, and VPS infrastructure optimization.",
          ],
        },
      ],
    },
    {
      logo: "https://landing-page-ag-sable.vercel.app/assuredgiglogo.webp",
      companyName: "AssuredGig",
      companyDescription: "Architecting the future of secure freelancing. AssuredGig connects verified professionals with clients, prioritizing trust and guaranteed earnings through intelligent systems.",
      startDate: "June 2025",
      endDate: "August 2025",
      duration: "2 mos",
      role: "Full Stack Developer",
      location: "Remote",
      employmentType: "Internship",
      tags: ["Lighthouse mobile 35 → 75 (+114%)", "Django & DRF backend for 500+ users", "AWS EC2 & S3 deployment"],
      features: [
        "Engineered and scaled backend infrastructure from an early-stage prototype to a production-ready platform, developing RESTful APIs that powered core client–freelancer workflows including authentication, job management, and transaction processing for 500+ users.",
        "Designed and implemented a scalable backend architecture using Python, Django, and Django REST Framework, building secure authentication flows, business logic layers, API endpoints, and database integrations across 10+ core features.",
        "Deployed and maintained production infrastructure on AWS EC2, integrating Amazon S3 for static asset storage and delivery, reducing application server load by 20% and improving asset retrieval performance.",
        "Optimized frontend performance and mobile responsiveness by improving rendering efficiency, asset handling, and UI responsiveness, increasing the Lighthouse mobile performance score from 35 to 75 (+114%).",
        "Developed and maintained 30+ API endpoints with structured error handling, validation, and optimized request flows to improve reliability and scalability of the platform.",
      ],
      offerLetterUrl: "https://drive.google.com/file/d/1Y7g_iSAYbwe8d8bll0hXNRTvqVmoUCbD/view?usp=sharing",
      completionLetterUrl: "https://drive.google.com/file/d/1KCeFWM5e_lQdpjEVBcJNGlJZ6pm_aahM/view?usp=sharing",
    },
  ];

  useEffect(() => {
    // Header entrance
    const headerTl = gsap.timeline({ defaults: { ease: "power3.out" } });
    headerTl
      .from(headerBadgeRef.current, { opacity: 0, x: -20, duration: 0.7 })
      .from(headerH1Ref.current,    { opacity: 0, y: 24, duration: 0.8 }, "-=0.4")
      .from(headerParaRef.current,  { opacity: 0, y: 16, duration: 0.7 }, "-=0.5");

    // Timeline line draws down as user scrolls
    const line = timelineLineRef.current;
    if (line) {
      gsap.set(line, { scaleY: 0, transformOrigin: "top center" });
      ScrollTrigger.create({
        trigger: line,
        start: "top 70%",
        end: "bottom 30%",
        scrub: 0.8,
        animation: gsap.to(line, { scaleY: 1, ease: "none" }),
      });
    }

    // Experience cards stagger in
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      ScrollTrigger.create({
        trigger: card,
        start: "top 82%",
        once: true,
        onEnter: () =>
          gsap.to(card, {
            opacity: 1,
            y: 0,
            duration: 0.85,
            delay: i * 0.08,
            ease: "power3.out",
          }),
      });
    });

    // CTA reveal
    if (ctaRef.current) {
      gsap.set(ctaRef.current, { opacity: 0, y: 30 });
      ScrollTrigger.create({
        trigger: ctaRef.current,
        start: "top 85%",
        once: true,
        onEnter: () =>
          gsap.to(ctaRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }),
      });
    }

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div className="min-h-screen w-full bg-black text-white relative overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <BackgroundBeams />
      </div>
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/[0.03] blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-white/[0.03] blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10">
        <Navbar />

        <main className="pt-32 pb-32 px-4 max-w-5xl mx-auto">
          {/* Header */}
          <div className="relative mb-24 text-center sm:text-left">
            <div
              ref={headerBadgeRef}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-xs font-bold uppercase tracking-widest mb-6"
            >
              <Rocket size={14} />
              Professional Path
            </div>

            <h1
              ref={headerH1Ref}
              className="text-5xl sm:text-7xl font-bold tracking-tight mb-6"
            >
              Industry{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">
                Experience
              </span>
            </h1>

            <p
              ref={headerParaRef}
              className="text-zinc-400 max-w-2xl text-lg sm:text-xl font-light leading-relaxed"
            >
              A timeline of my professional growth, technical contributions, and the impact I've created across startups and innovative projects.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative pl-12 sm:pl-20 mt-12 mb-28">
            <div
              ref={timelineLineRef}
              className="absolute left-[24px] sm:left-[40px] top-2 bottom-2 w-px bg-zinc-800"
            />

            <div className="space-y-16">
              {experiences.map((exp, index) =>
                exp.multiRole ? (
                  <MultiRoleCard
                    key={index}
                    {...exp}
                    isLast={index === experiences.length - 1}
                    cardRef={(el) => (cardRefs.current[index] = el)}
                  />
                ) : (
                  <ExperienceCard
                    key={index}
                    {...exp}
                    isLast={index === experiences.length - 1}
                    cardRef={(el) => (cardRefs.current[index] = el)}
                  />
                )
              )}
            </div>
          </div>

          {/* CTA */}
          <div
            ref={ctaRef}
            className="mt-20 p-8 rounded-3xl bg-white/[0.02] border border-white/5 text-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/[0.03] to-white/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <h3 className="text-2xl font-bold mb-4 relative z-10">Want to see more?</h3>
            <p className="text-zinc-400 mb-8 max-w-md mx-auto relative z-10">
              Check out my technical skills or explore my personal projects to see how I apply these experiences.
            </p>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <Button asChild className="bg-white hover:bg-zinc-200 text-black font-bold px-8 py-6 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                <a href="/project">View Projects</a>
              </Button>
              <Button asChild variant="outline" className="border-white/10 hover:bg-white/5 px-8 py-6 rounded-xl transition-all">
                <a href="/about">About Me</a>
              </Button>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
