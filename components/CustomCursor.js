"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const ringRef = useRef(null);
  const dotRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () =>
      setIsMobile(window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    // quickTo gives silky-smooth cursor lag without spring overshoot
    const xRing = gsap.quickTo(ring, "x", { duration: 0.45, ease: "power3.out" });
    const yRing = gsap.quickTo(ring, "y", { duration: 0.45, ease: "power3.out" });
    const xDot  = gsap.quickTo(dot,  "x", { duration: 0.08, ease: "none" });
    const yDot  = gsap.quickTo(dot,  "y", { duration: 0.08, ease: "none" });

    const onMove = (e) => {
      const cx = e.clientX;
      const cy = e.clientY;
      xRing(cx); yRing(cy);
      xDot(cx);  yDot(cy);
      gsap.to(ring, { opacity: 1, duration: 0.2 });
      gsap.to(dot,  { opacity: 1, duration: 0.2 });
    };

    const onOver = (e) => {
      const t = e.target;
      const interactive =
        t.tagName === "A" || t.tagName === "BUTTON" ||
        t.closest("a") || t.closest("button") ||
        window.getComputedStyle(t).cursor === "pointer";
      gsap.to(ring, {
        scale: interactive ? 2.5 : 1,
        backgroundColor: interactive ? "rgba(99,102,241,0.2)" : "rgba(99,102,241,0)",
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const onDown = () => gsap.to(dot, { scale: 0.7, duration: 0.1 });
    const onUp   = () => gsap.to(dot, { scale: 1,   duration: 0.15 });
    const onLeave = () => { gsap.to(ring, { opacity: 0, duration: 0.3 }); gsap.to(dot, { opacity: 0, duration: 0.3 }); };
    const onEnter = () => { gsap.to(ring, { opacity: 1, duration: 0.3 }); gsap.to(dot, { opacity: 1, duration: 0.3 }); };

    // Initial hidden state
    gsap.set([ring, dot], { opacity: 0, xPercent: -50, yPercent: -50 });

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-indigo-500 z-[9999] pointer-events-none mix-blend-difference"
        style={{ willChange: "transform" }}
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-indigo-500 rounded-full z-[9999] pointer-events-none"
        style={{ willChange: "transform" }}
      />
    </>
  );
}
