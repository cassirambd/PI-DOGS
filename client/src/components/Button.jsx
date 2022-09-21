import React from "react";

const Button = ({ text, onClick, type }) => {
  return (
    <>
      <button type={type} onClick={onClick}>
        {text}
      </button>
    </>
  );
};

export default Button;
