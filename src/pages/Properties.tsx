import PropertyCard from "../components/Property/PropertyCard";

import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { PropertyFilter } from "../components/Property/PropertyFilter";
import { useProperties } from "../hooks/useProperties";
import { Loading } from "./Loading";

export const Properties = () => {
  const { page, setPage, properties, searchProperties, loading, error } =
    useProperties();

  return (
    <div className="min-h-screen flex flex-col items-center justify-start p-5 gap-4">
      <PropertyFilter searchProperties={searchProperties} />

      <div className="w-full flex flex-col items-center">
        {error || !properties ? (
          <div className="relative h-[calc(100vh-20rem)] flex items-center justify-center">
            <div className="text-white text-4xl">
              Error!! No se muestran las propiedades
            </div>
          </div>
        ) : loading ? (
          <Loading />
        ) : properties.length === 0 ? (
          <div className="relative h-[calc(100vh-20rem)] flex items-center justify-center text-center">
            <div className="text-white text-4xl">
              No se encontraron propiedades que cumplan con el filtro o no
              quedan más propiedades en esta página
            </div>
          </div>
        ) : (
          <>
            <h1 className="text-white text-2xl">Página {page}</h1>

            <div className="relative w-full flex items-center justify-center">
              {page > 1 && (
                <button
                  onClick={() => setPage(page - 1)}
                  className="left-10 cursor-pointer top-[50%] fixed"
                >
                  <GoArrowLeft color="white" size="2em" />
                </button>
              )}
              <div className="grid grid-cols-2 gap-10 w-4/5 p-5">
                {properties.map((p) => (
                  <PropertyCard property={p} key={p.id} />
                ))}
              </div>
              <button
                onClick={() => setPage(page + 1)}
                className="right-10 cursor-pointer top-[50%] fixed"
              >
                <GoArrowRight color="white" size="2em" />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
