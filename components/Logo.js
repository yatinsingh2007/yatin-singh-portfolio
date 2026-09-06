"use client";

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Logo({ className = "", size = "md", variant = "light", alt = "YS Logo" }) {
  const sizeMap = {
    sm: { width: 32, height: 32, class: "h-7 w-7" },
    md: { width: 40, height: 40, class: "h-9 w-9" },
    lg: { width: 56, height: 56, class: "h-12 w-12" },
  };

  const currentSize = sizeMap[size] || sizeMap.md;
  const src = variant === "dark" ? "/logo-dark.svg" : "/logo.svg";

  return (
    <div
      className={cn(
        "relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full border border-line bg-paper-2 transition-colors duration-300 group-hover:border-line-2",
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
