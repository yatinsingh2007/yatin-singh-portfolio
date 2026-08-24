"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Logo from "@/components/Logo";

const nav = [
  { name: "index", href: "/" },
  { name: "about", href: "/about" },
  { name: "work", href: "/project" },
  { name: "experience", href: "/experience" },
  { name: "education", href: "/education" },
  { name: "contact", href: "/contact" },
];

const socials = [
  { name: "github", icon: FaGithub, href: "https://github.com/yatinsingh2007" },
  { name: "linkedin", icon: FaLinkedin, href: "https://www.linkedin.com/in/yatin-singh-b37817323/" },
  { name: "instagram", icon: FaInstagram, href: "https://www.instagram.com/yatin_singh27" },
];

export default function TerminalFooter() {
  return (
    <footer className="border-t border-edge bg-term font-mono">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* contact block */}
          <div className="md:col-span-6">
            <p className="text-xs uppercase tracking-widest text-fg-dim">$ ./contact --start</p>
            <a
              href="mailto:yatin.singh.dev@gmail.com"
              className="group mt-4 inline-block break-all text-lg font-bold text-fg transition-colors hover:text-cy sm:text-2xl md:text-3xl"
            >
              <span className="mr-2 text-cy">❯</span>
              yatin.singh.dev@gmail.com
              <span className="term-blink ml-1 text-cy">_</span>
            </a>
            <p className="mt-5 max-w-sm text-xs leading-relaxed text-fg-dim">
              // open to software &amp; ML opportunities and collaboration.
              <br />
              // based in india · remote friendly.
            </p>
          </div>

          {/* sitemap */}
          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-widest text-fg-dim">// sitemap</p>
            <nav className="mt-4 flex flex-col gap-2 text-sm">
              {nav.map(({ name, href }) => (
                <Link key={name} href={href} className="w-fit text-fg transition-colors hover:text-cy">
                  /{name}
                </Link>
              ))}
            </nav>
          </div>

          {/* socials */}
          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-widest text-fg-dim">// elsewhere</p>
            <div className="mt-4 flex flex-col gap-2 text-sm">
              {socials.map(({ name, icon: Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-fit items-center gap-2 text-fg transition-colors hover:text-cy"
                >
                  <Icon className="h-3.5 w-3.5" />
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ascii name band */}
      <div className="overflow-hidden border-t border-edge">
        <p className="whitespace-nowrap px-4 py-5 text-center text-[13vw] font-bold uppercase leading-none tracking-tighter text-fg/[0.05] select-none sm:px-6">
          YATIN_SINGH
        </p>
      </div>

      <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-3 border-t border-edge px-4 sm:px-6 py-5 text-[10px] uppercase tracking-widest text-fg-dim sm:flex-row">
        <div className="flex items-center gap-3">
          <Logo size="sm" />
          <span>© {new Date().getFullYear()} k. yatin singh — EOF</span>
        </div>
        <span>built with next.js · tailwind · motion</span>
      </div>
    </footer>
  );
}
