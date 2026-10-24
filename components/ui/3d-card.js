"use client";

import { cn } from "@/lib/utils";
import React, { createContext, useContext, useRef, useState } from "react";

/* ── 3D card (after Aceternity UI) ─────────────────────────────────
   The container tilts toward the pointer; CardItems lift off the
   plate on hover by their translateZ. Nothing inside the 3D context
   may set overflow, filter or backdrop-filter — those flatten it —
   so the glass plate lives in its own layer (CardPlate). */
const MouseEnterContext = createContext([false, () => {}]);

export const CardContainer = ({ children, className, containerClassName, intensity = 32 }) => {
  const containerRef = useRef(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handlePointerMove = (e) => {
    if (e.pointerType === "touch" || !containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / intensity;
    const y = (e.clientY - top - height / 2) / intensity;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  };

  const handlePointerEnter = (e) => {
    if (e.pointerType === "touch") return;
    setIsMouseEntered(true);
  };

  const handlePointerLeave = () => {
    setIsMouseEntered(false);
    if (containerRef.current) containerRef.current.style.transform = "rotateY(0deg) rotateX(0deg)";
  };

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div className={cn("flex h-full items-center justify-center", containerClassName)} style={{ perspective: "1200px" }}>
        <div
          ref={containerRef}
          onPointerEnter={handlePointerEnter}
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
          className={cn(
            "relative flex h-full w-full items-center justify-center transition-transform duration-200 ease-linear motion-reduce:!transform-none",
            className
          )}
          style={{ transformStyle: "preserve-3d" }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

export const CardBody = ({ children, className }) => {
  return (
    <div className={cn("[transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]", className)}>
      {children}
    </div>
  );
};

/** The glass plate behind the content — kept flat so it can blur. */
export const CardPlate = ({ className }) => {
  const [isMouseEntered] = useMouseEnter();
  return (
    <div
      aria-hidden
      className={cn(
        "astra-surface pointer-events-none absolute inset-0 rounded-2xl",
        isMouseEntered && "border-line-2 bg-paper-3",
        className
      )}
    />
  );
};

export const CardItem = ({
  as: Tag = "div",
  children,
  className,
  style,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}) => {
  const [isMouseEntered] = useMouseEnter();
  const transform = isMouseEntered
    ? `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`
    : "translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)";

  return (
    <Tag
      className={cn("transition-transform duration-300 ease-out motion-reduce:!transform-none", className)}
      style={{ ...style, transform }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export const useMouseEnter = () => useContext(MouseEnterContext);
