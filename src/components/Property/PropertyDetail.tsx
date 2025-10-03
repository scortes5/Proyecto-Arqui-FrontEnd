import type { Property } from "../../types/Property";
import { Card } from "../Card";
import { PropertyButton } from "./PropertyButton";

interface Props {
  property: Property;
  closeModal: () => void;
}

export const PropertyDetail = ({ property, closeModal }: Props) => {
  return (
    <Card onClick={(e) => e.stopPropagation()}>
      {/* Título */}
      <div className="flex gap-3 sm:gap-5 items-center justify-between">
        <h1 className="text-lg sm:text-xl font-semibold">{property.name}</h1>
        <PropertyButton onClick={closeModal}>X</PropertyButton>
      </div>

      {/* Imagen */}
      <img
        src={property.img}
        alt={property.name}
        className="w-full h-44 sm:h-56 object-cover rounded-[1em]"
      />

      {/* Info principal */}
      <div className="flex flex-col gap-2 text-xs sm:text-sm">
        <p>
          <span className="font-semibold">Precio: </span>
          {property.currency}
          {property.price.toLocaleString("es-CL")}
        </p>
        <p>
          <span className="font-semibold">Dormitorios: </span>
          {property.bedrooms}
        </p>
        <p>
          <span className="font-semibold">Baños: </span>
          {property.bathrooms}
        </p>
        <p>
          <span className="font-semibold">Metros útiles: </span>
          {property.m2}
        </p>
        <p>
          <span className="font-semibold">Ubicación: </span>
          {property.location}
        </p>
        <p>
          <span className="font-semibold">Proyecto: </span>
          {property.is_project ? "Sí" : "No"}
        </p>
        <p>
        <span className="font-semibold">Reservas: </span>
        {property.reservations}
        </p>
      </div>

      <a
        href={property.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-300 underline hover:text-blue-400 text-xs sm:text-sm"
      >
        Ver en Portal Inmobiliario
      </a>

      {/* Botones */}
    </Card>
  );
};

export default PropertyDetail;
