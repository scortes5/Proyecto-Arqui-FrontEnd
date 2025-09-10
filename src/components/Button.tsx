import React from "react";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

export const Button = ({ children, onClick }: Props) => {
  return (
    <button className="px-10 cursor-pointer text-sm" onClick={onClick}>
      {children}
    </button>
  );
};
