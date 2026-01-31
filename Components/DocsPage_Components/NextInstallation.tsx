"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { useTheme } from "next-themes";

const NextInstallation = () => {
  const { theme } = useTheme();
  const [initCommandCopy, setinitCommandCopy] = useState(false);
  const [addCommandCopy, setAddCommandCopy] = useState(false);
  const [codeCopy, setCodeCopy] = useState(false);

  const initCommand = "npx saelix-ui init";
  const addCommand = "npx saelix-ui add button";

  const code = `import { Button } from "@/components/ui/button"
 
export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}`;

  return (
    <div className="mx-auto px-6 md:px-40 py-12 space-y-16 dark:bg-[#0B0F19]">
      {/* Header */}
      <section className="space-y-4">
        <h2 className="group inline-block text-3xl font-bold text-transparent bg-clip-text bg-linear-to-b from-black to-gray-500 dark:from-[#E5E7EB] dark:to-[#9CA3AF]">
          Next.js
        </h2>

        <p className="text-gray-500 dark:text-[#9CA3AF]">
          Install and configure saelix ui for Next.js.
        </p>
      </section>

      {/* Create project */}
      <section className="space-y-4">
        <h2 className="group relative inline-block text-2xl font-semibold text-transparent bg-clip-text bg-linear-to-b from-black to-gray-500 dark:from-[#E5E7EB] dark:to-[#9CA3AF]">
          Create project
          <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gray-700 dark:bg-[#1F2937] transition-all duration-300 group-hover:w-full" />
        </h2>

        <p className="text-gray-600 dark:text-[#9CA3AF]">
          Use the init command to either spin up a fresh Next.js project or
          configure an existing one :
        </p>

        {/* Code Block */}
        <div
          className="relative rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 font-mono text-sm text-gray-800 shadow-sm transition-all duration-300 hover:scale-105
                        dark:border-[#1F2937] dark:bg-[#111827] dark:text-[#E5E7EB] dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
        >
          <div className="absolute top-2 right-2">
            <button
              onClick={() => {
                navigator.clipboard.writeText(initCommand);
                setinitCommandCopy(true);
                setTimeout(() => setinitCommandCopy(false), 2000);
              }}
              className="flex items-center gap-1 rounded-md px-2 py-1 text-xs text-gray-800 hover:bg-gray-100 transition active:scale-90
                         dark:text-[#E5E7EB] dark:hover:bg-[#1F2937]"
            >
              {initCommandCopy ? <Check size={14} /> : <Copy size={14} />}
            </button>
          </div>
          <p className="text-gray-700 dark:text-[#E5E7EB]">
            npx saelix-ui init
          </p>
        </div>
      </section>

      {/* Add components */}
      <section className="space-y-4">
        <h2 className="group relative inline-block text-2xl font-semibold text-transparent bg-clip-text bg-linear-to-b from-black to-gray-500 dark:from-[#E5E7EB] dark:to-[#9CA3AF]">
          Add Components
          <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gray-700 dark:bg-[#1F2937] transition-all duration-300 group-hover:w-full" />
        </h2>

        <p className="text-gray-600 dark:text-[#9CA3AF]">
          You’re all set to begin adding components to your project :
        </p>

        {/* Code Block */}
        <div
          className="relative rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 font-mono text-sm text-gray-800 shadow-sm transition-all duration-300 hover:scale-105
                        dark:border-[#1F2937] dark:bg-[#111827] dark:text-[#E5E7EB] dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
        >
          <div className="absolute top-2 right-2">
            <button
              onClick={() => {
                navigator.clipboard.writeText(addCommand);
                setAddCommandCopy(true);
                setTimeout(() => setAddCommandCopy(false), 2000);
              }}
              className="flex items-center gap-1 rounded-md px-2 py-1 text-xs text-gray-800 hover:bg-gray-100 transition active:scale-90
                         dark:text-[#E5E7EB] dark:hover:bg-[#1F2937]"
            >
              {addCommandCopy ? <Check size={14} /> : <Copy size={14} />}
            </button>
          </div>
          <p className="text-gray-700 dark:text-[#E5E7EB]">
            npx saelix-ui add button
          </p>
        </div>

        <p className="text-gray-600 dark:text-[#9CA3AF] leading-relaxed">
          The command above installs the{" "}
          <span
            className="bg-gray-50 px-2 py-1 rounded-lg border border-gray-200 shadow-sm
                           dark:bg-[#111827] dark:border-[#1F2937] dark:text-[#E5E7EB]"
          >
            Button
          </span>{" "}
          component into your project.
        </p>

        {/* Code Preview */}
        <div
          className="relative overflow-hidden rounded-xl border border-gray-200 bg-gray-50 shadow-sm transition-all duration-300 hover:scale-105
                        dark:border-[#1F2937] dark:bg-[#111827] dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
        >
          <div
            className="flex items-center justify-between border-b border-gray-200 px-4 py-2
                          dark:border-[#1F2937]"
          >
            <div className="flex items-center gap-2 text-xs">
              <span className="rounded-sm px-2 py-0.5 bg-gray-900 text-white">
                TS
              </span>
              <span className="text-slate-400">app/page.tsx</span>
            </div>

            <button
              onClick={() => {
                navigator.clipboard.writeText(code);
                setCodeCopy(true);
                setTimeout(() => setCodeCopy(false), 2000);
              }}
              className="rounded-md p-1 text-gray-800 dark:text-[#E5E7EB]"
            >
              {codeCopy ? <Check size={14} /> : <Copy size={14} />}
            </button>
          </div>

          <pre
            className="
        py-4 px-10 text-sm overflow-x-auto
        bg-gray-100 text-gray-900
        dark:bg-[#0f172a] dark:text-gray-100
      "
          >
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
              {code}
            </SyntaxHighlighter>
          </pre>
        </div>
      </section>
    </div>
  );
};

export default NextInstallation;
