"use client";
import React, { useState, useRef, useEffect } from "react";
import { UserRound, Bolt, LogOut } from "lucide-react";

const Icon_Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuItems = [
    { label: "Profile", icon: <UserRound size={18} /> },
    { label: "Settings", icon: <Bolt size={18} /> },
    { label: "Logout", icon: <LogOut size={18} /> },
  ];

  return (
    <div>
      <div className="relative inline-block" ref={dropdownRef}>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-5 py-2.5 text-sm font-medium rounded-xl
          bg-white border border-gray-300 shadow-md
          hover:bg-gray-50 hover:shadow-lg
          active:scale-95 transition-all duration-200
          
          dark:bg-[#111827]
          dark:border-[#1F2937]
          dark:text-[#E5E7EB]
          dark:hover:bg-[#0f172a]
          dark:shadow-[0_8px_25px_rgba(0,0,0,0.6)]"
        >
          Open Menu
        </button>

        <div
          className={`absolute right-0 mt-3 w-56 origin-top-right
          rounded-2xl backdrop-blur-xl
          bg-white/95 border border-gray-200 shadow-2xl
          dark:bg-[#111827]/95 dark:border-[#1F2937]
          transform transition-all duration-200 ease-out z-50
          
          ${
            isOpen
              ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
              : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="py-2">
            
            <div className="px-4 py-2 text-xs font-semibold uppercase tracking-wider
            text-gray-500 border-b border-gray-100
            dark:text-[#9CA3AF] dark:border-[#1F2937]">
              My Account
            </div>

            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center gap-3
                px-4 py-2.5 text-sm font-medium
                text-gray-700 hover:bg-gray-100 hover:text-black
                transition-all duration-150
                
                dark:text-[#E5E7EB]
                dark:hover:bg-[#1F2937]
                dark:hover:text-[#3B82F6]"
              >
                <span className="opacity-70">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Icon_Dropdown;