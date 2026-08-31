"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

/* Shared Aurora building blocks used across every page. */

/* ── Buttons ──────────────────────────────────────────────────── */
export const btnPrimary =
  "sheen group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-3 via-brand to-brand-2 px-6 py-3 text-sm font-semibold text-white btn-glow transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5";

export const btnGhost =
  "group inline-flex items-center justify-center gap-2 rounded-full border border-hair-2 bg-white/[0.02] px-6 py-3 text-sm font-medium text-ink backdrop-blur-sm transition-all duration-300 hover:border-brand/60 hover:bg-white/[0.05] hover:-translate-y-0.5";

/* ── Small eyebrow / kicker label ─────────────────────────────── */
export function Kicker({ children, className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-hair bg-white/[0.03] px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-dim",
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-brand shadow-[0_0_8px_2px_rgba(139,124,246,0.7)]" />
      {children}
    </span>
  );
}

/* ── Section heading with kicker + title + optional description ── */
export function SectionHeading({ eyebrow, title, description, align = "left", className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(align === "center" && "text-center", className)}
    >
      {eyebrow && (
        <div className={cn("mb-5 flex", align === "center" && "justify-center")}>
          <Kicker>{eyebrow}</Kicker>
        </div>
      )}
      <h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 max-w-2xl text-base leading-relaxed text-ink-dim",
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
export function Reveal({ children, delay = 0, y = 24, className, once = true }) {
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

/* ── Frosted glass card (cursor-tracking spotlight when hover) ─── */
export function GlassCard({ children, className, hover = true, ...props }) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={hover ? onMove : undefined}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-hair bg-white/[0.025] backdrop-blur-md",
        hover && "card-hover spotlight",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

/* ── Magnetic wrapper — pulls its child toward the cursor ──────── */
export function Magnetic({ children, strength = 0.35, className }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 200, damping: 15, mass: 0.5 });

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.div>
  );
}

/* ── Pointer-driven 3D tilt wrapper ───────────────────────────── */
export function Tilt({ children, className, max = 8 }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [max, -max]), { stiffness: 150, damping: 18 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-max, max]), { stiffness: 150, damping: 18 });

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className={className} style={{ perspective: 1000 }} onMouseMove={onMove} onMouseLeave={onLeave}>
      <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}>{children}</motion.div>
    </div>
  );
}

/* ── Fill image that wipes + settles into view on scroll ──────── */
export function RevealImage({ src, alt, sizes, priority, imgClassName }) {
  return (
    <motion.div
      initial={{ clipPath: "inset(0 0 100% 0)", scale: 1.08 }}
      whileInView={{ clipPath: "inset(0 0 0% 0)", scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0"
    >
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={cn("object-cover", imgClassName)} />
    </motion.div>
  );
}

/* ── Decorative gradient divider with a glowing node ──────────── */
export function Divider({ className }) {
  return (
    <div className={cn("mx-auto max-w-6xl px-5 sm:px-8", className)}>
      <div className="relative h-px w-full bg-gradient-to-r from-transparent via-hair-2 to-transparent">
        <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-brand/70 shadow-[0_0_10px_2px_rgba(139,124,246,0.5)]" />
      </div>
    </div>
  );
}

/* ── Little pill / tag ────────────────────────────────────────── */
export function Tag({ children, className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-hair bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-ink-dim",
        className
      )}
    >
      {children}
    </span>
  );
}
