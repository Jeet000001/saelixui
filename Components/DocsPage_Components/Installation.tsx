"use client";

import { Copy } from "lucide-react";
import Link from "next/link";

const Installation = () => {
  const command = "npx saelix-ui@latest init";
  const handelCopy = () => {
    navigator.clipboard.writeText(command);
  };
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-10 py-12 space-y-16">
      {/* Introduction */}
      <section className="space-y-4">
        <h1 className="group relative text-shadow-lg inline-block text-3xl font-bold text-transparent bg-clip-text bg-linear-to-b from-black to-gray-500">
          Introduction
          <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gray-700 transition-all duration-300 group-hover:w-full" />
        </h1>

        <p className="text-gray-600 leading-relaxed">
          <span className="font-medium text-gray-800">Saelix UI</span> is a
          modern UI component library designed to help developers build clean,
          consistent, and professional user interfaces with minimal effort. It
          provides reusable and customizable components that integrate
          seamlessly with <span className="font-medium">Tailwind CSS</span>,
          making it perfect for React and Next.js projects.
        </p>
      </section>

      {/* Installation */}
      <section className="space-y-3">
        <h2 className="group relative text-shadow-lg inline-block text-2xl font-semibold text-transparent bg-clip-text bg-linear-to-b from-black to-gray-500">
          Installation
          <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gray-700 transition-all duration-300 group-hover:w-full" />
        </h2>

        <p className="text-gray-600">
          Follow the steps below to install Saelix UI and set up your project
          correctly.
        </p>
      </section>

      {/* Quick Start */}
      <section className="space-y-4">
        <h2 className="group text-shadow-lg relative inline-block text-2xl font-semibold text-transparent bg-clip-text bg-linear-to-b from-black to-gray-500">
          Quick Start
          <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gray-700 transition-all duration-300 group-hover:w-full" />
        </h2>

        <p className="text-gray-600">
          Run the following command to initialize Saelix UI:
        </p>

        {/* Code Block */}
        <div className="relative rounded-xl border hover:scale-105 transition-all duration-300 order-gray-200 bg-gray-50 px-4 py-3 font-mono text-sm text-gray-800 shadow-sm">
          <div className="absolute top-2 right-2">
            <button onClick={handelCopy} className="flex items-center gap-1 rounded-md border active:scale-95 bg-white px-2 py-1 text-xs text-gray-600 hover:bg-gray-100 transition">
              <Copy size={14} />
            </button>
          </div>
          <span className="text-green-600">npx</span>{" "}
          <span className="text-blue-600">saelix-ui@latest</span>{" "}
          <span className="text-purple-600">init</span>
        </div>

        <p className="text-gray-600 leading-relaxed">
          This command will guide you through the setup process where you can
          select your framework, configure Tailwind CSS, and choose a default
          theme. Once completed, you can start using Saelix UI components
          instantly.
        </p>
      </section>

      {/* Pick Framework */}
      <section className="space-y-6">
        <h1 className="group relative text-shadow-lg inline-block text-2xl font-bold text-transparent bg-clip-text bg-linear-to-b from-black to-gray-500">
          Pick Your Framework
          <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gray-700 transition-all duration-300 group-hover:w-full" />
        </h1>

        <p className="text-gray-600 max-w-3xl">
          Choose your preferred framework and follow the instructions to install
          the required dependencies. Saelix UI works seamlessly with modern
          React frameworks like <strong>Next.js</strong> and{" "}
          <strong>Vite</strong>.
        </p>

        {/* Framework Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Next.js */}
          <Link href="/documentation/nextjs-installation">
            <div className="group rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition">
              <div className="flex items-center gap-4">
                <img
                  src="https://img.icons8.com/color/48/nextjs.png"
                  alt="Next.js"
                />
                <div>
                  <h4 className="font-semibold text-lg">Next.js</h4>
                  <p className="text-sm text-gray-600">
                    Recommended for production-ready apps
                  </p>
                </div>
              </div>
            </div>
          </Link>

          {/* Vite */}
          <Link href="/documentation/vite-installation">
            <div className="group rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition">
              <div className="flex items-center gap-4">
                <img
                  src="https://img.icons8.com/color/48/vite.png"
                  alt="Vite"
                />
                <div>
                  <h4 className="font-semibold text-lg">Vite</h4>
                  <p className="text-sm text-gray-600">
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
