"use client";
import React from "react";
import { motion } from "motion/react";
import { LampContainer } from "@/components/ui/lamp";
 
export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl mb-10"
      >
        About Me
      </motion.h1>
      <motion.section         
      initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}>
          <p className="text-gray-300 text-base md:text-lg max-w-3xl text-center leading-relaxed">
          I am <strong>K. Yatin Singh</strong> from India 🌏, currently a second-year
          B.Tech student at Newton School of Technology, pursuing Computer Science & AI.💻
          I have a strong interest in full stack development and have built and practised these skills by building mini level projects
        </p>
        <p className="text-gray-300 text-base md:text-lg max-w-3xl text-center leading-relaxed">
          Before focusing on development, I was passionate about astronomy🔭 and
          enjoyed exploring the cosmos. Alongside, I love watching anime📺 and
          listening to podcasts🎧, which constantly inspire my creativity.
        </p>
        <p className="text-gray-300 text-base md:text-lg max-w-3xl text-center leading-relaxed">
          I have experience working on an early age start-up named AssuredGig where i have personally worked as a Full-Stack Developer , 
          and I am always eager to learn new technologies
          and frameworks. I aim to secure a FullStack development internship soon
          and contribute to projects that make a real impact🚀.
        </p>
      </motion.section>
    </LampContainer>
  );
}