"use client";

import React, { useState } from "react";

const sizes = ["XS", "M", "L", "XL", "XXL"] as const;

type Size = (typeof sizes)[number];

const Size_Checkbox: React.FC = () => {
  const [selected, setSelected] = useState<Size>("M");

  return (
    <div className="space-y-4 p-6">
      <h2 className="text-lg font-medium text-gray-800 dark:text-[#E5E7EB]">
        Select Size
      </h2>

      <div className="flex gap-4 w-fit">
        {sizes.map((size) => {
          const isSelected = selected === size;

          return (
            <button
              key={size}
              type="button"
              onClick={() => setSelected(size)}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-200
                ${
                  isSelected
                    ? `
                      bg-black text-white
                      dark:bg-[#3B82F6] 
                      dark:text-[#E5E7EB]
                      dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]
                    `
                    : `
                      border border-gray-300 text-gray-700 bg-white hover:border-gray-400
                      dark:bg-[#111827]
                      dark:border-[#1F2937]
                      dark:text-[#9CA3AF]
                      dark:hover:border-[#3B82F6]
                      dark:hover:text-[#E5E7EB]
                    `
                }
              `}
            >
              {size}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Size_Checkbox;