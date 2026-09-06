"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * ASTRA FIELD — the fixed backdrop the entire site sits on.
 *
 * A real grand-design spiral galaxy: a dense warm bulge at the centre, two
 * logarithmic-arm structures winding out through a diffuse stellar halo,
 * colour-graded the way an actual galaxy photograph is (warm core, blue-
 * white young stars along the arms, the odd pink HII region) — tilted
 * toward the viewer and perspective-projected, not a uniform disc of dots.
 * It is draggable: the pointer adds angular velocity that decays back to
 * the ambient drift.
 *
 * Everything is drawn with one pre-rendered sprite per star colour,
 * composited additively — no shadowBlur, no per-frame gradients, so a
 * few thousand points stay cheap.
 *
 * The scenery layered around it (bright stars, shooting stars, planets,
 * nebulae) is plain DOM + CSS for shape/colour, but its *motion* is GSAP:
 * randomised per-element duration/delay so nothing reads as a synchronised
 * loop, which a shared CSS `@keyframes` cycle always eventually does.
 */

/* Positions only — size/tint variety and box-shadow live in globals.css.
   `scale` sets each bright star's base size so the twinkle animates a
   size *around* that base rather than overwriting it. */
const BRIGHT_STARS = [
  { top: "16%", left: "14%", scale: 1 },
  { top: "72%", left: "24%", scale: 1 },
  { top: "22%", left: "82%", scale: 1 },
  { top: "58%", left: "92%", scale: 0.75 },
  { top: "86%", left: "60%", scale: 0.7 },
  { top: "8%", left: "52%", scale: 0.75 },
];

const SHOOTING_STARS = [
  { top: "10%", left: "72%" },
  { top: "32%", left: "88%" },
  { top: "5%", left: "42%" },
];

/* Build a soft radial dot once; every particle is a scaled draw of it.
   `size` is bumped up for the core glow so it stays smooth at large scale. */
function makeSprite(rgb, size = 32) {
  const c = document.createElement("canvas");
  c.width = c.height = size;
  const g = c.getContext("2d");
  const grad = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  grad.addColorStop(0, `rgba(${rgb},1)`);
  grad.addColorStop(0.28, `rgba(${rgb},0.55)`);
  grad.addColorStop(1, `rgba(${rgb},0)`);
  g.fillStyle = grad;
  g.fillRect(0, 0, size, size);
  return c;
}

