import { Inter_Tight, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import LoadingScreen from "@/components/LoadingScreen";
import AstraField from "@/components/AstraField";
import ScrollProgress from "@/components/ScrollProgress";

// Neutral grotesk — display headings, set light and sentence case
const displaySans = Inter_Tight({
  variable: "--font-display-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

// Humanist grotesk — body / UI
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
  description:
    "Portfolio of Yatin Singh, a passionate Full Stack Developer and AI/ML enthusiast specializing in modern web technologies and intelligent systems.",
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
        className={`${displaySans.variable} ${instrumentSans.variable} ${jetbrainsMono.variable} font-sans antialiased bg-paper text-ink`}
      >
        <LoadingScreen />
        <AstraField />
        <ScrollProgress />
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
