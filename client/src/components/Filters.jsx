import React from "react";
import { useSelector } from "react-redux";

const Filters = ({
  handleOrderAlphabetically,
  handleOrderByWeight,
  handleFilterCreated,
}) => {
  const temperament = useSelector((state) => state.temperaments);

  return (
    <>
      <form action="">
        <input
          type="text"
          name="search dog"
          placeholder="Search a dog..."
          // value={filter.name}
          autoComplete={"off"}
        />
        <input type="submit" value="Search" />
      </form>
      <div>
        <select
          name="Order alphabetically"
          onChange={(e) => handleOrderAlphabetically(e)}
        >
          <option hidden>Order alphabetically</option>
          <option value="A-Z">A-Z</option>
          <option value="Z-A">Z-A</option>
        </select>
      </div>
      <div>
        <select name="Order by weight" onChange={(e) => handleOrderByWeight(e)}>
          <option hidden>Order by weight</option>
          <option value="min weight">Min weight</option>
          <option value="max weight">Max weight</option>
        </select>
      </div>
      <div>
        <select name="Temperament filter">
          <option value="all temperaments">All temperaments</option>
          {temperament.length > 0 &&
            temperament.map((t) => (
              <option key={t.id} value={t.name}>
                {t.name}
              </option>
            ))}
        </select>
      </div>
      <div>
        <select name="Origin filter" onChange={(e) => handleFilterCreated(e)}>
          <option value="all dogs">All dogs</option>
          <option value="dogs from API">Dogs from API</option>
          <option value="dogs from database">Dogs from database</option>
        </select>
      </div>
    </>
  );
};

export default Filters;
