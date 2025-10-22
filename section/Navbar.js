"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "../components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-4" />
    </div>
  );
}

function Navbar({
  className
}) {
  const [active, setActive] = useState(null);
  const router = useRouter();
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home" onClick = {() => router.push('/')}>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About" onClick = {() => router.push("/about")}>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Experience" onClick = {() => router.push("/experience")}>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Education" onClick = {() => router.push("/education")}>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects" onClick = {() => router.push("/project")}>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact" onClick = {() => router.push("/contact")}>
        </MenuItem>
      </Menu>
    </div>
  );
}
