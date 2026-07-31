"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { Navbar } from "@/section/Navbar";
import Footer from "@/section/Footer";
import { GraduationCap, Calendar, MapPin, School, Award } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
  const timelineLineRef = useRef(null);
  const headerRef       = useRef(null);
  const cardRefs        = useRef([]);

  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science and Artificial Intelligence",
      period: "2024 — 2028",
      institution: "Newton School of Technology",
      university: "Rishihood University",
      location: "Sonipat, Haryana (Delhi NCR) , India",
      status: "3rd Year — Sem 5",
      grade: "CGPA: 7.91 / 10",
      description: "Intensive program focused on software engineering, data structures, algorithms, and artificial intelligence. Actively participating in research and development projects.",
      color: "from-emerald-400 to-cyan-400",
    },
    {
      degree: "Higher Secondary Education (12th Grade)",
      period: "2022 — 2024",
      institution: "FIITJEE Junior College",
      location: "Visakhapatnam, Andhra Pradesh, India",
      status: "Completed",
      grade: "Percentage: 93.3%",
      description: "Advanced study in Physics, Chemistry, and Mathematics (PCM) with a focus on competitive examination preparation.",
      color: "from-blue-400 to-indigo-400",
    },
    {
      degree: "Secondary School Education (10th Grade)",
      period: "2012 — 2022",
      institution: "Visakha Valley School",
      location: "Visakhapatnam, Andhra Pradesh, India",
      status: "Completed",
      grade: "Percentage: 85%",
      description: "Foundational academic education with a strong emphasis on science and mathematics.",
      color: "from-purple-400 to-pink-400",
    },
  ];

  useEffect(() => {
    // Header reveal
    if (headerRef.current) {
      gsap.from(headerRef.current.children, {
        opacity: 0,
        y: 24,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });
    }

    // Timeline line draws down on scroll
    const line = timelineLineRef.current;
    if (line) {
      gsap.set(line, { scaleY: 0, transformOrigin: "top center" });
      ScrollTrigger.create({
        trigger: line,
        start: "top 70%",
        end: "bottom 20%",
        scrub: 1,
        animation: gsap.to(line, { scaleY: 1, ease: "none" }),
      });
    }

    // Cards slide in from left
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      gsap.set(card, { opacity: 0, x: -24 });
      ScrollTrigger.create({
        trigger: card,
        start: "top 82%",
        once: true,
        onEnter: () =>
          gsap.to(card, {
            opacity: 1,
            x: 0,
            duration: 0.85,
            delay: i * 0.06,
            ease: "power3.out",
          }),
      });
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#030303] relative overflow-hidden selection:bg-emerald-500/30">
      <Navbar />
      <BackgroundBeams className="opacity-40" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32">
        <header ref={headerRef} className="mb-24 space-y-4">
          <div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white">
              Academic <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500">
                Journey
              </span>
            </h1>
          </div>
          <div>
            <p className="text-neutral-400 text-xl max-w-xl font-light leading-relaxed">
              A record of my academic milestones and the foundational knowledge that drives my technical pursuits.
            </p>
          </div>
        </header>

        <div className="relative space-y-12">
          <div
            ref={timelineLineRef}
            className="absolute left-0 md:left-8 top-8 bottom-8 w-[1px] bg-gradient-to-b from-emerald-500/50 via-neutral-800 to-neutral-800/20"
          />

          {educationData.map((edu, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="relative pl-12 md:pl-24"
            >
              {/* Dot */}
              <div className="absolute left-[-5px] md:left-[27px] top-4 w-[11px] h-[11px] rounded-full bg-[#030303] border-2 border-emerald-500 z-20 shadow-[0_0_15px_rgba(16,185,129,0.5)]" />

              <div className="group relative bg-neutral-900/20 backdrop-blur-sm border border-neutral-800/50 rounded-3xl p-8 md:p-10 hover:border-emerald-500/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_10px_50px_rgba(16,185,129,0.15)]">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-10 blur-[100px] transition-opacity duration-700`} />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-emerald-400 font-mono text-sm tracking-widest uppercase">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors duration-300">
                      {edu.degree}
                    </h3>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="bg-neutral-800/40 border border-neutral-700/50 rounded-2xl px-5 py-3 backdrop-blur-md">
                      <div className="text-sm text-neutral-400 font-medium mb-1">Status</div>
                      <div className="text-white font-semibold flex items-center gap-2 text-lg">
                        <Award className="w-5 h-5 text-emerald-400" />
                        {edu.status}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                        <School className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div>
                        <div className="text-sm text-neutral-500 font-medium">Institution</div>
                        <div className="text-xl text-neutral-200 font-semibold">{edu.institution}</div>
                        {edu.university && <div className="text-neutral-400">{edu.university}</div>}
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                        <MapPin className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <div className="text-sm text-neutral-500 font-medium">Location</div>
                        <div className="text-lg text-neutral-300">{edu.location}</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-2xl p-6">
                      <div className="text-sm text-emerald-500/70 font-mono tracking-wider uppercase mb-2">Performance</div>
                      <div className="text-3xl font-bold text-white tracking-tighter">{edu.grade}</div>
                    </div>
                  </div>
                </div>

                <p className="text-neutral-400 text-lg leading-relaxed font-light">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
