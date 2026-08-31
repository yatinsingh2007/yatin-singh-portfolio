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
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-[#07070c]"
      style={{ willChange: "transform" }}
    >
      {/* aurora glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[420px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8b7cf6]/25 blur-[130px]" />
      </div>

      <div className="relative z-20 w-full max-w-md px-8 space-y-9">
        <div className="flex items-center gap-4">
          <div ref={logoRef}>
            <Logo size="lg" />
          </div>
          <div className="space-y-1.5">
            <h2 ref={nameRef} className="font-display text-3xl font-semibold tracking-tight text-[#ededf2] md:text-4xl">
              Yatin Singh
            </h2>
            <p ref={subRef} className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#a3a3b4]">
              Software &amp; Machine Learning Engineer
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-end justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-[#6c6c80]">
            <span>Loading portfolio</span>
            <span ref={pctRef} className="text-[#c084fc]">0%</span>
          </div>
          <div className="relative h-1 w-full overflow-hidden rounded-full bg-white/10">
            <div
              ref={barRef}
              className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#6366f1] via-[#8b7cf6] to-[#c084fc]"
              style={{ width: "0%" }}
            />
          </div>
        </div>
      </div>

      <div ref={debugRef} className="absolute bottom-10 left-8 hidden font-mono text-[10px] leading-relaxed tracking-wide text-[#4a4a58] md:block">
        <div>Preparing experience…</div>
        <div>Loading projects &amp; case studies…</div>
        <div>Almost ready…</div>
      </div>
    </div>
  );
}
