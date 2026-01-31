"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const StartBuildingSection = () => {
  return (
    <section className="flex flex-col items-center text-center px-6 py-20 dark:bg-[#0B0F19]">

      {/* Eyebrow text */}
      <p className="mb-4 text-sm font-medium text-gray-700 dark:text-[#9CA3AF]">
        Start building
      </p>

      {/* Heading */}
      <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-[#E5E7EB]">
        Build modern interfaces{" "}
        <span
          className="
            text-transparent bg-clip-text bg-linear-to-b
            from-gray-900 to-gray-200 text-shadow-md

            dark:from-[#3B82F6]
            dark:to-[#9CA3AF]
          "
        >
          faster
        </span>
      </h1>

      {/* Description */}
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-[#9CA3AF]">
        Saelix UI is a modern React component library built for speed,
        accessibility, and consistency. Create beautiful interfaces with less
        effort and more control.
      </p>

      {/* CTA */}
      <Link
    href="/documentation"
    className="
      mt-8 w-80 sm:w-auto group
      px-7 sm:px-9 py-3.5 sm:py-4
      rounded-xl font-semibold
      flex items-center justify-center gap-2
      transition-all duration-300 active:scale-95

      bg-slate-900 text-white
      hover:bg-slate-800 shadow-xl

      dark:bg-[#266ad8]
      dark:hover:bg-[#0051ff]
      dark:shadow-[0_12px_35px_rgba(59,130,246,0.35)]
    "
  >
    Explore Saelix UI
    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
  </Link>

    </section>
  );
};

export default StartBuildingSection;
