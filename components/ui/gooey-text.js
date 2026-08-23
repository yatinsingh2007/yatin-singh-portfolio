"use client";
import React from "react";
import { cn } from "@/lib/utils";

/**
 * GooeyText — fluid "liquid morph" text rotator.
 *
 * Two overlapping text layers are blended through an SVG threshold filter so
 * that, as one word blurs out and the next blurs in, the letterforms melt and
 * flow into each other (e.g. "Full Stack" → "Software") instead of hard-cutting.
 *
 * Renders inline: an invisible sizer reserves the width of the widest phrase so
 * the component can sit beside other text without layout shift as words swap.
 */
export function GooeyText({
  texts,
  morphTime = 1,
  cooldownTime = 2.5,
  className,
  textClassName,
}) {
  const text1Ref = React.useRef(null);
  const text2Ref = React.useRef(null);

  // Word(s) the sizer must fit right now: the settled word while resting, or
  // the wider of the outgoing/incoming pair mid-morph. Keeps the box hugging
  // the visible text instead of always reserving the widest phrase's width.
  const [sizerText, setSizerText] = React.useState(() => (texts || [])[0] ?? "");

  React.useEffect(() => {
    if (!texts || texts.length === 0) return;

    let textIndex = texts.length - 1;
    let time = new Date();
    let morph = 0;
    let cooldown = cooldownTime;
    let frameId;

    const setMorph = (fraction) => {
      const t1 = text1Ref.current;
      const t2 = text2Ref.current;
      if (!t1 || !t2) return;

      t2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      t2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      const inv = 1 - fraction;
      t1.style.filter = `blur(${Math.min(8 / inv - 8, 100)}px)`;
      t1.style.opacity = `${Math.pow(inv, 0.4) * 100}%`;
    };

    const doCooldown = () => {
      morph = 0;
      const t1 = text1Ref.current;
      const t2 = text2Ref.current;
      if (t1) {
        t1.style.filter = "";
        t1.style.opacity = "0%";
      }
      if (t2) {
        t2.style.filter = "";
        t2.style.opacity = "100%";
      }
    };

    const doMorph = () => {
      morph -= cooldown;
      cooldown = 0;
      let fraction = morph / morphTime;
      if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
        // Morph settled — shrink the box to just the now-visible word.
        setSizerText(texts[(textIndex + 1) % texts.length]);
      }
      setMorph(fraction);
    };

    const animate = () => {
      frameId = requestAnimationFrame(animate);

      const newTime = new Date();
      const wasResting = cooldown > 0;
      const dt = (newTime.getTime() - time.getTime()) / 1000;
      time = newTime;

      cooldown -= dt;

      if (cooldown <= 0) {
        if (wasResting) {
          textIndex = (textIndex + 1) % texts.length;
          const cur = texts[textIndex % texts.length];
          const next = texts[(textIndex + 1) % texts.length];
          if (text1Ref.current && text2Ref.current) {
            text1Ref.current.textContent = cur;
            text2Ref.current.textContent = next;
          }
          // Mid-morph both words overlap — reserve the wider of the two.
          setSizerText(cur.length >= next.length ? cur : next);
        }
        doMorph();
      } else {
        doCooldown();
      }
    };

    animate();
    return () => cancelAnimationFrame(frameId);
  }, [texts, morphTime, cooldownTime]);

  return (
    <span className={cn("relative inline-grid align-bottom", className)}>
      <svg className="absolute h-0 w-0" aria-hidden="true" focusable="false">
        <defs>
          <filter id="gooey-threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>

      {/* Invisible sizer — reserves width/height of the word(s) on screen */}
      <span
        aria-hidden="true"
        className={cn(
          "invisible whitespace-nowrap [grid-area:1/1]",
          textClassName
        )}
      >
        {sizerText}
      </span>

      {/* Morphing layers — blended together by the threshold filter */}
      <span
        className="relative [grid-area:1/1]"
        style={{ filter: "url(#gooey-threshold)" }}
      >
        <span
          ref={text1Ref}
          className={cn(
            "absolute inset-0 select-none whitespace-nowrap",
            textClassName
          )}
        />
        <span
          ref={text2Ref}
          className={cn(
            "absolute inset-0 select-none whitespace-nowrap",
            textClassName
          )}
        />
      </span>
    </span>
  );
}
