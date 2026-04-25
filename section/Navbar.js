"use client";
import React, { useState, useEffect } from "react";
import { Menu, MenuItem } from "../components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { useRouter, usePathname } from "next/navigation";
import { Menu as MenuIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar({ className }) {
  const [active, setActive] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Experience", link: "/experience" },
    { name: "Education", link: "/education" },
    { name: "Projects", link: "/project" },
    { name: "Contact", link: "/contact" },
  ];

  const handleNavigation = (link) => {
    router.push(link);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div 
        className={cn(
          "fixed top-6 inset-x-0 max-w-2xl mx-auto z-50 transition-all duration-300 hidden md:block",
          scrolled ? "top-4" : "top-8",
          className
        )}
      >
        <Menu setActive={setActive}>
          {navItems.map((item) => (
            <div key={item.name} className="relative">
              <MenuItem
                setActive={setActive}
                active={active}
                item={item.name}
                onClick={() => handleNavigation(item.link)}
              />
              {pathname === item.link && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </div>
          ))}
        </Menu>
      </div>

      {/* Mobile Navbar Button */}
      <div className="md:hidden fixed top-6 right-6 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-3 bg-black/80 backdrop-blur-xl border border-white/10 rounded-full text-white shadow-2xl hover:bg-zinc-900 transition-all active:scale-95"
        >
          {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
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
            <div className="flex flex-col gap-6 text-center">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => handleNavigation(item.link)}
                    className={cn(
                      "text-3xl font-bold tracking-tight transition-all duration-300",
                      pathname === item.link 
                        ? "text-indigo-500 scale-110" 
                        : "text-zinc-500 hover:text-white"
                    )}
                  >
                    {item.name}
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
