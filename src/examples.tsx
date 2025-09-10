import type { Properties, Property } from "./types/types";

const property1: Property = {
  id: 84,
  name: "Moderno Depto. C/amplia Terraza- Juan Enrique Concha",
  price: 720000,
  currency: "$",
  bedrooms: "2 dormitorios",
  bathrooms: "2 baños",
  m2: "55 m² útiles",
  location: "Juan Enrique Concha 1 - 300, Ñuñoa, Plaza Ñuñoa, Ñuñoa",
  img: "https://http2.mlstatic.com/D_NQ_NP_2X_710717-MLC88336611086_072025-E-moderno-depto-camplia-terraza-juan-enrique-concha.webp",
  url: "https://portalinmobiliario.com/MLC-1653229365-moderno-depto-camplia-terraza-juan-enrique-concha-_JM#polycard_client=search-nordic&position=45&search_layout=grid&type=item&tracking_id=3d70ae83-5e08-4ff0-a4c9-d08c83e56698",
  is_project: false,
  timestamp: "2025-08-25T21:00:00.044Z",
  reservations: 2,
};

const property2: Property = {
  id: 93,
  name: "Departamento En Arriendo De 3 Dorm. En Santiago Plaza Yungay",
  price: 450000,
  currency: "$",
  bedrooms: "3 dormitorios",
  bathrooms: "1 baño",
  m2: "50 m² útiles",
  location: "San Pablo, Plaza De Maipú, Maipú",
  img: "https://http2.mlstatic.com/D_NQ_NP_2X_975139-MLC87028667032_072025-E-departamento-en-arriendo-de-3-dorm-en-santiago-plaza-yungay.webp",
  url: "https://portalinmobiliario.com/MLC-2954895116-departamento-en-arriendo-de-3-dorm-en-santiago-plaza-yungay-_JM#polycard_client=search-nordic&position=24&search_layout=grid&type=item&tracking_id=78779287-7dae-465c-a3e7-1f17e0cc3ccf",
  is_project: false,
  timestamp: "2025-08-25T21:45:00.044Z",
  reservations: 2,
};

export const properties: Properties = [property1, property2];
