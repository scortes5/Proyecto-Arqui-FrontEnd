import { useAuth0 } from "@auth0/auth0-react";
import { Card } from "../components/Card";
import { useNavigate } from "react-router-dom";

interface Props {}

export const LandingPage = ({}: Props) => {
  const navigate = useNavigate();
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <>
      {/* Hero Section */}

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-10 gap-6 scale-[0.8]">
        <h1 className="text-5xl md:text-6xl font-bold text-white">
          Bienvenido a <span className="text-purple-300">G4Market</span>
        </h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl">
          La forma más simple y segura de encontrar propiedades y realizar
          transacciones en línea.
        </p>
        {isAuthenticated ? (
          <p className="text-md md:text-lg text-white/70 max-w-xl">
            Para explorar las propiedades disponibles, aprieta{" "}
            <span
              onClick={() => navigate("/properties")}
              className="font-semibold text-purple-300 cursor-pointer"
            >
              acá
            </span>
            .
          </p>
        ) : (
          <p className="text-md md:text-lg text-white/70 max-w-xl">
            Para explorar las propiedades disponibles, primero debes{" "}
            <span
              onClick={() => loginWithRedirect()}
              className="font-semibold text-purple-300 cursor-pointer"
            >
              iniciar sesión en tu cuenta
            </span>
            .
          </p>
        )}
      </section>

      {/* Features */}
      <section className="px-6 py-1 grid md:grid-cols-3 gap-8 w-4/5 mx-auto">
        <Card>
          <h2 className="text-xl font-semibold">Filtros Avanzados</h2>
          <p className="text-white/80">
            Encuentra propiedades de acuerdo a tus necesidades gracias a nuestro
            sistema de búsqueda personalizada.
          </p>
        </Card>
        <Card>
          <h2 className="text-xl font-semibold">Transacciones Seguras</h2>
          <p className="text-white/80">
            Conexión con Auth0 y billetera integrada para mayor seguridad.
          </p>
        </Card>
        <Card>
          <h2 className="text-xl font-semibold">Solicitudes de Compra</h2>
          <p className="text-white/80">
            Gestiona tus intenciones de compra de manera rápida y transparente.
          </p>
        </Card>
      </section>
    </>
  );
};
