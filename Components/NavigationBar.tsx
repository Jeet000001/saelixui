"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import DarkModeButton from "./DarkModeButton";

const NavigationBar = () => {
  const [open, setOpen] = useState(false);

  const NavMenu = [
    { name: "Components", path: "/components" },
    { name: "Documentation", path: "/documentation" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-40 w-full bg-white/70 backdrop-blur-md shadow-lg">
        <div className="flex items-center justify-between px-8 py-3 md:px-25 md:py-3">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 md:gap-3 transition duration-500 hover:scale-105"
          >
            <div className="flex size-9 items-center justify-center rounded-lg bg-black shadow-2xl md:size-10">
              <Image
                src="/letter-s (2).png"
                alt="Logo"
                width={30}
                height={30}
              />
            </div>
            <h1 className="text-xl font-bold md:text-2xl">Saelix UI</h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 md:flex">
            {NavMenu.map((menu) => (
              <Link
                key={menu.name}
                href={menu.path}
                className="relative text-sm font-medium text-gray-600 transition hover:text-gray-900
                after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0
                after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full"
              >
                {menu.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col gap-1.5 rounded-md bg-gray-700 p-2 transition hover:bg-gray-800 md:hidden"
          >
            <span
              className={`h-0.5 w-5 bg-gray-300 transition ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-gray-300 transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-gray-300 transition ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Dropdown */}
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
                className="block px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <DarkModeButton />
    </>
  );
};

export default NavigationBar;
