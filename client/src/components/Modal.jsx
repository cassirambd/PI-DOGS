import React from "react";
import { FaCheck, FaExclamationTriangle } from "react-icons/fa";
import Button from "./Button";

const Modal = ({ modal, onClose }) => {
  const { text, error, success } = modal;

  return (
    <>
      <section>
        <div>
          {error && <FaExclamationTriangle fontSize={60} color={"#c1121f"} />}
          {success && <FaCheck fontSize={60} color={"#009900"} />}
          <p>{text}</p>
          <Button text={"Ok"} onClick={onClose} />
        </div>
      </section>
    </>
  );
};

export default Modal;