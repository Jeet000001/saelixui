"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ThemeToggle from "./ThemeToggleButton";

const NavigationBar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const NavMenu = [
    { name: "Components", path: "/components" },
    { name: "Documentation", path: "/documentation" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) =>
    path === "/"
      ? pathname === "/"
      : pathname === path || pathname.startsWith(path + "/");

  return (
    <>
      <nav
        className="
          sticky top-0 z-50 w-full
          border-b
          bg-white/80 backdrop-blur-xl
          border-neutral-200/80
          shadow-[0_1px_20px_rgba(0,0,0,0.06)]

          dark:bg-[#0B0F19]/85
          dark:border-[#1F2937]
          dark:shadow-[0_1px_30px_rgba(0,0,0,0.5)]
        "
      >
        <div className="flex items-center justify-between px-5 py-3 sm:px-8 md:px-14 lg:px-24">
          {/* ── Logo ── */}
          <Link
            href="/"
            className="flex items-center gap-2.5 transition-all duration-300 hover:opacity-80"
          >
            <div
              className="
                flex size-8 sm:size-9 items-center justify-center
                rounded-lg bg-neutral-900 shadow-lg
                dark:bg-[#111827] dark:border dark:border-[#1F2937]
              "
            >
              <Image
                src="/letter-s (2).png"
                alt="Logo"
                width={28}
                height={28}
              />
            </div>
            <span className="text-lg sm:text-xl font-bold tracking-tight text-neutral-900 dark:text-[#E5E7EB]">
              Saelix{" "}
              <span className="text-blue-600 dark:text-[#3B82F6]">UI</span>
            </span>
          </Link>

          {/* ── Desktop menu ── */}
          <div className="hidden md:flex items-center gap-1">
            {NavMenu.map((menu) => {
              const active = isActive(menu.path);
              return (
                <Link
                  key={menu.name}
                  href={menu.path}
                  className={`
                    relative px-4 py-2 text-sm font-medium rounded-lg
                    transition-all duration-200
                    after:absolute after:left-4 after:right-4 after:-bottom-0.5
                    after:h-0.5 after:rounded-full
                    after:bg-neutral-900 dark:after:bg-[#3B82F6]
                    after:transition-all after:duration-300 after:ease-out
                    after:origin-left
                    ${
                      active
                        ? `text-neutral-900 dark:text-[#E5E7EB]
                           bg-neutral-100 dark:bg-[#1a2744]
                           after:scale-x-0 after:opacity-0`
                        : `text-neutral-500 hover:text-neutral-900
                           dark:text-[#6B7280] dark:hover:text-[#E5E7EB]
                           after:scale-x-0 after:opacity-0
                           hover:after:scale-x-100 hover:after:opacity-100`
                    }
                  `}
                >
                  {menu.name}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/documentation"
              className="
                hidden md:inline-flex items-center gap-1.5
                px-4 py-2 rounded-lg text-sm font-semibold
                bg-neutral-900 text-white
                hover:bg-neutral-700
                transition-all duration-200
                shadow-sm active:scale-95

                dark:bg-[#3B82F6] dark:text-white
                dark:hover:bg-[#2563EB]
                dark:shadow-[0_0_20px_rgba(59,130,246,0.25)]
              "
            >
              Get Started
            </Link>

            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="
                relative flex flex-col gap-1.25 items-center justify-center
                w-9 h-9 rounded-lg
                bg-neutral-100 hover:bg-neutral-200
                transition-colors duration-200
                dark:bg-[#111827] dark:border dark:border-[#1F2937]
                dark:hover:bg-[#1F2937]
                md:hidden
              "
            >
              <span
                className={`block h-0.5 w-5 rounded-full bg-neutral-700 dark:bg-[#E5E7EB] transition-all duration-300 ${
                  open ? "translate-y-1.75 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-neutral-700 dark:bg-[#E5E7EB] transition-all duration-300 ${
                  open ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 rounded-full bg-neutral-700 dark:bg-[#E5E7EB] transition-all duration-300 ${
                  open ? "-translate-y-1.75 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      <div
        onClick={() => setOpen(false)}
        className={`
          fixed inset-0 z-40 bg-black/20 backdrop-blur-sm
          transition-opacity duration-300 md:hidden
          ${open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}
        `}
      />

      <div
        className={`
          fixed top-16.25 left-0 w-full z-50
          transform transition-all duration-300 ease-out
          md:hidden
          ${open ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0 pointer-events-none"}
        `}
      >
        <div
          className="
            mx-3 sm:mx-5 rounded-2xl overflow-hidden
            border shadow-2xl
            bg-white border-neutral-200
            dark:bg-[#111827] dark:border-[#1F2937]
            dark:shadow-[0_20px_60px_rgba(0,0,0,0.7)]
          "
        >
          <div className="p-2 flex flex-col gap-1">
            {NavMenu.map((item) => {
              const active = isActive(item.path);
              return (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={() => setOpen(false)}
                  className={`
                    relative flex items-center justify-between
                    px-4 py-3 rounded-xl text-sm font-medium
                    transition-all duration-200 overflow-hidden
                    ${
                      active
                        ? `text-neutral-900 bg-neutral-100
                           dark:text-[#E5E7EB] dark:bg-[#1a2744]`
                        : `text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50
                           dark:text-[#9CA3AF] dark:hover:text-[#E5E7EB] dark:hover:bg-[#1F2937]/60`
                    }
                  `}
                >
                  {active && (
                    <span className="absolute left-0 top-2 bottom-2 w-0.75 rounded-full bg-blue-500 dark:bg-[#3B82F6]" />
                  )}

                  <span className={active ? "pl-2" : ""}>{item.name}</span>
                </Link>
              );
            })}
          </div>

          <div className="mx-4 h-px bg-neutral-100 dark:bg-[#1F2937]" />

          <div className="p-3">
            <Link
              href="/documentation"
              onClick={() => setOpen(false)}
              className="
                flex items-center justify-center w-full
                py-2.5 rounded-xl text-sm font-semibold
                bg-neutral-900 text-white hover:bg-neutral-700
                transition-colors duration-200 active:scale-95
                dark:bg-[#3B82F6] dark:hover:bg-[#2563EB]
              "
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      <ThemeToggle />
    </>
  );
};

export default NavigationBar;
