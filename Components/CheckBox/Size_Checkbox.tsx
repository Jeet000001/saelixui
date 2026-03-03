"use client";
import React, { useState } from "react";

const Size_Checkbox = () => {
  const sizes = ["XS", "M", "L", "XL", "XXL"];

  const [selected, setSelected] = useState<string>("M");

  return (
    <div className="space-y-4 p-6">
      <h2 className="text-lg font-medium text-gray-800">
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
                    ? "bg-black text-white"
                    : "border border-gray-300 text-gray-700 bg-white hover:border-gray-400"
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