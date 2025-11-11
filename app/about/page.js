"use client";
import { useEffect } from "react";
import { NavbarDemo } from "@/section/Navbar";
import { BackgroundBeamsDemo } from "@/section/Background";

export default function About() {
    useEffect(() => {
        document.body.style.backgroundColor = "black"
        return () =>  document.body.style.backgroundColor = "black"
    } , [])
  return (
    <>
      <NavbarDemo />
      <BackgroundBeamsDemo />
    </>
  );
}
