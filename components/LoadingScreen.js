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
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030303]"
      style={{ willChange: "transform" }}
    >
      {/* Noise */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-10" />

      <div className="relative z-20 w-full max-w-md px-10 space-y-8">
        <div className="space-y-4">
          <div className="flex items-end justify-between font-mono text-[10px] tracking-[0.2em] text-neutral-500 uppercase">
            <span>System Calibration</span>
            <span ref={pctRef}>0%</span>
          </div>
          <div className="h-[1px] w-full bg-neutral-800 overflow-hidden relative">
            <div ref={barRef} className="absolute inset-y-0 left-0 bg-white" style={{ width: "0%" }} />
          </div>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <h2 ref={nameRef} className="text-white font-medium tracking-tighter text-2xl md:text-3xl">
            YATIN SINGH
          </h2>
          <p ref={subRef} className="font-mono text-[10px] tracking-[0.3em] text-neutral-600 uppercase">
            Full-Stack Developer &amp; AI Enthusiast
          </p>
        </div>
      </div>

      <div ref={debugRef} className="absolute bottom-10 left-10 font-mono text-[9px] text-neutral-800 leading-relaxed uppercase tracking-widest hidden md:block">
        <div>// INITIALIZING BIOMETRIC PROTOCOLS</div>
        <div>// ESTABLISHING ENCRYPTED UPLINK</div>
        <div>// DEPLOYING NEURAL INTERFACE</div>
      </div>
    </div>
  );
}
