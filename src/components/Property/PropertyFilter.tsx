import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Props {
  searchProperties: (
    location: string,
    maxPrice: number | "",
    date: string
  ) => void;
}

export const PropertyFilter = ({ searchProperties }: Props) => {
  const [location, setLocation] = useState("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");
  const [date, setDate] = useState<Date | null>(null);

  const handleApply = () => {
    const formattedDate = date ? date.toISOString().split("T")[0] : "";
    searchProperties(location, maxPrice, formattedDate);
  };

  return (
    <div className="flex items-center gap-2  bg-white rounded-lg p-2 ml-1">
      {/* Ubicación */}
      <input
        type="text"
        placeholder="Ubicación"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="px-2 py-1 rounded-md text-[#2c1b4f] text-sm"
      />

      {/* Precio */}
      <input
        type="number"
        placeholder="Precio máximo"
        value={maxPrice}
        onChange={(e) =>
          setMaxPrice(e.target.value === "" ? "" : Number(e.target.value))
        }
        className="px-2 py-1 rounded-md text-[#2c1b4f] text-sm w-24"
      />

      {/* Fecha */}
      <DatePicker
        selected={date}
        onChange={(d) => setDate(d)} // d es un Date o null
        placeholderText="Fecha"
        className="px-2 py-1 rounded-md text-black text-sm w-32"
        dateFormat="dd/MM/yyyy"
      />

      {/* Botón aplicar */}
      <button
        onClick={handleApply}
        className="bg-purple-700 hover:bg-purple-600 px-3 py-1 rounded-md text-sm"
      >
        Filtrar
      </button>
      <button
        onClick={() => {
          setLocation("");
          setMaxPrice("");
          setDate(null);
        }}
        className="bg-gray-400 hover:bg-gray-300 px-3 py-1 rounded-md text-sm"
      >
        Limpiar
      </button>
    </div>
  );
};
