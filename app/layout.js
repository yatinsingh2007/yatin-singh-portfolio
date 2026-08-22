import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import LoadingScreen from "@/components/LoadingScreen";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});


export const metadata = {
  title: "Yatin Singh | Full Stack Developer & AI Enthusiast",
  description: "Portfolio of Yatin Singh, a passionate Full Stack Developer and AI/ML enthusiast specializing in modern web technologies and intelligent systems.",
  keywords: ["Yatin Singh", "Portfolio", "Full Stack Developer", "AI/ML", "Next.js", "React", "Web Development"],
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="google-site-verification" content="L63uGSjv-ig202O9O7OB6XKbgHRQHhHyiKmkxhoJjNw" />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-black selection:bg-white/20`}
      >
        <LoadingScreen />
        <div className="fixed inset-0 pointer-events-none z-[9998] opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150" />

        <CustomCursor />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
