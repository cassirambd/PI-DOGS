import React from "react";
import style from "../stylesheets/DoubleInput.module.css";

const DoubleInput = ({ value, setState, label }) => {
  return (
    <>
      <label>{label}: </label>
      <div>
        <input
          className={style.input}
          type="number"
          name="min"
          placeholder="Min"
          min={1}
          value={value.min}
          autoComplete={"off"}
          required
          onChange={(e) => setState({ ...value, min: e.target.value })}
        />{" "}
        -{" "}
        <input
          className={style.input}
          type="number"
          name="max"
          placeholder="Max"
          min={1}
          value={value.max}
          autoComplete={"off"}
          required
          onChange={(e) => setState({ ...value, max: e.target.value })}
        />
      </div>
    </>
  );
};

export default DoubleInput;
