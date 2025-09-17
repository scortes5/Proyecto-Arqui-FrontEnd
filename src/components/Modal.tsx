import React from "react";

interface Props {
  closeModal: () => void;
  children: React.ReactNode;
}

export const Modal = ({ closeModal, children }: Props) => {
  return (
    <div
      className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[9999] flex items-center justify-center"
      onClick={closeModal}
    >
      {children}
    </div>
  );
};
