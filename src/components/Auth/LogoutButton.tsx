import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Button } from "../Button";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <Button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Cerrar sesion
      </Button>
    )
  );
};

export default LogoutButton;
