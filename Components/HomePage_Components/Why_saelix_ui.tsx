"use client";

import Card from "./Card";
import { useTheme } from "next-themes";

const Why_saelix_ui = () => {
  const { theme } = useTheme();
  return (
    <div className="py-16 dark:bg-[#0B0F19]">
      
      {/* Header Section */}
      <section className="text-center px-4 sm:px-8 lg:px-32 mb-16">
        <h1
          className="
            text-3xl sm:text-4xl md:text-5xl font-bold mb-4
            text-gray-900
            dark:text-[#E5E7EB]
          "
        >
          Why build with Saelix UI?
        </h1>

        <p
          className="
            text-lg sm:text-xl max-w-2xl mx-auto
            text-gray-700
            dark:text-[#9CA3AF]
          "
        >
          A smooth and powerful experience for developers and end users.
        </p>
      </section>

      {/* Cards Section */}
      <section
        className="
          px-4 sm:px-8 lg:px-32
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
          gap-8 lg:gap-40 justify-items-center
        "
      >
        <Card
        image={theme === "dark" ? "/thunderdark.png" : "/thunder.png"}
          title="Modern & Clean Design"
          description="Craft visually pleasing interfaces without extra effort. Saelix UI follows modern design principles while staying flexible enough to match your brand’s personality."
        />

        <Card
          image="/gear.png"
          title="Developer Focused"
          description="Every component is built to be configurable and extensible. From styles to behavior, Saelix UI gives you full control without fighting the framework."
        />

        <Card
          image="/file.png"
          title="Clear Documentation"
          description="No guessing, no confusion. Our documentation focuses on real use-cases, simple examples, and best practices so you can build faster with confidence."
        />

        <Card
          image="/dart.png"
          title="Inclusive Design"
          description="We design components that work for everyone. Keyboard navigation, proper semantics, and accessibility standards are considered from day one."
        />
      </section>
    </div>
  );
};

export default Why_saelix_ui;
