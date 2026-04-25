"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const ProjectCard = ({ project }) => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tracking for spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div 
      className="w-full flex justify-center group"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContainer className="inter-var w-full">
        <CardBody className="bg-neutral-950/40 relative group/card dark:hover:shadow-2xl dark:hover:shadow-indigo-500/[0.1] border-white/5 w-full sm:w-[35rem] h-auto rounded-[2.5rem] p-1 border backdrop-blur-xl overflow-hidden transition-all duration-500">
          {/* Spotlight Effect */}
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: useTransform(
                [mouseX, mouseY],
                ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(99, 102, 241, 0.08), transparent 80%)`
              ),
            }}
          />

          <div className="p-8 relative z-10">
            {/* Header: Title and Description */}
            <div className="space-y-3">
              <CardItem
                translateZ="50"
                className="text-3xl font-bold text-white tracking-tight flex items-center justify-between w-full"
              >
                {project.title}
                <motion.div
                  animate={isHovered ? { rotate: 45, x: 2, y: -2 } : { rotate: 0, x: 0, y: 0 }}
                  className="p-2 rounded-full bg-white/5 border border-white/10"
                >
                  <ArrowUpRight size={18} className="text-white/50" />
                </motion.div>
              </CardItem>
              
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-400 text-base max-w-sm leading-relaxed font-light line-clamp-2"
              >
                {project.description}
              </CardItem>
            </div>

            {/* Image Section */}
            <CardItem translateZ="100" className="w-full mt-8">
              <div className="relative group/image overflow-hidden rounded-2xl aspect-[16/9] border border-white/10 shadow-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover/card:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover/card:opacity-30 transition-opacity duration-500" />
                
                {/* Overlay with tags on hover? Or just keep them below. Let's keep them below for readability. */}
              </div>
            </CardItem>

            {/* Tech Stack */}
            <CardItem
              translateZ="70"
              className="flex flex-wrap gap-2 mt-8"
            >
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-bold rounded-lg bg-white/5 border border-white/10 text-neutral-300 hover:bg-white/10 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </CardItem>
            
            {/* Actions */}
            <div className="flex justify-between items-center mt-12 pt-6 border-t border-white/5">
              <CardItem
                translateZ={20}
                as={Link}
                href={project.liveUrl || "#"}
                target="_blank"
                className={cn(
                  "px-4 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2",
                  project.liveUrl ? "text-neutral-300 hover:text-white" : "text-neutral-600 cursor-not-allowed"
                )}
              >
                View Live <ExternalLink size={14} />
              </CardItem>
              
              <CardItem
                translateZ={20}
                as={Link}
                href={project.githubUrl}
                target="_blank"
                className="group/btn px-6 py-2.5 rounded-full bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-500 transition-all flex items-center gap-2 shadow-lg shadow-indigo-500/20 active:scale-95"
              >
                <Github size={16} />
                <span>Source Code</span>
              </CardItem>
            </div>
          </div>

          {/* Grain Texture */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }} />
        </CardBody>
      </CardContainer>
    </motion.div>
  );
};
