import React from "react";
import style from "../Home/Home.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDogs,
  getTemperaments,
  orderAlphabetically,
  orderByWeight,
  filterTemperaments,
  filterCreated,
} from "../../redux/actions";
import DogCard from "../DogCard/DogCard";
import Header from "../Header/Header";
import Filters from "../Filters/Filters";
import Paginated from "../Paginated/Paginated";
import Loader from "../Loader/Loader";
import img from "../../images/dogcreated.png";

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
 
  useEffect(() => {
    dispatch(getDogs());
    dispatch(getTemperaments());
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

  const handleTemperamentFilter = (e) => {
    e.preventDefault();
    dispatch(filterTemperaments(e.target.value));
    setCurrentPage(1);
    setOrder(`Ordered ${e.target.value}`);
  };

  const handleFilterCreated = (e) => {
    e.preventDefault();
    dispatch(filterCreated(e.target.value));
  };

  return (
    <>
      <div className={style.home}>
        <Header />
        <div className={style.filters}>
          <Filters
            handleOrderAlphabetically={handleOrderAlphabetically}
            handleOrderByWeight={handleOrderByWeight}
            handleTemperamentFilter={handleTemperamentFilter}
            handleFilterCreated={handleFilterCreated}
          />
        </div>
        {currentDogs.length > 0 ? (
          currentDogs.map((d) => {
            return (
              <div className={style.card}>
                <DogCard
                  image={d.image ? d.image : img}
                  name={d.name}
                  temperament={d.temperament}
                  min_weight={d.min_weight}
                  max_weight={d.max_weight}
                  life_span={d.life_span}
                  key={d.id}
                />
              </div>
            );
          })
        ) : (
          <div className={style.loader}>
            <Loader />
          </div>
        )}
        <div className={style.pages}>
          <Paginated
            currentPage={currentPage}
            dogsPerPage={dogsPerPage}
            allDogs={allDogs.length}
            pagination={pagination}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
