"use client"
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination: React.FC = () => {
  const [active, setActive] = useState(1);

  const pages = [1, 2, 3];

  return (
    <div className="flex items-center gap-4 text-lg font-medium">
      
      {/* Previous */}
      <button
        className="flex items-center gap-1 text-gray-700 hover:text-black 
                   dark:text-[#9CA3AF] dark:hover:text-[#E5E7EB]"
        onClick={() => setActive((p) => Math.max(1, p - 1))}
      >
        <ChevronLeft size={18} />
        Previous
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-3">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setActive(page)}
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition
              
              ${
                active === page
                  ? "bg-gray-200 text-black shadow-inner dark:bg-[#3B82F6] dark:text-[#E5E7EB] dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
                  : "text-gray-700 hover:bg-gray-100 dark:text-[#9CA3AF] dark:hover:bg-[#1F2937] dark:hover:text-[#E5E7EB]"
              }
            `}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Next */}
      <button
        className="flex items-center gap-1 text-gray-700 hover:text-black 
                   dark:text-[#9CA3AF] dark:hover:text-[#E5E7EB]"
        onClick={() => setActive((p) => Math.min(3, p + 1))}
      >
        Next
        <ChevronRight size={18} />
      </button>
    </div>
  );
};

export default Pagination;
