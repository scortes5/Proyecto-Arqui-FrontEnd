import LoginButton from "./Auth/LoginButton";
import LogoutButton from "./Auth/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import { PropertyFilter } from "./Property/PropertyFilter";
import { useProperties } from "../hooks/useProperties";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { isAuthenticated } = useAuth0();
  const { searchProperties } = useProperties();
  const navigate = useNavigate();

  if (isAuthenticated) {
    console.log("estas autenticado");
  }
  return (
    <header
      className="flex justidy-between items-center bg text-white text-xl top-0 
  h-[65px] py-2 border-b border-white/20"
    >
      <PropertyFilter searchProperties={searchProperties} />
      <ul className="flex ml-auto">
        {isAuthenticated && (
          <>
            <Button onClick={() => navigate("/profile")}>Perfil</Button>
            <Button onClick={() => navigate("/buyrequests")}>
              Solicitudes de compra
            </Button>
          </>
        )}
        <LoginButton />
        <LogoutButton />
      </ul>
    </header>
  );
};

export default Navbar;
