import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { getDogs } from "../redux/actions";
import Header from "./Header";
import Loader from "./Loader";
import img from "../images/dogcreated.png";
import style from "../stylesheets/DogDetails.module.css";

const DogDetails = () => {
  const dispatch = useDispatch();
  const history = useHistory();
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
              <img className={style.img} src={dog.image ? dog.image : img} alt={`img-${dog.name}`} />
              <section className={style.data}>
                <h1 className={style.name}>{dog.name}</h1>
                <p className={style.p}>{dog.temperament}</p>
                <p className={style.p}>{dog.height} cm</p>
                <p className={style.p}>{dog.weight} kg</p>
                <p className={style.p}>{dog.life_span}</p>
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
