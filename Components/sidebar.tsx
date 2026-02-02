"use client";
import Link from "next/link";
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
} from "lucide-react";

import { usePathname } from "next/navigation";

const components = [
  {
    name: "Accordion",
    Icon: <SquareChevronDown size={16} />,
    href: "/components/accordion",
  },
  {
    name: "Alert",
    Icon: <TriangleAlert size={16} />,
    href: "/components/alert",
  },
  {
    name: "Avatar",
    Icon: <CircleUser size={16} />,
    href: "/components/avatar",
  },
  { name: "Badge", Icon: <Tag size={16} />, href: "/components/badge" },
  {
    name: "Breadcrumb",
    Icon: <Waypoints size={16} />,
    href: "/components/breadcrumb",
  },
  {
    name: "Button",
    Icon: <MousePointerClick size={16} />,
    href: "/components/button",
  },
  {
    name: "Card",
    Icon: <SquareChartGantt size={16} />,
    href: "/components/card",
  },
  {
    name: "Carousel",
    Icon: <GalleryThumbnails size={16} />,
    href: "/components/carousel",
  },
  {
    name: "Collapsible",
    Icon: <ChevronsDown size={16} />,
    href: "/components/collapsible",
  },
  {
    name: "Checkbox",
    Icon: <CircleCheck size={16} />,
    href: "/components/checkbox",
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    // Full-height sidebar, separate scroll area (like VS Code explorer)
    <aside className="flex h-screen w-64 flex-col border-r p-4">
      <h2 className="mb-4 text-sm font-semibold uppercase text-gray-500">
        Components
      </h2>

      {/* Scrollable list area inside fixed-height sidebar */}
      <ul className="flex-1 space-y-2 overflow-y-auto pr-2 text-sm no-scrollbar">
        <nav className="space-y-1">
          {components.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex rounded-md px-3 py-2 text-sm transition
                ${
                  active
                    ? "bg-gray-900 text-white dark:bg-blue-600"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-neutral-800"
                }`}
              >
                <div className="flex items-center gap-2">
                  <p className="font-bold">{item.Icon}</p>
                  <p>{item.name}</p>
                </div>
              </Link>
            );
          })}
        </nav>
      </ul>
    </aside>
  );
};

export default Sidebar;
