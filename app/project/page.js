"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import TerminalNav from "@/section/TerminalNav";
import TerminalFooter from "@/section/TerminalFooter";
import { Reveal, PageGlow, btnPrimary } from "@/components/terminal-ui";

const projects = [
  { id: "shopsmart", title: "Shopsmart", description: "A fully functional e-commerce platform with product listing, cart management, and user authentication.", image: "/shopsmart.png", techStack: ["Next.js", "Tailwind", "Prisma", "PostgreSQL", "Docker", "AWS-ECS"], githubUrl: "https://github.com/yatinsingh2007/shopsmart" },
  { id: "velox", title: "Velox", description: "A high-performance, containerized code-execution engine (Online Judge) built with Go and Docker. Runs code against test cases and returns detailed time/memory usage.", image: "/Velox.png", techStack: ["Go", "Docker", "Docker Compose"], githubUrl: "https://github.com/yatinsingh2007/Velox" },
  { id: "reportlens-ai", title: "ReportLens AI", description: "An AI platform that transforms how you interact with PDF reports — extracting insights and answering complex questions with NLP.", image: "/ReportLensAI.jpeg", techStack: ["Next.js", "Gemini AI", "Prisma", "PostgreSQL", "Docker"], githubUrl: "https://github.com/yatinsingh2007/ReportLens-AI" },
  { id: "cordis-sentinel", title: "Cordis Sentinel", description: "An agentic AI pipeline for heart-attack risk prediction on a real clinical dataset. Combines ML classifiers with SHAP explainability and a Plan-Execute-Reflect agent.", image: "/cordis-sentinel.png", techStack: ["Python", "Scikit-learn", "SHAP", "LangGraph", "ChromaDB", "Llama 3"], githubUrl: "https://github.com/yatinsingh2007/Cordis-Sentinel" },
  { id: "creditiq", title: "CreditIQ", description: "An agentic credit-risk system pairing ML classifiers with a RAG-retrieved credit-policy rulebook to produce explainable lending decisions.", image: "/creditIQ.jpeg", techStack: ["Python", "Streamlit", "LangGraph", "ChromaDB", "Llama 3"], liveUrl: "https://creditiq123.streamlit.app", githubUrl: "https://github.com/yatinsingh2007/CreditIQ" },
  { id: "vinticode", title: "VintiCode", description: "An intuitive coding environment focused on building logic and intuition through interactive challenges and automated evaluation.", image: "/vinticode.png", techStack: ["Next.js", "Node.js", "Redis", "Prisma", "PostgreSQL"], liveUrl: "https://vinticode.vercel.app/", githubUrl: "https://github.com/yatinsingh2007/VintiCode" },
  { id: "next-horizon", title: "Next Horizon", description: "A professional network reimagined for modern connectivity — share milestones, network with peers, and discover opportunities.", image: "/NextHorizon.png", techStack: ["React.js", "MongoDB", "Express.js", "Node.js"], liveUrl: "https://next-horizon-nine.vercel.app/", githubUrl: "https://github.com/yatinsingh2007/Next-Horizon" },
  { id: "create-prism", title: "create-prism", description: "A fast, no-nonsense CLI to scaffold Node.js + Express + Prisma (MySQL) starter projects in JavaScript or TypeScript.", image: "/create-prism.png", techStack: ["Node.js", "Express.js", "Prisma", "MySQL", "TypeScript"], githubUrl: "https://github.com/yatinsingh2007/create-prism", liveUrl: "https://www.npmjs.com/package/create-prism" },
  { id: "tic-tac-toe", title: "Tic-Tac-Toe", description: "Classic gameplay meets futuristic design — a high-fidelity implementation with fluid animations and a polished interface.", image: "/tic-tac-toe.png", techStack: ["React", "Tailwind", "Framer Motion", "Vite"], liveUrl: "https://tic-tac-toe-rust-rho.vercel.app/", githubUrl: "https://github.com/yatinsingh2007/Tic-Tac-Toe" },
  { id: "neura-chat", title: "Neura Chat", description: "An AI-first chat interface designed for seamless human-computer interaction and task completion.", image: "/neurachat 2.png", techStack: ["React.js", "Gemini API", "Tailwind", "Netlify"], liveUrl: "https://neura-chat.netlify.app/", githubUrl: "https://github.com/yatinsingh2007/Neura-Chat" },
  { id: "claude-chef", title: "Claude Chef", description: "A digital sous-chef for zero-waste cooking — generates recipes from existing ingredients using vision & language models.", image: "/Chef-claude.png", techStack: ["React.js", "Gemini Vision", "Tailwind", "Vercel"], liveUrl: "https://claude-chef.netlify.app", githubUrl: "https://github.com/yatinsingh2007/Claude-Chef" },
  { id: "steampunk", title: "SteamPunk", description: "An experimental exploration of the SteamPunk aesthetic through code, featuring complex SVG animations and custom layouts.", image: "/steampunk 2.png", techStack: ["HTML5", "CSS3", "JavaScript", "SVG"], liveUrl: "https://yatinsingh2007.github.io/Project_Capstone_1.0/ProjectSteampunk1.0.html", githubUrl: "https://github.com/yatinsingh2007/Project_Capstone_1.0" },
  { id: "calculator", title: "Calculator", description: "Precision meets design in this neumorphic calculator — a study in soft shadows, tactile UI and smooth evaluations.", image: "/calculator 2.png", techStack: ["React.js", "Tailwind", "Neumorphism"], liveUrl: "https://calculatoryatin.netlify.app/", githubUrl: "https://github.com/yatinsingh2007/Calculator" },
  { id: "netflix-clone", title: "Netflix Clone", description: "A pixel-perfect recreation of the world's leading streaming platform, focused on performance and visual fidelity.", image: "/netflix_clone.jpeg", techStack: ["HTML", "CSS", "JavaScript", "Responsive"], liveUrl: "https://yatinsingh2007.github.io/Netflix_Clone/Netflix.html", githubUrl: "https://github.com/yatinsingh2007/Netflix_Clone" },
];

