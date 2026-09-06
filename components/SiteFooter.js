"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Logo from "@/components/Logo";

const nav = [
  { name: "Overview", href: "/" },
  { name: "Work", href: "/project" },
  { name: "Experience", href: "/experience" },
  { name: "About", href: "/about" },
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
    <footer className="relative mt-10 border-t border-line">
      <div className="mx-auto w-full max-w-[86rem] px-6 py-20 md:px-8 md:py-24">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-8">
          {/* contact */}
          <div className="md:col-span-6">
            <p className="t-meta text-ink-soft">Get in touch</p>
            <a
              href="mailto:yatin.singh.dev@gmail.com"
              className="group mt-5 flex w-fit items-start gap-2 t-h3 text-ink transition-colors hover:text-ink-1"
            >
              <span className="break-all">yatin.singh.dev@gmail.com</span>
              <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <p className="t-body mt-6 max-w-sm text-ink-2">
              Open to software &amp; ML engineering roles and collaborations. Based in
              India — happy to work remotely.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="t-meta text-ink-soft">Sitemap</p>
            <nav className="mt-5 flex flex-col items-start gap-3">
              {nav.map(({ name, href }) => (
                <Link
                  key={name}
                  href={href}
                  className="link-underline t-cta w-fit text-ink-2 transition-colors hover:text-ink"
                >
                  {name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:col-span-3">
            <p className="t-meta text-ink-soft">Elsewhere</p>
            <div className="mt-5 flex flex-col items-start gap-3">
              {socials.map(({ name, icon: Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline t-cta flex w-fit items-center gap-2.5 text-ink-2 transition-colors hover:text-ink"
                >
                  <Icon className="h-3.5 w-3.5" />
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-[86rem] flex-col items-center justify-between gap-4 border-t border-line px-6 py-6 md:flex-row md:px-8">
        <div className="flex items-center gap-2.5">
          <Logo size="sm" />
          <span className="t-caption text-ink-soft">© {new Date().getFullYear()} Yatin Singh</span>
        </div>
        <span className="t-caption text-ink-faint">Built with Next.js · Tailwind · Motion</span>
      </div>
    </footer>
  );
}
