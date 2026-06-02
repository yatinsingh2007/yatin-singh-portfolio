"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";
import React from "react";
import { Navbar } from "@/section/Navbar";
import { FileText, ExternalLink, Calendar, Briefcase, Zap, Rocket } from "lucide-react";

function ExperienceCard({
  logo,
  companyName,
  companyDescription,
  startDate,
  endDate,
  duration,
  role,
  location,
  tags = [],
  features = [],
  offerLetterUrl,
  completionLetterUrl,
  index,
  isLast
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="w-full relative group"
    >
      {/* Decorative background glow on hover */}
      <div className="absolute -inset-x-4 -inset-y-6 bg-emerald-500/[0.02] rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl pointer-events-none" />

      {/* Timeline Circle Logo */}
      <div className="absolute left-[-24px] sm:left-[-40px] top-0.5 transform -translate-x-1/2 z-20">
        <div className="relative w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-zinc-950 border border-white/10 flex items-center justify-center overflow-hidden shadow-xl group-hover:border-emerald-500/30 transition-colors duration-500">
          {logo ? (
            <Image
              src={logo}
              alt={companyName}
              width={64}
              height={64}
              className="object-cover w-full h-full"
            />
          ) : (
            <Briefcase size={20} className="text-zinc-600" />
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="space-y-6">
        {/* Header: Company Name & Letters */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300 flex items-center gap-3">
              {companyName}
              <motion.span 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="h-2 w-2 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)]" 
              />
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed font-light mt-2 max-w-3xl">
              {companyDescription}
            </p>
          </div>
          
          {/* Action Links */}
          <div className="flex flex-wrap gap-2 sm:shrink-0">
            {offerLetterUrl && (
              <a
                href={offerLetterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-emerald-400 border border-white/5 hover:border-emerald-500/30 bg-zinc-900/40 backdrop-blur-md px-3 py-1.5 rounded-full transition-all duration-300"
                title="Offer Letter"
              >
                <FileText size={14} />
                <span>Offer Letter</span>
              </a>
            )}
            {completionLetterUrl && (
              <a
                href={completionLetterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-emerald-400 border border-white/5 hover:border-emerald-500/30 bg-zinc-900/40 backdrop-blur-md px-3 py-1.5 rounded-full transition-all duration-300"
                title="Experience Letter"
              >
                <ExternalLink size={14} />
                <span>Experience Letter</span>
              </a>
            )}
          </div>
        </div>

        {/* Sub-Header: Dates, Role, Location */}
        <div className="space-y-1.5 pt-2">
          <div className="text-zinc-500 text-xs sm:text-sm font-medium tracking-wide">
            {startDate} — {endDate} {duration && `· ${duration}`}
          </div>
          <div className="text-white text-lg sm:text-xl font-bold">
            {role} {location && <span className="text-zinc-400 font-normal"> — {location}</span>}
          </div>
        </div>

        {/* Impact Metric Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {tags.map((tag, idx) => (
              <Badge 
                key={idx}
                className="bg-teal-500/10 hover:bg-teal-500/20 border border-teal-500/20 text-teal-400 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {/* Features Worked On */}
        {features && features.length > 0 && (
          <div className="space-y-3 pt-3">
            <h3 className="text-sm font-bold text-zinc-200 tracking-wider">
              Features Worked on
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-zinc-400 font-light text-sm sm:text-base">
              {features.map((feature, i) => (
                <li key={i} className="leading-relaxed hover:text-zinc-300 transition-colors duration-200">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Horizontal Dashed Divider between experiences */}
      {!isLast && (
        <div className="w-full my-16 border-t border-dashed border-zinc-800" />
      )}
    </motion.div>
  );
}

export default function ExperiencePage() {
  const experiences = [
    {
      logo: "https://media.licdn.com/dms/image/v2/D4D0BAQFe6iYKRwjKHQ/company-logo_200_200/company-logo_200_200/0/1729863208386?e=2147483647&v=beta&t=kZz3W83vbFgwQRxQzivUKyFAEtPdEArdZmAR5SgnuqE" ,
      companyName : 'ByteBlock Technologies' ,
      startDate : 'June 2026' ,
      endDate : 'September 2026' ,
      companyDescription : 'Building tailored software solutions and digital strategies to help businesses thrive in the modern tech landscape',
      role : 'Full Stack Intern',
      location : 'Remote',
      tags : [],
      features : [],
      offerLetterUrl : 'https://drive.google.com/file/d/1S98KZtj4OYWdcR1ZsIEORwe5d9NUp9bc/view?usp=sharing',
      completionLetterUrl : null,
      duration : 'Present'
    } ,
    {
      logo: "https://landing-page-ag-sable.vercel.app/assuredgiglogo.webp",
      companyName: "AssuredGig",
      companyDescription: "Architecting the future of secure freelancing. AssuredGig connects verified professionals with clients, prioritizing trust and guaranteed earnings through intelligent systems.",
      startDate: "June 2025",
      endDate: "August 2025",
      duration: "2 mos",
      role: "Full Stack Intern",
      location: "Remote",
      tags: [
        "Optimized mobile performance (35% → 75%)",
        "Architected Django & DRF backend APIs"
      ],
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
        
        <main className="pt-32 pb-32 px-4 max-w-5xl mx-auto">
          {/* Header */}
          <div className="relative mb-24 text-center sm:text-left">
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

          {/* Timeline Experience List */}
          <div className="relative pl-12 sm:pl-20 mt-12 mb-28">
            {/* Vertical timeline line */}
            <div className="absolute left-[24px] sm:left-[40px] top-2 bottom-2 w-px bg-zinc-800" />
            
            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <ExperienceCard 
                  key={index} 
                  {...exp} 
                  index={index} 
                  isLast={index === experiences.length - 1} 
                />
              ))}
            </div>
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