function ProjectCard({ project, index }) {
  return (
    <Reveal delay={(index % 2) * 0.08}>
      <div className="group flex h-full flex-col border border-edge bg-term-2/40 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:border-cy hover:shadow-[8px_8px_0_0_#22d3ee]">
        <div className="relative aspect-16/9 overflow-hidden border-b border-edge">
          <Image src={project.image} alt={project.title} fill className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-[1.04]" sizes="(max-width:1024px) 100vw, 45vw" />
          <span className="absolute left-0 top-0 bg-cy px-2 py-0.5 text-[10px] font-bold uppercase text-term">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-3">
            <Link href={project.liveUrl || project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-2xl font-bold lowercase tracking-tight text-fg transition-colors group-hover:text-cy">
              {project.title.toLowerCase().replace(/\s+/g, "-")}<span className="text-fg-dim">/</span>
            </Link>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-fg-dim transition-all group-hover:text-cy group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>

          <p className="mt-3 line-clamp-3 text-xs leading-relaxed text-fg-dim">{project.description}</p>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 6).map((t) => (
              <span key={t} className="border border-edge px-2 py-1 text-[9px] uppercase tracking-wider text-fg-dim">{t}</span>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-3 border-t border-edge pt-5">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-fg transition-colors hover:text-cy">
              <Github size={14} /> source
            </a>
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-fg-dim transition-colors hover:text-cy">
                <ExternalLink size={14} /> live
              </a>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Project() {
  return (
    <main className="min-h-screen w-full bg-term font-mono text-fg">
      <TerminalNav />
      <div className="scanlines relative overflow-hidden">
        <PageGlow />
        <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 pt-28 sm:pt-32 pb-14">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="flex items-center justify-between border-y border-edge py-2.5 text-[10px] uppercase tracking-[0.2em] text-fg-dim">
            <span className="text-cy">$ ls -la ~/projects</span>
            <span>{projects.length} entries</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }} className="mt-10 text-[clamp(2.6rem,9vw,7rem)] font-bold uppercase leading-[0.85] tracking-tight text-fg">
            Projects<span className="term-blink text-cy">_</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }} className="mt-5 max-w-xl text-sm leading-relaxed text-fg-dim">
            // a catalog of things I&apos;ve built — full-stack products, ML pipelines,
            agentic systems and developer tooling.
          </motion.p>
        </div>
      </div>

      <section className="mx-auto max-w-[1400px] px-4 sm:px-6 pb-24">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </section>

      <section className="border-t border-edge">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 py-20 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-cy">$ ./collaborate --init</p>
            <h2 className="mx-auto mt-5 max-w-2xl text-[clamp(2rem,6vw,4rem)] font-bold uppercase leading-[0.9] tracking-tight text-fg">
              Have a project<br />in mind<span className="text-cy">?</span>
            </h2>
            <div className="mt-9 flex justify-center">
              <Link href="/contact" className={btnPrimary}>
                start_conversation <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <TerminalFooter />
    </main>
  );
}
