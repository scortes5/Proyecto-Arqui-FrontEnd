import { Card } from "../Card";
import { PropertyButton } from "./PropertyButton";

interface Props {
  closeModal: () => void;
}

export const BuyRequestOption = ({ closeModal }: Props) => {
  const acceptBuyRequest = () => {
    console.log("aceptando solicitud de compra");
    /*La idea aca es colocar las request al metodo correspondiente */
  };
  return (
    <Card>
      <p>
        ¿Seguro que quieres hacer una solicitud de compra por esta propiedad?
      </p>
      <div className="mt-5 gap-5 flex">
        <PropertyButton onClick={acceptBuyRequest}>Aceptar</PropertyButton>
        <PropertyButton onClick={closeModal}>Cancelar</PropertyButton>
      </div>
    </Card>
  );
};
