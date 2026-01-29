"use client";

const StartBuildingSection = () => {
  return (
    <section className="flex flex-col items-center text-center px-6 py-20">
      {/* Eyebrow text */}
      <p className="mb-4 text-sm font-medium text-gray-700">Start building</p>

      {/* Heading */}
      <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Build modern interfaces{" "}
        <span className="text-transparent bg-clip-text bg-linear-to-b from-gray-900 to-gray-200 text-shadow-md">
          faster
        </span>
      </h1>

      {/* Description */}
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600">
        Saelix UI is a modern React component library built for speed,
        accessibility, and consistency. Create beautiful interfaces with less
        effort and more control.
      </p>

      {/* CTA */}
      <button className="mt-8 inline-flex items-center rounded-xl bg-gray-800 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-900 shadow-lg active:scale-95 transition duration-300">
        Explore Saelix UI
      </button>
    </section>
  );
};

export default StartBuildingSection;
