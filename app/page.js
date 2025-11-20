"use client";
import { NavbarDemo } from "../section/Navbar";
import Prism from "../components/Prism";
import Skills from "@/section/Skills";
import GlowingButton from "@/section/GlowingButton";
import { Github, Linkedin, Instagram, ChevronDown } from "lucide-react";
import Footer from "@/section/Footer";
import Hero from "@/section/Hero";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <NavbarDemo />
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
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black z-0" />

          <div className="z-10 text-center px-4 sm:px-6 flex flex-col items-center gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-2"
            >
              <h2 className="text-sm md:text-base font-medium tracking-[0.2em] text-indigo-400 uppercase">
                Portfolio
              </h2>
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/50">
                K. Yatin Singh
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-lg sm:text-xl md:text-2xl text-zinc-400 font-light max-w-2xl"
            >
              Aspiring Full Stack Developer & AI/ML Enthusiast
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-wrap justify-center gap-3 text-sm sm:text-base text-zinc-500"
            >
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                Student At NST
              </span>
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                Ex-Intern @AssuredGig
              </span>
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                Web Developer
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="flex flex-wrap justify-center gap-6 pt-4"
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
                    "_blank"
                  )
                }
              />

              <GlowingButton
                text="Instagram"
                icon={<Instagram size={20} />}
                onClick={() =>
                  window.open("https://www.instagram.com/yatin_singh27", "_blank")
                }
              />
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 z-10 animate-bounce text-zinc-500"
          >
            <ChevronDown size={24} />
          </motion.div>
        </div>

        {/* Projects Parallax Section */}
        <section className="relative z-10 -mt-20">
          <Hero />
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="relative w-full py-32 flex flex-col items-center justify-center bg-black"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/10 to-transparent pointer-events-none" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 z-10"
          >
            <h2 className="text-sm font-semibold text-indigo-400 tracking-widest uppercase mb-3">
              Expertise
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              My Tech Stack
            </h1>
          </motion.div>

          <div className="w-full max-w-5xl px-4 z-10">
            <Skills />
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}