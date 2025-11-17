"use client";
import { useEffect } from "react";
import Image from "next/image";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { NavbarDemo } from "@/section/Navbar";
import Footer from "@/section/Footer";

export default function About() {
  useEffect(() => {
    document.body.style.backgroundColor = "black";
    return () => (document.body.style.backgroundColor = "black");
  }, []);

  return (
    <>
      <div className="min-h-screen w-full rounded-md bg-neutral-950 relative flex items-center justify-center antialiased">
        <NavbarDemo />
        <div className="max-w-5xl mx-auto p-4 relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-32">
          <div className="flex-shrink-0">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border border-neutral-700 shadow-lg shadow-neutral-700/40">
              <Image
                src="/yatin_singh.jpeg"
                alt="Yatin"
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="relative z-10 text-4xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
              About Me
            </h1>

            <p className="text-neutral-500 my-4 text-sm md:text-base">
              Hey, I’m{" "}
              <span className="text-neutral-300 font-semibold">
                Yatin Singh
              </span>{" "}
              — a passionate developer currently in my 2nd year of B.Tech
              Studying in Newton School of Technology , Rishihood University I’m
              deeply focused on building a strong foundation in full-stack
              development and AI/ML.
            </p>

            <p className="text-neutral-500 my-4 text-sm md:text-base">
              I have prior full-stack internship experience , where I worked
              with modern web technologies and learned how real-world backend
              systems are built
            </p>

            <p className="text-neutral-500 my-4 text-sm md:text-base">
              My long-term goal is to master MERN, Django, GoLang, DevOps,
              Cloud, and ultimately specialize in AI and LLMs — with strong
              engineering depth.
            </p>

            <p className="text-neutral-500 my-4 text-sm md:text-base">
              Outside tech, I love Science , History , Cooking and Playing Video
              Games
            </p>
          </div>
        </div>
        <BackgroundBeams />
      </div>
      <Footer />
    </>
  );
}
