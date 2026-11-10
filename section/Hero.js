"use client"
import { HeroParallax } from "@/components/ui/hero-parallax";

export const products = [
  {
    title: "Shopsmart",
    link: "https://github.com/yatinsingh2007/shopsmart",
    thumbnail: "/projects/shopsmart.png"
  },
  {
    title: "Velox",
    link: "https://github.com/yatinsingh2007/Velox",
    thumbnail: "/projects/velox.png"
  },
  {
    title: "ReportLens AI",
    link: "https://github.com/yatinsingh2007/ReportLens-AI",
    thumbnail: "/projects/reportlens-ai.png"
  },
  {
    title: "Cordis Sentinel",
    link: "https://github.com/yatinsingh2007/Cordis-Sentinel",
    thumbnail: "/projects/cordis-sentinel.png"
  },
  {
    title: "CreditIQ",
    link: "https://creditiq123.streamlit.app",
    thumbnail: "/projects/creditiq.png"
  },
  {
    title: "VintiCode",
    link: "https://vinticode.vercel.app/",
    thumbnail: "/projects/vinticode.png"
  },
  {
    title: "Next Horizon",
    link: "https://next-horizon-nine.vercel.app/",
    thumbnail: "/nexthorizon.png"
  },
  {
    title: "create-prism",
    link: "https://www.npmjs.com/package/create-prism",
    thumbnail: "/projects/create-prism.png"
  },
  {
    title: "Tic-Tac-Toe",
    link: "https://tic-tac-toe-rust-rho.vercel.app/",
    thumbnail: "/projects/tic-tac-toe.png"
  },
  {
    title: "Neura Chat",
    link: "https://neura-chat.netlify.app/",
    thumbnail: "/projects/neura-chat.png"
  },
  {
    title: "Claude Chef",
    link: "https://claude-chef.netlify.app",
    thumbnail: "/projects/claude-chef.png"
  },
  {
    title: "SteamPunk",
    link: "https://yatinsingh2007.github.io/Project_Capstone_1.0/ProjectSteampunk1.0.html",
    thumbnail: "/projects/steampunk.png"
  },
  {
    title: "Calculator",
    link: "https://calculatoryatin.netlify.app/",
    thumbnail: "/projects/calculator.png"
  },
  {
    title: "Netflix Clone",
    link: "https://yatinsingh2007.github.io/Netflix_Clone/Netflix.html",
    thumbnail: "/projects/netflix-clone.png"
  }
];

export default function Hero() {
  return <HeroParallax products={products} />
}