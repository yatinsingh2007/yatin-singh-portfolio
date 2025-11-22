"use client";
import { useEffect } from "react";
import Image from "next/image";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { NavbarDemo } from "@/section/Navbar";
import Footer from "@/section/Footer";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Server, Cpu, Globe, Terminal } from "lucide-react";

export default function About() {
  useEffect(() => {
    document.body.style.backgroundColor = "black";
    return () => (document.body.style.backgroundColor = "black");
  }, []);

  const skills = [
    { name: "Full Stack Development", icon: <Globe className="w-4 h-4" /> },
    { name: "MERN Stack", icon: <Database className="w-4 h-4" /> },
    { name: "Django", icon: <Server className="w-4 h-4" /> },
    { name: "GoLang", icon: <Code className="w-4 h-4" /> },
    { name: "DevOps", icon: <Terminal className="w-4 h-4" /> },
    { name: "AI/ML", icon: <Cpu className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen w-full bg-black text-white relative overflow-hidden flex flex-col">
      <NavbarDemo />
      
      <main className="flex-grow relative z-10 flex items-center justify-center py-20 px-4 sm:px-6">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-zinc-900 shadow-2xl">
                <Image
                  src="/yatin_singh.jpeg"
                  alt="Yatin Singh"
                  fill
                  className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col gap-6 text-center lg:text-left"
          >
            <div className="md:mt-12">
              <h2 className="text-sm font-semibold text-indigo-400 tracking-widest uppercase mb-2">
                About Me
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-500 mb-6">
                Yatin Singh
              </h1>
            </div>

            <div className="space-y-4 text-zinc-400 text-lg leading-relaxed">
              <p>
                Hey! I'm a passionate developer currently in my <span className="text-white font-medium">2nd year of B.Tech</span> at <span className="text-white font-medium">Newton School of Technology, Rishihood University</span>.
              </p>
              <p>
                I have a deep focus on building strong foundations in <span className="text-indigo-400">Full-Stack Development</span> and <span className="text-purple-400">AI/ML</span>. My journey includes hands-on internship experience where I architected real-world backend systems and worked with modern web technologies.
              </p>
              <p>
                My long-term vision is to master the intersection of engineering and AI—specializing in <span className="text-white">MERN, Django, GoLang, DevOps, and LLMs</span>.
              </p>
            </div>

            {/* Skills/Interests */}
            <div className="pt-6">
              <h3 className="text-sm font-semibold text-zinc-300 mb-4 uppercase tracking-wider">
                Tech Stack & Interests
              </h3>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {skills.map((skill, index) => (
                  <Badge 
                    key={index}
                    variant="secondary"
                    className="bg-zinc-900/50 hover:bg-zinc-800 text-zinc-300 border-zinc-700 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 flex items-center gap-2"
                  >
                    {skill.icon}
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Personal Interests */}
            <div className="pt-4 border-t border-zinc-800 mt-4">
              <p className="text-zinc-500 text-sm italic">
                Outside of tech, I explore Science, History, Cooking, and Video Games.
              </p>
            </div>

          </motion.div>
        </div>
      </main>

      <div className="fixed inset-0 z-0 pointer-events-none">
        <BackgroundBeams />
      </div>
      
      <Footer />
    </div>
  );
}
