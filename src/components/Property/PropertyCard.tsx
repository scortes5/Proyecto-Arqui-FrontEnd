import { useState } from "react";
import type { Property } from "../../types/Property";
import { Modal } from "../Modal";
import { PropertyButton } from "./PropertyButton";
import PropertyDetail from "./PropertyDetail";
import { Card } from "../Card";
import { BuyRequestOption } from "./BuyRequestOption";

interface Props {
  property: Property;
}

const PropertyCard = ({ property }: Props) => {
  const [isPropertyModalOpen, setIsPropertyModalOpen] = useState(false);
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);

  const openPropertyModal = () => {
    console.log("Abriendo modal");
    setIsPropertyModalOpen(true);
  };

  const closePropertyModal = () => {
    console.log("Cerrando modal");
    setIsPropertyModalOpen(false);
  };

  const openBuyModal = () => setIsBuyModalOpen(true);

  const closeBuyModal = () => {
    setIsBuyModalOpen(false);
    console.log("cerrando modal de compra");
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
          <PropertyButton onClick={openPropertyModal}>
            Ver más detalles
          </PropertyButton>
          <PropertyButton onClick={openBuyModal}>
            Solicitar compra
          </PropertyButton>
        </div>
      </Card>

      {isPropertyModalOpen && (
        <Modal closeModal={closePropertyModal}>
          <PropertyDetail property={property} closeModal={closePropertyModal} />
        </Modal>
      )}
      {isBuyModalOpen && (
        <Modal closeModal={closeBuyModal}>
          <BuyRequestOption closeModal={closeBuyModal} />
        </Modal>
      )}
    </>
  );
};

export default PropertyCard;
