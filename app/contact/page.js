"use client";
import ContactSection from "@/section/LampDemo";
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
