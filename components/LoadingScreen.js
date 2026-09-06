"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

/**
 * Cold open. The name resolves inward from the edges of the screen while a
 * hairline fills — the same split-wordmark gesture the hero opens with, so
 * the load reads as the first beat of the page rather than a separate screen.
 */
export default function LoadingScreen() {
  const overlayRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const barRef = useRef(null);
  const metaRef = useRef(null);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    const proxy = { pct: 0 };
    const leftLetters = leftRef.current?.children ?? [];
    const rightLetters = rightRef.current?.children ?? [];

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(overlay, {
          opacity: 0,
          duration: 0.8,
          ease: "power2.inOut",
          onComplete: () => setMounted(false),
        });
      },
    });

    tl.from(leftLetters, {
      opacity: 0,
      x: -40,
      duration: 0.9,
      stagger: -0.07,
      ease: "expo.out",
    })
      .from(
        rightLetters,
        { opacity: 0, x: 40, duration: 0.9, stagger: 0.07, ease: "expo.out" },
        "<"
      )
      .from(metaRef.current, { opacity: 0, duration: 0.7, ease: "power2.out" }, "-=0.4");

    tl.to(
      proxy,
      {
        pct: 100,
        duration: 1.6,
        ease: "power2.inOut",
        onUpdate() {
          if (barRef.current) barRef.current.style.transform = `scaleX(${proxy.pct / 100})`;
        },
      },
      0.35
    );

    return () => tl.kill();
  }, []);

  if (!mounted) return null;

  const split = (word) =>
    word.split("").map((ch, i) => (
      <span key={`${ch}-${i}`} className="inline-block">
        {ch}
      </span>
    ));

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-100 flex flex-col items-center justify-center overflow-hidden bg-void"
    >
      <div className="astra-ambient absolute inset-0 opacity-40" />

      <div className="relative flex w-full max-w-3xl items-center justify-center gap-4 px-8">
        <p ref={leftRef} className="t-h2 text-ink">
          {split("Yatin")}
        </p>
        <p ref={rightRef} className="t-h2 text-ink">
          {split("Singh")}
        </p>
      </div>

      <div className="relative mt-12 w-full max-w-3xl px-8">
        <div className="h-px w-full overflow-hidden bg-line">
          <div
            ref={barRef}
            className="h-full w-full origin-left bg-ink"
            style={{ transform: "scaleX(0)" }}
          />
        </div>
        <p ref={metaRef} className="t-meta mt-4 text-center text-ink-soft">
          Software &amp; machine learning engineer
        </p>
      </div>
    </div>
  );
}
