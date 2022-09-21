import React from "react";
import style from "../stylesheets/DogCard.module.css";
import { Link } from "react-router-dom";
import img from "../images/dogcreated.png";

const DogCard = ({ id, image, name, weight, temperament }) => {
  // const temperamentsC = temperaments
  //   ? temperaments.map((temp) => temp.name).join(", ")
  //   : "";
  //   console.log(temperamentsC)

  return (
    <>
      <Link to={`/dog/${name}`}>
        <div className={style.card} key={id}>
          <div>
            <img src={image ? image : img} alt={`dog-${name}`} width="310px" height="220px"/>
          </div>
          <div>
            <h1>{name}</h1>
            <h3>{temperament}</h3>
            <h3>{weight} kg</h3>
          </div>
        </div>
      </Link>
    </>
  );
};

export default DogCard;
