import { useContext } from "react";

import { PropertiesContext } from "../contexts/PropertiesContext";

export const useProperties = () => {
  const context = useContext(PropertiesContext);
  if (!context) {
    throw new Error(
      "useProperties debe usarse dentro de un PropertiesProvider"
    );
  }
  return context;
};
