"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import {
  MousePointerClick,
  SquareChevronDown,
  CircleUser,
  TriangleAlert,
  Tag,
  Waypoints,
  SquareChartGantt,
  GalleryThumbnails,
  ChevronsDown,
  CircleCheck,
  Search,
  ChevronDown,
  TextCursorInput,
  RectangleEllipsis
} from "lucide-react";

const components = [
  { name: "Accordion", Icon: <SquareChevronDown size={16} />, href: "/components/accordion" },
  { name: "Alert", Icon: <TriangleAlert size={16} />, href: "/components/alert" },
  { name: "Avatar", Icon: <CircleUser size={16} />, href: "/components/avatar" },
  { name: "Badge", Icon: <Tag size={16} />, href: "/components/badge" },
  { name: "Breadcrumb", Icon: <Waypoints size={16} />, href: "/components/breadcrumb" },
  { name: "Button", Icon: <MousePointerClick size={16} />, href: "/components/button" },
  { name: "Card", Icon: <SquareChartGantt size={16} />, href: "/components/card" },
  { name: "Carousel", Icon: <GalleryThumbnails size={16} />, href: "/components/carousel" },
  { name: "Collapsible", Icon: <ChevronsDown size={16} />, href: "/components/collapsible" },
  { name: "Checkbox", Icon: <CircleCheck size={16} />, href: "/components/checkbox" },
  { name: "Dropdown Menu", Icon: <ChevronDown size={16}/>, href: "/components/dropdown_menu" },
  { name: "Input", Icon: <TextCursorInput size={16}/>, href: "/components/input" },
  { name: "Input OTP", Icon: <RectangleEllipsis  size={16}/>, href: "/components/input_OTP" },
];

const Sidebar = () => {
  const pathname = usePathname();
  const [search, setSearch] = useState("");

  const filteredComponents = components.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <aside className="flex h-screen w-64 flex-col border-r border-gray-200 p-4
      dark:bg-[#0B0F19] dark:border-[#1F2937]
      dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]">

      <h2 className="mb-3 text-sm font-semibold uppercase text-gray-500 dark:text-[#9CA3AF]">
        Components
      </h2>

      {/* 🔍 Search Bar */}
      <div className="relative mb-4">
        <Search
          size={14}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          placeholder="Search components..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-md border px-9 py-1.5 text-sm
            bg-white text-gray-900
            focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-blue-500
            dark:bg-[#020617] dark:border-[#1F2937] dark:text-white
            dark:placeholder:text-gray-400"
        />
      </div>

      {/* Scrollable list */}
      <ul className="flex-1 overflow-y-auto pr-2 text-sm no-scrollbar">
        <nav className="space-y-1">
          {filteredComponents.length === 0 && (
            <p className="px-3 py-2 text-xs text-gray-500">
              No components found
            </p>
          )}

          {filteredComponents.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-2 rounded-md px-3 py-2 transition
                  ${
                    active
                      ? "bg-gray-900 text-white dark:bg-[#3B82F6]"
                      : "text-gray-700 hover:bg-gray-100 dark:text-[#E5E7EB] dark:hover:bg-[#111827]"
                  }`}
              >
                {item.Icon}
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </ul>
    </aside>
  );
};

export default Sidebar;
