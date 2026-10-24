"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, Github, ExternalLink, ArrowUpRight } from "lucide-react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import {
  Reveal,
  Tag,
  RevealImage,
  PageHeader,
  Container,
  Section,
  btnPrimary,
  btnGhost,
} from "@/components/aurora-ui";
import { CardContainer, CardBody, CardItem, CardPlate } from "@/components/ui/3d-card";

const projects = [
  { id: "shopsmart", title: "Shopsmart", category: "Full-Stack · E-commerce", description: "A fully functional e-commerce platform with product listing, cart management and user authentication.", image: "/shopsmart.png", techStack: ["Next.js", "Tailwind", "Prisma", "PostgreSQL", "Docker", "AWS-ECS"], githubUrl: "https://github.com/yatinsingh2007/shopsmart" },
  { id: "velox", title: "Velox", category: "Systems · Go", description: "A high-performance, containerized code-execution engine (online judge) built with Go and Docker. Runs code against test cases and returns detailed time/memory usage.", image: "/Velox.png", techStack: ["Go", "Docker", "Docker Compose"], githubUrl: "https://github.com/yatinsingh2007/Velox" },
  { id: "reportlens-ai", title: "ReportLens AI", category: "LLM · Documents", description: "An AI platform that transforms how you interact with PDF reports — extracting insights and answering complex questions with NLP.", image: "/ReportLensAI.jpeg", techStack: ["Next.js", "Gemini AI", "Prisma", "PostgreSQL", "Docker"], githubUrl: "https://github.com/yatinsingh2007/ReportLens-AI" },
  { id: "cordis-sentinel", title: "Cordis Sentinel", category: "ML · Agentic AI", description: "An agentic AI pipeline for heart-attack risk prediction on a real clinical dataset. Combines ML classifiers with SHAP explainability and a Plan-Execute-Reflect agent.", techStack: ["Python", "Scikit-learn", "SHAP", "LangGraph", "ChromaDB", "Llama 3"], githubUrl: "https://github.com/yatinsingh2007/Cordis-Sentinel" },
  { id: "creditiq", title: "CreditIQ", category: "ML · RAG", description: "An agentic credit-risk system pairing ML classifiers with a RAG-retrieved credit-policy rulebook to produce explainable lending decisions.", image: "/creditIQ.jpeg", techStack: ["Python", "Streamlit", "LangGraph", "ChromaDB", "Llama 3"], liveUrl: "https://creditiq123.streamlit.app", githubUrl: "https://github.com/yatinsingh2007/CreditIQ" },
  { id: "vinticode", title: "VintiCode", category: "Web · EdTech", description: "An intuitive coding environment focused on building logic and intuition through interactive challenges and automated evaluation.", image: "/vinticode.png", techStack: ["Next.js", "Node.js", "Redis", "Prisma", "PostgreSQL"], liveUrl: "https://vinticode.vercel.app/", githubUrl: "https://github.com/yatinsingh2007/VintiCode" },
  { id: "next-horizon", title: "Next Horizon", category: "Web · MERN", description: "A professional network reimagined for modern connectivity — share milestones, network with peers and discover opportunities.", image: "/nexthorizon.png", techStack: ["React.js", "MongoDB", "Express.js", "Node.js"], liveUrl: "https://next-horizon-nine.vercel.app/", githubUrl: "https://github.com/yatinsingh2007/Next-Horizon" },
  { id: "create-prism", title: "create-prism", category: "Open Source · CLI", description: "A fast, no-nonsense CLI to scaffold Node.js + Express + Prisma (MySQL) starter projects in JavaScript or TypeScript.", image: "/create-prism.png", techStack: ["Node.js", "Express.js", "Prisma", "MySQL", "TypeScript"], githubUrl: "https://github.com/yatinsingh2007/create-prism", liveUrl: "https://www.npmjs.com/package/create-prism" },
  { id: "tic-tac-toe", title: "Tic-Tac-Toe", category: "Web · Game", description: "Classic gameplay meets futuristic design — a high-fidelity implementation with fluid animations and a polished interface.", image: "/tic-tac-toe.png", techStack: ["React", "Tailwind", "Framer Motion", "Vite"], liveUrl: "https://tic-tac-toe-rust-rho.vercel.app/", githubUrl: "https://github.com/yatinsingh2007/Tic-Tac-Toe" },
  { id: "neura-chat", title: "Neura Chat", category: "AI · Chat", description: "An AI-first chat interface designed for seamless human-computer interaction and task completion.", image: "/neurachat 2.png", techStack: ["React.js", "Gemini API", "Tailwind", "Netlify"], liveUrl: "https://neura-chat.netlify.app/", githubUrl: "https://github.com/yatinsingh2007/Neura-Chat" },
  { id: "claude-chef", title: "Claude Chef", category: "AI · Vision", description: "A digital sous-chef for zero-waste cooking — generates recipes from existing ingredients using vision & language models.", image: "/Chef-claude.png", techStack: ["React.js", "Gemini Vision", "Tailwind", "Vercel"], liveUrl: "https://claude-chef.netlify.app", githubUrl: "https://github.com/yatinsingh2007/Claude-Chef" },
  { id: "steampunk", title: "SteamPunk", category: "Web · Experiment", description: "An experimental exploration of the SteamPunk aesthetic through code, featuring complex SVG animations and custom layouts.", image: "/steampunk 2.png", techStack: ["HTML5", "CSS3", "JavaScript", "SVG"], liveUrl: "https://yatinsingh2007.github.io/Project_Capstone_1.0/ProjectSteampunk1.0.html", githubUrl: "https://github.com/yatinsingh2007/Project_Capstone_1.0" },
  { id: "calculator", title: "Calculator", category: "Web · UI", description: "Precision meets design in this neumorphic calculator — a study in soft shadows, tactile UI and smooth evaluations.", image: "/calculator 2.png", techStack: ["React.js", "Tailwind", "Neumorphism"], liveUrl: "https://calculatoryatin.netlify.app/", githubUrl: "https://github.com/yatinsingh2007/Calculator" },
  { id: "netflix-clone", title: "Netflix Clone", category: "Web · Clone", description: "A pixel-perfect recreation of the world's leading streaming platform, focused on performance and visual fidelity.", image: "/netflix_clone.jpeg", techStack: ["HTML", "CSS", "JavaScript", "Responsive"], liveUrl: "https://yatinsingh2007.github.io/Netflix_Clone/Netflix.html", githubUrl: "https://github.com/yatinsingh2007/Netflix_Clone" },
];


