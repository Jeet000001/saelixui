"use client";

import {
  Copy,
  Check,
  Terminal,
  ArrowRight,
  Sparkles,
  BookOpen,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";

function Step({
  number,
  icon: Icon,
  title,
  children,
}: {
  number: number;
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3 sm:gap-4">
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-blue-200 bg-blue-50 dark:border-[#1a2744] dark:bg-[#111827] shrink-0">
          <span className="text-xs font-bold text-blue-600 dark:text-[#3B82F6]">
            {number}
          </span>
        </div>
        <div className="flex-1 w-px bg-neutral-100 dark:bg-[#1F2937] mt-2 mb-1 min-h-4" />
      </div>
      <div className="flex-1 pb-6 sm:pb-8 space-y-3 sm:space-y-4 min-w-0">
        <div className="flex items-center gap-2 -mt-0.5">
          <Icon className="w-4 h-4 text-blue-500 dark:text-[#3B82F6] shrink-0" />
          <h3 className="font-semibold text-sm sm:text-base text-neutral-800 dark:text-[#E5E7EB]">
            {title}
          </h3>
        </div>
        {children}
      </div>
    </div>
  );
}

function CommandBlock({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div
      className="
      group flex items-center justify-between gap-3
      rounded-xl border px-3 sm:px-4 py-2.5 sm:py-3
      font-mono text-xs sm:text-sm
      bg-neutral-50 border-neutral-200 text-neutral-800
      dark:bg-[#0d1117] dark:border-[#1F2937] dark:text-[#E5E7EB]
      shadow-sm dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]
      transition-colors duration-200
    "
    >
      <div className="flex items-center gap-2.5 min-w-0">
        <Terminal className="w-3.5 h-3.5 text-neutral-400 dark:text-[#4B5563] shrink-0" />
        <span className="text-blue-600 dark:text-[#3B82F6] select-none shrink-0">
          $
        </span>
        <span className="truncate">{command}</span>
      </div>
      <button
        onClick={() => {
          navigator.clipboard.writeText(command);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        }}
        aria-label="Copy"
        className="
          flex items-center justify-center w-7 h-7 rounded-lg shrink-0
          bg-neutral-200 hover:bg-neutral-300
          dark:bg-[#1F2937] dark:hover:bg-[#294268]
          transition-all duration-200 active:scale-90
        "
      >
        {copied ? (
          <Check className="w-3.5 h-3.5 text-green-500" />
        ) : (
          <Copy className="w-3.5 h-3.5 text-neutral-500 dark:text-[#9CA3AF]" />
        )}
      </button>
    </div>
  );
}

const Installation = () => {
  const { theme } = useTheme();
  const command = "npx saelix-ui@latest init";

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
    },
    {
      href: "/documentation/vite",
      name: "Vite",
      tag: "Fast dev",
      tagStyle:
        "bg-purple-50 text-purple-600 dark:bg-[#1e1a2e] dark:text-[#a78bfa]",
      description: "Lightning-fast dev server, zero config.",
      imgSrc: () => "https://img.icons8.com/color/48/vite.png",
    },
  ];

  return (
    <div
      className="
      mx-auto px-4 sm:px-6 md:px-12 lg:px-24 xl:px-36
      py-8 sm:py-12
      dark:bg-[#0B0F19] min-h-screen
    "
    >
      <div className="mb-8 sm:mb-10 pb-6 sm:pb-8 border-b border-neutral-100 dark:border-[#1F2937]">
        <div className="flex items-center gap-2 mb-3">
          <Link
            href="/documentation"
            className="text-xs text-neutral-400 dark:text-[#4B5563] hover:text-neutral-600 dark:hover:text-[#9CA3AF] transition-colors"
          >
            Documentation
          </Link>
          <ArrowRight className="w-3 h-3 text-neutral-300 dark:text-[#374151]" />
          <span className="text-xs text-neutral-500 dark:text-[#9CA3AF]">
            Installation
          </span>
        </div>

        <h1
          className="
          text-2xl sm:text-3xl font-bold
          text-transparent bg-clip-text
          bg-linear-to-b from-neutral-900 to-neutral-500
          dark:from-[#E5E7EB] dark:to-[#9CA3AF]
          mb-2
        "
        >
          Installation
        </h1>
        <p className="text-sm sm:text-base text-neutral-500 dark:text-[#9CA3AF] max-w-2xl">
          Get Saelix UI running in your project in minutes — open source, fully
          typed, and Tailwind-first.
        </p>
      </div>

      <div className="space-y-10 sm:space-y-14">
        <section className="space-y-4">
          <div className="space-y-1.5">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-[#3B82F6]">
              Overview
            </p>
            <h2 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-linear-to-b from-neutral-900 to-neutral-500 dark:from-[#E5E7EB] dark:to-[#9CA3AF]">
              Introduction
            </h2>
          </div>

          <p className="text-sm sm:text-base text-neutral-500 dark:text-[#9CA3AF] leading-relaxed max-w-5xl">
            <span className="font-semibold text-neutral-800 dark:text-[#E5E7EB]">
              Saelix UI
            </span>{" "}
            is an open-source React component library for building clean,
            consistent, and production-ready interfaces — fast. Every component
            is built with{" "}
            <span className="font-medium text-neutral-700 dark:text-[#E5E7EB]">
              Tailwind CSS
            </span>
            , fully typed, and designed to drop into any project without
            friction.
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

        <section className="space-y-4 sm:space-y-5">
          <div className="space-y-1.5">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-[#3B82F6]">
              Setup
            </p>
            <h2 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-linear-to-b from-neutral-900 to-neutral-500 dark:from-[#E5E7EB] dark:to-[#9CA3AF]">
              Quick Start
            </h2>
          </div>

          <p className="text-sm sm:text-base text-neutral-500 dark:text-[#9CA3AF] max-w-3xl">
            Get up and running in seconds. Run the command below and the CLI
            will guide you through the rest.
          </p>

          <div>
            <Step number={1} icon={Terminal} title="Run the init command">
              <CommandBlock command={command} />
            </Step>

            <Step number={2} icon={Sparkles} title="Pick your framework">
              <p className="text-sm text-neutral-500 dark:text-[#6B7280]">
                Choose your setup below for step-by-step instructions.
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
                      <div className="flex items-center justify-center w-11 h-11 rounded-xl border shrink-0 bg-neutral-50 border-neutral-200 dark:bg-[#111827] dark:border-[#1F2937]">
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
                        w-4 h-4 shrink-0 mt-0.5
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
            </Step>

            <Step number={3} icon={BookOpen} title="Start importing components">
              <p className="text-sm text-neutral-500 dark:text-[#6B7280]">
                Once installed, import any component directly — no extra config
                needed.
              </p>
            </Step>
          </div>
        </section>

        <div className="flex items-start gap-3 p-4 rounded-xl border bg-blue-50/50 border-blue-100 dark:bg-[#111827] dark:border-[#1F2937]">
          <BookOpen className="w-4 h-4 mt-0.5 text-blue-500 dark:text-[#3B82F6] shrink-0" />
          <div className="text-sm">
            <span className="text-neutral-600 dark:text-[#9CA3AF]">
              Need more help?{" "}
            </span>
            <Link
              href="/components"
              className="font-medium text-blue-600 dark:text-[#3B82F6] hover:underline underline-offset-4"
            >
              Browse all components →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Installation;
