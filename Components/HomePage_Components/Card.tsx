"use client";

import Image from "next/image";

const Card = ({ image, title, description }) => {
  return (
    <div className="group rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 transition-all duration-300 hover:border-neutral-300 hover:shadow-lg w-full max-w-sm mx-auto sm:mx-0">
      
      {/* Icon */}
      <div className="mb-4 flex items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50 p-4 sm:p-6 transition-colors group-hover:bg-neutral-100 w-16 h-16 sm:w-20 sm:h-20">
        <Image src={image} alt="icon" width={32} height={32} className="object-contain" />
      </div>

      {/* Content */}
      <div className="space-y-2 sm:space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-neutral-900">
          {title}
        </h2>

        <p className="text-sm sm:text-base leading-relaxed text-neutral-600">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
