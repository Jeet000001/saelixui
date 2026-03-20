"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const words = ["Better", "Beautiful", "Awesome"];

const HeroSection = () => {
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
        relative lg:min-h-screen w-full
        flex flex-col items-center justify-center
        gap-4 sm:gap-5 md:gap-6
        px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32
        py-16 sm:py-20
        text-center overflow-hidden
        bg-white dark:bg-[#0B0F19]
      "
    >
      {/* Background glow (dark mode only) */}
      <div
        className="
          pointer-events-none absolute inset-0 -z-10
          dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(59,130,246,0.12),transparent)]
        "
      />

      {/* Badge */}
      <div
        className="
          inline-flex items-center gap-1.5 sm:gap-2
          px-3 py-1.5 sm:px-4 sm:py-2
          rounded-full text-xs sm:text-sm font-medium
          border shadow-md select-none
          bg-gray-50 border-gray-200 text-gray-700
          dark:bg-[#111827] dark:border-[#1F2937] dark:text-[#9CA3AF]
          dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]
        "
      >
        <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500 dark:text-[#3B82F6] shrink-0" />
        <span>50+ Premium Components</span>
      </div>

      {/* Heading */}
      <h1
        className="
          max-w-[20rem] sm:max-w-xl md:max-w-3xl lg:max-w-5xl
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
          font-bold tracking-tight
          leading-[1.2] sm:leading-[1.15] md:leading-[1.1]
          text-black dark:text-[#E5E7EB]
        "
      >
        Modern UI That Makes Your Website
        {/* Animated word — wraps naturally on small screens */}
        <span className="block sm:inline">
          <span
            className={`
              sm:ml-3 inline-block text-transparent bg-clip-text
              bg-linear-to-b from-gray-900 to-gray-400
              transition-all duration-500 ease-in-out
              ${visible ? "opacity-100 translate-x-2 sm:translate-x-3" : "opacity-0 translate-x-0"}
              dark:from-[#3B82F6] dark:to-[#9CA3AF]
            `}
          >
            {words[index]}
          </span>
        </span>
      </h1>

      {/* Description */}
      <p
        className="
          max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl
          text-sm sm:text-base md:text-lg
          leading-relaxed
          text-slate-600 dark:text-[#9CA3AF]
        "
      >
        SaelixUI is a comprehensive collection of reusable UI components built
        for speed and scalability. Use our default styles to get started
        quickly, or adapt the components to match your custom design system
        without compromising performance or flexibility.
      </p>

      {/* Buttons */}
      <div
        className="
          flex flex-col sm:flex-row
          gap-3 sm:gap-4 md:gap-5
          mt-2 sm:mt-3 md:mt-4
          w-full max-w-xs sm:max-w-none sm:w-auto
        "
      >
        {/* Primary */}
        <Link
          href="/documentation"
          className="
            group
            w-full sm:w-auto
            px-6 sm:px-8 md:px-9
            py-3 sm:py-3.5 md:py-4
            rounded-xl font-semibold text-sm sm:text-base
            flex items-center justify-center gap-2
            transition-all duration-300 active:scale-95
            bg-slate-900 text-white hover:bg-slate-700 shadow-xl
            dark:bg-[#266ad8] dark:hover:bg-[#0051ff]
            dark:shadow-[0_12px_35px_rgba(59,130,246,0.35)]
          "
        >
          Get Started
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform shrink-0" />
        </Link>

        {/* Secondary */}
        <Link
          href="/components"
          className="
            w-full sm:w-auto
            px-6 sm:px-8 md:px-9
            py-3 sm:py-3.5 md:py-4
            rounded-xl font-semibold text-sm sm:text-base
            flex items-center justify-center
            transition-all duration-300 active:scale-95
            border border-gray-200 bg-white/60 backdrop-blur-md
            text-slate-700 hover:text-black hover:bg-gray-50 shadow-lg
            dark:bg-[#111827]/70 dark:border-[#1F2937]
            dark:text-[#9CA3AF] dark:hover:text-[#E5E7EB]
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

export default HeroSection;