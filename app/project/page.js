"use client"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { NavbarDemo } from "@/section/Navbar"
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Footer from "@/section/Footer"
import { motion } from "framer-motion"

export default function Project() {
    const projects = [
        {
            id: -1,
            title: "ReportLens AI",
            description: "ReportLens AI is a web application that uses AI to analyze and summarize PDF reports. It allows users to upload PDF files and receive AI-generated summaries, key insights, and answers to specific questions about the content.",
            image: "/ReportLensAI.jpeg",
            techStack: ["Next.js", "Tailwind CSS", "Gemini API", "Node.js", "PostgreSQL", "Prisma", "Docker"],
            githubUrl: "https://github.com/yatinsingh2007/ReportLens-AI",
            gradient: "from-green-500 to-emerald-500",
            shadowColor: "rgba(16, 185, 129, 0.1)"
        },
        {
            id: 0,
            title: "CreditIQ",
            description: "An advanced AI-driven credit decisioning engine using the PER (Plan-Execute-Reflect-Report) framework. Orchestrates multi-agent Llama models with RAG-powered credit policy analysis via ChromaDB.",
            image: "/creditIQ.jpeg",
            techStack: ["Python", "Streamlit", "Llama 3", "LangGraph", "ChromaDB", "Groq", "RAG"],
            liveUrl: "https://creditiq123.streamlit.app",
            githubUrl: "https://github.com/yatinsingh2007/CreditIQ",
            gradient: "from-blue-600 to-cyan-500",
            shadowColor: "rgba(6, 182, 212, 0.1)"
        },
        {
            id: 1,
            title: "VintiCode",
            description: "A beginner-focused coding practice platform that builds problem-solving intuition before formal DSA. Offers automated test case execution to strengthen logical reasoning.",
            image: "/vinticode.png",
            techStack: ["Next.js", "Tailwind CSS", "Node.js", "Prisma", "PostgreSQL", "Redis"],
            liveUrl: "https://vinticode.vercel.app/",
            githubUrl: "https://github.com/yatinsingh2007/VintiCode",
            gradient: "from-cyan-500 to-blue-500",
            shadowColor: "rgba(59, 130, 246, 0.1)"
        },
        {
            id: 2,
            title: "Next Horizon",
            description: "A networking platform where users can connect with other users and share their professional experiences and milestones.",
            image: "/nexthorizon.png",
            techStack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
            liveUrl: "https://next-horizon-nine.vercel.app/",
            githubUrl: "https://github.com/yatinsingh2007/Next-Horizon",
            gradient: "from-emerald-500 to-teal-500",
            shadowColor: "rgba(20, 184, 166, 0.1)"
        },
        {
            id: 3,
            title: "Tic-Tac-Toe",
            description: "A sleek, responsive Tic-Tac-Toe game with a modern aesthetic, built to demonstrate state management and UI polish.",
            image: "/tic-tac-toe.png",
            techStack: ["React", "Tailwind CSS", "Framer Motion"],
            liveUrl: "https://tic-tac-toe-rust-rho.vercel.app/",
            githubUrl: "https://github.com/yatinsingh2007/Tic-Tac-Toe",
            gradient: "from-purple-500 to-pink-500",
            shadowColor: "rgba(236, 72, 153, 0.1)"
        },
        {
            id: 4,
            title: "Neura Chat",
            description: "An AI-powered chat interface that leverages modern LLMs for intelligent conversations and task assistance.",
            image: "/neurachat 2.png",
            techStack: ["React.js", "Tailwind CSS", "Gemini API", "Netlify"],
            liveUrl: "https://neura-chat.netlify.app/",
            githubUrl: "https://github.com/yatinsingh2007/Neura-Chat",
            gradient: "from-orange-500 to-red-500",
            shadowColor: "rgba(239, 68, 68, 0.1)"
        },
        {
            id: 5,
            title: "Claude Chef",
            description: "A culinary AI that generates creative recipes based on the ingredients you have on hand, helping reduce food waste.",
            image: "/Chef-claude.png",
            techStack: ["React.js", "Tailwind CSS", "Gemini API", "Vercel"],
            liveUrl: "https://claude-chef.netlify.app",
            githubUrl: "https://github.com/yatinsingh2007/Claude-Chef",
            gradient: "from-indigo-500 to-blue-500",
            shadowColor: "rgba(79, 70, 229, 0.1)"
        },
        {
            id: 6,
            title: "SteamPunk",
            description: "A stylized capstone project exploring retro-futuristic design principles with advanced CSS animations and layout techniques.",
            image: "/steampunk 2.png",
            techStack: ["HTML5", "CSS3", "JavaScript", "Animation"],
            liveUrl: "https://yatinsingh2007.github.io/Project_Capstone_1.0/ProjectSteampunk1.0.html",
            githubUrl: "https://github.com/yatinsingh2007/Project_Capstone_1.0",
            gradient: "from-amber-600 to-orange-700",
            shadowColor: "rgba(180, 83, 9, 0.1)"
        },
        {
            id: 7,
            title: "Calculator",
            description: "A modern calculator application featuring a clean neumorphic design and smooth interactions.",
            image: "/calculator 2.png",
            techStack: ["React.js", "Tailwind CSS", "Vercel"],
            liveUrl: "https://calculatoryatin.netlify.app/",
            githubUrl: "https://github.com/yatinsingh2007/Calculator",
            gradient: "from-slate-500 to-slate-800",
            shadowColor: "rgba(71, 85, 105, 0.1)"
        },
        {
            id: 8,
            title: "Netflix Clone",
            description: "A high-fidelity visual clone of the Netflix landing page, focusing on responsive design and pixel-perfect styling.",
            image: "/netflix_clone.jpeg",
            techStack: ["HTML", "CSS", "JavaScript"],
            liveUrl: "https://yatinsingh2007.github.io/Netflix-Clone/Netflix.html",
            githubUrl: "https://github.com/yatinsingh2007/Netflix-Clone",
            gradient: "from-red-600 to-black",
            shadowColor: "rgba(220, 38, 38, 0.1)"
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    }

    return (
        <div className="min-h-screen relative bg-black selection:bg-cyan-500/30">
            <NavbarDemo />
            <BackgroundBeams />
            
            <div className="relative z-10 pt-32 pb-16 px-4">
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-7xl mx-auto text-center"
                >
                    <h1 className="text-5xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-400 to-purple-600 bg-clip-text text-transparent tracking-tighter">
                        Crafting Digital Experiences
                    </h1>
                    <p className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto mb-8 font-light">
                        A showcase of my journey in building intelligent, scalable, and visually stunning applications.
                    </p>
                    <div className="flex items-center justify-center gap-6">
                        <div className="px-4 py-2 rounded-full bg-neutral-900/50 border border-neutral-800 backdrop-blur-md flex items-center gap-3">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            <span className="text-neutral-300 font-medium">{projects.length} Projects Completed</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="relative z-10 px-4 pb-24">
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 justify-items-center"
                >
                    {projects.map((project) => (
                        <motion.div key={project.id} variants={itemVariants} className="w-full flex justify-center">
                            <CardContainer className="inter-var">
                                <CardBody 
                                    style={{ 
                                        '--hover-shadow': project.shadowColor 
                                    }}
                                    className="bg-neutral-950/40 relative group/card dark:hover:shadow-3xl dark:hover:shadow-[var(--hover-shadow)] dark:border-white/[0.1] border-black/[0.1] w-full sm:w-[32rem] h-auto rounded-3xl p-8 border backdrop-blur-sm transition-all duration-500"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover/card:opacity-[0.03] transition-opacity duration-500 rounded-3xl`} />
                                    
                                    <CardItem
                                        translateZ="50"
                                        className="text-2xl font-bold text-white tracking-tight"
                                    >
                                        {project.title}
                                    </CardItem>
                                    
                                    <CardItem
                                        as="p"
                                        translateZ="60"
                                        className="text-neutral-400 text-sm max-w-sm mt-3 leading-relaxed font-light"
                                    >
                                        {project.description}
                                    </CardItem>
                                    
                                    <CardItem translateZ="100" className="w-full mt-6">
                                        <div className="relative group/image overflow-hidden rounded-2xl border border-white/10">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                width={1200}
                                                height={800}
                                                className="h-64 w-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/20 group-hover/image:bg-transparent transition-colors duration-500" />
                                        </div>
                                    </CardItem>

                                    <CardItem
                                        translateZ="70"
                                        className="flex flex-wrap gap-2 mt-8"
                                    >
                                        {project.techStack.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 text-[10px] uppercase tracking-widest font-semibold rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </CardItem>
                                    
                                    <div className="flex justify-between items-center mt-12 pt-6 border-t border-white/5">
                                        {project.liveUrl ? (
                                            <CardItem
                                                translateZ={20}
                                                as={Link}
                                                href={project.liveUrl}
                                                target="_blank"
                                                className="px-4 py-2 rounded-xl text-sm font-medium text-neutral-300 hover:text-white transition-colors flex items-center gap-2"
                                            >
                                                View Live <ExternalLink size={14} />
                                            </CardItem>
                                        ) : <div />}
                                        
                                        <CardItem
                                            translateZ={20}
                                            as={Link}
                                            href={project.githubUrl}
                                            target="_blank"
                                            className="px-6 py-2.5 rounded-full bg-white text-black text-xs font-bold hover:bg-neutral-200 transition-colors flex items-center gap-2 shadow-lg shadow-white/10"
                                        >
                                            <Github size={16} />
                                            Code Base
                                        </CardItem>
                                    </div>
                                </CardBody>
                            </CardContainer>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            <Footer />
        </div>
    )
}
