"use client";
import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Education", href: "/education" },
  { name: "Projects", href: "/project" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { name: "GitHub", icon: FaGithub, href: "https://github.com/yatinsingh2007" },
  { name: "LinkedIn", icon: FaLinkedin, href: "https://www.linkedin.com/in/yatin-singh-b37817323/" },
  { name: "Instagram", icon: FaInstagram, href: "https://www.instagram.com/yatin_singh27" },
  { name: "Email", icon: Mail, href: "mailto:yatin.singh.dev@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-black/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">

          {/* Brand */}
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-linear-to-br from-indigo-500 to-purple-600 text-white font-bold text-lg shadow-[0_0_24px_rgba(99,102,241,0.35)]">
                YS
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">K. Yatin Singh</h3>
              <p className="text-zinc-500 text-sm font-light leading-relaxed max-w-[16rem]">
                Building intelligent systems at the intersection of web engineering and AI.
              </p>
            </div>
            <div className="flex gap-2.5">
              {socialLinks.map(({ name, icon: Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-zinc-500 hover:text-white hover:bg-white/10 hover:border-white/10 transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.35em]">Navigation</h4>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map(({ name, href }) => (
                <Link
                  key={name}
                  href={href}
                  className="text-zinc-500 hover:text-white text-sm font-medium transition-colors duration-200 w-fit group flex items-center gap-1"
                >
                  {name}
                  <ArrowUpRight
                    size={11}
                    className="opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200"
                  />
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.35em]">Contact</h4>
            <div className="space-y-5">
              <div>
                <div className="text-[10px] text-zinc-700 font-bold uppercase tracking-widest mb-1">Email</div>
                <a
                  href="mailto:yatin.singh.dev@gmail.com"
                  className="text-zinc-400 hover:text-white text-sm transition-colors duration-200"
                >
                  yatin.singh.dev@gmail.com
                </a>
              </div>
              <div>
                <div className="text-[10px] text-zinc-700 font-bold uppercase tracking-widest mb-1">Location</div>
                <p className="text-zinc-400 text-sm">India · Remote Friendly</p>
              </div>
              <motion.div
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-bold text-emerald-400 tracking-[0.2em] uppercase">
                  Available for Hire
                </span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-zinc-700 text-xs">
            © {new Date().getFullYear()} K. Yatin Singh. All rights reserved.
          </p>
          <p className="text-zinc-800 text-xs">
            Built with Next.js · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
