import type { Property } from "../../types/types";
import { PropertyButton } from "./PropertyButton";

interface Props {
  property: Property;
  closeModal: () => void;
}

export const PropertyDetail = ({ property, closeModal }: Props) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="h-auto w-[50em] border-2 border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] text-white font-nunito p-[1.5em] flex flex-col gap-2 backdrop-blur-[12px]
      relative"
    >
      {/* Título */}
      <h1 className="text-xl font-semibold">{property.name}</h1>

      {/* Imagen */}
      <img
        src={property.img}
        alt={property.name}
        className="w-full h-56 object-cover rounded-[1em]"
      />

      {/* Info principal */}
      <div className="flex flex-col gap-2 text-sm">
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
      </div>

      <a
        href={property.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-300 underline hover:text-blue-400 text-sm"
      >
        Ver en Portal Inmobiliario
      </a>

      {/* Botones */}
      <div className="flex  mt-2 scale-80 absolute top-0 right-0 mr-2">
        <PropertyButton onClick={closeModal}>X</PropertyButton>
      </div>
    </div>
  );
};

export default PropertyDetail;
