import React from "react";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen m-0 font-sans text-text bg-gradient-to-r from-[#1E065C] via-[#1E065C] to-[#0b0b0d]">
      {children}
    </div>
  );
};

export default Layout;
