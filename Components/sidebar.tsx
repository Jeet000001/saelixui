"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  MousePointerClick, SquareChevronDown, CircleUser, TriangleAlert,
  Tag, Waypoints, SquareChartGantt, GalleryThumbnails,
  CircleCheck, Search, ChevronDown, TextCursorInput, RectangleEllipsis, X,
  LayoutGrid,
} from "lucide-react";

const components = [
  { name: "Accordion",  Icon: <SquareChevronDown size={15} />, href: "/components/accordion" },
  { name: "Alert",      Icon: <TriangleAlert size={15} />,     href: "/components/alert" },
  { name: "Avatar",     Icon: <CircleUser size={15} />,        href: "/components/avatar" },
  { name: "Badge",      Icon: <Tag size={15} />,               href: "/components/badge" },
  { name: "Breadcrumb", Icon: <Waypoints size={15} />,         href: "/components/breadcrumb" },
  { name: "Button",     Icon: <MousePointerClick size={15} />, href: "/components/button" },
  { name: "Card",       Icon: <SquareChartGantt size={15} />,  href: "/components/card" },
  { name: "Carousel",   Icon: <GalleryThumbnails size={15} />, href: "/components/carousel" },
  { name: "Checkbox",   Icon: <CircleCheck size={15} />,       href: "/components/checkbox" },
  { name: "Dropdown",   Icon: <ChevronDown size={15} />,       href: "/components/dropdown" },
  { name: "Input",      Icon: <TextCursorInput size={15} />,   href: "/components/input" },
  { name: "Input OTP",  Icon: <RectangleEllipsis size={15} />, href: "/components/input_OTP" },
];

