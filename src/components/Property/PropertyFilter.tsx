import React, { useState } from "react";
import DatePicker from "react-datepicker";

// Importa los estilos CSS para que se vea bien
import "react-datepicker/dist/react-datepicker.css";

interface Props {}

export const PropertyFilter = (props: Props) => {
  const [location, setLocation] = useState("");
  const [maxPrice, setMaxPrice] = useState<number | "">("");
  const [date, setDate] = useState<Date | null>(null);

  const handleApply = () => {
    console.log("Filtrando");
  };

  return (
    <div className="flex items-center gap-2 bg-purple-900 text-white rounded-lg p-2">
      {/* Ubicación */}
      <input
        type="text"
        placeholder="Ubicación"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="px-2 py-1 rounded-md text-black text-sm"
      />

      {/* Precio */}
      <input
        type="number"
        placeholder="Precio máximo"
        value={maxPrice}
        onChange={(e) =>
          setMaxPrice(e.target.value === "" ? "" : Number(e.target.value))
        }
        className="px-2 py-1 rounded-md text-black text-sm w-24"
      />

      {/* Fecha */}
      <DatePicker
        selected={date}
        onChange={(date) => setDate(date)}
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
    </div>
  );
};
