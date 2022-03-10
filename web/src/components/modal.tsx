import React, { FunctionComponent } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  openModal: boolean;
  setOpenModal: (val: boolean) => void;
}

const Modal: FunctionComponent<ModalProps> = ({
  children,
  openModal,
  setOpenModal,
}) => {
  return createPortal(
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: openModal ? "grid" : "none",
        placeItems: "center",
        overflowY: "scroll",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
      }}
      onClick={() => {
        setOpenModal(false);
      }}
    >
      {children}
    </div>,
    document.querySelector("#modal-div")!
  );    
};

export default Modal;
