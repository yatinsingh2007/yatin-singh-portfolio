"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Logo({
  className = "",
  size = "md", // 'sm' | 'md' | 'lg'
  variant = "light", // 'light' (as in user image) | 'dark'
  alt = "YS Logo",
}) {
  const sizeMap = {
    sm: { width: 36, height: 26, class: "w-9 h-[26px]" },
    md: { width: 44, height: 32, class: "w-11 h-8" },
    lg: { width: 60, height: 44, class: "w-15 h-11" },
  };

  const currentSize = sizeMap[size] || sizeMap.md;
  const src = variant === "dark" ? "/logo-dark.svg" : "/logo.svg";

  return (
    <div
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center overflow-hidden border border-ink/70 transition-all duration-200 group-hover:border-flare",
        currentSize.class,
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        width={currentSize.width}
        height={currentSize.height}
        className="h-full w-full object-cover"
        priority
      />
    </div>
  );
}
