import { useState } from "react";
import type { Property } from "../../types/types";
import { Modal } from "./Modal";
import { PropertyButton } from "./PropertyButton";
import PropertyDetail from "./PropertyDetail";
import { IoIosArrowRoundForward } from "react-icons/io";

interface Props {
  property: Property;
}

const PropertyCard = ({ property }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    console.log("Abriendo modal");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log("Cerrando modal");
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="w-auto h-auto border-2 border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] text-white font-nunito p-4 flex flex-col gap-3 backdrop-blur-[12px]">
        <h1 className="text-base font-medium truncate">{property.name}</h1>
        <img
          src={property.img}
          alt={property.name}
          className="w-full h-48 object-cover rounded-[1.5em]"
        />

        <div className="flex flex-col gap-1 text-xs">
          <p className="m-0">
            <span className="font-semibold">Precio: </span>
            {property.currency}
            {property.price.toLocaleString("es-CL")}
          </p>
          <p className="m-0">
            <span className="font-semibold">Ubicación: </span>
            {property.location}
          </p>
        </div>

        <div className="flex gap-3 mt-1">
          <PropertyButton onClick={openModal}>Ver más detalles</PropertyButton>
          <PropertyButton onClick={openModal}>Comprar</PropertyButton>
        </div>
      </div>

      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <PropertyDetail property={property} closeModal={closeModal} />
        </Modal>
      )}
    </>
  );
};

export default PropertyCard;
