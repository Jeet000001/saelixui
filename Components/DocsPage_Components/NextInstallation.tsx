"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight, oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy, Check, ChevronDown, Terminal, Package, Code2, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

/* ── Reusable: copy command block ── */
function CommandBlock({
  command,
  label,
}: {
  command: string;
  label?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-1.5">
      {label && (
        <p className="text-xs text-neutral-400 dark:text-[#4B5563] font-mono">{label}</p>
      )}
      <div className="
        group flex items-center justify-between gap-3
        rounded-xl border px-3 sm:px-4 py-2.5 sm:py-3
        font-mono text-xs sm:text-sm
        bg-neutral-50 border-neutral-200 text-neutral-800
        dark:bg-[#0d1117] dark:border-[#1F2937] dark:text-[#E5E7EB]
        shadow-sm dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]
        transition-colors duration-200
      ">
        <div className="flex items-center gap-2.5 min-w-0">
          <Terminal className="w-3.5 h-3.5 text-neutral-400 dark:text-[#4B5563] shrink-0" />
          <span className="text-blue-600 dark:text-[#3B82F6] select-none shrink-0">$</span>
          <span className="truncate">{command}</span>
        </div>
        <button
          onClick={handleCopy}
          aria-label="Copy command"
          className="
            flex items-center justify-center w-7 h-7 rounded-lg shrink-0
            bg-neutral-200 hover:bg-neutral-300
            dark:bg-[#1F2937] dark:hover:bg-[#294268]
            transition-all duration-200 active:scale-90
          "
        >
          {copied
            ? <Check className="w-3.5 h-3.5 text-green-500" />
            : <Copy className="w-3.5 h-3.5 text-neutral-500 dark:text-[#9CA3AF]" />
          }
        </button>
      </div>
    </div>
  );
}

/* ── Reusable: step ── */
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
          <span className="text-xs font-bold text-blue-600 dark:text-[#3B82F6]">{number}</span>
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

const NextInstallation = () => {
  const { theme } = useTheme();
  const [isTs, setIsTs] = useState(true);
  const [openLang, setOpenLang] = useState(false);
  const [codeCopied, setCodeCopied] = useState(false);

  const initCommand = "npx saelix-ui@latest init";
  const addCommand = "npx saelix-ui add primary-button";

  const jsCode = `import Primary_Button from "./components/ui/Primary-button";

const Page = () => {
  return (
    <div>
      <Primary_Button>Click me</Primary_Button>
    </div>
  );
};

export default Page;`;

  const tsCode = `import Primary_Button from "@/components/ui/Primary-button";

const Page = () => {
  return (
    <div>
      <Primary_Button>Click me</Primary_Button>
    </div>
  );
};

export default Page;`;

  return (
    <div className="
      mx-auto px-4 sm:px-6 md:px-12 lg:px-24 xl:px-36
      py-8 sm:py-12
      dark:bg-[#0B0F19] min-h-screen
    ">
      <div className="mb-8 sm:mb-10 pb-6 sm:pb-8 border-b border-neutral-100 dark:border-[#1F2937]">
        <div className="flex items-center gap-2 mb-3">
          <Link
            href="/documentation"
            className="text-xs text-neutral-400 dark:text-[#4B5563] hover:text-neutral-600 dark:hover:text-[#9CA3AF] transition-colors"
          >
            Documentation
          </Link>
          <ArrowRight className="w-3 h-3 text-neutral-300 dark:text-[#374151]" />
          <span className="text-xs text-neutral-500 dark:text-[#9CA3AF]">Next.js</span>
        </div>

        <h1 className="
          text-2xl sm:text-3xl font-bold
          text-transparent bg-clip-text
          bg-linear-to-b from-neutral-900 to-neutral-500
          dark:from-[#E5E7EB] dark:to-[#9CA3AF]
          mb-2
        ">
          Next.js Installation
        </h1>
        <p className="text-sm sm:text-base text-neutral-500 dark:text-[#9CA3AF] max-w-xl">
          Set up Saelix UI in your Next.js project in under 2 minutes — from init to your first component.
        </p>
      </div>

      <div>
        <Step number={1} icon={Terminal} title="Initialize Saelix UI">
          <p className="text-sm text-neutral-500 dark:text-[#6B7280]">
            Run the init command in your Next.js project root. This sets up the required config files and folder structure.
          </p>
          <CommandBlock command={initCommand} />
        </Step>

        <Step number={2} icon={Package} title="Add a Component">
          <p className="text-sm text-neutral-500 dark:text-[#6B7280]">
            Use the <code className="px-1.5 py-0.5 rounded-md text-xs bg-neutral-100 dark:bg-[#111827] dark:text-[#E5E7EB] font-mono">add</code> command
            to pull any component directly into your project. The source file will be placed in{" "}
            <code className="px-1.5 py-0.5 rounded-md text-xs bg-neutral-100 dark:bg-[#111827] dark:text-[#E5E7EB] font-mono">components/ui/</code>.
          </p>
          <CommandBlock command={addCommand} />

          <div className="
            flex gap-2.5 p-3.5 rounded-xl border text-xs
            bg-blue-50/60 border-blue-100 text-blue-700
            dark:bg-[#111827] dark:border-[#1a2744] dark:text-[#93c5fd]
          ">
            <span className="shrink-0 mt-0.5">💡</span>
            <span>
              Replace <code className="font-mono">primary-button</code> with any component name from the{" "}
              <Link href="/components" className="underline underline-offset-2 hover:opacity-80">
                component library
              </Link>.
            </span>
          </div>
        </Step>

        <Step number={3} icon={Code2} title="Import & Use">
          <p className="text-sm text-neutral-500 dark:text-[#6B7280]">
            Import the component into your page and start using it — no extra configuration needed.
          </p>

          <div className="
            overflow-hidden rounded-xl border
            bg-white border-neutral-200
            dark:bg-[#0d1117] dark:border-[#1F2937]
            shadow-sm dark:shadow-[0_4px_24px_rgba(0,0,0,0.4)]
          ">
            <div className="
              flex items-center justify-between
              px-4 py-2.5 border-b
              bg-neutral-50 border-neutral-200
              dark:bg-[#111827] dark:border-[#1F2937]
            ">
              <div className="relative flex items-center gap-2.5">
                <button
                  onClick={() => setOpenLang(!openLang)}
                  className="
                    flex items-center gap-1.5 px-2.5 py-1 rounded-lg
                    text-xs font-semibold
                    bg-neutral-900 text-white
                    dark:bg-[#3B82F6] dark:text-white
                    transition-colors
                  "
                >
                  {isTs ? "TS" : "JS"}
                  <span className="w-px h-3 bg-white/30" />
                  <ChevronDown
                    size={12}
                    className={`transition-transform duration-200 ${openLang ? "rotate-180" : ""}`}
                  />
                </button>

                <span className="text-xs text-neutral-400 dark:text-[#4B5563] font-mono">
                  {isTs ? "app/page.tsx" : "app/page.jsx"}
                </span>

                {openLang && (
                  <div className="
                    absolute top-8 left-0 z-20 w-20
                    rounded-lg border overflow-hidden
                    bg-white border-neutral-200 shadow-lg
                    dark:bg-[#111827] dark:border-[#1F2937]
                  ">
                    {["JS", "TS"].map((lang) => (
                      <button
                        key={lang}
                        onClick={() => { setIsTs(lang === "TS"); setOpenLang(false); }}
                        className="
                          block w-full px-3 py-2 text-left text-xs font-medium
                          text-neutral-700 hover:bg-neutral-50
                          dark:text-[#9CA3AF] dark:hover:bg-[#1F2937]
                          transition-colors
                        "
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={() => {
                  navigator.clipboard.writeText(isTs ? tsCode : jsCode);
                  setCodeCopied(true);
                  setTimeout(() => setCodeCopied(false), 2000);
                }}
                className="
                  flex items-center justify-center w-7 h-7 rounded-lg
                  bg-neutral-200 hover:bg-neutral-300
                  dark:bg-[#1F2937] dark:hover:bg-[#294268]
                  transition-all duration-200 active:scale-90
                "
              >
                {codeCopied
                  ? <Check className="w-3.5 h-3.5 text-green-500" />
                  : <Copy className="w-3.5 h-3.5 text-neutral-500 dark:text-[#9CA3AF]" />
                }
              </button>
            </div>

            <div className="overflow-x-auto">
              <SyntaxHighlighter
                language={isTs ? "tsx" : "jsx"}
                style={theme === "dark" ? oneDark : oneLight}
                customStyle={{
                  background: "transparent",
                  margin: 0,
                  padding: "1.25rem 1.5rem",
                  fontSize: "0.8rem",
                  lineHeight: "1.6",
                }}
                codeTagProps={{ style: { background: "transparent" } }}
              >
                {isTs ? tsCode : jsCode}
              </SyntaxHighlighter>
            </div>
          </div>
        </Step>

      </div>

      <div className="
        mt-2 p-5 rounded-2xl border
        bg-neutral-50 border-neutral-200
        dark:bg-[#111827] dark:border-[#1F2937]
        space-y-3
      ">
        <p className="text-sm font-semibold text-neutral-700 dark:text-[#E5E7EB]">
          What's next?
        </p>
        <div className="flex flex-col sm:flex-row gap-2">
          <Link
            href="/components"
            className="
              flex items-center justify-center sm:justify-start gap-2
              px-4 py-2.5 rounded-xl text-sm font-medium
              bg-neutral-900 text-white hover:bg-neutral-700
              dark:bg-[#266ad8] dark:hover:bg-[#0051ff]
              transition-colors duration-200 active:scale-95
            "
          >
            Browse Components
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/documentation"
            className="
              flex items-center justify-center sm:justify-start gap-2
              px-4 py-2.5 rounded-xl text-sm font-medium
              border border-neutral-200 text-neutral-600 hover:bg-neutral-100
              dark:border-[#1F2937] dark:text-[#9CA3AF] dark:hover:bg-[#1F2937]
              transition-colors duration-200 active:scale-95
            "
          >
            Read Full Docs
          </Link>
        </div>
      </div>

    </div>
  );
};

export default NextInstallation;