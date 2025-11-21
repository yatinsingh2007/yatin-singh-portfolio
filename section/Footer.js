"use client";

export default function Footer() {
  return (
    <footer className="w-full bg-transparent text-white py-8 flex flex-col items-center justify-center gap-3 pl-4">
      <p className="text-gray-400">
        🌍 Based in India | 📧 yatin.singh.dev@gmail.com | 🚀 Keep learning!
      </p>
      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} K. Yatin Singh. All rights reserved.
      </p>
    </footer>
  );
}
