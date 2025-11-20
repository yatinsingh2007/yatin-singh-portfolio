"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";
import React from "react";
import { NavbarDemo } from "@/section/Navbar";


function ExperienceCard(props) {
  const {
    logo = null,
    companyName = "Company Name",
    companyDescription = "Short description about the role/company.",
    features = [],
    offerLetterUrl = null,
    completionLetterUrl = null,
  } = props || {};

  const safeFeatures = Array.isArray(features) ? features : [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className="w-full max-w-2xl mx-auto mt-4"
    >
      <Card className="bg-black border border-zinc-800 text-white rounded-2xl shadow-lg p-6">
        <CardContent className="flex flex-col gap-8">


          <div className="flex flex-col sm:flex-row items-start gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-zinc-900 flex items-center justify-center">
              {logo ? (
                <Image
                  src={logo}
                  alt={companyName}
                  width={64}
                  height={64}
                  className="object-contain rounded-full"
                />
              ) : (
                <span className="text-zinc-600 text-sm">No Logo</span>
              )}
            </div>

            <div className="flex flex-col space-y-1 max-w-lg">
              <h2 className="text-xl font-semibold">{companyName}</h2>
              <p className="text-sm text-zinc-400 leading-relaxed whitespace-normal break-words">
                {companyDescription}
              </p>
            </div>
          </div>


          <div>
            <h3 className="text-lg font-medium mb-3">Features Worked On</h3>

            <div className="flex flex-wrap gap-2">
              {safeFeatures.length > 0 ? (
                safeFeatures.map((feature, i) => (
                  <Badge
                    key={i}
                    className="bg-zinc-800 text-white px-3 py-2 rounded-xl max-w-full whitespace-normal break-words text-left"
                  >
                    {feature}
                  </Badge>
                ))
              ) : (
                <p className="text-zinc-500 text-sm">No features added.</p>
              )}
            </div>
          </div>


          <div className="flex flex-wrap gap-4 mt-2">
            {offerLetterUrl && (
              <Button
                asChild
                variant="outline"
                className="bg-zinc-900 border-zinc-700 text-white rounded-xl px-4 py-2 cursor-pointer"
              >
                <a
                  href={offerLetterUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  Offer Letter
                </a>
              </Button>
            )}

            {completionLetterUrl && (
              <Button
                asChild
                variant="outline"
                className="bg-zinc-900 border-zinc-700 text-white rounded-xl px-4 py-2 cursor-pointer"
              >
                <a href={completionLetterUrl} target="_blank" rel="noopener noreferrer">
                  Completion Letter
                </a>
              </Button>
            )}
          </div>

        </CardContent>
      </Card>
    </motion.div>
  );
}



function Timeline({ children }) {
  return (
    <div className="relative w-full max-w-3xl mx-auto mt-10">
      
      <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-[3px] bg-zinc-700" />

      <div className="flex flex-col gap-16 sm:gap-20 pl-10 sm:pl-16">
        {children}
      </div>

    </div>
  );
}

function TimelineItem({ children }) {
  return (
    <div className="relative">

      {/* Dot */}
      <div className="absolute -left-[26px] sm:-left-[38px] top-4 w-5 h-5 sm:w-6 sm:h-6 bg-zinc-900 border border-zinc-600 rounded-full" />

      <div>{children}</div>
    </div>
  );
}



export default function ExperiencePage() {
  return (
    <div className="min-h-screen w-full bg-black text-white px-4 sm:px-6 py-20 relative">

        <NavbarDemo />
      <div className="pointer-events-none">
        <BackgroundBeams />
      </div>


      <Timeline>
        <TimelineItem>
          <ExperienceCard
            logo="https://landing-page-ag-sable.vercel.app/assuredgiglogo.webp"
            companyName="AssuredGig"
            companyDescription="AssuredGig is an early-stage startup building a secure freelance platform that connects verified freelancers and clients, ensuring fair work, guaranteed earnings, and trusted payments."
            features={[
              "Part of the tech team for the first version (V1) of the platform.",
              "Developed Entire CodeBase of Backend From Scratch especially worked on client side API's and also contributed in freelancer API's as well.",
              "Developed The Websites landing page and improved mobile performance from 35% to 75%.",
              "Implemented All The API's using Django and Django-Rest-Framework.",
            ]}
            offerLetterUrl="https://drive.google.com/file/d/1Y7g_iSAYbwe8d8bll0hXNRTvqVmoUCbD/view?usp=sharing"
            completionLetterUrl="#"
          />
        </TimelineItem>
      </Timeline>

      <div className="pointer-events-none">
        <BackgroundBeams />
      </div>
    </div>
  );
}
