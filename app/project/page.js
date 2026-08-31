"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { Reveal, GlassCard, Tag, RevealImage, btnPrimary } from "@/components/aurora-ui";

const projects = [
  { id: "shopsmart", title: "Shopsmart", category: "Full-Stack · E-commerce", description: "A fully functional e-commerce platform with product listing, cart management and user authentication.", image: "/shopsmart.png", techStack: ["Next.js", "Tailwind", "Prisma", "PostgreSQL", "Docker", "AWS-ECS"], githubUrl: "https://github.com/yatinsingh2007/shopsmart" },
  { id: "velox", title: "Velox", category: "Systems · Go", description: "A high-performance, containerized code-execution engine (online judge) built with Go and Docker. Runs code against test cases and returns detailed time/memory usage.", image: "/Velox.png", techStack: ["Go", "Docker", "Docker Compose"], githubUrl: "https://github.com/yatinsingh2007/Velox" },
  { id: "reportlens-ai", title: "ReportLens AI", category: "LLM · Documents", description: "An AI platform that transforms how you interact with PDF reports — extracting insights and answering complex questions with NLP.", image: "/ReportLensAI.jpeg", techStack: ["Next.js", "Gemini AI", "Prisma", "PostgreSQL", "Docker"], githubUrl: "https://github.com/yatinsingh2007/ReportLens-AI" },
  { id: "cordis-sentinel", title: "Cordis Sentinel", category: "ML · Agentic AI", description: "An agentic AI pipeline for heart-attack risk prediction on a real clinical dataset. Combines ML classifiers with SHAP explainability and a Plan-Execute-Reflect agent.", image: "/cordis-sentinel.png", techStack: ["Python", "Scikit-learn", "SHAP", "LangGraph", "ChromaDB", "Llama 3"], githubUrl: "https://github.com/yatinsingh2007/Cordis-Sentinel" },
  { id: "creditiq", title: "CreditIQ", category: "ML · RAG", description: "An agentic credit-risk system pairing ML classifiers with a RAG-retrieved credit-policy rulebook to produce explainable lending decisions.", image: "/creditIQ.jpeg", techStack: ["Python", "Streamlit", "LangGraph", "ChromaDB", "Llama 3"], liveUrl: "https://creditiq123.streamlit.app", githubUrl: "https://github.com/yatinsingh2007/CreditIQ" },
  { id: "vinticode", title: "VintiCode", category: "Web · EdTech", description: "An intuitive coding environment focused on building logic and intuition through interactive challenges and automated evaluation.", image: "/vinticode.png", techStack: ["Next.js", "Node.js", "Redis", "Prisma", "PostgreSQL"], liveUrl: "https://vinticode.vercel.app/", githubUrl: "https://github.com/yatinsingh2007/VintiCode" },
  { id: "next-horizon", title: "Next Horizon", category: "Web · MERN", description: "A professional network reimagined for modern connectivity — share milestones, network with peers and discover opportunities.", image: "/NextHorizon.png", techStack: ["React.js", "MongoDB", "Express.js", "Node.js"], liveUrl: "https://next-horizon-nine.vercel.app/", githubUrl: "https://github.com/yatinsingh2007/Next-Horizon" },
  { id: "create-prism", title: "create-prism", category: "Open Source · CLI", description: "A fast, no-nonsense CLI to scaffold Node.js + Express + Prisma (MySQL) starter projects in JavaScript or TypeScript.", image: "/create-prism.png", techStack: ["Node.js", "Express.js", "Prisma", "MySQL", "TypeScript"], githubUrl: "https://github.com/yatinsingh2007/create-prism", liveUrl: "https://www.npmjs.com/package/create-prism" },
  { id: "tic-tac-toe", title: "Tic-Tac-Toe", category: "Web · Game", description: "Classic gameplay meets futuristic design — a high-fidelity implementation with fluid animations and a polished interface.", image: "/tic-tac-toe.png", techStack: ["React", "Tailwind", "Framer Motion", "Vite"], liveUrl: "https://tic-tac-toe-rust-rho.vercel.app/", githubUrl: "https://github.com/yatinsingh2007/Tic-Tac-Toe" },
  { id: "neura-chat", title: "Neura Chat", category: "AI · Chat", description: "An AI-first chat interface designed for seamless human-computer interaction and task completion.", image: "/neurachat 2.png", techStack: ["React.js", "Gemini API", "Tailwind", "Netlify"], liveUrl: "https://neura-chat.netlify.app/", githubUrl: "https://github.com/yatinsingh2007/Neura-Chat" },
  { id: "claude-chef", title: "Claude Chef", category: "AI · Vision", description: "A digital sous-chef for zero-waste cooking — generates recipes from existing ingredients using vision & language models.", image: "/Chef-claude.png", techStack: ["React.js", "Gemini Vision", "Tailwind", "Vercel"], liveUrl: "https://claude-chef.netlify.app", githubUrl: "https://github.com/yatinsingh2007/Claude-Chef" },
  { id: "steampunk", title: "SteamPunk", category: "Web · Experiment", description: "An experimental exploration of the SteamPunk aesthetic through code, featuring complex SVG animations and custom layouts.", image: "/steampunk 2.png", techStack: ["HTML5", "CSS3", "JavaScript", "SVG"], liveUrl: "https://yatinsingh2007.github.io/Project_Capstone_1.0/ProjectSteampunk1.0.html", githubUrl: "https://github.com/yatinsingh2007/Project_Capstone_1.0" },
  { id: "calculator", title: "Calculator", category: "Web · UI", description: "Precision meets design in this neumorphic calculator — a study in soft shadows, tactile UI and smooth evaluations.", image: "/calculator 2.png", techStack: ["React.js", "Tailwind", "Neumorphism"], liveUrl: "https://calculatoryatin.netlify.app/", githubUrl: "https://github.com/yatinsingh2007/Calculator" },
  { id: "netflix-clone", title: "Netflix Clone", category: "Web · Clone", description: "A pixel-perfect recreation of the world's leading streaming platform, focused on performance and visual fidelity.", image: "/netflix_clone.jpeg", techStack: ["HTML", "CSS", "JavaScript", "Responsive"], liveUrl: "https://yatinsingh2007.github.io/Netflix_Clone/Netflix.html", githubUrl: "https://github.com/yatinsingh2007/Netflix_Clone" },
];