const filters = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI & ML" },
  { id: "product", label: "Product" },
  { id: "systems", label: "Systems" },
];

function matchesFilter(project, filter) {
  if (filter === "all") return true;
  const category = project.category.toLowerCase();
  if (filter === "ai") return /ai|ml|llm/.test(category);
  if (filter === "systems") return /systems|open source/.test(category);
  return /full-stack|web/.test(category);
}

function ProjectMeta({ project }) {
  return (
    <div className="flex items-center gap-6 border-t border-line pt-5">
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="t-cta inline-flex items-center gap-1.5 text-ink-2 transition-colors hover:text-ink"
      >
        <Github size={15} /> Source
      </a>
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="t-cta inline-flex items-center gap-1.5 text-ink transition-colors hover:text-ink-2"
        >
          <ExternalLink size={15} /> Live
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      )}
    </div>
  );
}

function TechTags({ items }) {
  return (
    <div className="mb-6 mt-5 flex flex-wrap gap-1.5">
      {items.slice(0, 6).map((t) => (
        <Tag key={t}>{t}</Tag>
      ))}
    </div>
  );
}

/* Two to a row, each a 3D plate: it tilts toward the pointer and its
   layers lift off the glass by depth — shot first, then title, copy, tags. */
function ProjectCard({ project, index }) {
  return (
    <Reveal delay={(index % 2) * 0.07} className="h-full">
      <CardContainer className="group">
        <CardBody className="relative flex h-full w-full flex-col p-4 sm:p-5">
          <CardPlate />

          <CardItem translateZ={60} className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-line">
            <RevealImage
              src={project.image}
              alt={project.title}
              priority={index < 2}
              sizes="(max-width:768px) 100vw, 50vw"
              imgClassName="grayscale-[0.45] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.03]"
            />
          </CardItem>

          <div className="relative flex flex-1 flex-col px-1 pt-6 sm:px-2">
            <CardItem translateZ={30} className="t-meta text-ink-soft">
              {project.category}
            </CardItem>
            <CardItem as="h3" translateZ={45} className="t-h4 mt-2 text-ink">
              {project.title}
            </CardItem>
            <CardItem as="p" translateZ={25} className="t-body mt-3 text-pretty text-ink-2">
              {project.description}
            </CardItem>
            <CardItem translateZ={20}>
              <TechTags items={project.techStack} />
            </CardItem>
            <CardItem translateZ={35} className="mt-auto">
              <ProjectMeta project={project} />
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </Reveal>
  );
}

export default function Project() {
  const [activeFilter, setActiveFilter] = useState("all");
  const visibleProjects = projects.filter((project) => matchesFilter(project, activeFilter));

  return (
    <main className="min-h-screen w-full text-ink">
      <SiteNav />

      <PageHeader
        title="A catalogue of what I've built"
        description="Full-stack products, ML pipelines, agentic systems and developer tooling — each one shipped, not shelved."
        meta={[`${projects.length} projects`, "2023 — 2026"]}
      />

      <Section className="pt-14 md:pt-20">
        <Container>
          {/* filter rail */}
          <div className="flex flex-wrap items-center justify-center gap-2" aria-label="Filter projects">
            {filters.map((filter) => {
              const active = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  aria-pressed={active}
                  className={`relative h-10 overflow-hidden rounded-full border px-5 t-cta transition-colors duration-300 ${
                    active
                      ? "border-transparent text-void"
                      : "border-line bg-paper-2 text-ink-2 backdrop-blur-xl hover:bg-paper-3 hover:text-ink"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="active-project-filter"
                      className="absolute inset-0 z-0 bg-ink"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{filter.label}</span>
                </button>
              );
            })}
          </div>

          <motion.div layout className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2">
            {visibleProjects.map((p, i) => (
              <motion.div
                layout
                key={p.id}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="h-full"
              >
                <ProjectCard project={p} index={i} />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <Reveal>
            <div className="astra-surface flex flex-col items-center rounded-3xl px-6 py-20 text-center md:px-16">
              <h2 className="t-h2 max-w-[18ch] text-balance text-ink">
                Have a project in mind?
              </h2>
              <p className="t-lead mt-5 max-w-[42ch] text-ink-2">
                I&apos;m always up for building something new. Let&apos;s talk.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <Link href="/contact" className={btnPrimary}>
                  Start a conversation
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
                <Link href="/about" className={btnGhost}>About me</Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <SiteFooter />
    </main>
  );
}
