import React from "react";

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
        <select name="temperament" onChange={handleAdd}>
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
        <div>
          {tempsSelected.map((t) => (
            <p key={t}>
              {t}
              <span
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
