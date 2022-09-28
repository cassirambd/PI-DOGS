import React from "react";
import style from "../DogCard/DogCard.module.css";
import { Link } from "react-router-dom";
import img from "../../images/dogcreated.png";

const DogCard = ({ id, image, name, min_weight, max_weight, temperament }) => {
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
              {!temperament ? (
                <p className={style.description}>
                  <b>Temperament:</b> Not found
                </p>
              ) : (
                <p className={style.description}>
                  <b>Temperament:</b> {temperament}
                </p>
              )}
              <p className={style.description2}>
                <b>Min weight:</b> {min_weight} kg
              </p>
              <p className={style.description2}>
                <b>Max weight:</b> {max_weight} kg
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default DogCard;