function ProjectCard({ project, index }) {
  return (
    <Reveal delay={(index % 2) * 0.08}>
      <GlassCard className="group flex h-full flex-col">
        <div className="relative aspect-16/9 overflow-hidden border-b border-line">
          <RevealImage src={project.image} alt={project.title} sizes="(max-width:1024px) 100vw, 45vw" imgClassName="grayscale-[0.3] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.03]" />
          <span className="absolute left-0 top-0 bg-ink px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-paper">
            № {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-ink-soft">
            <span className="text-flare">{project.category}</span>
          </div>
          <h3 className="mt-3 font-display text-2xl font-bold uppercase tracking-tight text-ink transition-colors group-hover:text-flare">{project.title}</h3>
          <p className="mt-2.5 leading-relaxed text-ink-2">{project.description}</p>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 6).map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-5 border-t border-line pt-5">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-ink-2 transition-colors hover:text-ink">
              <Github size={15} /> Source
            </a>
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-flare transition-colors hover:text-ink">
                <ExternalLink size={15} /> Live
              </a>
            )}
          </div>
        </div>
      </GlassCard>
    </Reveal>
  );
}

export default function Project() {
  return (
    <main className="min-h-screen w-full text-ink">
      <SiteNav />

      <section className="relative">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 pt-28 sm:pt-32 pb-14">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }} className="flex items-center justify-between border-y border-line-2 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">
            <span>Catalogue of works</span>
            <span>{projects.length} entries</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.85, delay: 0.15 }} className="mt-10 font-display text-[clamp(3.2rem,10vw,7rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.03em] text-ink">
            Selected Work
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-2">
            A catalogue of things I've built — full-stack products, ML pipelines,
            agentic systems and developer tooling.
          </motion.p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 sm:px-8 pb-24">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 sm:px-8 pb-24">
        <Reveal>
          <div className="border border-ink/70 bg-paper-2 px-6 py-16 text-center sm:px-16">
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-flare">Next chapter</p>
            <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-extrabold uppercase leading-[0.95] tracking-tight text-ink sm:text-5xl">
              Have a project in mind?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-lg text-ink-2">
              I'm always up for building something new. Let's talk.
            </p>
            <div className="mt-9 flex justify-center">
              <Link href="/contact" className={btnPrimary}>
                Start a conversation <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </main>
  );
}
