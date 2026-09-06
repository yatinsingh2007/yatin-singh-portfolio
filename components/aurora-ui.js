"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/* ═══════════════════════════════════════════════════════════════════
   ASTRA — shared building blocks.

   Chrome is monochrome and translucent so the particle field reads
   faintly through every surface. Radii are generous, rules are
   hairlines at 12% white, and nothing is uppercase except meta labels.
   ═══════════════════════════════════════════════════════════════════ */

/* ── Buttons — pill chrome ─────────────────────────────────────── */
export const btnPrimary =
  "group inline-flex h-11 items-center justify-center gap-1.5 rounded-full bg-ink px-6 t-cta font-medium text-void transition-colors duration-300 hover:bg-ink-1";

export const btnGhost =
  "group inline-flex h-11 items-center justify-center gap-1.5 rounded-full border border-line bg-paper-2 px-6 t-cta text-ink backdrop-blur-xl transition-colors duration-300 hover:bg-paper-3 hover:border-line-2";

export const btnQuiet =
  "group inline-flex items-center gap-1.5 t-cta text-ink-2 transition-colors duration-300 hover:text-ink";

/* ── Layout ────────────────────────────────────────────────────── */
export function Container({ children, className, ...props }) {
  return (
    <div className={cn("mx-auto w-full max-w-[86rem] px-6 md:px-8", className)} {...props}>
      {children}
    </div>
  );
}

/** 12-column grid with the responsive gutter from the design system. */
export function Grid({ children, className, ...props }) {
  return (
    <div className={cn("astra-grid w-full", className)} {...props}>
      {children}
    </div>
  );
}

/** Centred reading measure — the column body copy lives in. */
export function Prose({ children, className, wide = false }) {
  return <div className={cn(wide ? "astra-wide" : "astra-prose", className)}>{children}</div>;
}

/** Vertical rhythm between major sections. */
export function Section({ children, className, id }) {
  return (
    <section id={id} className={cn("py-20 md:py-30", className)}>
      {children}
    </section>
  );
}

/* ── Meta label — the small mono kicker above a heading ────────── */
export function Kicker({ children, className }) {
  return (
    <span className={cn("t-meta inline-flex items-center gap-2.5 text-ink-soft", className)}>
      {children}
    </span>
  );
}

/** A live/current state marker. */
export function Signal({ children, className }) {
  return (
    <span className={cn("t-meta inline-flex items-center gap-2.5 text-ink-soft", className)}>
      <span className="signal-dot inline-flex h-1.5 w-1.5 rounded-full bg-flare" />
      {children}
    </span>
  );
}

/* ── Section heading — centred by default, as on a launch page ─── */
export function SectionHeading({ eyebrow, title, description, align = "center", className, index }) {
  const centred = align === "center";
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={cn("flex flex-col", centred ? "items-center text-center" : "items-start", className)}
    >
      {(eyebrow || index) && (
        <Kicker className="mb-5">
          {index && <span className="text-ink-faint">{index}</span>}
          {eyebrow}
        </Kicker>
      )}
      <h2 className={cn("t-h2 max-w-[22ch] text-balance text-ink", centred && "mx-auto")}>{title}</h2>
      {description && (
        <p className={cn("t-lead mt-5 max-w-[52ch] text-pretty text-ink-2", centred && "mx-auto")}>
          {description}
        </p>
      )}
    </motion.div>
  );
}

/* ── Scroll reveal ─────────────────────────────────────────────── */
export function Reveal({ children, delay = 0, y = 18, className, once = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Surface panel ─────────────────────────────────────────────── */
export function Panel({ children, className, hover = true, ...props }) {
  return (
    <div
      className={cn(
        "astra-surface relative overflow-hidden rounded-2xl",
        hover && "astra-surface-hover",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

/* Kept for API compatibility with existing pages. */
export const GlassCard = Panel;

export function Tilt({ children, className }) {
  return <div className={className}>{children}</div>;
}
export function Magnetic({ children, className }) {
  return <span className={cn("inline-block", className)}>{children}</span>;
}

/* ── Media ─────────────────────────────────────────────────────── */
export function RevealImage({ src, alt, sizes, priority, imgClassName }) {
  return (
    <div className="absolute inset-0">
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("object-cover", imgClassName)}
      />
    </div>
  );
}

/** Full-bleed figure with a centred caption, the launch-page pattern. */
export function Figure({ children, caption, className }) {
  return (
    <figure className={cn("flex w-full flex-col items-center gap-4", className)}>
      <div className="w-full overflow-hidden rounded-2xl border border-line bg-paper-2">{children}</div>
      {caption && (
        <figcaption className="t-caption max-w-[62ch] text-center text-ink-soft">{caption}</figcaption>
      )}
    </figure>
  );
}

/* ── Hairline divider ──────────────────────────────────────────── */
export function Divider({ className }) {
  return (
    <div className={cn("mx-auto w-full max-w-[86rem] px-6 md:px-8", className)}>
      <div className="h-px w-full bg-line" />
    </div>
  );
}

/* ── Chip ──────────────────────────────────────────────────────── */
export function Tag({ children, className }) {
  return (
    <span
      className={cn(
        "t-caption inline-flex items-center rounded-full border border-line px-2.5 py-1 text-ink-soft",
        className
      )}
    >
      {children}
    </span>
  );
}

/* ── Interior page header ──────────────────────────────────────────
   Centred title over the field, matching the launch-page opening. */
export function PageHeader({ eyebrow, title, description, meta }) {
  return (
    <header className="relative pt-36 pb-4 md:pt-44">
      <Container>
        <Grid>
          <div className="astra-wide flex flex-col items-center text-center">
            {eyebrow && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Kicker className="mb-7">{eyebrow}</Kicker>
              </motion.div>
            )}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="t-h1 max-w-[16ch] text-balance text-ink"
            >
              {title}
            </motion.h1>
            {description && (
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="t-lead mt-7 max-w-[54ch] text-pretty text-ink-2"
              >
                {description}
              </motion.p>
            )}
            {meta && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.32 }}
                className="t-meta mt-9 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-ink-faint"
              >
                {meta.map((m, i) => (
                  <React.Fragment key={m}>
                    {i > 0 && <span aria-hidden className="h-3 w-px bg-line-2" />}
                    <span>{m}</span>
                  </React.Fragment>
                ))}
              </motion.div>
            )}
          </div>
        </Grid>
      </Container>
    </header>
  );
}
