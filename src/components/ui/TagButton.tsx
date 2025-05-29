import React from "react";
const TagButton = ({
  children,
  isSelected,
  onClick,
  className = "",
}: {
  children: React.ReactNode;
  isSelected: boolean;
  onClick: () => void;
  className?: string;
}) => (
  <button
    onClick={onClick}
    className={`px-3.5 py-1.5 border text-black ${
      isSelected
        ? "bg-[#cbbba0]  border-gray-900"
        : "bg-[#fdf6ed]   hover:border-gray-400"
    } ${className}`}
  >
    {children}
  </button>
);
export default TagButton;
