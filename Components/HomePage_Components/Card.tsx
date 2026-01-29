"use client";

import Image from "next/image";

interface CardProps {
  image: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ image, title, description }) => {
  return (
    <div className="group rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:border-neutral-300 hover:shadow-lg md:w-70">
      
      {/* Icon */}
      <div className="mb-4 flex items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50 p-2 transition-colors group-hover:bg-neutral-100 w-12 h-12">
        <Image src={image} alt={title} width={32} height={32} className="object-contain" />
      </div>

      {/* Content */}
      <div className="space-y-2">
        <h2 className="text-lg font-semibold text-neutral-900">{title}</h2>
        <p className="text-sm leading-relaxed text-neutral-600">{description}</p>
      </div>
    </div>
  );
};

export default Card;
