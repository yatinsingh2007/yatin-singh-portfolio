"use client";
import { Navbar } from "../section/Navbar";
import Prism from "../components/Prism";
import Skills from "@/section/Skills";
import GlowingButton from "@/section/GlowingButton";
import { Github, Linkedin, Instagram, ChevronDown, Sparkles } from "lucide-react";
import Footer from "@/section/Footer";
import Hero from "@/section/Hero";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative w-full min-h-screen bg-black text-white selection:bg-indigo-500/30">
        {/* Hero Section */}
        <div className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Prism
              animationType="rotate"
              timeScale={0.45}
              height={3.5}
              baseWidth={5.5}
              scale={3.8}
              hueShift={0}
              colorFrequency={1}
              noise={0.25}
              glow={1.2}
              suspendWhenOffscreen
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black z-0" />

          <div className="z-10 text-center px-4 sm:px-6 flex flex-col items-center gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >

              
              <h1 className="text-6xl sm:text-7xl md:text-9xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/30 pb-2">
                K. Yatin Singh
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl sm:text-2xl md:text-3xl text-zinc-400 font-light max-w-3xl leading-relaxed"
            >
              Building the future with <span className="text-white font-medium">Full Stack Development</span> & <span className="text-white font-medium">AI Intelligence</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap justify-center gap-3 text-sm sm:text-base"
            >
              {["Student At NST", "Ex-Intern @AssuredGig", "Web Developer"].map((tag, i) => (
                <span key={tag} className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-zinc-400 hover:text-white hover:border-white/20 transition-all duration-300">
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap justify-center gap-6 pt-6"
            >
              <GlowingButton
                text="GitHub"
                icon={<Github size={20} />}
                onClick={() =>
                  window.open("https://github.com/yatinsingh2007", "_blank")
                }
              />

              <GlowingButton
                text="LinkedIn"
                icon={<Linkedin size={20} />}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/yatin-singh-b37817323/",
                    "_blank",
                  )
                }
              />

              <GlowingButton
                text="Instagram"
                icon={<Instagram size={20} />}
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/yatin_singh27",
                    "_blank",
                  )
                }
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 z-10 text-zinc-500 cursor-pointer hover:text-white transition-colors"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-[10px] uppercase tracking-[0.3em] font-medium opacity-50">Scroll</span>
              <ChevronDown size={20} className="animate-bounce" />
            </div>
          </motion.div>
        </div>

        {/* Projects Parallax Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative z-10 -mt-20"
        >
          <Hero />
        </motion.section>

        {/* Skills Section */}
        <section
          id="skills"
          className="relative w-full py-40 flex flex-col items-center justify-center bg-black overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-transparent to-transparent pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-24 z-10 px-4"
          >
            <h2 className="text-xs font-bold text-indigo-400 tracking-[0.5em] uppercase mb-4 opacity-80">
              Expertise
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              Tech Stack & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Toolbox</span>
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full max-w-6xl px-4 z-10"
          >
            <Skills />
          </motion.div>
        </section>

        <Footer />
      </main>
    </>
  );
}
