"use client";
import Footer from "@/section/Footer";
import { useEffect } from "react";
import { LampDemo } from "@/section/LampDemo";
import { NavbarDemo } from "@/section/Navbar";

export default function About() {
    useEffect(() => {
        document.body.style.backgroundColor = "black"
        return () =>  document.body.style.backgroundColor = "black"
    } , [])
  return (
    <>
      <NavbarDemo />
      <LampDemo />
      <Footer  />
    </>
  );
}
