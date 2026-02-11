"use client";

import Center_Alart from "../Alert/Center_Alert";
import { CircleAlert } from "lucide-react";


const ComponentsShowcase = () => {
  return (
    <div>
      <div className="relative h-screen w-full p-6 overflow-hidden dark:bg-[#0B0F19]">
        {/* 🔥 TOP BLUR */}
        <div
          className="
            pointer-events-none absolute top-0 left-0 z-20
            h-20 w-full
            bg-linear-to-b from-white via-white/80 to-transparent

            dark:from-[#0B0F19]
            dark:via-[#0B0F19]/80
          "
        />

        {/* 🔥 BOTTOM BLUR */}
        <div
          className="
            pointer-events-none absolute bottom-0 left-0 z-20
            h-20 w-full
            bg-linear-to-t from-white via-white/80 to-transparent

            dark:from-[#0B0F19]
            dark:via-[#0B0F19]/80
          "
        />

        {/* BENTO GRID */}
        <div className="relative z-0 grid h-full w-full grid-cols-10 grid-rows-4 gap-4">
          {/* ITEM */}
          <div
            className="
            col-span-3 row-span-1 rounded-2xl border-2
            bg-gray-50 border-gray-200 shadow-md
            flex items-center justify-center text-lg font-medium
            hover:scale-105 transition duration-400 active:scale-95

            dark:bg-[#111827]
            dark:border-[#1F2937]
            dark:text-[#E5E7EB]
            dark:hover:border-[#294268]
            dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]
          "
          >
            Input
          </div>

          <div
            className="
            col-span-3 row-span-3 rounded-2xl border-2
            bg-gray-50 border-gray-200 shadow-md
            flex items-center justify-center text-2xl font-semibold
            hover:scale-105 transition duration-400 active:scale-95

            dark:bg-[#111827]
            dark:border-[#1F2937]
            dark:text-[#E5E7EB]
            dark:hover:border-[#294268]
            dark:shadow-[0_12px_35px_rgba(0,0,0,0.65)]
          "
          >
            Card
          </div>

          <div
            className="
            col-span-4 row-span-2 rounded-2xl border-2
            bg-gray-50 border-gray-200 shadow-md
            flex items-center justify-center
            hover:scale-105 transition duration-400 active:scale-95

            dark:bg-[#111827]
            dark:border-[#1F2937]
            dark:text-[#E5E7EB]
            dark:hover:border-[#294268]
            dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]
          "
          >
            Table
          </div>

          <div
            className="
            col-span-3 row-span-2 rounded-2xl border-2
            bg-gray-50 border-gray-200 shadow-md
            flex items-center justify-center
            hover:scale-105 transition duration-400 active:scale-95

            dark:bg-[#111827]
            dark:border-[#1F2937]
            dark:text-[#E5E7EB]
            dark:hover:border-[#294268]
            dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]
          "
          >
            Accordion
          </div>

          <div
            className="
            col-span-4 row-span-1 rounded-2xl border-2
            bg-gray-50 border-gray-200 shadow-md
            flex items-center justify-center
            hover:scale-105 transition duration-400 active:scale-95

            dark:bg-[#111827]
            dark:border-[#1F2937]
            dark:text-[#E5E7EB]
            dark:hover:border-[#294268]
            dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]
          "
          >
            Pagination
          </div>

          <div
            className="
            col-span-2 row-span-1 rounded-2xl border-2
            bg-gray-50 border-gray-200 shadow-md
            flex items-center justify-center
            hover:scale-105 transition duration-400 active:scale-95

            dark:bg-[#111827]
            dark:border-[#1F2937]
            dark:text-[#E5E7EB]
            dark:hover:border-[#294268]
            dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]
          "
          >
            <>
              <button
                className="px-5 py-2 rounded-md text-white text-shadow-lg
        bg-linear-to-r from-blue-600 via-blue-400 to-indigo-600 
      hover:from-blue-500 hover:via-blue-300 hover:to-indigo-500
        bg-size-[200%_200%] animate-[gradientMove_2s_ease_infinite]
        transition-transform duration-300 active:scale-95 ${className}"
              >
                Button
              </button>
              <style>
                {`@keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }`}
              </style>
            </>
          </div>

          <div
            className="
            col-span-4 row-span-1 rounded-2xl border-2
            bg-gray-50 border-gray-200 shadow-md
            flex items-center justify-center
            hover:scale-105 transition duration-400 active:scale-95

            dark:bg-[#111827]
            dark:border-[#1F2937]
            dark:text-[#E5E7EB]
            dark:hover:border-[#294268]
            dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]
          "
          >
            <Center_Alart
      btntext="Delete Account"
      icon={<CircleAlert />}
      alartHeading="Are you absolutely sure?"
      alartDiscription="You're about to permanently delete your account and all associated data. This action cannot be undone."
    />
          </div>

          <div
            className="
            col-span-2 row-span-1 rounded-2xl border-2
            bg-gray-50 border-gray-200 shadow-md
            flex items-center justify-center
            hover:scale-105 transition duration-400 active:scale-95

            dark:bg-[#111827]
            dark:border-[#1F2937]
            dark:text-[#E5E7EB]
            dark:hover:border-[#294268]
            dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]
          "
          >
            Avatar
          </div>

          <div
            className="
            col-span-2 row-span-1 rounded-2xl border-2
            bg-gray-50 border-gray-200 shadow-md
            flex items-center justify-center
            hover:scale-105 transition duration-400 active:scale-95

            dark:bg-[#111827]
            dark:border-[#1F2937]
            dark:text-[#E5E7EB]
            dark:hover:border-[#294268]
            dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]
          "
          >
            Switch
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentsShowcase;
