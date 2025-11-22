"use client"
import { HeroParallax } from "@/components/ui/hero-parallax";

export const products = [
  {
    title: "VintiCode",
    link: "https://vinticode.vercel.app/",
    thumbnail: '/vinticode 2.png'
  },
  {
    title: "Next Horizon",
    link: "https://next-horizon-nine.vercel.app/",
    thumbnail: "/nexthorizon2.png"
  },
  {
    title: "Tic-Tac-Toe",
    link: "https://tic-tac-toe-rust-rho.vercel.app/",
    thumbnail: "/tic-tac-toe.png"
  },
  {
    title: "Claude-chef",
    link: "https://claude-chef.netlify.app",
    thumbnail: "/Chef-claude.png"
  },
  {
    title: "Calculator",
    link: "https://calculatoryatin.netlify.app/",
    thumbnail: "/calculator 2.png"
  },
  {
    title: "Neura Chat",
    link: "https://neura-chat.netlify.app/",
    thumbnail: "/neura-chat 2.png"
  },
  {
    title: "SteamPunk",
    link: "https://yatinsingh2007.github.io/Project_Capstone_1.0/ProjectSteampunk1.0.html",
    thumbnail: "/steampunk 2.png"
  }
]

export default function Hero() {
  return <HeroParallax products={products} />
}