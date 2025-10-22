"use client";
import React from "react";
import { Button } from "@/components/ui/moving-border";

export default function GlowingButton({ text, icon, onClick }) {
  return (
    <Button
      onClick={onClick}
      className="flex items-center gap-2 px-6 py-3 bg-transparent text-white font-semibold rounded-full
                 relative overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
    >
      {icon}
      {text}
      <span className="absolute inset-0 rounded-full bg-transparent opacity-30 animate-pulse pointer-events-none mix-blend-add" />
    </Button>
  );
}

