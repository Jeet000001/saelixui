"use client";

import { Copy, Check, Terminal, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div className="space-y-1.5">
      <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-[#3B82F6]">
        {label}
      </p>
      <h2
        className="
        group relative inline-block
        text-xl sm:text-2xl font-bold
        text-transparent bg-clip-text
        bg-linear-to-b from-neutral-900 to-neutral-500
        dark:from-[#E5E7EB] dark:to-[#9CA3AF]
      "
      >
        {title}
        <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-neutral-300 dark:bg-[#1F2937] transition-all duration-300 group-hover:w-full" />
      </h2>
    </div>
  );
}

function StepBadge({ number }: { number: number }) {
  return (
    <span
      className="
      inline-flex items-center justify-center
      w-6 h-6 rounded-full text-xs font-bold shrink-0
      bg-blue-100 text-blue-700
      dark:bg-[#1a2744] dark:text-[#3B82F6]
    "
    >
      {number}
    </span>
  );
}

const Installation = () => {
  const { theme } = useTheme();
  const [copied, setCopied] = useState(false);
  const command = "npx saelix-ui@latest init";

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const frameworks = [
    {
      href: "/documentation/next",
      name: "Next.js",
      tag: "Recommended",
      tagStyle:
        "bg-blue-50 text-blue-600 dark:bg-[#1a2744] dark:text-[#3B82F6]",
      description: "Best for production-ready, SSR-powered apps.",
      imgSrc: (t: string) =>
        t === "dark" ? "/nextjsdark.png" : "/nextjslight.png",
      external: false,
    },
    {
      href: "/documentation/vite",
      name: "Vite",
      tag: "Fast dev",
      tagStyle:
        "bg-purple-50 text-purple-600 dark:bg-[#1e1a2e] dark:text-[#a78bfa]",
      description: "Lightning-fast dev server, zero config.",
      imgSrc: () => "https://img.icons8.com/color/48/vite.png",
      external: false,
    },
  ];

  return (
    <div
      className="
      mx-auto px-5 sm:px-8 md:px-16 lg:px-32 xl:px-40
      py-10 sm:py-14
      space-y-14
      dark:bg-[#0B0F19] min-h-screen
    "
    >
      <section className="space-y-5">
        <SectionHeading label="Overview" title="Introduction" />

        <p className="text-sm sm:text-base text-neutral-500 dark:text-[#9CA3AF] leading-relaxed max-w-6xl">
          <span className="font-semibold text-neutral-800 dark:text-[#E5E7EB]">
            Saelix UI
          </span>{" "}
          is an open-source React component library for building clean,
          consistent, and production-ready interfaces — fast. Every component is
          built with{" "}
          <span className="font-medium text-neutral-700 dark:text-[#E5E7EB]">
            Tailwind CSS
          </span>
          , fully typed, and designed to drop into any project without friction.
        </p>

        <div className="flex flex-wrap gap-2">
          {[
            "Open Source",
            "TypeScript Ready",
            "Tailwind CSS",
            "Accessible",
            "Dark Mode",
          ].map((tag) => (
            <span
              key={tag}
              className="
              px-3 py-1 rounded-full text-xs font-medium
              bg-neutral-100 text-neutral-600
              dark:bg-[#111827] dark:text-[#9CA3AF] dark:border dark:border-[#1F2937]
            "
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <SectionHeading label="Setup" title="Quick Start" />

        <p className="text-sm sm:text-base text-neutral-500 dark:text-[#9CA3AF] max-w-xl">
          Get up and running in seconds. Run the command below and the CLI will
          guide you through the rest.
        </p>

        <ol className="space-y-4">
          <li className="flex gap-3 items-start">
            <StepBadge number={1} />
            <div className="flex-1 space-y-2">
              <p className="text-sm font-medium text-neutral-700 dark:text-[#E5E7EB]">
                Run the init command
              </p>

              <div
                className="
                relative flex items-center justify-between
                rounded-xl border px-4 py-3
                font-mono text-sm
                bg-neutral-50 border-neutral-200 text-neutral-800
                dark:bg-[#0d1117] dark:border-[#1F2937] dark:text-[#E5E7EB]
                shadow-sm dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]
                transition-all duration-200
              "
              >
                <div className="flex items-center gap-2.5">
                  <Terminal className="w-4 h-4 text-neutral-400 dark:text-[#4B5563] shrink-0" />
                  <span>{command}</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="
                    flex items-center justify-center w-7 h-7 rounded-lg shrink-0
                    bg-neutral-200 hover:bg-neutral-300
                    dark:bg-[#1F2937] dark:hover:bg-[#294268]
                    transition-all duration-200 active:scale-90
                  "
                  aria-label="Copy command"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-green-500" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-neutral-500 dark:text-[#9CA3AF]" />
                  )}
                </button>
              </div>
            </div>
          </li>

          <li className="flex gap-3 items-start">
            <StepBadge number={2} />
            <div className="flex-1">
              <p className="text-sm font-medium text-neutral-700 dark:text-[#E5E7EB]">
                Start importing components
              </p>
              <p className="mt-1 text-sm text-neutral-500 dark:text-[#6B7280]">
                Once installed, import any component directly — no extra config
                needed.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section className="space-y-5">
        <SectionHeading label="Frameworks" title="Pick Your Framework" />

        <p className="text-sm sm:text-base text-neutral-500 dark:text-[#9CA3AF] max-w-2xl">
          Saelix UI works with both Next.js and Vite. Pick your setup below for
          step-by-step instructions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {frameworks.map((fw) => (
            <Link key={fw.name} href={fw.href}>
              <div
                className="
                group relative flex items-start gap-4
                rounded-2xl border p-5
                transition-all duration-300
                bg-white border-neutral-200
                hover:border-neutral-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.07)]

                dark:bg-[#0d1117] dark:border-[#1F2937]
                dark:hover:border-[#294268]
                dark:hover:shadow-[0_4px_24px_rgba(59,130,246,0.08)]
              "
              >
                <div
                  className="
                  flex items-center justify-center w-11 h-11 rounded-xl border shrink-0
                  bg-neutral-50 border-neutral-200
                  dark:bg-[#111827] dark:border-[#1F2937]
                "
                >
                  <img
                    src={fw.imgSrc(theme ?? "light")}
                    alt={fw.name}
                    className="w-6 h-6 object-contain"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-neutral-900 dark:text-[#E5E7EB]">
                      {fw.name}
                    </h4>
                    <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${fw.tagStyle}`}
                    >
                      {fw.tag}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-500 dark:text-[#6B7280]">
                    {fw.description}
                  </p>
                </div>

                <ArrowRight
                  className="
                  w-4 h-4 shrink-0 mt-8
                  text-neutral-300 dark:text-[#374151]
                  group-hover:text-neutral-500 dark:group-hover:text-[#9CA3AF]
                  group-hover:translate-x-0.5
                  transition-all duration-200
                "
                />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Installation;
