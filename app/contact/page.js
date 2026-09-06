"use client";
import ContactSection from "@/components/ContactSection";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export default function Contact() {
  return (
    <main className="min-h-screen w-full text-ink">
      <SiteNav />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
