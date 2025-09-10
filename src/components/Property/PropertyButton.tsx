import React from "react";

interface Props {
  onClick: () => void;
  children: React.ReactNode;
  icon?: React.ReactNode; // 👈 opcional
}

export const PropertyButton = ({ onClick, children, icon }: Props) => {
  return (
    <button
      onClick={onClick}
      className="h-fit w-fit px-4 py-2 border rounded-full flex items-center gap-2 group hover:translate-y-0.5 duration-200 backdrop-blur-sm cursor-pointer"
    >
      <span>{children}</span>
      {icon && <span className="text-lg">{icon}</span>}
    </button>
  );
};
