"use client";

import Card from "./Card";
import { useTheme } from "next-themes";

const Why_saelix_ui = () => {
  const { theme } = useTheme();

  const cards = [
    {
      darkImage: "/thunderdark.png",
      lightImage: "/thunderlight.png",
      title: "Lightning Fast",
      description:
        "Every component is optimized for performance out of the box. Zero unnecessary re-renders, minimal bundle size — your app stays snappy at any scale.",
    },
    {
      darkImage: "/bullseyesdark.png",
      lightImage: "/bullseyeslight.png",
      title: "Developer First",
      description:
        "Built by developers, for developers. Fully typed, composable, and easy to extend — spend less time fighting components and more time shipping features.",
    },
    {
      darkImage: "/filedark.png",
      lightImage: "/filelight.png",
      title: "Clear Docs",
      description:
        "No walls of text. Real examples, clear props, and copy-paste snippets for every component — so you can go from zero to production without friction.",
    },
    {
      darkImage: "/websitedark.png",
      lightImage: "/websitelight.png",
      title: "Accessible by Default",
      description:
        "ARIA roles, keyboard navigation, and focus management built in from day one — so your users get a great experience no matter how they interact.",
    },
  ];

  return (
    <div className="relative py-14 sm:py-16 md:py-15 bg-white dark:bg-[#0B0F19] overflow-hidden">
      <section className="relative text-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 mb-10 sm:mb-12 md:mb-14">
        <p
          className="
          inline-block mb-3 sm:mb-4
          text-xs sm:text-sm font-semibold uppercase tracking-widest
          text-blue-600 dark:text-[#3B82F6]
        "
        >
          Why Saelix UI
        </p>

        <h2
          className="
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl
          font-bold tracking-tight
          mb-3 sm:mb-4
          text-neutral-900 dark:text-[#E5E7EB]
        "
        >
          Everything you need,{" "}
          <span
            className="
            text-transparent bg-clip-text
            bg-linear-to-b from-neutral-900 to-neutral-400
            dark:from-[#3B82F6] dark:to-[#9CA3AF]
          "
          >
            nothing you don't
          </span>
        </h2>

        <p
          className="
          text-sm sm:text-base md:text-lg
          max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl
          mx-auto leading-relaxed
          text-neutral-500 dark:text-[#9CA3AF]
        "
        >
          Saelix UI is designed to get out of your way — fast to integrate, easy
          to customize, and built to scale with your product.
        </p>
      </section>

      <section
        className="
        px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-5 sm:gap-6 lg:gap-5 xl:gap-6
        justify-items-stretch
      "
      >
        {cards.map((card) => (
          <Card
            key={card.title}
            image={theme === "dark" ? card.darkImage : card.lightImage}
            title={card.title}
            description={card.description}
          />
        ))}
      </section>
    </div>
  );
};

export default Why_saelix_ui;
