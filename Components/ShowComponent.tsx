"use client";

import { useState } from "react";
import { Code, X, Copy, Check } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight, oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useTheme } from "next-themes";

type ShowComponentProps = {
  children: React.ReactNode;
  ComponentName: string;
  installation: string;
  ComponentCodeJS: string;
  ComponentCodeTS: string;
};

export default function ShowComponent({
  children,
  ComponentName,
  installation,
  ComponentCodeJS,
  ComponentCodeTS,
}: ShowComponentProps) {
  const { theme } = useTheme();

  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"ts" | "js">("ts");
  const [codeCopied, setCodeCopied] = useState(false);
  const [installationCodeCopied, setInstallationCodeCopied] = useState(false);

  const ComponentCode = activeTab === "ts" ? ComponentCodeTS : ComponentCodeJS;

  return (
    <div className="flex justify-center items-start px-4 sm:px-6 md:px-10 py-4">
      {/* Card */}
      <div className="w-full max-w-3xl rounded-xl border border-gray-200 bg-white shadow-sm
        dark:bg-[#111827] dark:border-[#1F2937] dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-300 px-4 py-3
          dark:border-[#1F2937]">
          <h2 className="font-semibold text-lg dark:text-[#E5E7EB]">
            {ComponentName}
          </h2>
          <button
            onClick={() => setOpen(true)}
            className="rounded-md p-2 hover:bg-gray-100
              dark:hover:bg-[#1F2937] dark:text-[#9CA3AF]"
          >
            <Code size={18} />
          </button>
        </div>

        {/* Preview */}
        <div className="flex justify-center items-center py-10 sm:py-16 px-4 dark:text-[#E5E7EB]">
          {children}
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          
          {/* Modal container */}
          <div className="w-full max-w-2xl max-h-130 rounded-xl bg-white flex flex-col
            dark:bg-[#111827] dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]">

            {/* Sticky header */}
            <div className="sticky top-0 z-20 border-b rounded-t-xl border-gray-300 pb-2 bg-white
              dark:bg-[#111827] dark:border-[#1F2937]">

              {/* Top row */}
              <div className="flex items-center justify-between px-4 py-3">
                <h3 className="font-semibold dark:text-[#E5E7EB]">
                  Installation
                </h3>

                <div className="flex items-center gap-3">
                  {/* TS/JS Toggle */}
                  <div className="flex bg-gray-200 rounded-md p-1 dark:bg-[#1F2937]">
                    <button
                      onClick={() => setActiveTab("ts")}
                      className={`px-3 py-1 text-xs rounded-md transition ${
                        activeTab === "ts"
                          ? "bg-white shadow dark:bg-[#0B0F19] dark:text-[#3B82F6]"
                          : "dark:text-[#9CA3AF]"
                      }`}
                    >
                      TS
                    </button>
                    <button
                      onClick={() => setActiveTab("js")}
                      className={`px-3 py-1 text-xs rounded-md transition ${
                        activeTab === "js"
                          ? "bg-white shadow dark:bg-[#0B0F19] dark:text-[#3B82F6]"
                          : "dark:text-[#9CA3AF]"
                      }`}
                    >
                      JS
                    </button>
                  </div>

                  {/* Close */}
                  <button
                    onClick={() => setOpen(false)}
                    className="rounded-md p-1 hover:bg-gray-100
                      dark:hover:bg-[#1F2937] dark:text-[#9CA3AF]"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* Install command */}
              <div className="mx-5 mb-3 flex items-center justify-between gap-2 rounded-lg border-2 border-gray-200 px-4 py-3 text-sm
                dark:bg-[#0B0F19] dark:border-[#1F2937] dark:text-[#E5E7EB]">
                <code className="truncate">{installation}</code>

                <button
                  onClick={async () => {
                    await navigator.clipboard.writeText(installation);
                    setInstallationCodeCopied(true);
                    setTimeout(() => setInstallationCodeCopied(false), 1500);
                  }}
                  className="rounded-md px-2 py-1 text-xs hover:bg-gray-200
                    dark:hover:bg-[#1F2937] dark:text-[#3B82F6]"
                >
                  {installationCodeCopied ? <Check size={14} /> : <Copy size={14} />}
                </button>
              </div>
            </div>

            {/* Scrollable code area */}
            <div className="relative flex-1 overflow-y-auto no-scrollbar">
              
              {/* Fixed copy button */}
              <div className="sticky top-4 z-10 flex justify-end pr-6 pt-4">
                <button
                  onClick={async () => {
                    await navigator.clipboard.writeText(ComponentCode);
                    setCodeCopied(true);
                    setTimeout(() => setCodeCopied(false), 1500);
                  }}
                  className="flex items-center gap-1 rounded-md px-2 py-1 text-xs
                    bg-[#3B82F6] text-white hover:bg-[#2563EB]"
                >
                  {codeCopied ? <Check size={14} /> : <Copy size={14} />}
                </button>
              </div>

              {/* Code */}
              <div className="p-4 pt-0 ">
                <pre className="py-4 px-10 text-sm overflow-x-auto no-scrollbar">
                  <SyntaxHighlighter
                    language={activeTab === "ts" ? "tsx" : "jsx"}
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
                    className="no-scrollbar"
                  >
                    {ComponentCode}
                  </SyntaxHighlighter>
                </pre>
              </div>

            </div>

          </div>
        </div>
      )}
    </div>
  );
}
