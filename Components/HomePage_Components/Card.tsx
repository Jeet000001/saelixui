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
        group rounded-2xl border p-6 transition-all duration-300 md:w-70

        border-neutral-200 bg-white hover:border-neutral-300 hover:shadow-lg

        dark:bg-[#111827]
        dark:border-[#1F2937]
        dark:hover:border-[#294268]
        dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]
      "
    >
      {/* Icon */}
      <div
        className="
          mb-4 flex items-center justify-center w-12 h-12 rounded-xl border p-2
          transition-colors

          border-neutral-200 bg-neutral-50 group-hover:bg-neutral-100

          dark:bg-[#0B0F19]
          dark:border-[#1F2937]
          dark:group-hover:bg-[#111827]
        "
      >
        <Image
          src={image}
          alt={title}
          width={32}
          height={32}
          className="object-contain"
        />
      </div>

      {/* Content */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-[#E5E7EB]">
          {title}
        </h2>

        <p className="text-sm leading-relaxed text-neutral-600 dark:text-[#9CA3AF]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
