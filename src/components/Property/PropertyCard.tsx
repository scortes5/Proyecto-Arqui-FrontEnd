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
      <div className="h-auto w-auto border-2 border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] text-white font-nunito p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px]">
        <div className="h-full gap-5 flex flex-col">
          <h1 className="text-[1em] font-medium">{property.name}</h1>
          <img
            src={property.img}
            alt={property.name}
            className="w-full h-48 object-cover rounded-[1.5em] "
          />
          <div className="flex flex-col gap-2 text-sm">
            <p>
              <span className="font-semibold">Precio: </span>
              {property.currency}
              {property.price.toLocaleString("es-CL")}
            </p>
            <p>
              <span className="font-semibold">Ubicación: </span>
              {property.location}
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <PropertyButton onClick={openModal} icon={<IoIosArrowRoundForward />}>
            Ver mas detalles
          </PropertyButton>
          <PropertyButton onClick={openModal} icon={<IoIosArrowRoundForward />}>
            Comprar
          </PropertyButton>
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
