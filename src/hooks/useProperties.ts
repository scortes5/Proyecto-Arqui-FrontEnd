import { usePropertiesStore } from "../stores/PropertiesStore";
import type { Property } from "../types/Property";
import { useEffect } from "react";
import useApiResource from "./useApiResource";

const baseUrl = `${import.meta.env.VITE_BACKEND_URL}/properties`;

export const useProperties = () => {
  const { url, setUrl, page, limit, setPage, setLimit } = usePropertiesStore();
  const { data: properties, loading, error } = useApiResource<Property>(url);

  useEffect(() => {
    const newUrl = `${baseUrl}?page=${page}&limit=${limit}`;
    setUrl(newUrl);
    console.log("url", newUrl);
  }, [page, limit]);

  const searchProperties = (
    location?: string,
    maxPrice?: number | "",
    date?: string
  ) => {
    let newUrl = `${
      import.meta.env.VITE_BACKEND_URL
    }/properties?page=${page}&limit=${limit}`;
    if (location) newUrl += `&location=${location}`;
    if (maxPrice !== "" && maxPrice !== undefined)
      newUrl += `&price=${maxPrice}`;
    if (date) newUrl += `&date=${date}`;
    setUrl(newUrl);
    setPage(1);
  };

  return {
    properties,
    loading,
    error,
    page,
    setPage,
    limit,
    setLimit,
    searchProperties,
  };
};
