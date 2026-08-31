import { Archivo, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import LoadingScreen from "@/components/LoadingScreen";
import AuroraBackground from "@/components/AuroraBackground";
import ScrollProgress from "@/components/ScrollProgress";

// Heavy grotesk — oversized brutalist display headings
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

// Clean humanist grotesk — body / UI
const instrumentSans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

// Technical monospace — labels, meta, numerals
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});


export const metadata = {
  title: "Yatin Singh | Full Stack Developer & AI Enthusiast",
  description: "Portfolio of Yatin Singh, a passionate Full Stack Developer and AI/ML enthusiast specializing in modern web technologies and intelligent systems.",
  keywords: ["Yatin Singh", "Portfolio", "Full Stack Developer", "AI/ML", "Next.js", "React", "Web Development"],
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
  },
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <meta name="google-site-verification" content="L63uGSjv-ig202O9O7OB6XKbgHRQHhHyiKmkxhoJjNw" />
      </head>
      <body
        className={`${archivo.variable} ${instrumentSans.variable} ${jetbrainsMono.variable} font-sans antialiased bg-paper text-ink`}
      >
        <LoadingScreen />
        <AuroraBackground />
        <ScrollProgress />

        <CustomCursor />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
