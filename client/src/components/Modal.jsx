import React from "react";
import { FaCheck, FaExclamationTriangle } from "react-icons/fa";
import Button from "./Button";
import style from "../stylesheets/Modal.module.css";

const Modal = ({ modal, onClose }) => {
  const { text, error, success } = modal;

  return (
    <>
      <section className={style.section}>
        <div className={style.container}>
          {error && <FaExclamationTriangle fontSize={60} color={"#c1121f"} />}
          {success && <FaCheck fontSize={60} color={"#009900"} />}
          <p>{text}</p>
          <Button text={"OK"} onClick={onClose} />
        </div>
      </section>
    </>
  );
};

export default Modal;