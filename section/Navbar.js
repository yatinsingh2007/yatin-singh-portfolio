"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useRouter, usePathname } from "next/navigation";
import { Menu as MenuIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Experience", link: "/experience" },
  { name: "Education", link: "/education" },
  { name: "Projects", link: "/project" },
  { name: "Contact", link: "/contact" },
];

export function Navbar({ className }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (link) => {
    router.push(link);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* YS Logo — top left */}
      <Link
        href="/"
        className={cn(
          "fixed z-50 transition-all duration-500 hidden md:flex",
          scrolled ? "top-5 left-6" : "top-8 left-8"
        )}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-10 h-10 rounded-xl bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] hover:scale-110 transition-all duration-300"
        >
          YS
        </motion.div>
      </Link>

      {/* Desktop Nav Pill */}
      <div
        className={cn(
          "fixed inset-x-0 max-w-xl mx-auto z-50 transition-all duration-500 hidden md:block",
          scrolled ? "top-4" : "top-8",
          className
        )}
      >
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          onMouseLeave={() => {}}
          className="relative rounded-full border border-white/10 bg-black/80 backdrop-blur-xl text-white shadow-2xl flex justify-center items-center space-x-1 px-4 py-2.5"
        >
          {navItems.map((item) => (
            <div key={item.name} className="relative">
              <button
                onClick={() => handleNavigation(item.link)}
                className={cn(
                  "relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer",
                  pathname === item.link
                    ? "text-white"
                    : "text-zinc-400 hover:text-white"
                )}
              >
                {pathname === item.link && (
                  <motion.span
                    layoutId="activeNavBg"
                    className="absolute inset-0 rounded-full bg-white/10 border border-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </button>
            </div>
          ))}
        </motion.nav>
      </div>

      {/* Mobile: Logo top-left */}
      <Link
        href="/"
        className="md:hidden fixed top-5 left-5 z-50"
      >
        <div className="w-9 h-9 rounded-xl bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs shadow-[0_0_16px_rgba(99,102,241,0.4)]">
          YS
        </div>
      </Link>

      {/* Mobile: Hamburger top-right */}
      <div className="md:hidden fixed top-4 right-5 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-3 bg-black/80 backdrop-blur-xl border border-white/10 rounded-full text-white shadow-2xl hover:bg-zinc-900 transition-all active:scale-95"
        >
          {isMobileMenuOpen ? <X size={22} /> : <MenuIcon size={22} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center md:hidden"
          >
            <div className="flex flex-col gap-5 text-center">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <button
                    onClick={() => handleNavigation(item.link)}
                    className={cn(
                      "text-3xl font-bold tracking-tight transition-all duration-300",
                      pathname === item.link
                        ? "text-white"
                        : "text-zinc-600 hover:text-white"
                    )}
                  >
                    {item.name}
                  </button>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-10 text-zinc-700 text-xs font-mono tracking-widest uppercase"
            >
              K. Yatin Singh — 2026
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
