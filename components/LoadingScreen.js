"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Logo from "@/components/Logo";

export default function LoadingScreen() {
  const overlayRef = useRef(null);
  const barRef     = useRef(null);
  const pctRef     = useRef(null);
  const logoRef    = useRef(null);
  const nameRef    = useRef(null);
  const subRef     = useRef(null);
  const debugRef   = useRef(null);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    const proxy = { pct: 0 };

    const tl = gsap.timeline({
      onComplete: () => {
        // Slide the entire overlay up and remove it
        gsap.to(overlay, {
          yPercent: -105,
          duration: 0.9,
          ease: "power4.inOut",
          onComplete: () => setMounted(false),
        });
      },
    });

    // Entrance
    tl.from([logoRef.current, nameRef.current, subRef.current], {
      opacity: 0,
      y: 14,
      duration: 0.6,
      stagger: 0.12,
      ease: "power3.out",
    });

    // Progress bar fill
    tl.to(proxy, {
      pct: 100,
      duration: 1.8,
      ease: "power2.inOut",
      onUpdate() {
        const v = Math.round(proxy.pct);
        if (pctRef.current) pctRef.current.textContent = `${v}%`;
        if (barRef.current) barRef.current.style.width = `${v}%`;
      },
    }, 0.3);

    // Debug lines stagger in
    tl.from(debugRef.current?.children ?? [], {
      opacity: 0,
      x: -10,
      duration: 0.3,
      stagger: 0.18,
      ease: "power2.out",
    }, 0.5);

    return () => tl.kill();
  }, []);

  if (!mounted) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-[#0a0a09]"
      style={{ willChange: "transform" }}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 paper-grid opacity-70" />

      <div className="relative z-20 w-full max-w-md px-8 space-y-10">
        <div className="flex items-center gap-4">
          <div ref={logoRef}>
            <Logo size="lg" />
          </div>
          <div className="space-y-1.5">
            <h2 ref={nameRef} className="font-display text-3xl font-extrabold uppercase tracking-tight text-[#ecebe4] md:text-4xl">
              Yatin Singh
            </h2>
            <p ref={subRef} className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#9d998e]">
              Software &amp; Machine Learning Engineer
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-end justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-[#9d998e]">
            <span>Loading portfolio</span>
            <span ref={pctRef} className="text-[#ff3b26]">0%</span>
          </div>
          <div className="relative h-px w-full overflow-hidden bg-[#3a382f]">
            <div ref={barRef} className="absolute inset-y-0 left-0 bg-[#ff3b26]" style={{ width: "0%" }} />
          </div>
        </div>
      </div>

      <div ref={debugRef} className="absolute bottom-10 left-8 hidden font-mono text-[10px] uppercase leading-relaxed tracking-widest text-[#6a675d] md:block">
        <div>Compiling…</div>
        <div>Loading projects…</div>
        <div>Almost ready…</div>
      </div>
    </div>
  );
}
