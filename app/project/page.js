"use client"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { NavbarDemo } from "@/section/Navbar"
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card"
import Link from "next/link"
import Image from "next/image"
import Footer from "@/section/Footer"

export default function Project(){
    const projects = [
        {
            id: 1,
            title: "VintiCode",
            description: "A beginner-focused coding practice platform that builds problem-solving intuition before formal DSA. It offers a series of challenges with automated test case execution to strengthen logical reasoning and coding fundamentals.",
            image: "/vinticode 2.png",
            techStack: ["Next.js", "Tailwind CSS", "Node.js", "Express.js", "Prisma" , "PostgreSQL" , "Vercel"],
            liveUrl: "https://vinticode.vercel.app/",
            githubUrl: "https://github.com/yatinsingh2007/VintiCode",
            gradient: "from-cyan-500 to-blue-500"
        },
        {
            id: 2,
            title: "Next Horizon",
            description: "A networking platofrom where users can connect with other users and share their experiences.",
            image: "/nexthorizon2.png",
            techStack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "mongoose" , "MongoDB" , "Vercel" , "Render"],
            liveUrl: "https://next-horizon-nine.vercel.app/",
            githubUrl: "https://github.com/yatinsingh2007/Next-Horizon",
            gradient: "from-emerald-500 to-teal-500"
        },
        {
            id: 3,
            title: "Tic-Tac-Toe`",
            description: "A simple Tic-Tac-Toe game built with React and Tailwind CSS.",
            image: "/tic-tac-toe.png",
            techStack: ["React","Tailwind CSS"],
            liveUrl: "https://tic-tac-toe-rust-rho.vercel.app/",
            githubUrl: "https://github.com/yatinsingh2007/Tic-Tac-Toe",
            gradient: "from-purple-500 to-pink-500"
        },
        {
            id: 4,
            title: "Neura Chat",
            description: "Collaborative project management tool with kanban boards, time tracking, and team analytics.",
            image: "/neurachat 2.png",
            techStack: ["React.js" , "Tailwind CSS" , "Gemini API" , "Vercel"],
            liveUrl: "https://neura-chat.netlify.app/",
            githubUrl: "https://github.com/yatinsingh2007/Neura-Chat",
            gradient: "from-orange-500 to-red-500"
        },
        {
            id: 5,
            title: "Claude Chef",
            description: "Created A website where use gets recipes based on whatever ingredient they have.",
            image: "/Chef-claude.png",
            techStack: ["React.js" , "Tailwind CSS" , "Gemini API" , "Vercel"],
            liveUrl: "https://claude-chef.netlify.app",
            githubUrl: "https://github.com/yatinsingh2007/Claude-Chef",
            gradient: "from-indigo-500 to-blue-500"
        },
        {
            id: 6,
            title: "SteamPunk",
            description: "Created a steampunk-style website using HTML5 and CSS3 , which contains all the retro anf futrestic design with animationa",
            image: "/steampunk 2.png",
            techStack: ["HTML5" , "CSS3" , "Github Pages"],
            liveUrl: "https://yatinsingh2007.github.io/Project_Capstone_1.0/ProjectSteampunk1.0.html",
            githubUrl: "https://github.com/yatinsingh2007/Project_Capstone_1.0",
            gradient: "from-green-500 to-emerald-500"
        } ,
        {
            id: 7,
            title: "Calculator",
            description: "created a calculator using react.js and tailwind css",
            image: "/calculator.png",
            techStack: ["React.js" , "Tailwind CSS" , "Vercel"],
            liveUrl: "https://calculatoryatin.netlify.app/",
            githubUrl: "https://github.com/yatinsingh2007/Calculator",
            gradient: "from-green-500 to-emerald-500"
        }
    ]

    return (
        <div className="min-h-screen relative">
            <NavbarDemo />
            <BackgroundBeams />
            
            <div className="relative z-10 pt-32 pb-16 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
                        My Projects
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-4">
                        Explore my portfolio of innovative solutions and creative implementations
                    </p>
                    <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            {projects.length} Projects
                        </span>
                    </div>
                </div>
            </div>

            <div className="relative z-10 px-4 pb-20">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
                    {projects.map((project) => (
                        <CardContainer key={project.id} className="inter-var">
                            <CardBody className="bg-gray-950/50 relative group/card border border-white/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 backdrop-blur-xl">
                                <CardItem
                                    translateZ="100"
                                >
                                    <div className="relative w-full h-60 rounded-xl overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            width={480}
                                            height={240}
                                            className="w-full h-full object-cover group-hover/card:scale-110 transition-transform duration-500"
                                        />
                                        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10 group-hover/card:opacity-20 transition-opacity duration-300`}></div>
                                    </div>
                                </CardItem>

                                <CardItem
                                    translateZ="50"
                                    className="text-xl font-bold text-white mt-6"
                                >
                                    {project.title}
                                </CardItem>

                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="text-gray-400 text-sm mt-3 leading-relaxed"
                                >
                                    {project.description}
                                </CardItem>

                                <CardItem
                                    translateZ="70"
                                    className="flex flex-wrap gap-2 mt-4"
                                >
                                    {project.techStack.map((tech, index) => (
                                        <span
                                            key={index}
                                            className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${project.gradient} bg-opacity-10 text-white border border-white/[0.1] backdrop-blur-sm`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </CardItem>

                                <div className="flex justify-between items-center mt-8">
                                    <CardItem
                                        translateZ={80}
                                        as={Link}
                                        href={project.liveUrl}
                                        className={`px-6 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r ${project.gradient} hover:shadow-lg hover:shadow-${project.gradient.split('-')[1]}-500/50 transition-all duration-300`}
                                    >
                                        Live Demo →
                                    </CardItem>
                                    <CardItem
                                        translateZ={80}
                                        as={Link}
                                        href={project.githubUrl}
                                        className="px-6 py-2 rounded-xl text-xs font-semibold text-gray-300 border border-white/[0.2] hover:bg-white/[0.05] transition-all duration-300"
                                    >
                                        GitHub
                                    </CardItem>
                                </div>
                            </CardBody>
                        </CardContainer>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}