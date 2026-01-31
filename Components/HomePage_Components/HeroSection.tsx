"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const words = ["Better", "Beautiful", "Awesome"];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setVisible(true);
      }, 400);
    }, 1700);

    return () => clearInterval(interval);
  }, []);

  return (
    <main
      className="
        min-h-screen flex flex-col items-center justify-center gap-6
        px-6 sm:px-10 lg:px-24 text-center
        dark:bg-[#0B0F19]
      "
    >
      {/* Badge */}
      <div
        className="
          inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2
          rounded-full text-xs sm:text-sm font-medium border-b-2 shadow-md
          bg-gray-50 border-gray-200 text-gray-700

          dark:bg-[#111827]
          dark:border-[#1F2937]
          dark:text-[#9CA3AF]
          dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]
        "
      >
        <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-gray-700 dark:text-[#3B82F6]" />
        <span>50+ Premium Components</span>
      </div>

      {/* Heading */}
      <h1
        className="
          text-3xl sm:text-4xl md:text-6xl font-bold
          leading-tight md:leading-[1.15]
          text-black dark:text-[#E5E7EB]
        "
      >
        Modern UI That Makes Your Website
        <br />
        <span
          className={`
            ml-3 inline-block text-transparent bg-clip-text
            bg-linear-to-b from-gray-900 to-gray-400
            transition-all duration-500 ease-in-out text-shadow-lg
            ${visible ? "opacity-100 translate-x-3" : "opacity-0 translate-x-0"}

            dark:from-[#3B82F6]
            dark:to-[#9CA3AF]
          `}
        >
          {words[index]}
        </span>
      </h1>

      {/* Description */}
      <p
        className="
          w-80 md:w-4xl text-sm sm:text-base md:text-lg
          leading-relaxed text-slate-700

          dark:text-[#9CA3AF]
        "
      >
        SaelixUI is a comprehensive collection of reusable UI components built
        for speed and scalability. Use our default styles to get started
        quickly, or adapt the components to match your custom design system
        without compromising performance or flexibility.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-2 sm:mt-4">
        
        {/* Primary */}
        <Link
    href="/documentation"
    className="
      w-80 sm:w-auto group
      px-7 sm:px-9 py-3.5 sm:py-4
      rounded-xl font-semibold
      flex items-center justify-center gap-2
      transition-all duration-300 active:scale-95

      bg-slate-900 text-white
      hover:bg-slate-800 shadow-xl

      dark:bg-[#3B82F6]
      dark:hover:bg-[#2563EB]
      dark:shadow-[0_12px_35px_rgba(59,130,246,0.35)]
    "
  >
    Get Started
    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
  </Link>

        {/* Secondary */}
        <Link
    href="/components"
    className="
      w-80 sm:w-auto
      px-7 sm:px-9 py-3.5 sm:py-4
      rounded-xl font-semibold
      transition-all duration-300 active:scale-95
      flex items-center justify-center

      border bg-white/60 backdrop-blur-md
      text-slate-700 hover:text-black
      hover:bg-white shadow-lg

      dark:bg-[#111827]/70
      dark:border-[#1F2937]
      dark:text-[#9CA3AF]
      dark:hover:text-[#E5E7EB]
      dark:hover:bg-[#111827]
      dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]
    "
  >
    Browse Components
  </Link>
      </div>
    </main>
  );
}