const SearchInput = ({ search, setSearch }: { search: string; setSearch: (v: string) => void }) => (
  <div className="relative">
    <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-[#4B5563] pointer-events-none" />
    <input
      type="text"
      placeholder="Search..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="
        w-full rounded-xl border pl-8 pr-3 py-2 text-xs
        bg-neutral-50 border-neutral-200 text-neutral-800
        placeholder-neutral-400
        dark:bg-[#111827] dark:border-[#1F2937] dark:text-[#E5E7EB]
        dark:placeholder-[#4B5563]
        focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-[#3B82F6]/20
        focus:border-blue-400 dark:focus:border-[#3B82F6]
        transition-all duration-200
      "
    />
    {search && (
      <button
        onClick={() => setSearch("")}
        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 dark:text-[#4B5563] dark:hover:text-[#9CA3AF]"
      >
        <X size={12} />
      </button>
    )}
  </div>
);

const ComponentList = ({
  filteredComponents,
  pathname,
  closeDrawer,
}: {
  filteredComponents: typeof components;
  pathname: string;
  closeDrawer?: () => void;
}) => (
  <nav className="space-y-0.5">
    {filteredComponents.length === 0 ? (
      <div className="px-3 py-6 text-center">
        <p className="text-xs text-neutral-400 dark:text-[#4B5563]">No results for your search</p>
      </div>
    ) : (
      filteredComponents.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.name}
            href={item.href}
            onClick={closeDrawer}
            className={`
              relative flex items-center gap-2.5 rounded-xl px-3 py-2
              text-xs font-medium transition-all duration-200
              ${active
                ? "bg-blue-50 text-blue-700 dark:bg-[#1a2744] dark:text-[#3B82F6]"
                : "text-neutral-600 dark:text-[#9CA3AF] hover:bg-neutral-100 dark:hover:bg-[#111827] hover:text-neutral-900 dark:hover:text-[#E5E7EB]"
              }
            `}
          >
            {active && (
              <span className="absolute left-0 top-1.5 bottom-1.5 w-0.5 rounded-full bg-blue-500 dark:bg-[#3B82F6]" />
            )}
            <span className={`shrink-0 ${active ? "text-blue-600 dark:text-[#3B82F6]" : "text-neutral-400 dark:text-[#4B5563]"}`}>
              {item.Icon}
            </span>
            <span>{item.name}</span>
          </Link>
        );
      })
    )}
  </nav>
);
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
      <aside className="
        hidden md:flex flex-col
        h-screen w-60 shrink-0
        sticky top-0
        bg-white dark:bg-[#0B0F19]
        border-r border-neutral-200 dark:border-[#1F2937]
      ">
        <div className="px-4 pt-5 pb-3 border-b border-neutral-100 dark:border-[#1F2937]">
          <div className="flex items-center gap-2 mb-3">
            <LayoutGrid className="w-3.5 h-3.5 text-blue-500 dark:text-[#3B82F6]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-[#4B5563]">
              Components
            </span>
            <span className="ml-auto text-[10px] px-1.5 py-0.5 rounded-full bg-neutral-100 text-neutral-500 dark:bg-[#111827] dark:text-[#6B7280] font-medium">
              {components.length}
            </span>
          </div>
          <SearchInput search={search} setSearch={setSearch} />
        </div>

        <div className="flex-1 overflow-y-auto p-3 no-scrollbar">
          <ComponentList filteredComponents={filteredComponents} pathname={pathname} />
        </div>
      </aside>

      <div className="md:hidden fixed bottom-4 left-0 w-full z-40 flex justify-center px-4">
        <button
          onClick={() => setOpen(true)}
          className="
            w-full max-w-sm flex items-center justify-between
            px-5 py-3 rounded-2xl
            bg-white dark:bg-[#111827]
            border border-neutral-200 dark:border-[#1F2937]
            text-neutral-700 dark:text-[#E5E7EB]
            text-sm font-medium
            shadow-lg dark:shadow-[0_8px_30px_rgba(0,0,0,0.6)]
            hover:bg-neutral-50 dark:hover:bg-[#1F2937]
            transition-all duration-200 active:scale-[0.98]
          "
        >
          <div className="flex items-center gap-2">
            <LayoutGrid className="w-4 h-4 text-blue-500 dark:text-[#3B82F6]" />
            <span>Browse Components</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-neutral-400 dark:text-[#4B5563]">{components.length}</span>
            <ChevronDown size={15} className="text-neutral-400 dark:text-[#4B5563]" />
          </div>
        </button>
      </div>

      <div
        onClick={() => setOpen(false)}
        className={`
          fixed inset-0 bg-black/30 backdrop-blur-sm z-40
          transition-opacity duration-300
          ${open ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}
        `}
      />

      <div className={`
        fixed bottom-0 left-0 w-full z-50
        bg-white dark:bg-[#0B0F19]
        rounded-t-2xl flex flex-col
        border-t border-neutral-200 dark:border-[#1F2937]
        shadow-2xl dark:shadow-[0_-10px_40px_rgba(0,0,0,0.6)]
        transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
        ${open ? "translate-y-0" : "translate-y-full"}
      `}
        style={{ maxHeight: "80dvh" }}
      >
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-neutral-200 dark:bg-[#1F2937]" />
        </div>

        <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-100 dark:border-[#1F2937]">
          <div className="flex items-center gap-2">
            <LayoutGrid className="w-3.5 h-3.5 text-blue-500 dark:text-[#3B82F6]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-[#4B5563]">
              Components
            </span>
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-neutral-100 text-neutral-500 dark:bg-[#111827] dark:text-[#6B7280] font-medium">
              {components.length}
            </span>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="
              flex items-center justify-center w-7 h-7 rounded-lg
              bg-neutral-100 hover:bg-neutral-200
              dark:bg-[#111827] dark:hover:bg-[#1F2937]
              text-neutral-500 dark:text-[#9CA3AF]
              transition-colors duration-200
            "
          >
            <X size={14} />
          </button>
        </div>

        <div className="px-4 py-3 border-b border-neutral-100 dark:border-[#1F2937]">
          <SearchInput search={search} setSearch={setSearch} />
        </div>

        <div className="flex-1 overflow-y-auto p-3 no-scrollbar">
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