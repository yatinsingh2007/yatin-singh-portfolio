"use client"
import { HeroParallax } from "@/components/ui/hero-parallax";

export const products = [
  {
    title: "VintiCode",
    link: "https://vinticode.vercel.app/",
    thumbnail: '/vinticode.png'
  },
  {
    title: "Next Horizon",
    link: "https://next-horizon-nine.vercel.app/",
    thumbnail: "/nexthorizon.png"
  },
  {
    title: "Tic-Tac-Toe",
    link: "https://tic-tac-toe-rust-rho.vercel.app/",
    thumbnail: "/tictactoe.png"
  },
  {
    title: "Claude-chef",
    link: "https://claude-chef.netlify.app",
    thumbnail: "/chefclaude.png"
  },
  {
    title: "Calculator",
    link: "https://calculatoryatin.netlify.app/",
    thumbnail: "/calculator.png"
  },
  {
    title: "Neura Chat",
    link: "https://neura-chat.netlify.app/",
    thumbnail: "/steampunk.png"
  },
  {
    title: "SteamPunk",
    link: "https://yatinsingh2007.github.io/Project_Capstone_1.0/ProjectSteampunk1.0.html",
    thumbnail: "/steampunk.png"
  }
]

export default function Hero() {
  return <HeroParallax products={products} />
}