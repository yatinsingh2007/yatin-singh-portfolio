"use client";

/**
 * Global fixed backdrop for the "Monolith" system.
 * Near-black base + faint engineering graph-paper grid + subtle grain.
 * Sits behind all content (pointer-events: none). No gradients or glow.
 */
export default function AuroraBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 bg-paper">
      {/* engineering graph-paper grid */}
      <div className="absolute inset-0 paper-grid" />
      {/* fine grain */}
      <div className="absolute inset-0 paper-grain opacity-[0.03]" />
    </div>
  );
}
