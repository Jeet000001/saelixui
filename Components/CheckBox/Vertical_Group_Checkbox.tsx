"use client";
import React, { useState } from "react";
import { Check, Laptop, Smartphone, Headphones, Watch } from "lucide-react";

interface Option {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const options: Option[] = [
  { id: "laptop", label: "Laptop", icon: <Laptop size={20} /> },
  { id: "phone", label: "Smartphone", icon: <Smartphone size={20} /> },
  { id: "headphones", label: "Headphones", icon: <Headphones size={20} /> },
  { id: "watch", label: "Smartwatch", icon: <Watch size={20} /> },
];

const Vertical_Group: React.FC = () => {
  const [selected, setSelected] = useState<string[]>([
  ]);

  const toggleOption = (id: string) => {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="p-6 w-64 space-y-4">
      {options.map((option) => {
        const isChecked = selected.includes(option.id);

        return (
          <div
            key={option.id}
            onClick={() => toggleOption(option.id)}
            className="flex items-center gap-4 cursor-pointer"
          >
            <div
              className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all duration-200
              ${
                isChecked
                  ? "bg-black border-black dark:bg-[#3B82F6] dark:border-[#3B82F6]"
                  : "border-gray-300 bg-white dark:border-[#1F2937] dark:bg-[#0B0F19]"
              }`}
            >
              {isChecked && (
                <Check size={14} className="text-white dark:text-[#E5E7EB]" />
              )}
            </div>

            <div className="text-black dark:text-[#9CA3AF]">
              {option.icon}
            </div>

            <span className="text-base font-medium text-black dark:text-[#E5E7EB]">
              {option.label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Vertical_Group;