"use client";
import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

export default function CustomCursor() {
  const [isMobile, setIsMobile]   = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Raw mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring-based slow follow — lower stiffness = more lag (the "slow" feel)
  const x = useSpring(mouseX, { stiffness: 120, damping: 20, mass: 0.6 });
  const y = useSpring(mouseY, { stiffness: 120, damping: 20, mass: 0.6 });

  // Label trails even further behind
  const lx = useSpring(mouseX, { stiffness: 80, damping: 18, mass: 0.8 });
  const ly = useSpring(mouseY, { stiffness: 80, damping: 18, mass: 0.8 });

  useEffect(() => {
    const check = () =>
      setIsMobile(
        window.matchMedia("(pointer: coarse)").matches ||
          window.innerWidth < 768
      );
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    document.documentElement.style.cursor = "none";

    const onMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
    };
    const onLeave  = () => setIsVisible(false);
    const onEnter  = () => setIsVisible(true);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      document.documentElement.style.cursor = "";
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [isMobile, mouseX, mouseY]);

  if (isMobile) return null;

  return (
    <>
      {/* Arrow cursor — spring follow */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed top-0 left-0 z-[9999] pointer-events-none"
            style={{ x, y }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            {/* Exact Aceternity SVG arrow — rotated & styled for B&W */}
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="1"
              viewBox="0 0 16 16"
              className="h-6 w-6 -translate-x-[12px] -translate-y-[10px] -rotate-[70deg] transform stroke-white text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.4)]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Label — trails further behind the arrow */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed top-0 left-0 z-[9998] pointer-events-none"
            style={{ x: lx, y: ly }}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1,   opacity: 1 }}
            exit={{ scale: 0.5,   opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className="ml-4 mt-1 min-w-max rounded-full bg-white px-3 py-1 text-[11px] font-semibold tracking-wide text-black whitespace-nowrap shadow-[0_2px_12px_rgba(255,255,255,0.15)]">
              K. Yatin Singh
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
