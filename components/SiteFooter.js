"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Logo from "@/components/Logo";

const nav = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Work", href: "/project" },
  { name: "Experience", href: "/experience" },
  { name: "Education", href: "/education" },
  { name: "Contact", href: "/contact" },
];

const socials = [
  { name: "GitHub", icon: FaGithub, href: "https://github.com/yatinsingh2007" },
  { name: "LinkedIn", icon: FaLinkedin, href: "https://www.linkedin.com/in/yatin-singh-b37817323/" },
  { name: "Instagram", icon: FaInstagram, href: "https://www.instagram.com/yatin_singh27" },
];

export default function SiteFooter() {
  return (
    <footer className="relative mt-10 border-t border-hair">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* contact block */}
          <div className="md:col-span-6">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-brand">
              Get in touch
            </span>
            <a
              href="mailto:yatin.singh.dev@gmail.com"
              className="group mt-4 flex items-center gap-2 break-all font-display text-2xl font-semibold tracking-tight text-ink transition-colors hover:text-brand-2 sm:text-3xl"
            >
              yatin.singh.dev@gmail.com
              <ArrowUpRight className="h-6 w-6 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-dim">
              Open to software &amp; ML engineering roles and collaborations.
              Based in India — happy to work remotely.
            </p>
          </div>

          {/* sitemap */}
          <div className="md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">Explore</p>
            <nav className="mt-4 flex flex-col gap-2.5 text-sm">
              {nav.map(({ name, href }) => (
                <Link key={name} href={href} className="link-underline w-fit text-ink-dim transition-colors hover:text-ink">
                  {name}
                </Link>
              ))}
            </nav>
          </div>

          {/* socials */}
          <div className="md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint">Elsewhere</p>
            <div className="mt-4 flex flex-col gap-2.5 text-sm">
              {socials.map(({ name, icon: Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline flex w-fit items-center gap-2.5 text-ink-dim transition-colors hover:text-ink"
                >
                  <Icon className="h-4 w-4" />
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* oversized name band */}
      <div className="overflow-hidden">
        <p className="select-none whitespace-nowrap px-4 text-center font-display text-[15vw] font-semibold uppercase leading-none tracking-tighter text-white/[0.035]">
          Yatin Singh
        </p>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-hair px-5 sm:px-8 py-6 text-xs text-ink-faint sm:flex-row">
        <div className="flex items-center gap-3">
          <Logo size="sm" />
          <span>© {new Date().getFullYear()} Yatin Singh. All rights reserved.</span>
        </div>
        <span>Built with Next.js, Tailwind &amp; Motion.</span>
      </div>
    </footer>
  );
}
