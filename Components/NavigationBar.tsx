"use client";

import Link from "next/link";

import { useState } from "react";
import { Moon } from "lucide-react";

const NavigationBar = () => {
  const [open, setOpen] = useState(false);
  const NavMenu = [
    { name: "Components", path: "/components" },
    { name: "Documentation", path: "/documentation" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <nav className="sticky top-0 z-50 w-full shadow-lg bg-white/70 backdrop-blur-md">
      <div className="flex justify-between items-center md:px-35 md:py-3 px-8 py-3">
        <Link href={"/"} className="flex items-center md:gap-3 gap-1 hover:scale-105 ease-in-out duration-500">
          <img
            src="/LightLogo.png"
            alt="Logo"
            width={0}
            height={0}
            className="bg-black rounded-lg size-7 md:size-10 shadow-2xl"
          />
          <h1 className="font-bold text-xl md:text-2xl text-shadow-lg">Saelix UI</h1>
        </Link>
        <div className="md:flex md:gap-8 md:items-center hidden">
          {NavMenu.map((menu) => (
            <Link
              key={menu.name}
              href={menu.path}
              className="relative text-sm font-medium text-gray-600 transition-colors
                         hover:text-gray-900 text-shadow-lg
                         after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0
                         after:bg-gray-900 after:transition-all after:duration-300
                         hover:after:w-full"
            >
              {menu.name}
            </Link>
          ))}
          <button className="bg-gray-700 hover:bg-gray-800 active:scale-95 cursor-pointer px-2 shadow-xl py-2 rounded-lg">
            <Moon className="size-5 text-gray-200" />
          </button>
        </div>

        <div className="md:hidden flex justify-center gap-3">
          <div className="md:hidden">
            <button className="bg-gray-700 hover:bg-gray-800 cursor-pointer px-2 shadow-xl py-2 rounded-lg">
              <Moon className="size-5 text-gray-200" />
            </button>
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col justify-center gap-1.5 rounded-md p-2 transition bg-gray-700 hover:bg-gray-800 cursor-pointer"
          >
            <span
              className={`h-0.5 w-5 bg-gray-300 transition-all duration-300 ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-gray-300 transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-gray-300 transition-all duration-300 ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          open ? "max-h-72" : "max-h-0"
        }`}
      >
        <div className="mx-4 mb-4 rounded-lg bg-white">
          {NavMenu.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 text-sm font-medium text-gray-700
                         transition hover:bg-gray-100 text-shadow-lg"
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
