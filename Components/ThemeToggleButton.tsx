"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="
        fixed bottom-8 right-8 z-50
        p-2 rounded-full border transition-all duration-300
        
        bg-gray-200 text-black border-gray-300 hover:bg-gray-300
        
        dark:bg-[#111827]
        dark:text-[#E5E7EB]
        dark:border-[#1F2937]
        dark:hover:bg-[#1F2937]
        dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]
      "
    >
      <div className="relative h-5 w-5">
        <Sun
          className={`
      absolute h-5 w-5
      transition-all duration-500 ease-in-out
      ${
        theme === "dark"
          ? "rotate-180 scale-0 opacity-0"
          : "rotate-0 scale-100 opacity-100"
      }
    `}
        />
        <Moon
          className={`
      absolute h-5 w-5
      transition-all duration-500 ease-in-out
      ${
        theme === "dark"
          ? "rotate-0 scale-100 opacity-100"
          : "-rotate-180 scale-0 opacity-0"
      }
    `}
        />
      </div>
    </button>
  );
}
