import { useEffect, useState, type ReactNode } from "react";
import useCustomHookAwaitAxios from "../../hooks/useCustomHook";
import { PropertiesContext } from "../../contexts/PropertiesContext";
import type { Property } from "../../types/types";

const baseUrl = `${import.meta.env.VITE_BACKEND_URL}/properties`;

// Provider
export const PropertiesProvider = ({ children }: { children: ReactNode }) => {
  const [limit, setLimit] = useState(4);
  const [page, setPage] = useState(1);

  const [url, setUrl] = useState(`${baseUrl}?page=${page}&limit=${limit}`);

  useEffect(() => {
    const newUrl = `${baseUrl}?page=${page}&limit=${limit}`;
    setUrl(newUrl);
  }, [page, limit]);

  const {
    data: properties,
    error,
    loading,
  } = useCustomHookAwaitAxios<Property>(url);

  const searchProperties = (
    location: string,
    maxPrice: number | "",
    date: string
  ) => {
    setPage(1);
    let newUrl = `${baseUrl}?page=${page}&limit=${limit}`;

    if (location) newUrl += `&location=${location}`;
    if (maxPrice !== "") newUrl += `&price=${maxPrice}`;
    if (date) newUrl += `&date=${date}`;

    console.log("url:", newUrl);
    setUrl(newUrl);
  };

  return (
    <PropertiesContext.Provider
      value={{
        limit,
        setLimit,
        page,
        setPage,
        properties,
        error,
        loading,
        searchProperties,
      }}
    >
      {children}
    </PropertiesContext.Provider>
  );
};
