import React from "react";

type LoaderProps = {
  size?: number;
  className?: string;
};

const Loader: React.FC<LoaderProps> = ({
  size = 40,
  className = "",
}) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        style={{ width: size, height: size }}
        className="
          rounded-full
          border-4
          border-gray-300
          dark:border-gray-700
          border-t-blue-600
          dark:border-t-blue-400
          animate-spin
        "
      />
    </div>
  );
};

export default Loader;