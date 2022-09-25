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
      <Link className={style.link} to={`/dog/${name}`}>
        <div className={style.card} key={id}>
          <div className={style.content}>
            <div className={style.front}>
              <img
                className={style.img}
                src={image ? image : img}
                alt={`dog-${name}`}
              />
              <p className={style.subtitle}>{name}</p>
            </div>
            <div className={style.back}>
              <p className={style.description}>{temperament}</p>
              <p className={style.description2}>{weight} kg</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default DogCard;
