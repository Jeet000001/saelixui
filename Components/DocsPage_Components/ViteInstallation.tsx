"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy, Check, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useTheme } from "next-themes";

const ViteInstallation = () => {
  const { theme } = useTheme();
  const [isTs, setIsTs] = useState(true);
  const [openLang, setOpenLang] = useState(false);
  const [viteCommandCopy, setViteCommandCopy] = useState(false);
  const [tailwindcssCommandCopy, setTailwindcssCommandCopy] = useState(false);
  const [importCommandCopy, setImportCommandCopy] = useState(false);
  const [configCopy, setConfigCopy] = useState(false);
  const [initCommandCopy, setInitCommandCopy] = useState(false);
  const [addCommandCopy, setAddCommandCopy] = useState(false);
  const [codeCopy, setCodeCopy] = useState(false);

  const viteCommand = "npm create vite@latest";
  const tailwindcssCommand = "npm install tailwindcss @tailwindcss/vite";
  const importCommand = `@import "tailwindcss";`;
  const initCommand = "npx saelix-ui init";
  const addCommand = "npx saelix-ui add button";
  const vite_config = `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
`;
  const tsCode = `import { Button } from "@/components/ui/button"
 
export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}`;

const jsCode =  `js - import { Button } from "@/components/ui/button"
 
export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}`;

  return (
    <div className="mx-auto px-6 md:px-40 py-12 space-y-16 dark:bg-[#0B0F19]">
      <section className="space-y-4">
        <h2 className="group text-shadow-lg inline-block text-3xl font-bold text-transparent bg-clip-text bg-linear-to-b from-black to-gray-500 dark:from-[#E5E7EB] dark:to-[#9CA3AF]">
          Vite
        </h2>
        <p className="text-gray-500 dark:text-[#9CA3AF]">
          Install and configure saelix ui for Vite.
        </p>
      </section>

      {/* Quick Start */}
      <section className="space-y-4">
        <h2 className="group text-shadow-lg relative inline-block text-2xl font-semibold text-transparent bg-clip-text bg-linear-to-b from-black to-gray-500 dark:from-[#E5E7EB] dark:to-[#9CA3AF]">
          Create project
          <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gray-700 dark:bg-[#1F2937] transition-all duration-300 group-hover:w-full" />
        </h2>

        <p className="text-gray-600 dark:text-[#9CA3AF]">
          First, initialize a new project using{" "}
          <span className="bg-gray-50 px-2 py-0.5 rounded-lg border border-gray-200 shadow-sm dark:bg-[#111827] dark:border-[#1F2937] dark:text-[#E5E7EB]">
            Vite.
          </span>{" "}
          During the setup process, select the{" "}
          <span className="text-gray-900 dark:text-[#E5E7EB]">React</span> +{" "}
          <span className="text-gray-900 dark:text-[#E5E7EB]">TypeScript</span>{" "}
          TypeScript template to ensure type safety and a modern development
          setup.
        </p>

        {/* Code Block */}
        <div className="relative rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 font-mono text-sm text-gray-800 shadow-sm hover:scale-105 transition-all duration-300 dark:bg-[#111827] dark:border-[#1F2937] dark:text-[#E5E7EB] dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
          <div className="absolute top-2 right-2">
            <button
              onClick={() => {
                navigator.clipboard.writeText(viteCommand);
                setViteCommandCopy(true);
                setTimeout(() => setViteCommandCopy(false), 2000);
              }}
              className="cursor-pointer flex items-center gap-1 rounded-md active:scale-90 px-2 py-1 text-xs text-gray-800 hover:bg-gray-100 transition dark:text-[#E5E7EB] dark:hover:bg-[#1F2937]"
            >
              {viteCommandCopy ? <Check size={14} /> : <Copy size={14} />}
            </button>
          </div>
          <p className="text-gray-700 dark:text-[#E5E7EB] text-shadow-lg">
            npm create vite@latest
          </p>
        </div>
      </section>

      {/* Add Tailwind CSS */}
      <section className="space-y-4">
        <h2 className="group text-shadow-lg relative inline-block text-2xl font-semibold text-transparent bg-clip-text bg-linear-to-b from-black to-gray-500 dark:from-[#E5E7EB] dark:to-[#9CA3AF]">
          Add Tailwind CSS
          <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gray-700 dark:bg-[#1F2937] transition-all duration-300 group-hover:w-full" />
        </h2>

        {/* Tailwind install */}
        <div className="relative rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 font-mono text-sm text-gray-800 shadow-sm hover:scale-105 transition-all duration-300 dark:bg-[#111827] dark:border-[#1F2937] dark:text-[#E5E7EB] dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
          <div className="absolute top-2 right-2">
            <button
              onClick={() => {
                navigator.clipboard.writeText(tailwindcssCommand);
                setTailwindcssCommandCopy(true);
                setTimeout(() => setTailwindcssCommandCopy(false), 2000);
              }}
              className="cursor-pointer flex items-center gap-1 rounded-md active:scale-90 px-2 py-1 text-xs text-gray-800 hover:bg-gray-100 transition dark:text-[#E5E7EB] dark:hover:bg-[#1F2937]"
            >
              {tailwindcssCommandCopy ? (
                <Check size={14} />
              ) : (
                <Copy size={14} />
              )}
            </button>
          </div>
          <p className="text-gray-700 dark:text-[#E5E7EB] text-shadow-lg">
            npm install tailwindcss @tailwindcss/vite
          </p>
        </div>

        <p className="text-gray-500 dark:text-[#9CA3AF]">
          Open the{" "}
          <span className="bg-gray-50 px-2 py-0.5 rounded-lg border border-gray-200 shadow-sm dark:bg-[#111827] dark:border-[#1F2937] dark:text-[#E5E7EB]">
            src/index.css
          </span>{" "}
          file and remove any existing styles. Then, paste the content provided
          below to replace it entirely.
        </p>

        {/* Import CSS */}
        <div className="relative overflow-hidden bg-gray-50 border-gray-200 hover:scale-105 transition-all duration-300 rounded-xl border shadow-sm dark:bg-[#111827] dark:border-[#1F2937] dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
          <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2 dark:border-[#1F2937]">
            <div className="flex items-center gap-2 text-xs">
              <span className="rounded-sm px-2 py-0.5 bg-gray-900 text-white dark:bg-[#3B82F6]">
                CSS
              </span>
              <span className="text-slate-400 dark:text-[#9CA3AF]">
                src/index.css
              </span>
            </div>
            <button
              onClick={() => {
                navigator.clipboard.writeText(importCommand);
                setImportCommandCopy(true);
                setTimeout(() => setImportCommandCopy(false), 2000);
              }}
              className="cursor-pointer rounded-md p-1 text-gray-800 transition dark:text-[#E5E7EB] dark:hover:bg-[#1F2937]"
            >
              {importCommandCopy ? <Check size={14} /> : <Copy size={14} />}
            </button>
          </div>
          <pre className="rounded-xl p-4 text-sm">
            <SyntaxHighlighter
              language="jsx"
              style={theme === "dark" ? oneDark : oneLight}
              customStyle={{
                background: "transparent",
                margin: 0,
                padding: 0,
              }}
              codeTagProps={{
                style: {
                  background: "transparent",
                },
              }}
            >
              {importCommand}
            </SyntaxHighlighter>
          </pre>
        </div>

        {/* Vite config */}
        <p className="text-gray-500 dark:text-[#9CA3AF]">
          Update your{" "}
          <span className="bg-gray-50 px-2 py-1 rounded-lg border border-gray-200 shadow-sm dark:bg-[#111827] dark:border-[#1F2937] dark:text-[#E5E7EB]">
            vite.config.ts
          </span>{" "}
          so your app can use tailwindcss without error:
        </p>

        <div className="relative overflow-hidden bg-gray-50 border-gray-200 hover:scale-105 transition-all duration-300 rounded-xl border shadow-sm dark:bg-[#111827] dark:border-[#1F2937] dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
          <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2 dark:border-[#1F2937]">
            <div className="relative flex items-center gap-2 text-xs">
              <button
                onClick={() => setOpenLang(!openLang)}
                className="
    min-w-13
    flex items-center justify-between
    gap-1
    rounded-sm
    px-2
    py-0.5
    bg-gray-900
    text-white
    leading-none
    dark:bg-[#3B82F6]
  "
              >
                <span className="leading-none">{isTs ? "TS" : "JS"}</span>

                {/* Divider */}
                <span className="h-3 w-px bg-white/40 dark:bg-white/60" />

                <ChevronDown
                  size={14}
                  className={`shrink-0 transition-transform duration-200 ${
                    openLang ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              <span className="text-slate-400">
                {isTs ? "vite.config.ts" : "vite.config.js"}
              </span>

              {openLang && (
                <div
                  className="absolute top-6 left-0 z-20 w-20 rounded-md border border-gray-200 bg-white shadow-md
                                dark:border-[#1F2937] dark:bg-[#111827]"
                >
                  <button
                    onClick={() => {
                      setIsTs(false);
                      setOpenLang(false);
                    }}
                    className="block w-full px-3 py-1 text-left text-sm hover:bg-gray-100 dark:hover:bg-[#1F2937]"
                  >
                    JS
                  </button>
                  <button
                    onClick={() => {
                      setIsTs(true);
                      setOpenLang(false);
                    }}
                    className="block w-full px-3 py-1 text-left text-sm hover:bg-gray-100 dark:hover:bg-[#1F2937]"
                  >
                    TS
                  </button>
                </div>
              )}
            </div>
            <button
              onClick={() => {
                navigator.clipboard.writeText(vite_config);
                setConfigCopy(true);
                setTimeout(() => setConfigCopy(false), 2000);
              }}
              className="cursor-pointer rounded-md p-1 text-gray-800 transition dark:text-[#E5E7EB] dark:hover:bg-[#1F2937]"
            >
              {configCopy ? <Check size={14} /> : <Copy size={14} />}
            </button>
          </div>
          <pre className="rounded-xl p-4 text-sm">
            <SyntaxHighlighter
              language="jsx"
              style={theme === "dark" ? oneDark : oneLight}
              customStyle={{
                background: "transparent",
                margin: 0,
                padding: 0,
              }}
              codeTagProps={{
                style: {
                  background: "transparent",
                },
              }}
            >
              {vite_config}
            </SyntaxHighlighter>
          </pre>
        </div>
      </section>

      {/* Run CLI */}
      <section className="space-y-4">
        <h2 className="group text-shadow-lg relative inline-block text-2xl font-semibold text-transparent bg-clip-text bg-linear-to-b from-black to-gray-500 dark:from-[#E5E7EB] dark:to-[#9CA3AF]">
          Run the CLI
          <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gray-700 dark:bg-[#1F2937] transition-all duration-300 group-hover:w-full" />
        </h2>

        <p className="text-gray-600 dark:text-[#9CA3AF]">
          Run the init command to configure your project and generate the
          required setup files :
        </p>

        <div className="relative rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 font-mono text-sm text-gray-800 shadow-sm hover:scale-105 transition-all duration-300 dark:bg-[#111827] dark:border-[#1F2937] dark:text-[#E5E7EB] dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
          <div className="absolute top-2 right-2">
            <button
              onClick={() => {
                navigator.clipboard.writeText(initCommand);
                setInitCommandCopy(true);
                setTimeout(() => setInitCommandCopy(false), 2000);
              }}
              className="cursor-pointer flex items-center gap-1 rounded-md active:scale-90 px-2 py-1 text-xs text-gray-800 hover:bg-gray-100 transition dark:text-[#E5E7EB] dark:hover:bg-[#1F2937]"
            >
              {initCommandCopy ? <Check size={14} /> : <Copy size={14} />}
            </button>
          </div>
          <p className="text-gray-700 dark:text-[#E5E7EB] text-shadow-lg">
            npx saelix-ui init
          </p>
        </div>
      </section>

      {/* Add Component */}
      <section className="space-y-4">
        <h2 className="group text-shadow-lg relative inline-block text-2xl font-semibold text-transparent bg-clip-text bg-linear-to-b from-black to-gray-500 dark:from-[#E5E7EB] dark:to-[#9CA3AF]">
          Add Component
          <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gray-700 dark:bg-[#1F2937] transition-all duration-300 group-hover:w-full" />
        </h2>

        <p className="text-gray-600 dark:text-[#9CA3AF]">
          You’re all set to begin adding components to your project :
        </p>

        <div className="relative rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 font-mono text-sm text-gray-800 shadow-sm hover:scale-105 transition-all duration-300 dark:bg-[#111827] dark:border-[#1F2937] dark:text-[#E5E7EB] dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
          <div className="absolute top-2 right-2">
            <button
              onClick={() => {
                navigator.clipboard.writeText(addCommand);
                setAddCommandCopy(true);
                setTimeout(() => setAddCommandCopy(false), 2000);
              }}
              className="cursor-pointer flex items-center gap-1 rounded-md active:scale-90 px-2 py-1 text-xs text-gray-800 hover:bg-gray-100 transition dark:text-[#E5E7EB] dark:hover:bg-[#1F2937]"
            >
              {addCommandCopy ? <Check size={14} /> : <Copy size={14} />}
            </button>
          </div>
          <p className="text-gray-700 dark:text-[#E5E7EB] text-shadow-lg">
            npx saelix-ui add button
          </p>
        </div>

        <p className="text-gray-600 dark:text-[#9CA3AF] leading-relaxed">
          The command above installs the{" "}
          <span className="bg-gray-50 px-2 py-0.5 rounded-lg border border-gray-200 shadow-sm dark:bg-[#111827] dark:border-[#1F2937] dark:text-[#E5E7EB]">
            Button
          </span>{" "}
          component into your project. After that, you can import it like this:
        </p>

        <div className="relative overflow-hidden bg-gray-50 border-gray-200 hover:scale-105 transition-all duration-300 rounded-xl border shadow-sm dark:bg-[#111827] dark:border-[#1F2937] dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
          <div className="flex items-center justify-between border-b border-gray-200 px-4 py-2 dark:border-[#1F2937]">
            <div className="relative flex items-center gap-2 text-xs">
              <button
                onClick={() => setOpenLang(!openLang)}
                className="
    min-w-13
    flex items-center justify-between
    gap-1
    rounded-sm
    px-2
    py-0.5
    bg-gray-900
    text-white
    leading-none
    dark:bg-[#3B82F6]
  "
              >
                <span className="leading-none">{isTs ? "TS" : "JS"}</span>

                {/* Divider */}
                <span className="h-3 w-px bg-white/40 dark:bg-white/60" />

                <ChevronDown
                  size={14}
                  className={`shrink-0 transition-transform duration-200 ${
                    openLang ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              <span className="text-slate-400">
                {isTs ? "vite.config.ts" : "vite.config.js"}
              </span>

              {openLang && (
                <div
                  className="absolute top-6 left-0 z-20 w-20 rounded-md border border-gray-200 bg-white shadow-md
                                dark:border-[#1F2937] dark:bg-[#111827]"
                >
                  <button
                    onClick={() => {
                      setIsTs(false);
                      setOpenLang(false);
                    }}
                    className="block w-full px-3 py-1 text-left text-sm hover:bg-gray-100 dark:hover:bg-[#1F2937]"
                  >
                    JS
                  </button>
                  <button
                    onClick={() => {
                      setIsTs(true);
                      setOpenLang(false);
                    }}
                    className="block w-full px-3 py-1 text-left text-sm hover:bg-gray-100 dark:hover:bg-[#1F2937]"
                  >
                    TS
                  </button>
                </div>
              )}
            </div>
            <button
              onClick={() => {
                navigator.clipboard.writeText(vite_config);
                setConfigCopy(true);
                setTimeout(() => setConfigCopy(false), 2000);
              }}
              className="cursor-pointer rounded-md p-1 text-gray-800 transition dark:text-[#E5E7EB] dark:hover:bg-[#1F2937]"
            >
              {configCopy ? <Check size={14} /> : <Copy size={14} />}
            </button>
          </div>
          <pre className="rounded-xl p-4 text-sm">
            <SyntaxHighlighter
              language="jsx"
              style={theme === "dark" ? oneDark : oneLight}
              customStyle={{
                background: "transparent",
                margin: 0,
                padding: 0,
              }}
              codeTagProps={{
                style: {
                  background: "transparent",
                },
              }}
            >
              {isTs ? tsCode : jsCode}
            </SyntaxHighlighter>
          </pre>
        </div>
      </section>
    </div>
  );
};

export default ViteInstallation;
