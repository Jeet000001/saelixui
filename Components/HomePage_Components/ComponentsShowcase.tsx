"use client";

import { BoxAccordion } from "../Accordion/BoxAccordion";
import Avatar_Ring from "../Avatar/Avatar_Ring";
import Tab_Breadcrumb from "../Breadcrumb/Tab_Breadcrumb";
import Pagination from "./Pagination";

const ComponentsShowcase = () => {
  return (
    <div className="hidden md:block">
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
          {/* input */}
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
            <div className="flex flex-col gap-2 w-75">
              <label className="text-sm font-medium text-gray-900 dark:text-[#E5E7EB]">
                Email
              </label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="
      px-4 py-3 
      rounded-xl 
      border border-gray-300 
      bg-gray-50
      text-gray-800
      placeholder-gray-400
      outline-none
      transition
      focus:ring-2 focus:ring-black/10
      hover:border-gray-400

      dark:bg-[#111827]
      dark:border-[#1F2937]
      dark:text-[#E5E7EB]
      dark:placeholder-[#9CA3AF]
      dark:hover:border-[#3B82F6]
      dark:focus:border-[#3B82F6]
      dark:focus:ring-2
      dark:focus:ring-[#3B82F6]/30
      dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]
    "
              />
            </div>
          </div>
          {/* Card */}
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
            <div className="w-80 rounded-2xl bg-gray-100 dark:bg-[#111827] p-6 shadow-sm dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)] border border-gray-200 dark:border-[#1F2937]">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-[#E5E7EB]">
                Pro Plan
              </h2>

              <p className="text-gray-600 dark:text-[#9CA3AF] mt-3 leading-relaxed text-sm">
                Designed for growing teams who need powerful scheduling and
                seamless collaboration to keep work organized and meetings
                efficient.
              </p>

              <div className="flex items-center mt-6 gap-2">
                <span className="text-4xl font-bold text-black dark:text-[#E5E7EB]">
                  $20
                </span>
                <span className="text-gray-500 dark:text-[#9CA3AF] text-lg">
                  /month
                </span>

                <div className="w-5 h-5 rounded-full border border-gray-400 dark:border-[#1F2937] flex items-center justify-center text-xs text-gray-500 dark:text-[#9CA3AF] cursor-pointer">
                  ?
                </div>
              </div>

              <button className="w-full mt-6 bg-black dark:bg-[#3B82F6] text-white dark:text-[#E5E7EB] py-3 rounded-xl font-medium hover:bg-gray-900 dark:hover:bg-[#2563EB] transition">
                Start Free Trial
              </button>
            </div>
          </div>
          {/* Table */}
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
          {/* Accordion */}
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
            <BoxAccordion
              items={[
                {
                  title: "What is this component?",
                  content:
                    "A reusable accordion to show and hide content sections.",
                },
                {
                  title: "Can I customize it?",
                  content:
                    "Yes, fully customizable with Tailwind and your styles.",
                },
                {
                  title: "Responsive?",
                  content: "Works smoothly on mobile, tablet, and desktop.",
                },
              ]}
            />
          </div>
          {/* Pagination */}
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
            <Pagination />
          </div>
          {/* Button */}
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
          {/* Breadcrumb */}
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
            <Tab_Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Components", href: "/components" },
                { label: "Breadcrumb", href: "/breadcrumb" },
              ]}
            />
          </div>
          {/* Avatar */}
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
            <Avatar_Ring src="/myImage.jpeg" borderColor="border-green-500" />
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
