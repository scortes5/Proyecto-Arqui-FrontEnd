import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

interface Props {}

export const ProfilePage = ({}: Props) => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const fetchToken = async () => {
      if (isAuthenticated) {
        try {
          const accessToken = await getAccessTokenSilently();
          setToken(accessToken);
          console.log("Access Token:", accessToken);
        } catch (err) {
          console.error("Error al obtener el token:", err);
        }
      }
    };

    fetchToken();
  }, [isAuthenticated, getAccessTokenSilently]);

  if (!isAuthenticated) return <div>Inicia sesión para ver tu perfil</div>;

  return (
    <div className="text-white">
      <h1>Perfil de usuario</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <h2>Access Token</h2>
      <pre>{token}</pre>
    </div>
  );
};
