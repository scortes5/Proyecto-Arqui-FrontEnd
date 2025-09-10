import React from "react";
import LoginButton from "./Auth/LoginButton";
import LogoutButton from "./Auth/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

interface Props {}

const Navbar = (props: Props) => {
  const { isAuthenticated, user } = useAuth0();

  if (isAuthenticated) {
    console.log("estas autenticado");
  }
  return (
    <header
      className="flex justify-end items-center bg text-white text-xl top-0 
  h-[65px] py-2 border-b border-white/20"
    >
      <ul className="flex">
        <LoginButton />
        <LogoutButton />
      </ul>
      {isAuthenticated && <div>estas loggeado</div>}
    </header>
  );
};

export default Navbar;
