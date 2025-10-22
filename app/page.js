"use client";
import { useEffect } from "react";
import { NavbarDemo } from "../section/Navbar";
import Prism from "../components/Prism";
import Skills from "@/section/Skills";
import GlowingButton from "@/section/GlowingButton";
import { Github, Linkedin, Instagram } from "lucide-react";
import Footer from "@/section/Footer";

export default function Home() {
  useEffect(() => {
    document.body.style.backgroundColor = "#000000";
    return () => {
      document.body.style.backgroundColor = "#000000";
    };
  }, []);

  return (
    <>
      <NavbarDemo />
      <main className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center bg-black text-white">
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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black" />
        <div className="z-10 text-center px-6 flex flex-col items-center gap-6">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
            K. Yatin Singh
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 font-light mb-2">
            Aspiring Full Stack Developer & AI/ML Enthusiast
          </p>
          <p className="text-sm md:text-base text-gray-500 max-w-lg mx-auto mb-8">
            Building intuitive interfaces and turning creative ideas into interactive web experiences.
          </p>

          {/* Social Glowing Buttons */}
          <div className="flex flex-wrap justify-center gap-6">
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
                window.open(
                  "https://www.instagram.com/yatin_singh27",
                  "_blank"
                )
              }
            />
          </div>
        </div>
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
      </main>
      <section
        id="skills"
        className="relative w-full bg-black text-white py-20 flex flex-col items-center justify-center"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-10">My Skills</h1>
        <div className="flex flex-wrap justify-center gap-6">
          <Skills />
        </div>
      </section>
      <Footer/>
    </>
  );
}
