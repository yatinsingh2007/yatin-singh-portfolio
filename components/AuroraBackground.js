"use client";
import { motion, useScroll, useTransform } from "motion/react";

/**
 * Global fixed backdrop for the Aurora design system.
 * Deep indigo-black base + slow-drifting violet aurora blobs (which also
 * parallax gently with scroll) + a faint grid. Sits behind all content.
 *
 * Each blob is nested: an outer motion layer handles scroll parallax (via
 * `y`), while the inner layer runs the CSS float animation — keeping the two
 * transforms from clobbering each other.
 */
export default function AuroraBackground() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg">
      {/* faint engineering grid, faded at the edges */}
      <div className="absolute inset-0 grid-bg grid-mask opacity-70" />

      {/* aurora blobs */}
      <motion.div style={{ y: y1 }} className="absolute -top-40 left-1/2 -translate-x-1/2">
        <div className="h-[520px] w-[820px] rounded-full bg-brand/20 blur-[120px] animate-aurora" />
      </motion.div>
      <motion.div style={{ y: y2 }} className="absolute top-[20%] -left-40">
        <div className="h-[420px] w-[520px] rounded-full bg-brand-3/15 blur-[130px] animate-aurora [animation-delay:-6s]" />
      </motion.div>
      <motion.div style={{ y: y3 }} className="absolute bottom-[-10%] right-[-10%]">
        <div className="h-[480px] w-[620px] rounded-full bg-brand-2/15 blur-[140px] animate-aurora [animation-delay:-11s]" />
      </motion.div>

      {/* subtle vignette to keep text legible */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_0%,transparent_55%,rgba(0,0,0,0.55))]" />
    </div>
  );
}
