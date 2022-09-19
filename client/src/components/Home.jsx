import React from "react";
import style from "../stylesheets/Home.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDogs,
  orderAlphabetically,
  orderByWeight,
  filterTemperaments,
  filterCreated,
} from "../redux/actions";
import { Link } from "react-router-dom";
import DogCard from "./DogCard";
import Header from "./Header";
import Filters from "./Filters";
import Paginated from "./Paginated";

const Home = () => {
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.allDogs);
  const [order, setOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage, setDogsPerPage] = useState(8);
  const indexOfLastDog = currentPage * dogsPerPage;
  const indexOfFirstDog = indexOfLastDog - dogsPerPage;
  const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);

  const pagination = (pageNumbers) => {
    setCurrentPage(pageNumbers);
  };
  //con useEffect me voy a traer los personajes del estado cuando el componente se monta
  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  const handleOrderAlphabetically = (e) => {
    e.preventDefault();
    dispatch(orderAlphabetically(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordered ${e.target.value}`);
  };

  const handleOrderByWeight = (e) => {
    e.preventDefault();
    dispatch(orderByWeight(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordered ${e.target.value}`);
  };

  const handleFilterCreated = (e) => {
    e.preventDefault();
    dispatch(filterCreated(e.target.value));
  };

  return (
    <>
      <div className={style.body}>
        <Header />
        <div>
          <Filters
            handleOrderAlphabetically={handleOrderAlphabetically}
            handleOrderByWeight={handleOrderByWeight}
            handleFilterCreated={handleFilterCreated}
          />
        </div>
        <Paginated
          dogsPerPage={dogsPerPage}
          allDogs={allDogs.length}
          pagination={pagination}
        />
        {currentDogs?.map((d) => {
          return (
            <div>
              <Link to={`/dog/${d.name}`}>
                <DogCard
                  image={d.image.url}
                  name={d.name}
                  temperaments={d.temperaments}
                  weight={d.weight}
                  key={d.id}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
