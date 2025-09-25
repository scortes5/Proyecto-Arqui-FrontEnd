import useApiResource from "../hooks/useApiResource";
import type { Conversion } from "../types/Conversion";
import { Loading } from "./Loading";

interface Props {}

const url = "https://mindicador.cl/api/uf/2025";

export const BuyRequests = (props: Props) => {
  const { data, loading, error } = useApiResource<Conversion>(
    url,
    (res) => res.serie
  );

  if (error) {
    return <div>Ocurrio un error</div>;
  }

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <ul>
        {data.map((d) => (
          <p className="text-white">
            La fecha es {d.fecha} y el valor de la UF en esa fecha es de{" "}
            {d.valor}
          </p>
        ))}
      </ul>
      <p>
        La conversión más reciente es {data[0]?.valor} (fecha: {data[0]?.fecha})
      </p>
    </div>
  );
};
