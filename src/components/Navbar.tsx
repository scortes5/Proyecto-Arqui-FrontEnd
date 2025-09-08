import React from "react";

interface Props {}

const Navbar = (props: Props) => {
  return (
    <header
      className="flex justify-end items-center bg text-white text-xl top-0 
  h-[100px] py-2 border-b border-white/20"
    >
      <ul>
        <li className="p-5 text-2xl mr-8 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110">
          Iniciar sesión
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
