"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
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
  RectangleEllipsis,
  X,
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
  { name: "Dropdown Menu", Icon: <ChevronDown size={16} />, href: "/components/dropdown_menu" },
  { name: "Input", Icon: <TextCursorInput size={16} />, href: "/components/input" },
  { name: "Input OTP", Icon: <RectangleEllipsis size={16} />, href: "/components/input_OTP" },
];

const Sidebar = () => {
  const pathname = usePathname();
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  const filteredComponents = components.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      <aside
        className="hidden md:flex h-screen w-64 flex-col p-4
        bg-white dark:bg-[#0B0F19]
        border-r border-gray-200 dark:border-[#1F2937]"
      >
        <h2 className="mb-3 text-sm font-semibold uppercase
        text-gray-500 dark:text-[#9CA3AF]">
          Components
        </h2>

        <SearchInput search={search} setSearch={setSearch} />

        <div className="flex-1 overflow-y-auto pr-2 no-scrollbar">
          <ComponentList
            filteredComponents={filteredComponents}
            pathname={pathname}
          />
        </div>
      </aside>

      <div className="md:hidden fixed bottom-3 left-0 w-full z-40 flex justify-center">
        <button
          onClick={() => setOpen(true)}
          className="w-80 flex items-center justify-between px-5 py-3 rounded-full
          bg-white text-black
          dark:bg-[#111827] dark:text-[#E5E7EB]
          border border-gray-300 dark:border-[#1F2937]
          shadow-lg dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]
          hover:bg-gray-100 dark:hover:bg-[#1F2937]
          transition"
        >
          <span>All Components</span>
          <ChevronDown size={18} />
        </button>
      </div>

      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />

      <div
        className={`fixed bottom-0 left-0 w-full h-[80%]
        bg-white dark:bg-[#0B0F19]
        rounded-t-2xl z-50 flex flex-col
        border-t border-gray-200 dark:border-[#1F2937]
        shadow-lg dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]
        transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${open ? "translate-y-0" : "translate-y-full"}`}
      >
        <div className="p-4 border-b border-gray-200 dark:border-[#1F2937]">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-semibold uppercase
            text-gray-500 dark:text-[#9CA3AF]">
              Components
            </h2>

            <button
              onClick={() => setOpen(false)}
              className="text-gray-500 dark:text-[#9CA3AF]
              hover:text-black dark:hover:text-[#E5E7EB]"
            >
              <X size={18} />
            </button>
          </div>

          <SearchInput search={search} setSearch={setSearch} />
        </div>

        <div className="flex-1 overflow-y-auto p-4 pt-2 no-scrollbar">
          <ComponentList
            filteredComponents={filteredComponents}
            pathname={pathname}
            closeDrawer={() => setOpen(false)}
          />
        </div>
      </div>
    </>
  );
};

export default Sidebar;

const SearchInput = ({ search, setSearch }: any) => (
  <div className="relative mb-3">
    <Search
      size={14}
      className="absolute left-3 top-1/2 -translate-y-1/2
      text-gray-400 dark:text-[#9CA3AF]"
    />

    <input
      type="text"
      placeholder="Search components..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full rounded-md border
      border-gray-300 dark:border-[#1F2937]
      bg-white dark:bg-[#111827]
      text-black dark:text-[#E5E7EB]
      px-9 py-2 text-sm
      placeholder:text-gray-400 dark:placeholder:text-[#9CA3AF]
      focus:outline-none
      focus:ring-2 focus:ring-blue-500 dark:focus:ring-[#3B82F6]
      transition"
    />
  </div>
);


const ComponentList = ({ filteredComponents, pathname, closeDrawer }: any) => (
  <nav className="space-y-1 text-sm">
    {filteredComponents.length === 0 && (
      <p className="px-3 py-2 text-xs
      text-gray-500 dark:text-[#9CA3AF]">
        No components found
      </p>
    )}

    {filteredComponents.map((item: any) => {
      const active = pathname === item.href;

      return (
        <Link
          key={item.name}
          href={item.href}
          onClick={closeDrawer}
          className={`flex items-center gap-2 rounded-md px-3 py-2 transition-all duration-200
            ${
              active
                ? "bg-gray-900 text-white dark:bg-[#3B82F6]"
                : "text-gray-700 dark:text-[#E5E7EB] hover:bg-gray-100 dark:hover:bg-[#111827]"
            }`}
        >
          {item.Icon}
          <span>{item.name}</span>
        </Link>
      );
    })}
  </nav>
);