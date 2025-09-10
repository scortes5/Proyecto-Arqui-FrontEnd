import React from "react";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="h-full m-0 font-sans text-text bg-[#2c1b4f] overflow-y-hidden">
      {children}
    </div>
  );
};

export default Layout;
