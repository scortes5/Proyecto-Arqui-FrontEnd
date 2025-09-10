export type Property = {
  id: number;
  name: string;
  price: number;
  currency: string;
  bedrooms: string;
  bathrooms: string;
  m2: string;
  location: string;
  img: string;
  url: string;
  is_project: boolean;
  timestamp: string;
  reservations: number;
};

export type Properties = Property[];
