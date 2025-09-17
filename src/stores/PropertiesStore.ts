import { create } from "zustand";

type PropertiesStore = {
  limit: number;
  page: number;
  setPage: (page: number) => void;
  setLimit: (limit: number) => void;
  url: string;
  setUrl: (url: string) => void;
};

export const usePropertiesStore = create<PropertiesStore>((set, get) => ({
  limit: 4,
  page: 1,
  setPage: (page) => set({ page }),
  setLimit: (limit) => set({ limit }),
  url: `${import.meta.env.VITE_BACKEND_URL}/properties?page=1&limit=4`,
  setUrl: (url) => set({ url }),
}));
