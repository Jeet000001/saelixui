import React from "react";

type LoaderProps = {
  size?: number;
  color?: string;
  className?: string;
};

const Loader: React.FC<LoaderProps> = ({
  size = 40,
  color = "border-blue-500",
  className = "",
}) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        style={{ width: size, height: size }}
        className={`
          rounded-full 
          border-4 
          border-gray-600
          dark:border-gray-200 
          ${color} 
          border-t-transparent 
          animate-spin
        `}
      ></div>
    </div>
  );
};

export default Loader;
