"use client"
import { HeroParallax } from "@/components/ui/hero-parallax";

export const products = [
  {
    title: "Shopsmart",
    link: "https://github.com/yatinsingh2007/shopsmart",
    thumbnail: "/shopsmart.png"
  },
  {
    title: "Velox",
    link: "https://github.com/yatinsingh2007/Velox",
    thumbnail: "/Velox.png"
  },
  {
    title: "ReportLens AI",
    link: "https://github.com/yatinsingh2007/ReportLens-AI",
    thumbnail: "/ReportLensAI.jpeg"
  },
  {
    title: "Cordis Sentinel",
    link: "https://github.com/yatinsingh2007/Cordis-Sentinel",
    thumbnail: "/cordis-sentinel.png"
  },
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
    link: "https://next-horizon-nine.vercel.app/",
    thumbnail: "/nexthorizon.png"
  },
  {
    title: "create-prism",
    link: "https://www.npmjs.com/package/create-prism",
    thumbnail: "/create-prism.png"
  },
  {
    title: "Tic-Tac-Toe",
    link: "https://tic-tac-toe-rust-rho.vercel.app/",
    thumbnail: "/tic-tac-toe.png"
  },
  {
    title: "Neura Chat",
    link: "https://neura-chat.netlify.app/",
    thumbnail: "/neurachat 2.png"
  },
  {
    title: "Claude Chef",
    link: "https://claude-chef.netlify.app",
    thumbnail: "/Chef-claude.png"
  },
  {
    title: "SteamPunk",
    link: "https://yatinsingh2007.github.io/Project_Capstone_1.0/ProjectSteampunk1.0.html",
    thumbnail: "/steampunk 2.png"
  },
  {
    title: "Calculator",
    link: "https://calculatoryatin.netlify.app/",
    thumbnail: "/calculator 2.png"
  },
  {
    title: "Netflix Clone",
    link: "https://yatinsingh2007.github.io/Netflix_Clone/Netflix.html",
    thumbnail: "/netflix_clone.jpeg"
  }
];

export default function Hero() {
  return <HeroParallax products={products} />
}