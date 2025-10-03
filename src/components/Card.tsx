import React from "react";

interface Props {
  children: React.ReactNode;
  onClick?: (...args: any[]) => any;
}

export const Card = ({ children }: Props) => {
  return (
    <div className="w-full h-auto border-2 border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] text-white font-nunito p-3 sm:p-4 flex flex-col gap-3 backdrop-blur-[12px]">
      {children}
    </div>
  );
};
