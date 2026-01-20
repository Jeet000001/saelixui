"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Sparkles, Zap, Palette, Code2 } from "lucide-react";

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
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 px-6 sm:px-10 lg:px-24 text-center">
      {/* Badge */}
      <div className="relative inline rounded-full p-[1.5px] overflow-hidden">
        {/* Rotating border */}
        <span
          className="absolute inset-0 group-hover:animate-spin"
          style={{
            background:
              "conic-gradient(from 0deg, transparent, #3b82f6, transparent)",
            animation: "spin 8s linear infinite",
          }}
        />

        {/* Actual badge */}
        <div className="relative inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
          50+ Premium Components
        </div>
      </div>

      {/* Heading */}
      <h1
        className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight sm:leading-tight md:leading-[1.15]
        bg-linear-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent"
      >
        Modern UI That Makes Your Website 10x
        <span
          className={`ml-3 inline-block text-blue-600 transition-all duration-500 ease-in-out
          ${visible ? "opacity-100 translate-x-3" : "opacity-0 translate-x-0"}`}
        >
          {words[index]}
        </span>
      </h1>

      {/* Description */}
      <p className="max-w-2xl text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed sm:leading-relaxed">
        SaelixUI is a comprehensive collection of reusable UI components built
        for speed and scalability. Use our default styles to get started
        quickly, or adapt the components to match your custom design system
        without compromising performance or flexibility.
      </p>

      {/* Buttons */}

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-2 sm:mt-4">
        <button className="w-full sm:w-auto group bg-slate-900 hover:bg-slate-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl">
          Get Started
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
        </button>

        <button className="w-full sm:w-auto text-slate-700 hover:text-slate-400 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-colors duration-300 border border-slate-200 hover:border-slate-300 bg-white/50 backdrop-blur-sm">
          Browse Components
        </button>
      </div>
    </main>
  );
}
