"use client";

import Image from "next/image";

interface CardProps {
  image: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ image, title, description }) => {
  return (
    <div
      className="
        group rounded-2xl border p-5 sm:p-6
        transition-all duration-300
        w-full

        border-neutral-200 bg-white
        hover:border-neutral-300 hover:shadow-lg

        dark:bg-[#111827]
        dark:border-[#1F2937]
        dark:hover:border-[#294268]
        dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]
      "
    >
      {/* Icon */}
      <div
        className="
          mb-4 flex items-center justify-center
          w-10 h-10 sm:w-12 sm:h-12
          rounded-xl border p-2
          transition-colors

          border-neutral-200 bg-neutral-50
          group-hover:bg-neutral-100

          dark:bg-[#0B0F19]
          dark:border-[#1F2937]
          dark:group-hover:bg-[#111827]
        "
      >
        <Image
          src={image}
          alt={title}
          width={28}
          height={28}
          className="object-contain sm:w-8 sm:h-8"
        />
      </div>

      {/* Content */}
      <div className="space-y-1.5 sm:space-y-2">
        <h2 className="text-base sm:text-lg font-semibold text-neutral-900 dark:text-[#E5E7EB]">
          {title}
        </h2>

        <p className="text-sm leading-relaxed text-neutral-500 dark:text-[#9CA3AF]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;