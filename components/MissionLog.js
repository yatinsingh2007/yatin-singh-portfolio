"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Tag, btnGhost } from "@/components/aurora-ui";
import { cn } from "@/lib/utils";

/* ── Mission log ───────────────────────────────────────────────────
   One project at a time. The briefing panel holds still on the left
   while the shots pass on the right; whichever shot crosses the middle
   of the screen is the mission on record. On phones it collapses to a
   plain stack: shot, then its briefing. */
export function MissionLog({ projects }) {
  const [active, setActive] = useState(0);
  const shotRefs = useRef([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(Number(entry.target.dataset.index));
        });
      },
      // a thin band across the middle of the viewport
      { rootMargin: "-45% 0px -45% 0px" }
    );
    shotRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [projects.length]);

  const goTo = (i) => {
    const el = shotRefs.current[i];
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - (window.innerHeight - el.offsetHeight) / 2;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="mt-14 grid grid-cols-1 gap-x-12 md:mt-20 lg:grid-cols-12">
      {/* briefing — pinned beside the shots on desktop */}
      <div className="hidden lg:col-span-5 lg:block">
        <div className="sticky top-0 flex h-svh items-center">
          <div className="astra-surface w-full rounded-2xl p-8 xl:p-10">
            <div className="flex items-center justify-between gap-4">
              <span className="t-meta tabular-nums text-ink-soft">
                Mission {String(active + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
              </span>
              <div className="flex items-center gap-1.5" role="tablist" aria-label="Projects">
                {projects.map((p, i) => (
                  <button
                    key={p.title}
                    type="button"
                    role="tab"
                    aria-selected={i === active}
                    aria-label={p.title}
                    onClick={() => goTo(i)}
                    className="group flex h-6 items-center"
                  >
                    <span
                      className={cn(
                        "block h-[3px] rounded-full transition-all duration-500",
                        i === active ? "w-7 bg-ink" : "w-3 bg-ink-faint group-hover:bg-ink-soft"
                      )}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 min-h-[19rem]">
              <AnimatePresence mode="wait" initial={false}>
                <Briefing key={projects[active].title} project={projects[active]} />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* shots */}
      <div className="space-y-16 lg:col-span-7 lg:space-y-0">
        {projects.map((p, i) => (
          <div key={p.title} className="lg:py-[12svh] lg:first:pt-[6svh] lg:last:pb-[6svh]">
            <div className="w-full">
              <a
                ref={(el) => (shotRefs.current[i] = el)}
                data-index={i}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${p.title} — open project`}
                className={cn(
                  "group relative block aspect-[16/10] overflow-hidden rounded-2xl border bg-paper-2 transition-[opacity,border-color,filter] duration-700",
                  i === active
                    ? "border-line-2 lg:opacity-100"
                    : "border-line lg:opacity-35 lg:grayscale"
                )}
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width:1024px) 100vw, 55vw"
                  className="object-cover object-left-top transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </a>

              {/* phones and tablets: briefing sits under its own shot */}
              <div className="mt-6 lg:hidden">
                <span className="t-meta tabular-nums text-ink-soft">
                  Mission {String(i + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                </span>
                <BriefingBody project={p} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Briefing({ project }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : 14, filter: reduce ? "none" : "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: reduce ? 0 : -10, filter: reduce ? "none" : "blur(6px)" }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      <BriefingBody project={project} />
    </motion.div>
  );
}

function BriefingBody({ project }) {
  return (
    <>
      <p className="t-meta text-ink-faint">
        {project.category} · {project.year}
      </p>
      <h3 className="t-h2 mt-3 text-ink">{project.title}</h3>
      <p className="t-lead mt-4 text-pretty text-ink-2">{project.desc}</p>
      <div className="mt-6 flex flex-wrap gap-1.5">
        {project.stack.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(btnGhost, "mt-8")}
      >
        Open project
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>
    </>
  );
}
