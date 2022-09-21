import React from "react";

const DoubleInput = ({ value, setState, label }) => {
  return (
    <div>
      <label>{label}: </label>
      <span>
        <input
          type="number"
          name="min"
          placeholder="Min"
          value={value.min}
          autoComplete={"off"}
          required
          onChange={(e) => setState({ ...value, min: e.target.value })}
        /> {" "} - {" "} 
        <input
          type="number"
          name="max"
          placeholder="Max"
          value={value.max} 
          autoComplete={"off"}
          required
          onChange={(e) => setState({ ...value, max: e.target.value })}
        />
      </span>
    </div>
  );
};

export default DoubleInput;
