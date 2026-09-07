"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

/* ── Sticky horizontal parallax, dressed for Astra ─────────────────
   The section pins to the viewport while you scroll; three rows of
   project plates stream sideways in alternating directions the whole
   way through. No 3D tilt, no dead space — the motion is driven 1:1
   by scroll position. True black ground, hairline plates, grayscale
   until hovered — the same restraint as the rest of the site. */
export const HeroParallax = ({ products = [] }) => {
  // Duplicate the compact project list so every row is wider than the
  // viewport and streams continuously — no empty gaps mid-scroll.
  const rowFor = (offset) => {
    const doubled = [...products, ...products];
    // rotate the deck a little per row so the three rows don't line up
    return [...doubled.slice(offset), ...doubled.slice(0, offset)];
  };

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const springCfg = { stiffness: 80, damping: 26, bounce: 0 };
  // Percentage-based so it's responsive: each row is ~2× the deck wide,
  // sliding by ~half its width reveals a continuous stream of plates.
  const toLeft = useSpring(
    useTransform(scrollYProgress, [0, 1], ["2%", "-52%"]),
    springCfg
  );
  const toRight = useSpring(
    useTransform(scrollYProgress, [0, 1], ["-52%", "2%"]),
    springCfg
  );

  // Entrance reveal — the deck starts as a tilted plane, low and small,
  // then rises, flattens and scales up over the first slice of scroll.
  const revealCfg = { stiffness: 100, damping: 30, bounce: 0 };
  // Tilt: rotateX lean-back + a diagonal rotateZ that leans the other way
  // (top toward the left), then settles flat.
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), revealCfg);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [-20, 0]), revealCfg);
  // Pull the resting frame back a touch so more of the deck is in view
  // (less zoomed-in than filling the whole viewport).
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.72, 0.9]), revealCfg);
  // Opacity bound straight to scroll so the fade tracks the scrollbar 1:1.
  const opacity = useTransform(scrollYProgress, [0, 0.16], [0.15, 1]);

  const rowA = rowFor(0);
  const rowB = rowFor(2);
  const rowC = rowFor(4);

  return (
    // Tall track drives the scroll; the inner layer is what stays pinned.
    <div ref={ref} className="relative h-[260vh]">
      <div className="sticky top-0 flex h-svh items-center overflow-hidden [perspective:1200px]">
        {/* 3D reveal wrapper: plane → flat, small → full */}
        <motion.div
          style={{ rotateX, rotateZ, scale, opacity, willChange: "transform, opacity" }}
          className="flex w-full flex-col justify-center gap-5 md:gap-6"
        >
          <motion.div style={{ x: toLeft, willChange: "transform" }} className="flex gap-5 md:gap-6">
            {rowA.map((product, i) => (
              <ProductCard product={product} key={`a-${product.title}-${i}`} />
            ))}
          </motion.div>
          <motion.div style={{ x: toRight, willChange: "transform" }} className="flex gap-5 md:gap-6">
            {rowB.map((product, i) => (
              <ProductCard product={product} key={`b-${product.title}-${i}`} />
            ))}
          </motion.div>
          <motion.div style={{ x: toLeft, willChange: "transform" }} className="flex gap-5 md:gap-6">
            {rowC.map((product, i) => (
              <ProductCard product={product} key={`c-${product.title}-${i}`} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export const ProductCard = ({ product }) => {
  return (
    <div className="group/product relative h-56 w-[18rem] flex-shrink-0 md:h-[17rem] md:w-[25rem]">
      <Link
        href={product.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full w-full overflow-hidden rounded-2xl border border-line bg-paper-2 transition-transform duration-500 group-hover/product:-translate-y-2"
      >
        <Image
          src={product.image || product.thumbnail}
          height={600}
          width={600}
          className="absolute inset-0 h-full w-full object-cover object-left-top grayscale-[0.5] transition-all duration-700 group-hover/product:scale-[1.03] group-hover/product:grayscale-0"
          alt={product.title}
        />
        {/* legibility wash — deepens on hover */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent opacity-70 transition-opacity duration-500 group-hover/product:opacity-90" />

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 md:p-6">
          <div>
            {product.category && (
              <span className="t-meta text-ink-soft">{product.category}</span>
            )}
            <h3 className="t-h5 mt-1.5 text-ink">{product.title}</h3>
          </div>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line bg-void/50 text-ink-2 backdrop-blur-xl transition-colors duration-300 group-hover/product:border-line-2 group-hover/product:text-ink">
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/product:-translate-y-0.5 group-hover/product:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </div>
  );
};
