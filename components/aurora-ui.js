"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/* Shared "Engineer's Almanac" building blocks used across every page.
   Flat, editorial, hairline-ruled. No gradients / glass / glow. */

/* ── Buttons ──────────────────────────────────────────────────── */
export const btnPrimary =
  "group inline-flex items-center justify-center gap-2 border border-ink bg-ink px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-paper transition-colors duration-300 hover:border-flare hover:bg-flare";

export const btnGhost =
  "group inline-flex items-center justify-center gap-2 border border-ink px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-ink transition-colors duration-300 hover:bg-ink hover:text-paper";

/* ── Eyebrow / kicker (mono, with a flare tick) ───────────────── */
export function Kicker({ children, className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.25em] text-ink-soft",
        className
      )}
    >
      <span className="h-2 w-2 bg-flare" />
      {children}
    </span>
  );
}

/* ── Section heading — ruled, numbered, editorial ─────────────── */
export function SectionHeading({ index, eyebrow, title, description, align = "left", className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(align === "center" && "text-center", className)}
    >
      <div
        className={cn(
          "flex items-center gap-4 border-t border-line-2 pt-3",
          align === "center" && "justify-center"
        )}
      >
        {index && <span className="font-mono text-xs text-flare">§{index}</span>}
        {eyebrow && (
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-soft">
            {eyebrow}
          </span>
        )}
      </div>
      <h2 className="mt-5 font-display text-4xl font-extrabold uppercase leading-[0.98] tracking-[-0.01em] text-ink sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-lg leading-relaxed text-ink-2",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}

/* ── Scroll reveal wrapper ────────────────────────────────────── */
export function Reveal({ children, delay = 0, y = 20, className, once = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Flat editorial card (hairline frame) ─────────────────────── */
export function GlassCard({ children, className, hover = true, ...props }) {
  return (
    <div
      className={cn(
        "relative border border-line bg-paper",
        hover && "card-almanac",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

/* ── Passthrough wrappers (kept for API compatibility; the almanac
      aesthetic is intentionally still, so these no longer animate) ─ */
export function Tilt({ children, className }) {
  return <div className={className}>{children}</div>;
}
export function Magnetic({ children, className }) {
  return <span className={cn("inline-block", className)}>{children}</span>;
}

/* ── Fill image that wipes into view on scroll ────────────────── */
export function RevealImage({ src, alt, sizes, priority, imgClassName }) {
  return (
    <motion.div
      initial={{ clipPath: "inset(0 0 100% 0)" }}
      whileInView={{ clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0"
    >
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={cn("object-cover", imgClassName)} />
    </motion.div>
  );
}

/* ── Hairline divider with a small flare node ─────────────────── */
export function Divider({ className }) {
  return (
    <div className={cn("mx-auto max-w-5xl px-5 sm:px-8", className)}>
      <div className="relative h-px w-full bg-line-2">
        <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-flare" />
      </div>
    </div>
  );
}

/* ── Mono tag / chip ──────────────────────────────────────────── */
export function Tag({ children, className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center border border-line px-2.5 py-1 font-mono text-[11px] text-ink-soft",
        className
      )}
    >
      {children}
    </span>
  );
}
