"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Navbar } from "@/section/Navbar";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Footer from "@/section/Footer";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 123,
    title: "Shopsmart",
    description: "A fully functional e-commerce website with features like product listing, cart management, and user authentication.",
    image: "/shopsmart.png",
    techStack: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL", "Docker", "Terraform", "AWS-ECS", "AWS-S3"],
    githubUrl: "https://github.com/yatinsingh2007/shopsmart",
    gradient: "from-emerald-500 to-teal-500",
    shadowColor: "rgba(16, 185, 129, 0.1)",
  },
  {
    id: 122,
    title: "Velox",
    description: "Velox is a high-performance, containerized code execution engine (Online Judge) built with Go and Docker. It allows you to submit code in various languages, execute it against multiple test cases, and receive detailed resource usage (time and memory) along with execution status.",
    image: "/Velox.png",
    techStack: ["Go", "Docker", "Docker Compose"],
    githubUrl: "https://github.com/yatinsingh2007/Velox",
    gradient: "from-emerald-500 to-teal-500",
    shadowColor: "rgba(16, 185, 129, 0.1)",
  },
  {
    id: -1,
    title: "ReportLens AI",
    description: "A sophisticated AI platform designed to transform how you interact with PDF reports. It extracts key insights and answers complex questions using advanced natural language processing.",
    image: "/ReportLensAI.jpeg",
    techStack: ["Next.js", "Tailwind CSS", "Gemini AI", "Prisma", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/yatinsingh2007/ReportLens-AI",
    gradient: "from-emerald-500 to-teal-500",
    shadowColor: "rgba(16, 185, 129, 0.1)",
  },
  {
    id: -2,
    title: "Cordis Sentinel",
    description: "An agentic AI pipeline for heart attack risk prediction. Built on a real-world messy clinical dataset with extensive cleaning — missing values, inconsistent encodings, outlier treatment. Combines Logistic Regression and Decision Tree with SHAP-based explainability, then layers a Plan-Execute-Reflect agentic architecture that reasons over predictions and feature attributions to produce clinically-grounded risk explanations, not just a raw probability score.",
    image: "/cordis-sentinel.png",
    techStack: ["Python", "Scikit-learn", "SHAP", "LangGraph", "LangChain", "ChromaDB", "Llama 3", "Groq", "Streamlit", "Pandas"],
    githubUrl: "https://github.com/yatinsingh2007/Cordis-Sentinel",
    gradient: "from-rose-600 to-red-700",
    shadowColor: "rgba(225, 29, 72, 0.1)",
  },
  {
    id: 0,
    title: "CreditIQ",
    description: "An agentic credit-risk system that pairs ML classifiers (Logistic Regression + Decision Tree) with a RAG-retrieved credit-policy rulebook. A LangGraph pipeline grounds each prediction against the relevant lending rules to produce an explainable credit decision.",
    image: "/creditIQ.jpeg",
    techStack: ["Python", "Streamlit", "LangGraph", "ChromaDB", "Llama 3", "Groq", "scikit-learn"],
    liveUrl: "https://creditiq123.streamlit.app",
    githubUrl: "https://github.com/yatinsingh2007/CreditIQ",
    gradient: "from-indigo-600 to-violet-500",
    shadowColor: "rgba(99, 102, 241, 0.1)",
  },
  {
    id: 1,
    title: "VintiCode",
    description: "Empowering next-gen developers with an intuitive coding environment. Focuses on building logic and intuition through interactive challenges and automated evaluation.",
    image: "/vinticode.png",
    techStack: ["Next.js", "Node.js", "Redis", "Prisma", "PostgreSQL", "Tailwind"],
    liveUrl: "https://vinticode.vercel.app/",
    githubUrl: "https://github.com/yatinsingh2007/VintiCode",
    gradient: "from-cyan-500 to-blue-500",
    shadowColor: "rgba(6, 182, 212, 0.1)",
  },
  {
    id: 2,
    title: "Next Horizon",
    description: "A professional network reimagined for modern connectivity. Share milestones, network with peers, and discover opportunities in a sleek, reactive ecosystem.",
    image: "/NextHorizon.png",
    techStack: ["React.js", "MongoDB", "Express.js", "Node.js", "Framer Motion"],
    liveUrl: "https://next-horizon-nine.vercel.app/",
    githubUrl: "https://github.com/yatinsingh2007/Next-Horizon",
    gradient: "from-blue-600 to-indigo-700",
    shadowColor: "rgba(37, 99, 235, 0.1)",
  },
  {
    id: 10000000,
    title: "create-prism",
    description: "A fast, no-nonsense CLI to scaffold Node.js + Express + Prisma (MySQL) starter projects in JavaScript or TypeScript.",
    image: "/create-prism.png",
    techStack: ["Node.js", "Express.js", "Prisma", "MySQL", "JavaScript", "TypeScript"],
    githubUrl: "https://github.com/yatinsingh2007/create-prism",
    liveUrl: "https://www.npmjs.com/package/create-prism",
    gradient: "from-emerald-500 to-teal-500",
    shadowColor: "rgba(16, 185, 129, 0.1)",
  },
  {
    id: 3,
    title: "Tic-Tac-Toe",
    description: "Classic gameplay meets futuristic design. A high-fidelity implementation featuring fluid animations and a polished glassmorphic interface.",
    image: "/tic-tac-toe.png",
    techStack: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    liveUrl: "https://tic-tac-toe-rust-rho.vercel.app/",
    githubUrl: "https://github.com/yatinsingh2007/Tic-Tac-Toe",
    gradient: "from-fuchsia-500 to-pink-500",
    shadowColor: "rgba(217, 70, 239, 0.1)",
  },
  {
    id: 4,
    title: "Neura Chat",
    description: "Conversational intelligence at your fingertips. An AI-first chat interface designed for seamless human-computer interaction and task completion.",
    image: "/neurachat 2.png",
    techStack: ["React.js", "Gemini API", "Tailwind CSS", "Netlify"],
    liveUrl: "https://neura-chat.netlify.app/",
    githubUrl: "https://github.com/yatinsingh2007/Neura-Chat",
    gradient: "from-orange-500 to-amber-500",
    shadowColor: "rgba(245, 158, 11, 0.1)",
  },
  {
    id: 5,
    title: "Claude Chef",
    description: "Your digital sous-chef for zero-waste cooking. Generates gourmet recipes from existing ingredients using state-of-the-art vision and language models.",
    image: "/Chef-claude.png",
    techStack: ["React.js", "Gemini Vision", "Tailwind CSS", "Vercel"],
    liveUrl: "https://claude-chef.netlify.app",
    githubUrl: "https://github.com/yatinsingh2007/Claude-Chef",
    gradient: "from-rose-500 to-red-600",
    shadowColor: "rgba(244, 63, 94, 0.1)",
  },
  {
    id: 6,
    title: "SteamPunk",
    description: "An experimental exploration of the SteamPunk aesthetic through code. Featuring complex SVG animations and custom layout engines.",
    image: "/steampunk 2.png",
    techStack: ["HTML5", "CSS3", "JavaScript", "SVG Animation"],
    liveUrl: "https://yatinsingh2007.github.io/Project_Capstone_1.0/ProjectSteampunk1.0.html",
    githubUrl: "https://github.com/yatinsingh2007/Project_Capstone_1.0",
    gradient: "from-amber-700 to-orange-900",
    shadowColor: "rgba(180, 83, 9, 0.1)",
  },
  {
    id: 7,
    title: "Calculator",
    description: "Precision meets design in this neumorphic calculator. A study in soft shadows, tactile UI, and smooth mathematical evaluations.",
    image: "/calculator 2.png",
    techStack: ["React.js", "Tailwind CSS", "Neumorphism"],
    liveUrl: "https://calculatoryatin.netlify.app/",
    githubUrl: "https://github.com/yatinsingh2007/Calculator",
    gradient: "from-slate-600 to-slate-900",
    shadowColor: "rgba(71, 85, 105, 0.1)",
  },
  {
    id: 8,
    title: "Netflix Clone",
    description: "A pixel-perfect recreation of the world's leading streaming platform, focusing on performance, responsiveness, and visual fidelity.",
    image: "/netflix_clone.jpeg",
    techStack: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    liveUrl: "https://yatinsingh2007.github.io/Netflix_Clone/Netflix.html",
    githubUrl: "https://github.com/yatinsingh2007/Netflix_Clone",
    gradient: "from-red-600 to-zinc-950",
    shadowColor: "rgba(220, 38, 38, 0.1)",
  },
];

