"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "../components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Menu as MenuIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-4" />
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

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
      <div className={cn("hidden md:fixed md:flex md:justify-center top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
        <Menu setActive={setActive}>
          {navItems.map((item) => (
            <MenuItem
              key={item.name}
              setActive={setActive}
              active={active}
              item={item.name}
              onClick={() => handleNavigation(item.link)}
            />
          ))}
        </Menu>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden fixed top-6 right-6 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-3 bg-zinc-900/90 backdrop-blur-md border border-white/10 rounded-full text-white shadow-lg hover:bg-zinc-800 transition-colors"
        >
          {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center md:hidden"
          >
            <div className="flex flex-col gap-8 text-center">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => handleNavigation(item.link)}
                    className="text-2xl font-medium text-zinc-400 hover:text-white transition-colors"
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
