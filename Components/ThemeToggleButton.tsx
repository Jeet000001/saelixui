"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="
        fixed bottom-6 right-6 z-50
        flex items-center justify-center
        w-10 h-10 rounded-xl
        border transition-all duration-300
        active:scale-90

        bg-white border-neutral-200 text-neutral-700
        hover:bg-neutral-50 hover:border-neutral-300
        shadow-[0_2px_12px_rgba(0,0,0,0.08)]
        hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)]

        dark:bg-[#111827] dark:border-[#1F2937] dark:text-[#E5E7EB]
        dark:hover:bg-[#1a2030] dark:hover:border-[#294268]
        dark:shadow-[0_2px_16px_rgba(0,0,0,0.5)]
        dark:hover:shadow-[0_4px_24px_rgba(59,130,246,0.15)]
      "
    >
      <div className="relative w-4 h-4">
        <Sun className={`
          absolute w-4 h-4 text-amber-500
          transition-all duration-500 ease-in-out
          ${isDark ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}
        `} />
        <Moon className={`
          absolute w-4 h-4 text-blue-400
          transition-all duration-500 ease-in-out
          ${isDark ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}
        `} />
      </div>
    </button>
  );
}