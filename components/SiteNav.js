"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/components/Logo";

const navItems = [
  { name: "Home", link: "/" },
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
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-5">
        <nav
          className={cn(
            "flex w-full max-w-5xl items-center justify-between rounded-full px-3 py-2 pl-4 transition-all duration-300",
            scrolled
              ? "border border-hair bg-bg/70 backdrop-blur-xl shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]"
              : "border border-transparent bg-transparent"
          )}
        >
          {/* brand */}
          <Link href="/" className="group flex items-center gap-2.5">
            <Logo size="sm" />
            <span className="hidden text-sm font-semibold tracking-tight text-ink sm:block">
              Yatin Singh
            </span>
          </Link>

          {/* desktop nav */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const active = pathname === item.link;
              return (
                <Link
                  key={item.name}
                  href={item.link}
                  className={cn(
                    "relative rounded-full px-4 py-2 text-sm transition-colors duration-200",
                    active ? "text-white" : "text-ink-dim hover:text-ink"
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-brand-3/90 to-brand/90"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* CTA + mobile trigger */}
          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-bg transition-transform duration-200 hover:-translate-y-0.5 lg:block"
            >
              Let’s talk
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-hair bg-white/[0.03] text-ink md:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col justify-center gap-2 bg-bg/95 px-8 backdrop-blur-xl md:hidden"
          >
            {navItems.map((item, i) => {
              const active = pathname === item.link;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={item.link}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-baseline gap-3 py-1.5 font-display text-4xl font-semibold tracking-tight",
                      active ? "text-gradient-brand" : "text-ink"
                    )}
                  >
                    <span className="font-mono text-sm text-ink-faint">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item.name}
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
