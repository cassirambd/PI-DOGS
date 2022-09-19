import React from "react";
import style from "../stylesheets/DogCard.module.css";

const DogCard = ({ image, name, temperament, weight }) => {
  return (
    <>
      <div className={style.card}>
        <div>
          <img src={image} alt="img not found" width="310px" height="220px" />
        </div>
        <div>
          <h1>{name}</h1>
          <h3>{temperament}</h3>
          <h3>{weight.metric} kg</h3>
        </div>
      </div>
    </>
  );
};

export default DogCard;
