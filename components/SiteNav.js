"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/components/Logo";

const navItems = [
  { name: "Index", link: "/" },
  { name: "About", link: "/about" },
  { name: "Work", link: "/project" },
  { name: "Experience", link: "/experience" },
  { name: "Education", link: "/education" },
  { name: "Contact", link: "/contact" },
];

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          scrolled ? "border-b border-line-2 bg-paper/90 backdrop-blur-sm" : "border-b border-transparent"
        )}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          {/* brand */}
          <Link href="/" className="group flex items-center gap-3">
            <Logo size="sm" />
            <span className="font-display text-lg font-extrabold uppercase tracking-tight text-ink">
              Yatin Singh
            </span>
          </Link>

          {/* desktop nav */}
          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item, i) => {
              const active = pathname === item.link;
              return (
                <Link
                  key={item.name}
                  href={item.link}
                  className={cn(
                    "group relative font-mono text-[11px] uppercase tracking-[0.18em] transition-colors duration-200",
                    active ? "text-flare" : "text-ink-2 hover:text-ink"
                  )}
                >
                  <span className="mr-1.5 text-ink-soft">{String(i + 1).padStart(2, "0")}</span>
                  {item.name}
                  <span
                    className={cn(
                      "absolute -bottom-1.5 left-0 h-px w-full origin-left bg-flare transition-transform duration-300",
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          {/* mobile trigger */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center border border-ink text-ink md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col justify-center gap-1 bg-paper px-8 md:hidden"
          >
            <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.25em] text-ink-soft">Index</p>
            {navItems.map((item, i) => {
              const active = pathname === item.link;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.link}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 py-1.5 font-display text-4xl font-medium tracking-tight"
                  >
                    <span className="font-mono text-sm text-ink-soft">{String(i + 1).padStart(2, "0")}</span>
                    <span className={active ? "text-flare" : "text-ink"}>{item.name}</span>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
