"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";
import React from "react";
import { Navbar } from "@/section/Navbar";
import { FileText, ExternalLink, Calendar, Briefcase, Zap, Globe, Rocket } from "lucide-react";

function ExperienceCard({
  logo,
  companyName,
  companyDescription,
  startDate,
  endDate,
  features = [],
  offerLetterUrl,
  completionLetterUrl,
  index
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-4xl mx-auto mb-16 relative group"
    >
      {/* Decorative background glow */}
      <div className="absolute -inset-4 bg-emerald-500/5 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl pointer-events-none" />
      
      <Card className="relative bg-zinc-900/40 backdrop-blur-xl border border-white/5 text-white rounded-2xl overflow-hidden hover:border-emerald-500/30 transition-all duration-500 shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <CardContent className="p-6 sm:p-10">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left side: Logo & Timeline visual */}
            <div className="flex flex-col items-center gap-4">
              <div className="relative">
                <div className="absolute -inset-2 bg-emerald-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-zinc-950 border border-white/10 p-3 flex items-center justify-center overflow-hidden">
                  {logo ? (
                    <Image
                      src={logo}
                      alt={companyName}
                      width={80}
                      height={80}
                      className="object-contain w-full h-full"
                    />
                  ) : (
                    <Briefcase size={32} className="text-zinc-700" />
                  )}
                </div>
              </div>
              <div className="hidden md:block w-px h-full bg-gradient-to-b from-emerald-500/50 via-emerald-500/10 to-transparent mt-4" />
            </div>

            {/* Right side: Content */}
            <div className="flex-1 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300 flex items-center gap-3">
                    {companyName}
                    <motion.span 
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="h-2 w-2 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)]" 
                    />
                  </h2>
                  <div className="flex items-center gap-2 text-emerald-500/80 text-sm font-medium mt-1">
                    <Calendar size={14} />
                    <span>{startDate} — {endDate}</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  {offerLetterUrl && (
                    <a
                      href={offerLetterUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-emerald-500/10 hover:border-emerald-500/50 text-zinc-400 hover:text-emerald-400 transition-all duration-300"
                      title="Offer Letter"
                    >
                      <FileText size={18} />
                    </a>
                  )}
                  {completionLetterUrl && (
                    <a
                      href={completionLetterUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-emerald-500/10 hover:border-emerald-500/50 text-zinc-400 hover:text-emerald-400 transition-all duration-300"
                      title="Experience Letter"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-zinc-400 text-base sm:text-lg leading-relaxed font-light">
                {companyDescription}
              </p>

              <div className="space-y-4 pt-2">
                <h3 className="text-xs font-bold text-emerald-500 uppercase tracking-[0.2em] flex items-center gap-2">
                  <Zap size={14} />
                  Impact & Contributions
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {features.map((feature, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 group/feature hover:bg-white/[0.05] transition-all duration-300"
                    >
                      <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-500/40 group-hover/feature:bg-emerald-500 transition-colors" />
                      <span className="text-sm text-zinc-300 leading-tight">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function ExperiencePage() {
  const experiences = [
    {
      logo: "https://landing-page-ag-sable.vercel.app/assuredgiglogo.webp",
      companyName: "AssuredGig",
      companyDescription: "Architecting the future of secure freelancing. AssuredGig connects verified professionals with clients, prioritizing trust and guaranteed earnings through intelligent systems.",
      startDate: "June 2024",
      endDate: "August 2024",
      features: [
        "Architected complete backend with Django & DRF",
        "Optimized mobile performance (35% → 75%)",
        "Designed RESTful APIs for complex workflows",
        "Delivered MVP platform with cross-functional teams",
        "Implemented secure payment integration flows",
        "Enhanced user experience with real-time tracking"
      ],
      offerLetterUrl: "https://drive.google.com/file/d/1Y7g_iSAYbwe8d8bll0hXNRTvqVmoUCbD/view?usp=sharing",
      completionLetterUrl: "https://drive.google.com/file/d/1KCeFWM5e_lQdpjEVBcJNGlJZ6pm_aahM/view?usp=sharing"
    }
  ];

  return (
    <div className="min-h-screen w-full bg-black text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <BackgroundBeams />
      </div>
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10">
        <Navbar />
        
        <main className="pt-32 pb-32 px-4 max-w-6xl mx-auto">
          {/* Header */}
          <div className="relative mb-20 text-center sm:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6"
            >
              <Rocket size={14} />
              Professional Path
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-7xl font-bold tracking-tight mb-6"
            >
              Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Experience</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-zinc-400 max-w-2xl text-lg sm:text-xl font-light leading-relaxed"
            >
              A timeline of my professional growth, technical contributions, and the impact I've created across startups and innovative projects.
            </motion.p>
          </div>

          {/* Experience List */}
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} index={index} />
            ))}
          </div>

          {/* Footer Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 p-8 rounded-3xl bg-white/[0.02] border border-white/5 text-center relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <h3 className="text-2xl font-bold mb-4 relative z-10">Want to see more?</h3>
            <p className="text-zinc-400 mb-8 max-w-md mx-auto relative z-10">
              Check out my technical skills or explore my personal projects to see how I apply these experiences.
            </p>
            <div className="flex flex-wrap justify-center gap-4 relative z-10">
              <Button asChild className="bg-emerald-500 hover:bg-emerald-600 text-black font-bold px-8 py-6 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                <a href="/project">View Projects</a>
              </Button>
              <Button asChild variant="outline" className="border-white/10 hover:bg-white/5 px-8 py-6 rounded-xl transition-all">
                <a href="/about">About Me</a>
              </Button>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}

