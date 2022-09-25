import React from "react";
import style from "../stylesheets/SelectTemperaments.module.css";

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
            <p key={t} className={style.selected}>
              {t}
              <span className={style.x}
                id={`${t}`}
                onClick={handleRemove}
                title={"Remover"}
              >
                x
              </span>
            </p>
          ))}
        </div>
      )}
    </>
  );
};

export default SelectTemperaments;