export default function AstraField() {
  const canvasRef = useRef(null);
  const wrapRef = useRef(null);

  const brightStarRefs = useRef([]);
  const shootingStarRefs = useRef([]);
  const planetIceRef = useRef(null);
  const planetEmberRef = useRef(null);
  const planetRingWrapRef = useRef(null);
  const nebulaARef = useRef(null);
  const nebulaBRef = useRef(null);
  const nebulaCRef = useRef(null);

  /* ── GSAP: motion for the DOM scenery (stars, planets, nebulae) ──
     Kept in its own effect, separate from the canvas galaxy loop below,
     since it drives inline `transform`/`opacity` rather than a frame
     loop. Everything is randomised per-element so the sky never falls
     into a visible shared rhythm the way one CSS `@keyframes` cycle
     applied to six elements inevitably does. */
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Mobile sizing is layout, not motion — apply it regardless of motion
    // preference, since GSAP now owns `transform` on these (replacing the
    // old CSS "shrink on mobile" media-query rule) and a reduced-motion
    // visitor on a phone should still see correctly-scaled planets.
    if (window.innerWidth <= 720) {
      [planetRingWrapRef, planetIceRef, planetEmberRef].forEach((ref) => {
        if (ref.current) gsap.set(ref.current, { scale: 0.6 });
      });
    }

    if (reduceMotion) return;

    const tweens = [];
    const track = (t) => {
      tweens.push(t);
      return t;
    };

    // bright stars — each twinkles on its own clock, around its own base size
    brightStarRefs.current.forEach((el, i) => {
      if (!el) return;
      const base = BRIGHT_STARS[i]?.scale ?? 1;
      track(
        gsap.fromTo(
          el,
          { opacity: 0.5, scale: base * 0.82 },
          {
            opacity: 1,
            scale: base,
            duration: gsap.utils.random(2.4, 4.4),
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: gsap.utils.random(0, 3),
          }
        )
      );
    });

    // planets — slow independent float
    [
      { ref: planetRingWrapRef, range: 14 },
      { ref: planetIceRef, range: 12 },
      { ref: planetEmberRef, range: 10 },
    ].forEach(({ ref, range }) => {
      const el = ref.current;
      if (!el) return;
      track(
        gsap.to(el, {
          x: gsap.utils.random(-range, range),
          y: gsap.utils.random(range * 0.8, range * 1.6),
          duration: gsap.utils.random(18, 30),
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        })
      );
    });

    // nebulae — slow colour drift
    [nebulaARef, nebulaBRef, nebulaCRef].forEach((ref) => {
      const el = ref.current;
      if (!el) return;
      track(
        gsap.to(el, {
          x: gsap.utils.random(-36, 36),
          y: gsap.utils.random(-28, 28),
          scale: gsap.utils.random(1, 1.1),
          duration: gsap.utils.random(60, 100),
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        })
      );
    });

    // shooting stars — each fires on its own random schedule rather than a
    // shared loop, so they never read as a mechanical, synchronised repeat
    shootingStarRefs.current.forEach((el) => {
      if (!el) return;
      let active = true;
      const fire = () => {
        if (!active) return;
        track(
          gsap.fromTo(
            el,
            { opacity: 0, x: 0, y: 0 },
            {
              opacity: 1,
              x: -340,
              y: 200,
              duration: 0.85,
              ease: "power1.in",
              onComplete: () => {
                gsap.set(el, { opacity: 0, x: 0, y: 0 });
                if (active) track(gsap.delayedCall(gsap.utils.random(4, 13), fire));
              },
            }
          )
        );
      };
      track(gsap.delayedCall(gsap.utils.random(0.6, 6), fire));
      tweens.push({ kill: () => { active = false; } });
    });

    return () => tweens.forEach((t) => t.kill());
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;

    const spriteWhite = makeSprite("255,255,255");
    const spriteTint = makeSprite("150,190,225"); // cool blue-white — young arm stars
    const spriteWarm = makeSprite("235,196,140"); // warm amber — bulge / older stars
    const spritePink = makeSprite("235,150,170"); // rare HII region along an arm
    const spriteGlow = makeSprite("255,214,150", 128); // soft diffuse bulge light

    /* ── Build the point cloud: bulge + spiral arms + diffuse halo ── */
    const ARMS = 2;
    const ARM_SPAN = Math.PI * 2.25; // sweep of each arm from core to rim
    const COUNT = coarse ? 1300 : 2800;
    const DEPTH = 120;
    const points = new Array(COUNT);
    for (let i = 0; i < COUNT; i++) {
      const roll = Math.random();
      let rn, angle, z, sprite;

      if (roll < 0.13) {
        // bulge — dense, warm, a little puffy (a real 3-D core, not a disc)
        rn = 0.16 * Math.sqrt(Math.random());
        angle = Math.random() * Math.PI * 2;
        z = (Math.random() - 0.5) * DEPTH * 0.9;
        sprite = Math.random() < 0.82 ? spriteWarm : spriteWhite;
      } else if (roll < 0.32) {
        // halo — the faint, diffuse population scattered across the whole disc
        rn = Math.sqrt(Math.random());
        angle = Math.random() * Math.PI * 2;
        z = (Math.random() - 0.5) * DEPTH * 0.35;
        sprite = Math.random() < 0.85 ? spriteWhite : spriteTint;
      } else {
        // the arms — logarithmic-ish spirals that widen toward the rim
        const arm = i % ARMS;
        const s = Math.pow(Math.random(), 0.88);
        rn = 0.13 + 0.87 * s;
        const baseAngle = arm * ((Math.PI * 2) / ARMS) + s * ARM_SPAN;
        const thickness = (0.05 + 0.24 * s) / Math.max(rn, 0.2);
        angle = baseAngle + (Math.random() - 0.5) * thickness;
        z = (Math.random() - 0.5) * DEPTH * 0.22;
        const colorRoll = Math.random();
        sprite =
          colorRoll < 0.58 ? spriteWhite
          : colorRoll < 0.82 ? spriteTint
          : colorRoll < 0.94 ? spriteWarm
          : spritePink;
      }

      points[i] = {
        rn,
        angle,
        z,
        // a little scatter so the arms never look mechanical
        jitter: (Math.random() - 0.5) * 0.015,
        size: 0.55 + Math.random() * 1.5,
        base: 0.28 + Math.random() * 0.72,
        twinkle: Math.random() * Math.PI * 2,
        sprite,
      };
    }

    /* ── State ─────────────────────────────────────────────────── */
    let width = 0;
    let height = 0;
    let radius = 0;
    let dpr = 1;

    let spin = 0;
    let spinVel = 0;
    const AMBIENT_SPIN = 0.00042;
    const REST_TILT = 0.62; // shallow enough that the spiral arms actually read
    let tilt = REST_TILT;
    let tiltVel = 0;

    let dragging = false;
    let lastX = 0;
    let lastY = 0;

    let scrollFade = 1;
    let raf = 0;
    let running = true;
    let t0 = performance.now();

    let render;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      radius = Math.min(width, height) * (coarse ? 0.5 : 0.42);
      // setting canvas.width clears the buffer, and a static render has no
      // next frame to repaint it
      if (reduceMotion) render(performance.now());
    };

    /* ── Frame ─────────────────────────────────────────────────── */
    render = (now) => {
      const dt = Math.min((now - t0) / 16.667, 3);
      t0 = now;

      if (!reduceMotion) {
        spin += (AMBIENT_SPIN + spinVel) * dt;
        spinVel *= Math.pow(0.94, dt);
        tilt += tiltVel * dt;
        tiltVel *= Math.pow(0.9, dt);
        // ease the tilt back toward its resting angle
        tilt += (REST_TILT - tilt) * 0.012 * dt;
      }

      const cx = width / 2;
      const cy = height * 0.52;
      const focal = radius * 2.1;
      const sinT = Math.sin(tilt);
      const cosT = Math.cos(tilt);
      const time = now * 0.001;

      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "lighter";

      // the diffuse light of the galactic bulge, sitting under the stars —
      // r=0, z=0 always projects to exactly (cx, cy), tilt or no tilt
      const glowSize = radius * 1.3;
      ctx.globalAlpha = 0.38 * scrollFade;
      ctx.drawImage(spriteGlow, cx - glowSize / 2, cy - glowSize / 2, glowSize, glowSize);

      for (let i = 0; i < COUNT; i++) {
        const p = points[i];
        const r = (p.rn + p.jitter) * radius;
        const a = p.angle + spin;

        const px = Math.cos(a) * r;
        const py = Math.sin(a) * r;

        // tilt the disc about the horizontal axis
        const ry = py * cosT - p.z * sinT;
        const rz = py * sinT + p.z * cosT;

        const persp = focal / (focal + rz);
        if (persp <= 0.05) continue;

        const sx = cx + px * persp;
        const sy = cy + ry * persp;
        if (sx < -40 || sx > width + 40 || sy < -40 || sy > height + 40) continue;

        // depth dims the far side of the disc, keeping the near rim bright
        const depthFade = Math.max(0, Math.min(1, (persp - 0.55) / 0.75));
        const flicker = reduceMotion ? 1 : 0.72 + 0.28 * Math.sin(time * 0.9 + p.twinkle);
        const alpha = p.base * depthFade * flicker * scrollFade;
        if (alpha <= 0.01) continue;

        const s = p.size * persp * 7;
        ctx.globalAlpha = alpha;
        ctx.drawImage(p.sprite, sx - s / 2, sy - s / 2, s, s);
      }

      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";

      if (running && !reduceMotion) raf = requestAnimationFrame(render);
    };

    /* ── Pointer drag ──────────────────────────────────────────── */
    const onPointerDown = (e) => {
      if (reduceMotion) return;
      dragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
    };
    const onPointerMove = (e) => {
      if (!dragging) return;
      spinVel += (e.clientX - lastX) * 0.00006;
      tiltVel += (e.clientY - lastY) * 0.00004;
      lastX = e.clientX;
      lastY = e.clientY;
    };
    const onPointerUp = () => {
      dragging = false;
    };

    /* ── Scroll: recede behind the content past the hero ───────── */
    let scrollRaf = 0;
    const onScroll = () => {
      if (scrollRaf) return;
      scrollRaf = requestAnimationFrame(() => {
        scrollRaf = 0;
        const p = Math.min(window.scrollY / Math.max(window.innerHeight, 1), 1);
        scrollFade = 1 - p * 0.72;
        if (wrap) wrap.style.setProperty("--astra-hero", String(1 - p));
        if (reduceMotion) render(performance.now());
      });
    };

    const onVisibility = () => {
      running = document.visibilityState === "visible";
      if (running && !reduceMotion) {
        t0 = performance.now();
        raf = requestAnimationFrame(render);
      } else {
        cancelAnimationFrame(raf);
      }
    };

    resize();
    onScroll();
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);

    if (!coarse) {
      window.addEventListener("pointerdown", onPointerDown, { passive: true });
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      window.addEventListener("pointerup", onPointerUp, { passive: true });
      window.addEventListener("pointercancel", onPointerUp, { passive: true });
    }

    if (reduceMotion) render(performance.now());
    else raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      cancelAnimationFrame(scrollRaf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-void"
      style={{ "--astra-hero": 1 }}
    >
      {/* ── deep space scenery — painted first, so it sits furthest back
          and stays visible (at a low key) through every section ──── */}
      <div className="space-stars space-stars-a absolute inset-0" />
      <div className="space-stars space-stars-b absolute inset-0" />
      <div className="space-galaxy-band absolute inset-0" />

      <div ref={nebulaARef} className="space-nebula space-nebula-a" />
      <div ref={nebulaBRef} className="space-nebula space-nebula-b" />
      <div ref={nebulaCRef} className="space-nebula space-nebula-c" />

      {BRIGHT_STARS.map((s, i) => (
        <span
          key={i}
          ref={(el) => (brightStarRefs.current[i] = el)}
          className="space-star-bright"
          style={{ top: s.top, left: s.left }}
        />
      ))}

      <div ref={planetRingWrapRef} className="space-planet-ring-wrap -left-24 bottom-[-10%] h-56 w-56 md:h-80 md:w-80">
        <div className="space-planet space-planet-ring-body absolute inset-0" />
        <div className="space-planet-ring" />
      </div>
      <div ref={planetIceRef} className="space-planet space-planet-ice absolute -right-14 top-[6%] h-36 w-36 opacity-75 md:h-52 md:w-52" />
      <div ref={planetEmberRef} className="space-planet space-planet-ember absolute left-[8%] top-[62%] h-14 w-14 opacity-70 md:h-20 md:w-20" />

      {SHOOTING_STARS.map((s, i) => (
        <span
          key={i}
          ref={(el) => (shootingStarRefs.current[i] = el)}
          className="space-shooting-star"
          style={{ top: s.top, left: s.left }}
        />
      ))}

      {/* ── the galaxy core — interactive, the only element that fades
          on scroll — and the wash + vignette that seat it in black ── */}
      <div
        className="astra-ambient absolute inset-0"
        style={{ opacity: "calc(0.5 + 0.35 * var(--astra-hero))" }}
      />
      <canvas ref={canvasRef} className="absolute inset-0 block h-full w-full" />
      <div className="astra-vignette absolute inset-0" />
    </div>
  );
}
