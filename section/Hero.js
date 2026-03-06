"use client"
import { HeroParallax } from "@/components/ui/hero-parallax";

export const products = [
  {
    title : "reportLensAI" ,
    link : "https://github.com/yatinsingh2007/ReportLens-AI" ,
    thumbnail : "/ReportLensAI.jpeg"
  } ,
  {
    title: "CreditIQ",
    link: "https://creditiq123.streamlit.app",
    thumbnail: "/creditIQ.jpeg"
  },
  {
    title: "VintiCode",
    link: "https://vinticode.vercel.app/",
    thumbnail: "/vinticode.png"
  },
  {
    title: "Next Horizon",
    link: "https://next-horizon-nine.vercel.app",
    thumbnail: "/nexthorizon.png"
  },
  {
    title: "Tic-Tac-Toe",
    link: "https://tic-tac-toe-rust-rho.vercel.app",
    thumbnail: "/tic-tac-toe.png"
  },
  {
    title: "Claude-chef",
    link: "https://claude-chef.netlify.app",
    thumbnail: "/Chef-claude.png"
  },
  {
    title: "Calculator",
    link: "https://calculatoryatin.netlify.app",
    thumbnail: "/calculator 2.png"
  },
  {
    title: "Neura Chat",
    link: "https://neura-chat.netlify.app",
    thumbnail: "/neurachat 2.png"
  },
  {
    title : "Netflix Clone" ,
    link : "https://yatinsingh2007.github.io/Netflix-Clone/Netflix.html" ,
    thumbnail : "/netflix_clone.jpeg"
  } ,
  {
    title: "SteamPunk",
    link: "https://yatinsingh2007.github.io/Project_Capstone_1.0/ProjectSteampunk1.0.html",
    thumbnail: "/steampunk 2.png"
  }
]

export default function Hero() {
  return <HeroParallax products={products} />
}