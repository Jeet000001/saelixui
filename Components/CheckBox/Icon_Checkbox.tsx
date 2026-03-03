"use client";
import React, { useState } from "react";
import {
  Heart,
  Bookmark,
  Star,
  ThumbsUp,
  Bell,
} from "lucide-react";

interface IconToggleItem {
  id: string;
  outline: React.ReactNode;
  filled: React.ReactNode;
}

const items: IconToggleItem[] = [
  {
    id: "heart",
    outline: <Heart size={28} strokeWidth={2} />,
    filled: <Heart size={28} fill="red" stroke="red" />,
  },
  {
    id: "bookmark",
    outline: <Bookmark size={28} strokeWidth={2} />,
    filled: <Bookmark size={28} fill="black" stroke="black" />,
  },
  {
    id: "star",
    outline: <Star size={28} strokeWidth={2} />,
    filled: <Star size={28} fill="#FACC15" stroke="#FACC15" />,
  },
  {
    id: "like",
    outline: <ThumbsUp size={28} strokeWidth={2} />,
    filled: <ThumbsUp size={28} fill="blue" stroke="black" />,
  },
  {
    id: "bell",
    outline: <Bell size={28} strokeWidth={2} />,
    filled: <Bell size={28} fill="#FACC15" stroke="#FACC15" />,
  },
];

const Icon_Checkbox: React.FC = () => {
  const [selected, setSelected] = useState<string[]>(["bell", "heart"]);

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="flex items-center gap-8 p-6 rounded-md w-fit">
      {items.map((item) => {
        const isChecked = selected.includes(item.id);

        return (
          <button
            key={item.id}
            onClick={() => toggle(item.id)}
            className="transition-transform duration-300 hover:scale-110"
          >
            {isChecked ? item.filled : item.outline}
          </button>
        );
      })}
    </div>
  );
};

export default Icon_Checkbox;