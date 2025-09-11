import PropertyCard from "./PropertyCard";
import type { Properties, Property } from "../../types/types";
import useCustomHookAwaitAxios from "../../hooks/useCustomHook";
import { useState } from "react";
import Pagination from "../Pagination";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

interface Props {
  properties: Properties;
}

export const PropertiesSection = ({ properties }: Props) => {
  const [limit, setLimit] = useState(4);
  const [page, setPage] = useState(10);
  const baseUrl = `${
    import.meta.env.VITE_BACKEND_URL
  }?page=${page}&limit=${limit}`;

  const {
    data: propertiesWithBackend,
    error,
    loading,
    createData: createProperty,
  } = useCustomHookAwaitAxios<Property>(baseUrl);

  console.log("properties de backend:", propertiesWithBackend);
  console.log(baseUrl);

  if (error) {
    return (
      <div className="relative h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="text-white text-4xl">Error!!</div>{" "}
      </div>
    );
  }

  if (loading) {
    return (
      <div className="relative h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-gray-300 border-t-purple-500 rounded-full animate-spin"></div>
      </div>
    );
  }
  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center p-5">
        <Pagination page={page} limit={limit} />

        {page > 1 && (
          <button
            onClick={() => setPage(page - 1)}
            className="left-10 cursor-pointer top-[50vh] fixed"
          >
            <GoArrowLeft color="white" size="2em" />
          </button>
        )}
        <div className="grid grid-cols-2 gap-10 w-4/5 h-1/5 p-10">
          {propertiesWithBackend.map((p) => (
            <PropertyCard property={p} key={p.id} />
          ))}
        </div>
        <button
          onClick={() => setPage(page + 1)}
          className="right-10 cursor-pointer top-[50vh] fixed"
        >
          <GoArrowRight color="white" size="2em" />
        </button>
      </div>
    </>
  );
};
