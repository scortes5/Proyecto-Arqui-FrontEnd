import React from "react";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen m-0 font-sans text-text bg-gradient-to-r from-[#0a0024] to-[#1a0979]">
      {children}
    </div>
  );
};

export default Layout;