export default function Project() {
  const cardRefs = useRef([]);
  const heroRef  = useRef(null);

  useEffect(() => {
    // Hero entrance
    if (heroRef.current && heroRef.current.children) {
      gsap.fromTo(
        heroRef.current.children,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.14,
          ease: "power3.out",
          delay: 0.1,
        }
      );
    }

    // Each project card reveals as it enters the viewport
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      gsap.set(card, { opacity: 0, y: 48 });
      ScrollTrigger.create({
        trigger: card,
        start: "top 85%",
        once: true,
        onEnter: () =>
          gsap.to(card, {
            opacity: 1,
            y: 0,
            duration: 0.85,
            delay: (i % 2) * 0.1,  // slight offset for left/right columns
            ease: "power3.out",
          }),
      });
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div className="min-h-screen relative bg-black selection:bg-white/20 overflow-x-hidden">
      <Navbar />
      <BackgroundBeams className="opacity-40" />

      <div className="relative z-10 pt-40 pb-20 px-6">
        <div ref={heroRef} className="max-w-7xl mx-auto text-center space-y-8">
          <div className="flex flex-col items-center gap-4">
            <div className="px-4 py-1 rounded-full border border-white/10 bg-white/5 text-zinc-400 text-xs font-bold tracking-[0.3em] uppercase">
              Gallery of Innovation
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent tracking-tighter leading-tight">
              Digital <br className="md:hidden" /> Masterpieces
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl mx-auto font-light leading-relaxed">
            Each project is a unique blend of <span className="text-white font-normal">creative vision</span> and <span className="text-white font-normal">technical excellence</span>.
          </p>

          <div className="flex items-center justify-center pt-4">
            <div className="px-6 py-3 rounded-2xl bg-neutral-900/50 border border-white/5 backdrop-blur-xl flex items-center gap-4 cursor-default">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </div>
              <span className="text-neutral-300 font-medium tracking-wide">
                {projects.length} Elite Projects Cataloged
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 px-6 pb-40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-24">
          {projects.map((project, i) => (
            <div key={project.id} ref={(el) => (cardRefs.current[i] = el)}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 py-24 border-t border-white/5 bg-neutral-950/20 backdrop-blur-3xl">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            Have a project in mind?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-white text-black font-bold hover:bg-neutral-200 transition-all group shadow-xl shadow-white/5"
          >
            Start a Conversation
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
