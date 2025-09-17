import { useAuth0 } from "@auth0/auth0-react";
import { NavbarButton } from "../Navbar/NavbarButton";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <NavbarButton
        onClick={() => {
          loginWithRedirect();
          console.log("aprietando");
        }}
      >
        Iniciar sesion
      </NavbarButton>
    )
  );
};

export default LoginButton;
