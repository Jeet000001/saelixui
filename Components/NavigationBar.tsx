"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggleButton";

const NavigationBar = () => {
  const [open, setOpen] = useState(false);

  const NavMenu = [
    { name: "Components", path: "/components" },
    { name: "Documentation", path: "/documentation" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav
        className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-md shadow-lg
        dark:bg-[#0B0F19] 
        dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
      >
        <div className="flex items-center justify-between px-8 py-3 md:px-25 md:py-3">
          <Link
            href="/"
            className="flex items-center gap-2 md:gap-3 transition duration-500 hover:scale-105"
          >
            <div
              className="flex size-9 items-center justify-center rounded-lg bg-black shadow-2xl
              dark:bg-[#111827] dark:border dark:border-[#1F2937] md:size-10"
            >
              <Image
                src="/letter-s (2).png"
                alt="Logo"
                width={30}
                height={30}
              />
            </div>
            <h1 className="text-xl font-bold md:text-2xl text-gray-900 dark:text-[#E5E7EB]">
              Saelix UI
            </h1>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {NavMenu.map((menu) => (
              <Link
                key={menu.name}
                href={menu.path}
                className="relative text-sm font-medium text-gray-600 transition
                  hover:text-gray-900
                  after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0
                  after:bg-gray-900 after:transition-all after:duration-300 hover:after:w-full
                  dark:text-[#9CA3AF] dark:hover:text-[#E5E7EB]
                  dark:after:bg-[#E5E7EB]"
              >
                {menu.name}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="flex flex-col gap-1.5 rounded-md bg-gray-700 p-2 transition hover:bg-gray-800
              dark:bg-[#111827] dark:border dark:border-[#1F2937]
              dark:hover:bg-[#1F2937] md:hidden"
          >
            <span
              className={`h-0.5 w-5 bg-gray-300 transition ${
                open ? "translate-y-2 rotate-45" : ""
              } dark:bg-[#E5E7EB]`}
            />
            <span
              className={`h-0.5 w-5 bg-gray-300 transition ${
                open ? "opacity-0" : ""
              } dark:bg-[#E5E7EB]`}
            />
            <span
              className={`h-0.5 w-5 bg-gray-300 transition ${
                open ? "-translate-y-2 -rotate-45" : ""
              } dark:bg-[#E5E7EB]`}
            />
          </button>
        </div>
      </nav>

      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      <div
        className={`fixed top-18 left-0 w-full z-50 transform transition-all duration-300 md:hidden ${
          open ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="mx-4 rounded-lg bg-white shadow-xl
            dark:bg-[#111827] dark:border dark:border-[#1F2937]"
        >
          {NavMenu.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100
                dark:text-[#9CA3AF] dark:hover:text-[#E5E7EB]
                dark:hover:bg-[#1F2937]"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      <ThemeToggle />
    </>
  );
};

export default NavigationBar;