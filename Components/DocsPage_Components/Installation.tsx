"use client";

import { Copy, Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Installation = () => {
  const [copied, setCopied] = useState(false);
  const command = "npx saelix-ui@latest init";

  const handelCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mx-auto px-6 md:px-40 py-12 space-y-16 dark:bg-[#0B0F19]">
      
      {/* Introduction */}
      <section className="space-y-4">
        <h1 className="group relative inline-block text-3xl font-bold text-transparent bg-clip-text bg-linear-to-b from-black to-gray-500 dark:from-[#E5E7EB] dark:to-[#9CA3AF]">
          Introduction
          <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gray-700 dark:bg-[#1F2937] transition-all duration-300 group-hover:w-full" />
        </h1>

        <p className="text-gray-600 dark:text-[#9CA3AF] leading-relaxed">
          <span className="font-medium text-gray-800 dark:text-[#E5E7EB]">
            Saelix UI
          </span>{" "}
          is a modern UI component library designed to help developers build
          clean, consistent, and professional user interfaces with minimal
          effort. It provides reusable and customizable components that integrate
          seamlessly with{" "}
          <span className="font-medium dark:text-[#E5E7EB]">
            Tailwind CSS
          </span>.
        </p>
      </section>

      {/* Installation */}
      <section className="space-y-3">
        <h2 className="group relative inline-block text-2xl font-semibold text-transparent bg-clip-text bg-linear-to-b from-black to-gray-500 dark:from-[#E5E7EB] dark:to-[#9CA3AF]">
          Installation
          <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gray-700 dark:bg-[#1F2937] transition-all duration-300 group-hover:w-full" />
        </h2>

        <p className="text-gray-600 dark:text-[#9CA3AF]">
          Follow the steps below to install Saelix UI and set up your project
          correctly.
        </p>
      </section>

      {/* Quick Start */}
      <section className="space-y-4">
        <h2 className="group relative inline-block text-2xl font-semibold text-transparent bg-clip-text bg-linear-to-b from-black to-gray-500 dark:from-[#E5E7EB] dark:to-[#9CA3AF]">
          Quick Start
          <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gray-700 dark:bg-[#1F2937] transition-all duration-300 group-hover:w-full" />
        </h2>

        <p className="text-gray-600 dark:text-[#9CA3AF]">
          Run the following command to initialize Saelix UI:
        </p>

        {/* Code Block */}
        <div className="relative rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 font-mono text-sm text-gray-800 shadow-sm transition-all duration-300 hover:scale-105
                        dark:border-[#1F2937] dark:bg-[#111827] dark:text-[#E5E7EB] dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
          <div className="absolute top-2 right-2">
            <button
              onClick={handelCopy}
              className="flex items-center gap-1 rounded-md px-2 py-1 text-xs text-gray-800 hover:bg-gray-100 transition active:scale-90
                         dark:text-[#E5E7EB] dark:hover:bg-[#1F2937]"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
            </button>
          </div>

          <p className="text-gray-700 dark:text-[#E5E7EB]">
            npx saelix-ui init
          </p>
        </div>

        <p className="text-gray-600 dark:text-[#9CA3AF] leading-relaxed">
          This command will guide you through the setup process where you can
          select your framework, configure Tailwind CSS, and choose a default
          theme.
        </p>
      </section>

      {/* Pick Framework */}
      <section className="space-y-6">
        <h1 className="group relative inline-block text-2xl font-bold text-transparent bg-clip-text bg-linear-to-b from-black to-gray-500 dark:from-[#E5E7EB] dark:to-[#9CA3AF]">
          Pick Your Framework
          <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gray-700 dark:bg-[#1F2937] transition-all duration-300 group-hover:w-full" />
        </h1>

        <p className="text-gray-600 dark:text-[#9CA3AF] max-w-3xl">
          Choose your preferred framework and follow the instructions to install
          the required dependencies.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Next.js */}
          <Link href="/documentation/next">
            <div className="group rounded-2xl border border-gray-200 p-6 transition hover:shadow-lg
                            dark:border-[#1F2937] dark:bg-[#111827] dark:hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
              <div className="flex items-center gap-4">
                <img src="https://img.icons8.com/color/48/nextjs.png" />
                <div>
                  <h4 className="font-semibold text-lg dark:text-[#E5E7EB]">
                    Next.js
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-[#9CA3AF]">
                    Recommended for production-ready apps
                  </p>
                </div>
              </div>
            </div>
          </Link>

          {/* Vite */}
          <Link href="/documentation/vite">
            <div className="group rounded-2xl border border-gray-200 p-6 transition hover:shadow-lg
                            dark:border-[#1F2937] dark:bg-[#111827] dark:hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
              <div className="flex items-center gap-4">
                <img src="https://img.icons8.com/color/48/vite.png" />
                <div>
                  <h4 className="font-semibold text-lg dark:text-[#E5E7EB]">
                    Vite
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-[#9CA3AF]">
                    Fast and lightweight development setup
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Installation;
