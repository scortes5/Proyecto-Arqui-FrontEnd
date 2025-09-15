import { createContext } from "react";

import type { Property } from "../types/types.ts";

interface PropertiesContextType {
  limit: number;
  setLimit: (limit: number) => void;
  page: number;
  setPage: (page: number) => void;
  properties: Property[] | undefined;
  error: any;
  loading: boolean;
  searchProperties: (
    location: string,
    maxPrice: number | "",
    date: string
  ) => void;
}

export const PropertiesContext = createContext<PropertiesContextType>(
  {} as PropertiesContextType
);
