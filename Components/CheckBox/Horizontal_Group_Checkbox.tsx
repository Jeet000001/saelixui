"use client";
import React, { useState } from "react";
import { Check } from "lucide-react";

interface Option {
  id: string;
  label: string;
}

const options: Option[] = [
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Database" },
  { id: "devops", label: "DevOps" },
];

const Horizontal_Group: React.FC = () => {
  const [selected, setSelected] = useState<string[]>(["frontend"]);

  const toggleOption = (id: string) => {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-lg font-semibold text-black dark:text-[#E5E7EB]">
        Skills
      </h2>

      <div className="flex gap-6 flex-wrap">
        {options.map((option) => {
          const isChecked = selected.includes(option.id);

          return (
            <div
              key={option.id}
              onClick={() => toggleOption(option.id)}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div
                className={`w-5 h-5 rounded-md border flex items-center justify-center transition shadow-none dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]
                ${
                  isChecked
                    ? "bg-black border-black dark:bg-[#3B82F6] dark:border-[#3B82F6]"
                    : "border-gray-400 bg-white dark:border-[#1F2937] dark:bg-[#111827]"
                }`}
              >
                {isChecked && (
                  <Check size={14} className="text-white dark:text-white" />
                )}
              </div>

              <span className="text-sm font-medium text-black dark:text-[#9CA3AF]">
                {option.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Horizontal_Group;