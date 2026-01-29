"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const StartBuildingSection = () => {
  return (
    <section className="flex flex-col items-center text-center px-6 py-20">
      {/* Eyebrow text */}
      <p className="mb-4 text-sm font-medium text-gray-700">Start building</p>

      {/* Heading */}
      <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Build modern interfaces{" "}
        <span className="text-transparent bg-clip-text bg-linear-to-b from-gray-900 to-gray-200 text-shadow-md">
          faster
        </span>
      </h1>

      {/* Description */}
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600">
        Saelix UI is a modern React component library built for speed,
        accessibility, and consistency. Create beautiful interfaces with less
        effort and more control.
      </p>

      {/* CTA */}
      <button className=" mt-8 w-80 sm:w-auto group bg-slate-900 hover:bg-slate-800 shadow-lg shadow-slate-400 cursor-pointer active:scale-95 text-white px-6 sm:px-7 py-3 sm:py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-xl">
          <Link href={"/documentation"}>Explore Saelix UI</Link>
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
        </button>
    </section>
  );
};

export default StartBuildingSection;
