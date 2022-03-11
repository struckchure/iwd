import React, { createElement, FunctionComponent, useEffect } from "react";
import { createPortal } from "react-dom";
import { renderToStaticMarkup } from "react-dom/server";

interface ModalProps {
  openModal: boolean;
  setOpenModal: (val: boolean) => void;
}

const modalDiv = document.createElement("div");
modalDiv.setAttribute("id", "modal-div");
modalDiv.setAttribute(
  "style",
  "position: fixed; top: 0; left: 0; width: 100vw; z-index: 200"
);

const Modal: FunctionComponent<ModalProps> = ({
  children,
  openModal,
  setOpenModal,
}) => {
  document.body.appendChild(modalDiv);

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
        document.body.removeChild(modalDiv);
      }}
    >
      {children}
    </div>,
    document.querySelector("#modal-div")!
  );
};

export default Modal;
