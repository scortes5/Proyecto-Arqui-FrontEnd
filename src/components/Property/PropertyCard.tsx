import { useState } from "react";
import type { Property } from "../../types/Property";
import { Modal } from "../Modal";
import { PropertyButton } from "./PropertyButton";
import PropertyDetail from "./PropertyDetail";
import { Card } from "../Card";

interface Props {
  property: Property;
}

const PropertyCard = ({ property }: Props) => {
  const [isPropertyModalOpen, setIsPropertyModalOpen] = useState(false);
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);

  const openModal = () => {
    console.log("Abriendo modal");
    setIsPropertyModalOpen(true);
  };

  const closeModal = () => {
    console.log("Cerrando modal");
    setIsPropertyModalOpen(false);
  };

  return (
    <>
      <Card>
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
      </Card>

      {isPropertyModalOpen && (
        <Modal closeModal={closeModal}>
          <PropertyDetail property={property} closeModal={closeModal} />
        </Modal>
      )}
      {isBuyModalOpen && (
        <Modal closeModal={closeModal}>
          <PropertyDetail property={property} closeModal={closeModal} />
        </Modal>
      )}
    </>
  );
};

export default PropertyCard;
