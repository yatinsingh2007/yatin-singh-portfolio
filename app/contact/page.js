"use client"
import LampDemo from "@/section/LampDemo"
import TerminalNav from "@/section/TerminalNav"
import TerminalFooter from "@/section/TerminalFooter"

export default function Contact() {
    return (
        <main className="min-h-screen w-full bg-term font-mono text-fg">
            <TerminalNav />
            <LampDemo />
            <TerminalFooter />
        </main>
    )
}
