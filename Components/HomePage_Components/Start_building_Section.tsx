"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Layers } from "lucide-react";

const StartBuildingSection = () => {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#0B0F19]">
      <div className="relative z-10 flex flex-col items-center text-center px-5 sm:px-8 pb-16 sm:py-20 md:pb-24">
        <div
          className="
          mb-5 inline-flex items-center gap-2
          px-3.5 py-1.5 rounded-full
          border border-blue-200 bg-blue-50 text-blue-700 text-xs font-semibold
          dark:border-[#1F2937] dark:bg-[#111827] dark:text-[#3B82F6]
        "
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-[#3B82F6] animate-pulse" />
          Ready to ship
        </div>

        <h2
          className="
          max-w-xs sm:max-w-xl md:max-w-3xl
          text-3xl sm:text-4xl md:text-5xl
          font-bold tracking-tight leading-[1.15]
          text-neutral-900 dark:text-[#E5E7EB]
        "
        >
          Stop writing the same{" "}
          <span
            className="
            text-transparent bg-clip-text
            bg-linear-to-b from-neutral-900 to-neutral-400
            dark:from-[#3B82F6] dark:to-[#9CA3AF]
          "
          >
            components
          </span>{" "}
          twice
        </h2>

        <p
          className="
          mt-5 max-w-xs sm:max-w-md md:max-w-xl
          text-sm sm:text-base leading-relaxed
          text-neutral-500 dark:text-[#9CA3AF]
        "
        >
          Saelix UI gives you 50+ polished, accessible React components — drop
          them in, customize with Tailwind, and ship faster without sacrificing
          quality.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full max-w-xs sm:max-w-none sm:w-auto">
          <Link
            href="/documentation"
            className="
              group w-full sm:w-auto
              inline-flex items-center justify-center gap-2
              px-6 sm:px-8 py-3 sm:py-3.5
              rounded-xl text-sm sm:text-base font-semibold
              transition-all duration-300 active:scale-95
              bg-neutral-900 text-white hover:bg-neutral-700 shadow-lg
              dark:bg-[#266ad8] dark:hover:bg-[#0051ff]
              dark:shadow-[0_12px_35px_rgba(59,130,246,0.3)]
            "
          >
            <BookOpen className="w-4 h-4" />
            Read the Docs
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/components"
            className="
              w-full sm:w-auto
              inline-flex items-center justify-center gap-2
              px-6 sm:px-8 py-3 sm:py-3.5
              rounded-xl text-sm sm:text-base font-semibold
              transition-all duration-300 active:scale-95
              border border-neutral-200 bg-white text-neutral-700
              hover:bg-neutral-50 hover:text-neutral-900 shadow-sm
              dark:border-[#1F2937] dark:bg-[#111827]/70
              dark:text-[#9CA3AF] dark:hover:text-[#E5E7EB]
              dark:hover:bg-[#111827]
            "
          >
            <Layers className="w-4 h-4" />
            Browse Components
          </Link>
        </div>

        <p className="mt-6 text-xs text-neutral-400 dark:text-[#4B5563]">
          Free & open source · No setup required · Tailwind CSS
        </p>
      </div>
    </section>
  );
};

export default StartBuildingSection;
