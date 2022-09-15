import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../redux/actions";
import { Link } from "react-router-dom";
import DogCard from "./DogCard";
import Header from "./Header";

const Home = () => {
  //con useEffect me voy a traer los personajes del estado cuando el componente se monta
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs);

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  return (
    <>
      <div>
        <Header />
        <div>
          <select>
            <option value="Order alphabetically">Order alphabetically</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>
          <select>
            <option value="Order by weight">Order by weight</option>
            <option value="Min weight">Min weight</option>
            <option value="Max weight">Max weight</option>
          </select>
          <select>
            <option value="All temperaments">All temperaments</option>
          </select>
          <select>
            <option value="All dogs">All dogs</option>
            <option value="Dogs from API">Dogs from API</option>
            <option value="Dogs from database">Dogs from database</option>
          </select>
        </div>
        {allDogs?.map((d) => {
          return (
            <div>
              <Link to={`/dog/${d.id}`}>
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
