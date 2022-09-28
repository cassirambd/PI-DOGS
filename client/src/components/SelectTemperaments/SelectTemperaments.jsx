import React from "react";
import style from "../SelectTemperaments/SelectTemperaments.module.css";

const SelectTemperaments = ({
  temperament,
  tempsSelected,
  handleAdd,
  handleRemove,
}) => {
  return (
    <>
      <div>
        <label htmlFor="temperament">Temperaments: </label>
        <select className={style.input} name="temperament" onChange={handleAdd}>
          <option value="select">All</option>
          {temperament.length > 0 &&
            temperament.map((t) => (
              <option key={t.id} value={t.name}>
                {t.name}
              </option>
            ))}
        </select>
      </div>
      {tempsSelected.length > 0 && (
        <div className={style.temperaments}>
          {tempsSelected.map((t) => (
            <span key={t.temperament} className={style.selected}>
              {t.temperament}
              <span
                className={style.x}
                id={`${t.temperament}`}
                onClick={handleRemove}
                title={"Remover"}
              >
                x
              </span>
            </span>
          ))}
        </div>
      )}
    </>
  );
};

export default SelectTemperaments;
