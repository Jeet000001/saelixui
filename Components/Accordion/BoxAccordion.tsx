"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

type AccordionItem = {
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
  allowMultiple?: boolean;
};

export const BoxAccordion = ({ items, allowMultiple = false }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openMulti, setOpenMulti] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    if (allowMultiple) {
      setOpenMulti((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenIndex(openIndex === index ? null : index);
    }
  };

  const isOpen = (index: number) => {
    return allowMultiple ? openMulti.includes(index) : openIndex === index;
  };

  return (
    <div className="w-full max-w-xl mx-auto md:mx-3 border border-gray-300 dark:border-gray-700 rounded-xl overflow-hidden">
      {items.map((item, index) => {
        const open = isOpen(index);

        return (
          <div key={index} className="border-b border-gray-300 dark:border-gray-700 last:border-none">
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex justify-between items-center px-5 py-4 text-left font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              aria-expanded={open}
            >
              {item.title}

              <ChevronDown
                className={`transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
                size={18}
              />
            </button>

            {/* Content */}
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-4 text-sm text-gray-600 dark:text-gray-300">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
