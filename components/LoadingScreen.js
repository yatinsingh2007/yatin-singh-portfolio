"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function LoadingScreen() {
  const overlayRef = useRef(null);
  const barRef     = useRef(null);
  const pctRef     = useRef(null);
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
    tl.from([nameRef.current, subRef.current], {
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
      className="scanlines fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0b] font-mono"
      style={{ willChange: "transform" }}
    >
      <div className="relative z-20 w-full max-w-md px-8 space-y-8">
        <div className="space-y-3">
          <div className="flex items-end justify-between text-[10px] tracking-[0.2em] text-[#7a7a78] uppercase">
            <span><span className="text-[#22d3ee]">$</span> ./boot --init</span>
            <span ref={pctRef} className="text-[#22d3ee]">0%</span>
          </div>
          <div className="h-1.5 w-full border border-[#26262b] overflow-hidden relative">
            <div ref={barRef} className="absolute inset-y-0 left-0 bg-[#22d3ee]" style={{ width: "0%" }} />
          </div>
        </div>

        <div className="space-y-1">
          <h2 ref={nameRef} className="text-[#e9e9e6] font-bold tracking-tight text-2xl md:text-3xl uppercase">
            yatin_singh<span className="term-blink text-[#22d3ee]">_</span>
          </h2>
          <p ref={subRef} className="text-[10px] tracking-[0.25em] text-[#7a7a78] uppercase">
            // software &amp; machine learning engineer
          </p>
        </div>
      </div>

      <div ref={debugRef} className="absolute bottom-10 left-8 text-[9px] text-[#4a4a48] leading-relaxed uppercase tracking-widest hidden md:block">
        <div>&gt; mounting file system ................ [ ok ]</div>
        <div>&gt; establishing encrypted uplink ....... [ ok ]</div>
        <div>&gt; loading neural interface ............ [ ok ]</div>
      </div>
    </div>
  );
}
