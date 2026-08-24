"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import Logo from "@/components/Logo";

const navItems = [
  { name: "index", link: "/" },
  { name: "about", link: "/about" },
  { name: "work", link: "/project" },
  { name: "experience", link: "/experience" },
  { name: "education", link: "/education" },
  { name: "contact", link: "/contact" },
];

export default function TerminalNav() {
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
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b font-mono transition-colors duration-300",
          scrolled ? "border-edge bg-term/90 backdrop-blur-md" : "border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto flex h-14 max-w-[1600px] items-center justify-between px-4 sm:px-6">
          {/* path / prompt with logo */}
          <Link href="/" className="group flex items-center gap-3 text-sm">
            <Logo size="md" />
            <div className="flex items-center gap-1.5 font-mono">
              <span className="text-cy">❯</span>
              <span className="font-bold text-fg transition-colors group-hover:text-cy">~/yatin-singh</span>
              <span className="term-blink text-cy">▋</span>
            </div>
          </Link>

          {/* desktop nav */}
          <nav className="hidden items-center gap-1 text-xs md:flex">
            {navItems.map((item) => {
              const active = pathname === item.link;
              return (
                <Link
                  key={item.name}
                  href={item.link}
                  className={cn(
                    "px-2.5 py-1.5 uppercase tracking-wider transition-colors duration-150",
                    active
                      ? "bg-cy text-term"
                      : "text-fg-dim hover:bg-cy hover:text-term"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
            <span className="ml-3 flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-fg-dim">
              <span className="h-1.5 w-1.5 bg-cy" />
              online
            </span>
          </nav>

          {/* mobile trigger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="border border-edge px-3 py-1.5 text-xs uppercase tracking-widest text-fg transition-colors hover:bg-cy hover:text-term md:hidden"
          >
            {open ? "[ close ]" : "[ menu ]"}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col justify-center gap-1 bg-term/97 px-6 font-mono backdrop-blur-xl md:hidden"
          >
            <p className="mb-5 text-xs uppercase tracking-widest text-fg-dim">$ ls ~/yatin-singh</p>
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  href={item.link}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-3 py-1 text-3xl font-bold uppercase text-fg hover:text-cy"
                >
                  <span className="text-sm text-cy">{String(i).padStart(2, "0")}</span>
                  {item.name}
                  <span className="text-cy">/</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
