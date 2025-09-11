import React from "react";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen m-0 font-sans text-text bg-[#2c1b4f] ">
      {children}
    </div>
  );
};

export default Layout;
