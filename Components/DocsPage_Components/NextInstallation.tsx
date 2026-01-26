"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

const NextInstallation = () => {
  const [copied, setCopied] = useState(false);
  const command = "npx saelix-ui@latest init";
  const code = `import { Button } from "@/components/ui/button"
 
export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
    </div>
  )
}`;

  const handelCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="max-w-5xl mx-auto px-6 md:px-10 py-12 space-y-16">
      {/* Quick Start */}
      <section className="space-y-4">
        <h2 className="group text-shadow-lg relative inline-block text-2xl font-semibold text-transparent bg-clip-text bg-linear-to-b from-black to-gray-500">
          Create project
          <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gray-700 transition-all duration-300 group-hover:w-full" />
        </h2>

        <p className="text-gray-600">
          Use the init command to either spin up a fresh Next.js project or
          configure an existing one :
        </p>

        {/* Code Block */}
        <div className="relative rounded-xl border border-gray-200 hover:scale-105 transition-all duration-300 order-gray-200 bg-gray-50 px-4 py-3 font-mono text-sm text-gray-800 shadow-sm">
          <div className="absolute top-2 right-2">
            <button
              onClick={handelCopy}
              className="flex items-center gap-1 rounded-md active:scale-90 px-2 py-1 text-xs text-gray-800 hover:bg-gray-100 transition"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
            </button>
          </div>
          <p className="text-gray-800 text-shadow-lg">npx saelix-ui init</p>
        </div>
      </section>
      <section className="space-y-4">
        <h2 className="group text-shadow-lg relative inline-block text-2xl font-semibold text-transparent bg-clip-text bg-linear-to-b from-black to-gray-500">
          Add Components
          <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gray-700 transition-all duration-300 group-hover:w-full" />
        </h2>

        <p className="text-gray-600">
          You’re all set to begin adding components to your project :
        </p>

        {/* Code Block */}
        <div className="relative rounded-xl border border-gray-200 hover:scale-105 transition-all duration-300 order-gray-200 bg-gray-50 px-4 py-3 font-mono text-sm text-gray-800 shadow-sm">
          <div className="absolute top-2 right-2">
            <button
              onClick={handelCopy}
              className="flex items-center gap-1 rounded-md active:scale-90 px-2 py-1 text-xs text-gray-800 hover:bg-gray-100 transition"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
            </button>
          </div>
          <p>npx saelix-ui add button</p>
        </div>

        <p className="text-gray-600 leading-relaxed">
          The command above installs the Button component into your project.
          After that, you can import it like this:
        </p>
        {/* Code Preview */}
        <div className="relative overflow-hidden rounded-xl border shadow-sm">
          {/* Header */}
          <div className="flex items-center justify-between border-b px-4 py-2">
            <div className="flex items-center gap-2 text-xs">
              <span className="rounded-md px-2 py-0.5">TS</span>
              <span className="text-slate-400">app/page.tsx</span>
            </div>

            <button
              onClick={() => {
                navigator.clipboard.writeText(code);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
              className="rounded-md p-1 text-gray-800 transition"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </button>
          </div>

          {/* Code */}
          <pre className="rounded-xl p-4 text-sm ">
            <SyntaxHighlighter
              language="jsx"
              style={prism}
              customStyle={{ background: "transparent" }}
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
