import LoginButton from "../Auth/LoginButton";
import LogoutButton from "../Auth/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";

import { useNavigate } from "react-router-dom";
import { Wallet } from "./Wallet";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { NavbarButton } from "./NavbarButton";

const Navbar = () => {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center bg text-white text-lg sm:text-xl sticky top-0 h-[65px] py-2 px-4 md:px-6 border-b border-white/20 z-50 w-full">
      {/* Izquierda: Inicio */}
      <div className="flex items-center gap-3">
        <NavbarButton onClick={() => navigate("/")}>Inicio</NavbarButton>
      </div>

      {/* Derecha: navegación y login/logout */}
      <div className="flex items-center gap-3">
        {/* Menú para pantallas grandes */}
        <div className="hidden md:flex items-center gap-3">
          {isAuthenticated && (
            <>
              <Wallet />
              <NavbarButton onClick={() => navigate("/properties")}>
                Propiedades
              </NavbarButton>
              <NavbarButton onClick={() => navigate("/buyrequests")}>
                Solicitudes de compra
              </NavbarButton>
            </>
          )}
          <LoginButton />
          <LogoutButton />
        </div>

        {/* Menú hamburguesa para móvil */}
        <div className="md:hidden relative">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
          {menuOpen && (
            <div className="absolute right-0 top-[65px] bg-purple-700 flex flex-col gap-2 p-3 rounded shadow-lg z-50 min-w-[200px]">
              {isAuthenticated && (
                <>
                  <Wallet />
                  <NavbarButton
                    onClick={() => {
                      navigate("/properties");
                      setMenuOpen(false);
                    }}
                  >
                    Propiedades
                  </NavbarButton>
                  <NavbarButton
                    onClick={() => {
                      navigate("/buyrequests");
                      setMenuOpen(false);
                    }}
                  >
                    Solicitudes de compra
                  </NavbarButton>
                </>
              )}
              <LoginButton />
              <LogoutButton />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
