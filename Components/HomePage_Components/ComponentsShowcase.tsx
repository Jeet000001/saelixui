"use client";

import { BoxAccordion } from "../Accordion/BoxAccordion";
import Avatar_Ring from "../Avatar/Avatar_Ring";
import Tab_Breadcrumb from "../Breadcrumb/Tab_Breadcrumb";
import Pricing_Card from "../Card/Pricing_Card";
import Loader from "./Loder";
import Pagination from "./Pagination";
import InvoiceTable from "./Table";


function Tile({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`
        group relative overflow-hidden
        rounded-2xl border
        flex items-center justify-center
        transition-all duration-300
        hover:-translate-y-1.5 active:scale-[0.98]

        bg-white/80 border-neutral-200/80
        shadow-[0_2px_12px_rgba(0,0,0,0.06)]
        hover:border-neutral-300

        dark:bg-[#111827]/90
        dark:border-[#1F2937]
        dark:hover:border-[#3B82F6]/40
        dark:shadow-[0_4px_24px_rgba(0,0,0,0.5)]
        dark:hover:shadow-[0_8px_32px_rgba(59,130,246,0.15)]

        ${className}
      `}
    >

      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(59,130,246,0.06),transparent)]" />
      <div className="relative z-10 w-full h-full flex items-center justify-center p-4 sm:p-5">
        {children}
      </div>
    </div>
  );
}

function GradientButton() {
  return (
    <>
      <button
        className="
          px-5 py-2.5 rounded-xl text-white text-sm font-semibold
          bg-linear-to-r from-blue-600 via-blue-400 to-indigo-600
          hover:from-blue-500 hover:via-blue-300 hover:to-indigo-500
          bg-size-[200%_200%] animate-[gradientMove_2s_ease_infinite]
          transition-transform duration-300 active:scale-95
          shadow-[0_4px_15px_rgba(59,130,246,0.4)]
        "
      >
        Click me
      </button>
      <style>{`
        @keyframes gradientMove {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </>
  );
}

function EmailInput() {
  return (
    <div className="flex flex-col gap-2 w-full max-w-55">
      <label className="text-xs font-semibold tracking-wide uppercase text-neutral-500 dark:text-[#6B7280]">
        Email
      </label>
      <input
        type="email"
        placeholder="hello@example.com"
        className="
          px-3.5 py-2.5 rounded-xl border text-sm
          bg-neutral-50 border-neutral-200 text-neutral-800 placeholder-neutral-400
          outline-none transition
          focus:ring-2 focus:ring-black/10 hover:border-neutral-400

          dark:bg-[#0B0F19] dark:border-[#1F2937]
          dark:text-[#E5E7EB] dark:placeholder-[#4B5563]
          dark:hover:border-[#3B82F6]
          dark:focus:border-[#3B82F6] dark:focus:ring-[#3B82F6]/20
        "
      />
    </div>
  );
}

const ComponentsShowcase = () => {
  return (
    <div className="relative w-full">
      <div className="pointer-events-none absolute top-0 left-0 right-0 z-20 h-16 sm:h-20 bg-linear-to-b from-white dark:from-[#0B0F19] to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-16 sm:h-20 bg-linear-to-t from-white dark:from-[#0B0F19] to-transparent" />

      <div className="relative z-10 w-full p-3 sm:p-4 md:p-5">

        <div className="grid sm:hidden grid-cols-2 gap-3 auto-rows-auto">
          <Tile className="col-span-2 min-h-70">
            <Pricing_Card
              plan="Enterprise"
              price={180}
              features={[
                "AI advisor full time",
                "Unlimited auto tracking",
                "1 Day transaction clearing",
              ]}
            />
          </Tile>

          <Tile className="col-span-1 min-h-20">
            <GradientButton />
          </Tile>

          <Tile className="col-span-1 min-h-20">
            <Loader />
          </Tile>

          <Tile className="col-span-2 min-h-17.5">
            <Pagination />
          </Tile>

          <Tile className="col-span-1 min-h-20">
            <Avatar_Ring src="/myImage.jpeg" borderColor="border-blue-500" />
          </Tile>

          <Tile className="col-span-1 min-h-20">
            <EmailInput />
          </Tile>
        </div>

        <div className="hidden sm:grid lg:hidden grid-cols-4 gap-4 auto-rows-auto">
          <Tile className="col-span-2 min-h-25">
            <EmailInput />
          </Tile>

          <Tile className="col-span-1 min-h-25">
            <GradientButton />
          </Tile>

          <Tile className="col-span-1 min-h-25">
            <Loader />
          </Tile>

          <Tile className="col-span-2 row-span-2 min-h-75">
            <Pricing_Card
              plan="Pro"
              price={20}
              features={[
                "Unlimited projects",
                "Priority support",
                "Custom integrations",
              ]}
            />
          </Tile>

          <Tile className="col-span-2 row-span-2 min-h-75">
              <BoxAccordion
                items={[
                  { title: "What is this component?", content: "A reusable accordion to show and hide content sections." },
                  { title: "Can I customize it?", content: "Yes, fully customizable with Tailwind and your styles." },
                  { title: "Responsive?", content: "Works smoothly on mobile, tablet, and desktop." },
                ]}
              />
          </Tile>

          <Tile className="col-span-4 min-h-17.5">
            <Pagination />
          </Tile>

          <Tile className="col-span-3 min-h-17.5">
            <Tab_Breadcrumb
              items={[
                { label: "Home", href: "" },
                { label: "Docs", href: "" },
                { label: "Components", href: "" },
              ]}
            />
          </Tile>

          <Tile className="col-span-1 min-h-17.5">
            <Avatar_Ring src="/myImage.jpeg" borderColor="border-green-500" />
          </Tile>
        </div>

        <div className="hidden lg:grid grid-cols-10 grid-rows-4 gap-4" style={{ minHeight: "600px" }}>

          <Tile className="col-span-3 row-span-1">
            <EmailInput />
          </Tile>

          <Tile className="col-span-3 row-span-3">
            <Pricing_Card
            plan="Enterprise"
            price={180}
            features={[
              "AI advisor full time",
              "Unlimited auto tracking",
              "1 Day transaction clearing",
              "Priority customer support",
            ]}
          />
          </Tile>

          <Tile className="col-span-4 row-span-2">
            <div className="w-full overflow-auto">
              <InvoiceTable />
            </div>
          </Tile>

          <Tile className="col-span-3 row-span-2 ">
            <div className="w-full flex justify-center">
              <BoxAccordion
                items={[
                  { title: "What is this component?", content: "A reusable accordion to show and hide content sections." },
                  { title: "Can I customize it?", content: "Yes, fully customizable with Tailwind and your styles." },
                  { title: "Responsive?", content: "Works smoothly on mobile, tablet, and desktop." },
                ]}
              />
            </div>
          </Tile>

          <Tile className="col-span-4 row-span-1">
            <Pagination />
          </Tile>

          <Tile className="col-span-2 row-span-1">
            <GradientButton />
          </Tile>


          <Tile className="col-span-4 row-span-1">
            <Tab_Breadcrumb
              items={[
                { label: "Home", href: "" },
                { label: "Docs", href: "" },
                { label: "Components", href: "" },
              ]}
            />
          </Tile>

          <Tile className="col-span-2 row-span-1">
            <Avatar_Ring src="/myImage.jpeg" borderColor="border-green-500" />
          </Tile>

          <Tile className="col-span-2 row-span-1">
            <Loader />
          </Tile>
        </div>

      </div>
    </div>
  );
};

export default ComponentsShowcase;