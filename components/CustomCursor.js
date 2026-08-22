"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const blobRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () =>
      setIsMobile(
        window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768
      );
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const blob = blobRef.current;
    if (!blob) return;

    // Hide native cursor on desktop only
    document.documentElement.style.cursor = "none";

    // Slow trailing follow — the defining quality of this cursor style
    const xTo = gsap.quickTo(blob, "x", { duration: 0.7, ease: "expo.out" });
    const yTo = gsap.quickTo(blob, "y", { duration: 0.7, ease: "expo.out" });
    gsap.set(blob, { xPercent: -50, yPercent: -50, opacity: 0 });

    const onMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
      gsap.to(blob, { opacity: 1, duration: 0.35 });
    };

    const onOver = (e) => {
      const t = e.target;
      const isInteractive =
        t.tagName === "A" ||
        t.tagName === "BUTTON" ||
        t.closest("a") ||
        t.closest("button") ||
        window.getComputedStyle(t).cursor === "pointer";

      gsap.to(blob, {
        scale: isInteractive ? 2.4 : 1,
        duration: 0.45,
        ease: "power2.out",
      });
    };

    const onLeave  = () => gsap.to(blob, { opacity: 0, duration: 0.45 });
    const onEnter  = () => gsap.to(blob, { opacity: 1, duration: 0.3 });
    const onDown   = () => gsap.to(blob, { scale: 0.8, duration: 0.12 });
    const onUp     = () => gsap.to(blob, { scale: 1,   duration: 0.2 });

    window.addEventListener("mousemove",  onMove);
    window.addEventListener("mouseover",  onOver);
    window.addEventListener("mousedown",  onDown);
    window.addEventListener("mouseup",    onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      document.documentElement.style.cursor = "";
      window.removeEventListener("mousemove",  onMove);
      window.removeEventListener("mouseover",  onOver);
      window.removeEventListener("mousedown",  onDown);
      window.removeEventListener("mouseup",    onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div
      ref={blobRef}
      className="fixed top-0 left-0 w-8 h-8 rounded-full bg-white z-[9999] pointer-events-none mix-blend-difference"
      style={{ willChange: "transform" }}
    />
  );
}
