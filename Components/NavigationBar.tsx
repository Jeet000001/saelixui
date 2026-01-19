"use client";

import Link from "next/link";
import { useState } from "react";

const NavigationBar = () => {
  const [open, setOpen] = useState(false);

  const navMenu = [
    { name: "Home", path: "/" },
    { name: "Components", path: "/components" },
    { name: "Documentation", path: "/documentation" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight text-gray-900 transition hover:opacity-90 hover:scale-110"
        >
          <img
            src="/lightLogo.png"
            alt="SaelixUI logo"
            className="h-7 w-7 bg-gray-100 rounded-lg shadow-2xl"
          />
          <span>SaelixUI</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {navMenu.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="relative text-sm font-medium text-gray-600 transition-colors
                         hover:text-gray-900
                         after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0
                         after:bg-gray-900 after:transition-all after:duration-300
                         hover:after:w-full"
            >
              {item.name}
            </Link>
          ))}

          {/* Theme Button */}
          <button
            className="rounded-md border border-gray-300 px-3 py-1.5 text-sm
                       font-medium text-gray-700 transition
                       hover:bg-gray-100 active:scale-95"
          >
            Toggle theme
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            className="rounded-md border border-gray-300 px-3 py-1.5 text-sm
                       font-medium text-gray-700 transition
                       hover:bg-gray-100 active:scale-95"
          >
            Theme
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col justify-center gap-1.5 rounded-md
                       border border-gray-300 p-2 transition hover:bg-gray-100"
          >
            <span
              className={`h-0.5 w-5 bg-gray-900 transition-all duration-300 ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-gray-900 transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-gray-900 transition-all duration-300 ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          open ? "max-h-72" : "max-h-0"
        }`}
      >
        <div className="mx-4 mb-4 rounded-lg border bg-white shadow-sm">
          {navMenu.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 text-sm font-medium text-gray-700
                         transition hover:bg-gray-100"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
