import React from "react";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

export const NavbarButton = ({ children, onClick }: Props) => {
  return (
    <button
      className="
        px-5 
        cursor-pointer 
        text-sm 
        text-white
      "
      onClick={onClick}
    >
      <span className="inline-block transition-transform duration-200 ease-in-out hover:scale-110">
        {children}
      </span>
    </button>
  );
};
