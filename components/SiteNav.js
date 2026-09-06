"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/components/Logo";

const navItems = [
  { name: "Overview", link: "/" },
  { name: "Work", link: "/project" },
  { name: "Experience", link: "/experience" },
  { name: "About", link: "/about" },
  { name: "Education", link: "/education" },
];

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
          scrolled
            ? "border-b border-line bg-void/60 backdrop-blur-2xl"
            : "border-b border-transparent"
        )}
      >
        <div className="mx-auto flex h-16 w-full max-w-[86rem] items-center justify-between gap-4 px-6 md:px-8">
          {/* brand */}
          <Link href="/" className="group flex shrink-0 items-center gap-2.5" aria-label="Yatin Singh — home">
            <Logo size="sm" />
            <span className="t-h5 text-ink">Yatin Singh</span>
          </Link>

          {/* desktop nav */}
          <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
            {navItems.map((item) => {
              const active = pathname === item.link;
              return (
                <Link
                  key={item.name}
                  href={item.link}
                  className={cn(
                    "rounded-full px-3.5 py-2 t-cta transition-colors duration-300",
                    active ? "text-ink" : "text-ink-2 hover:text-ink"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="group hidden h-9 items-center gap-1.5 rounded-full border border-line bg-paper-2 px-4 t-cta text-ink backdrop-blur-xl transition-colors duration-300 hover:bg-paper-3 sm:inline-flex"
            >
              Contact
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>

            {/* mobile trigger */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-paper-2 text-ink backdrop-blur-xl transition-colors hover:bg-paper-3 md:hidden"
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center gap-1 bg-void/85 px-8 backdrop-blur-2xl md:hidden"
          >
            {[...navItems, { name: "Contact", link: "/contact" }].map((item, i) => {
              const active = pathname === item.link;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 + i * 0.045, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={item.link}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "block py-2 t-h3 transition-colors",
                      active ? "text-ink" : "text-ink-soft hover:text-ink"
                    )}
                  >
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
