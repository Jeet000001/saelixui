"use client";

import { Moon } from "lucide-react";

const DarkModeButton = () => {
  return (
    <div>
      <button
        className="
        fixed bottom-6 right-10 z-50
        rounded-full p-3
        bg-black/80 text-white
        backdrop-blur-md shadow-xl
        hover:scale-105 active:scale-95
        transition-all
      "
      >
        <Moon className="size-5" />
      </button>
    </div>
  );
};

export default DarkModeButton;
