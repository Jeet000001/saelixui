"use client";

import Card from "./Card";
import { useTheme } from "next-themes";

const Why_saelix_ui = () => {
  const { theme } = useTheme();

  const cards = [
    {
      darkImage: "/thunderdark.png",
      lightImage: "/thunderlight.png",
      title: "Modern & Clean Design",
      description:
        "Craft visually pleasing interfaces without extra effort. Saelix UI follows modern design principles while staying flexible enough to match your brand's personality.",
    },
    {
      darkImage: "/bullseyesdark.png",
      lightImage: "/bullseyeslight.png",
      title: "Developer Focused",
      description:
        "Every component is built to be configurable and extensible. From styles to behavior, Saelix UI gives you full control without fighting the framework.",
    },
    {
      darkImage: "/filedark.png",
      lightImage: "/filelight.png",
      title: "Clear Documentation",
      description:
        "No guessing, no confusion. Our documentation focuses on real use-cases, simple examples, and best practices so you can build faster with confidence.",
    },
    {
      darkImage: "/websitedark.png",
      lightImage: "/websitelight.png",
      title: "Inclusive Design",
      description:
        "We design components that work for everyone. Keyboard navigation, proper semantics, and accessibility standards are considered from day one.",
    },
  ];

  return (
    <div className="py-12 sm:py-16 md:py-20 bg-white dark:bg-[#0B0F19]">

      {/* Header Section */}
      <section className="text-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 mb-10 sm:mb-14 md:mb-16">
        <h1
          className="
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl
            font-bold mb-3 sm:mb-4
            text-gray-900 dark:text-[#E5E7EB]
          "
        >
          Why build with Saelix UI?
        </h1>

        <p
          className="
            text-base sm:text-lg md:text-xl
            max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl
            mx-auto
            text-gray-600 dark:text-[#9CA3AF]
          "
        >
          A smooth and powerful experience for developers and end users.
        </p>
      </section>

      {/* Cards Section */}
      <section
        className="
          px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-6 sm:gap-8 lg:gap-6 xl:gap-8
          justify-items-center
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