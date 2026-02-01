"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const components = [
  { name: "Button", href: "/components/button" },
  { name: "Card", href: "/components/card" },
  { name: "Modal", href: "/components/modal" },
  { name: "Input", href: "/components/input" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r border-gray-200 bg-white p-4 dark:bg-neutral-900">
      <h2 className="mb-4 text-sm font-semibold text-gray-500">Components</h2>

      {/* ❌ yahan koi overflow / scroll NAHI */}
      <div className="">
        <nav className="space-y-1">
          {components.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`block rounded-md px-3 py-2 text-sm transition
                ${
                  active
                    ? "bg-gray-900 text-white dark:bg-blue-600"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-neutral-800"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
