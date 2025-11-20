"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";
import React from "react";
import { NavbarDemo } from "@/section/Navbar";
import { FileText, ExternalLink, Calendar } from "lucide-react";

function ExperienceCard(props) {
  const {
    logo = null,
    companyName = "Company Name",
    companyDescription = "Short description about the role/company.",
    startDate = "Start Date",
    endDate = "Present",
    features = [],
    offerLetterUrl = null,
    completionLetterUrl = null,
  } = props || {};

  const safeFeatures = Array.isArray(features) ? features : [];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-3xl mx-auto mb-12 relative group"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-20 transition duration-500 blur-xl" />
      
      <Card className="relative bg-zinc-900/80 backdrop-blur-md border border-white/10 text-white rounded-2xl overflow-hidden hover:border-white/20 transition-colors duration-300">
        <CardContent className="p-5 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
            <div className="shrink-0 relative">
              <div className="absolute -inset-1 bg-indigo-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {logo ? (
                <Image
                  src={logo}
                  alt={companyName}
                  width={72}
                  height={72}
                  className="object-contain rounded-xl bg-zinc-950 border border-white/10 p-1 relative z-10 w-16 h-16 sm:w-[72px] sm:h-[72px]"
                />
              ) : (
                <div className="w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-xl bg-zinc-800 flex items-center justify-center border border-white/10 relative z-10">
                  <span className="text-zinc-500 text-xs">No Logo</span>
                </div>
              )}
            </div>

            <div className="flex-1 space-y-3 sm:space-y-4 w-full">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300">
                  {companyName}
                </h2>
                <div className="flex items-center gap-2 text-zinc-400 text-xs sm:text-sm bg-zinc-800/50 px-3 py-1 rounded-full border border-white/5 w-fit">
                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>{startDate} - {endDate}</span>
                </div>
              </div>
              
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                {companyDescription}
              </p>

              <div>
                <h3 className="text-xs sm:text-sm font-semibold text-zinc-300 mb-2 sm:mb-3 uppercase tracking-wider">
                  Key Contributions
                </h3>
                <div className="flex flex-wrap gap-2">
                  {safeFeatures.length > 0 ? (
                    safeFeatures.map((feature, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-zinc-800/50 hover:bg-zinc-700/50 text-zinc-300 border border-white/5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg transition-colors text-xs sm:text-sm whitespace-normal text-left leading-tight"
                      >
                        {feature}
                      </Badge>
                    ))
                  ) : (
                    <p className="text-zinc-500 text-sm italic">No features listed.</p>
                  )}
                </div>
              </div>

              {(offerLetterUrl || completionLetterUrl) && (
                <div className="flex flex-wrap gap-3 pt-2">
                  {offerLetterUrl && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="bg-zinc-900/50 border-zinc-700 hover:bg-indigo-500/10 hover:border-indigo-500/50 hover:text-indigo-400 transition-all duration-300 h-8 sm:h-9 text-xs sm:text-sm"
                    >
                      <a
                        href={offerLetterUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <FileText className="w-3 h-3 sm:w-4 sm:h-4" />
                        Offer Letter
                      </a>
                    </Button>
                  )}

                  {completionLetterUrl && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="bg-zinc-900/50 border-zinc-700 hover:bg-emerald-500/10 hover:border-emerald-500/50 hover:text-emerald-400 transition-all duration-300 h-8 sm:h-9 text-xs sm:text-sm"
                    >
                      <a
                        href={completionLetterUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                        Completion Letter
                      </a>
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function Timeline({ children }) {
  return (
    <div className="relative w-full max-w-4xl mx-auto mt-12 sm:mt-16 px-2 sm:px-4">
      {/* Glowing Line */}
      <div className="absolute left-6 sm:left-12 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-indigo-500/50 to-transparent" />
      
      <div className="flex flex-col gap-8 pl-12 sm:pl-24">
        {children}
      </div>
    </div>
  );
}

function TimelineItem({ children }) {
  return (
    <div className="relative">
      {/* Glowing Dot */}
      <div className="absolute -left-[33px] sm:-left-[57px] top-6 sm:top-8">
        <div className="relative flex items-center justify-center w-6 h-6">
          <div className="absolute w-full h-full bg-indigo-500 rounded-full opacity-20 animate-ping" />
          <div className="relative w-3 h-3 bg-indigo-500 rounded-full shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
        </div>
      </div>
      {children}
    </div>
  );
}

export default function ExperiencePage() {
  return (
    <div className="min-h-screen w-full bg-black text-white relative overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <BackgroundBeams />
      </div>
      
      <div className="relative z-10">
        <NavbarDemo />
        
        <main className="pt-24 sm:pt-32 pb-20 px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-500 mb-4">
              Professional Journey
            </h1>
            <p className="text-zinc-400 max-w-xl mx-auto text-base sm:text-lg">
              Building scalable solutions and creating impact through technology.
            </p>
          </motion.div>

          <Timeline>
            <TimelineItem>
              <ExperienceCard
                logo="https://landing-page-ag-sable.vercel.app/assuredgiglogo.webp"
                companyName="AssuredGig"
                companyDescription="AssuredGig is an early-stage startup building a secure freelance platform that connects verified freelancers and clients, ensuring fair work, guaranteed earnings, and trusted payments."
                startDate="June 2024"
                endDate="August 2024"
                features={[
                  "Architected and developed the complete backend infrastructure using Django & DRF",
                  "Optimized mobile landing page performance, increasing score from 35% to 75%",
                  "Designed and implemented RESTful APIs for both client and freelancer portals",
                  "Collaborated with cross-functional teams to deliver the MVP (V1) platform"
                ]}
                offerLetterUrl="https://drive.google.com/file/d/1Y7g_iSAYbwe8d8bll0hXNRTvqVmoUCbD/view?usp=sharing"
                completionLetterUrl="#"
              />
            </TimelineItem>
          </Timeline>
        </main>
      </div>
    </div>
  );
}
