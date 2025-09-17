import { useAuth0 } from "@auth0/auth0-react";
import { NavbarButton } from "../Navbar/NavbarButton";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <NavbarButton
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Cerrar sesion
      </NavbarButton>
    )
  );
};

export default LogoutButton;
