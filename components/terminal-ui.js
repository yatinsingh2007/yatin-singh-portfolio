"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/* Shared Neo-Brutalist Terminal building blocks used across every page. */

export const btnPrimary =
  "group inline-flex items-center gap-2 border border-cy bg-cy px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-term transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-term hover:text-cy hover:shadow-[4px_4px_0_0_#22d3ee]";

export const btnGhost =
  "group inline-flex items-center gap-2 border border-edge px-6 py-3.5 text-xs uppercase tracking-wider text-fg transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:border-cy hover:text-cy hover:shadow-[4px_4px_0_0_#22d3ee]";

export function SectionHead({ n, cmd, note, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={cn("flex items-end justify-between border-b border-edge pb-4", className)}
    >
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        {n && <span className="text-xs text-cy">§{n}</span>}
        <h2 className="text-base uppercase tracking-[0.15em] text-fg sm:text-lg">{cmd}</h2>
      </div>
      {note && <span className="hidden text-[10px] uppercase tracking-widest text-fg-dim sm:block">{note}</span>}
    </motion.div>
  );
}

export function Reveal({ children, delay = 0, y = 20, className, once = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* Ambient glow + scanline backdrop for page tops */
export function PageGlow({ className }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-x-0 top-0 h-[500px] bg-[radial-gradient(120%_80%_at_70%_-10%,rgba(34,211,238,0.09),transparent_60%)]",
        className
      )}
    />
  );
}
