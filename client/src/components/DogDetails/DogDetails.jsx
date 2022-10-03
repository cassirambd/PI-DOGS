import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDogs } from "../../redux/actions";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";
import img from "../../images/dogcreated.png";
import style from "../DogDetails/DogDetails.module.css";

const DogDetails = () => {
  const dispatch = useDispatch();
  const { name } = useParams();
  const allDogs = useSelector((state) => state.allDogs);
  const [dog, setDog] = useState({});

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  useEffect(() => {
    allDogs.length > 0
      ? setDog(allDogs.find((d) => d.name === name))
      : setDog({});
  }, [allDogs, name]);

  return (
    <>
      <div className={style.container}>
        <div className={style.header}>
          <Header />
        </div>
        <div className={style.main}>
          {typeof dog === "object" && Object.keys(dog).length > 0 ? (
            <article className={style.article}>
              <img
                className={style.img}
                src={dog.image ? dog.image : img}
                alt={`img-${dog.name}`}
              />
              <section className={style.data}>
                <h1 className={style.name}>{dog.name}</h1>
                {dog.temperament ? (
                  <p className={style.p}>
                    <b>Temperament: </b> {dog.temperament}
                  </p>
                ) : (
                  <p className={style.p}>
                    <b>Temperament:</b> not found
                  </p>
                )}
                <p className={style.p}>
                  <b>Min height:</b> {dog.min_height} cm
                </p>
                <p className={style.p}>
                  <b>Max height:</b> {dog.max_height} cm
                </p>
                <p className={style.p}>
                  <b>Min weight:</b> {dog.min_weight} kg
                </p>
                <p className={style.p}>
                  <b>Max weight:</b> {dog.max_weight} kg
                </p>
                <p className={style.p}>
                  <b>Life span:</b> {dog.life_span}
                </p>
              </section>
            </article>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </>
  );
};

export default DogDetails;
