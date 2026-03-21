"use client";

import { useEffect, useState } from "react";
import { Sparkles, Copy, Check, ArrowRight } from "lucide-react";
import Link from "next/link";

const words = [ "Polished", "Beautiful", "Stunning"];

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [copied, setCopied] = useState(false);

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

  const handleCopy = () => {
    navigator.clipboard.writeText("npx saelix-ui init");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main
      className="
        relative w-full lg:min-h-screen
        flex flex-col items-center justify-center
        gap-4 md:gap-6
        px-3 sm:px-8 md:px-12 lg:px-20 xl:px-32
        py-16 sm:py-24
        text-center overflow-hidden
        bg-white dark:bg-[#0B0F19]
      "
    >
      <div className="pointer-events-none absolute inset-0 -z-10 dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(59,130,246,0.14),transparent)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-0 dark:opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-size-[48px_48px]" />
      <div className="
        inline-flex items-center gap-2
        px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium
        border select-none
        bg-gray-50 border-gray-200 text-gray-600
        dark:bg-[#111827] dark:border-[#1F2937] dark:text-[#9CA3AF]
        shadow-sm dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]
      ">
        <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-500 dark:text-[#3B82F6] shrink-0" />
        50+ Open Source Components
      </div>

      <h1 className="
        w-full
        max-w-[16rem] sm:max-w-lg md:max-w-3xl lg:max-w-5xl
        text-4xl sm:text-5xl md:text-6xl lg:text-7xl
        font-bold tracking-tight leading-[1.15] sm:leading-[1.1]
        text-neutral-900 dark:text-[#E5E7EB]
      ">
        UI components that make
        <br />
        <span className="">your site </span>
        <span className="inline-block w-[7ch] overflow-hidden align-bottom">
          <span className={`
            inline-block text-transparent bg-clip-text
            bg-linear-to-b from-neutral-900 to-neutral-400
            dark:from-[#3B82F6] dark:to-[#93c5fd]
            transition-all duration-500 ease-in-out
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
          `}>
            {words[index]}
          </span>
        </span>
      </h1>

      <p className="
        max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl
        text-sm sm:text-base md:text-lg
        leading-relaxed text-neutral-500 dark:text-[#9CA3AF]
      ">
        Saelix UI is a free, open-source React component library — copy, paste,
        and ship beautiful interfaces in minutes. No bloat, just components that work.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-3 mt-1 w-full max-w-xs sm:max-w-none sm:w-auto">

        <button
          onClick={handleCopy}
          className="
            group relative w-full sm:w-auto
            inline-flex items-center justify-between sm:justify-center gap-3
            px-5 py-3 sm:py-3.5
            rounded-xl font-mono text-sm font-medium
            border transition-all duration-200 active:scale-95
            bg-neutral-50 border-neutral-200 text-neutral-700
            hover:bg-neutral-100 hover:border-neutral-300
            shadow-sm

            dark:bg-[#111827] dark:border-[#1F2937]
            dark:text-[#E5E7EB] dark:hover:bg-[#1a2030]
            dark:hover:border-[#294268]
            dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]
          "
        >
          <span className="flex-1 text-left sm:text-center">npx saelix-ui init</span>
          <span className="
            flex items-center justify-center w-6 h-6 rounded-md
            bg-neutral-200 dark:bg-[#1F2937]
            transition-all duration-200
            group-hover:bg-neutral-300 dark:group-hover:bg-[#294268]
          ">
            {copied
              ? <Check className="w-3.5 h-3.5 text-green-500" />
              : <Copy className="w-3.5 h-3.5 text-neutral-500 dark:text-[#9CA3AF]" />
            }
          </span>
        </button>

        <Link
          href="/components"
          className="
            group w-full sm:w-auto
            inline-flex items-center justify-center gap-2
            px-5 py-3 sm:py-3.5
            rounded-xl font-semibold text-sm
            transition-all duration-200 active:scale-95
            bg-neutral-900 text-white hover:bg-neutral-700 shadow-lg

            dark:bg-[#266ad8] dark:hover:bg-[#0051ff]
            dark:shadow-[0_8px_30px_rgba(59,130,246,0.3)]
          "
        >
          Browse Components
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform shrink-0" />
        </Link>
      </div>
    </main>
  );
};

export default HeroSection;