"use client";

import Link from "next/link";
import Image from "next/image";
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
    <nav className="sticky top-0 z-50 w-full border-b bg-white/70 backdrop-blur-md">
      <div className="flex justify-between items-center px-35 py-3">
        <Link href={"/"} className="flex items-center gap-3">
          <Image
            src="/LightLogo.png"
            alt="Logo"
            width={40}
            height={40}
            className="bg-black rounded-lg"
          />
          <h1 className="font-bold text-2xl">Saelix UI</h1>
        </Link>
        <div className="md:flex md:gap-8 md:items-center hidden">
          {NavMenu.map((menu) => (
            <Link key={menu.name} href={menu.path}>
              {menu.name}
            </Link>
          ))}
          <button className="border px-3 py-3 rounded-lg">
            <Moon className="size-5 text-gray-600" />
          </button>
        </div>
        <div className="md:hidden">
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
    </nav>
  );
};

export default NavigationBar;
