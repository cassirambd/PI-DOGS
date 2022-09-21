import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { postDog, getTemperaments } from "../redux/actions";
import Header from "./Header";

const DogCreate = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const temperaments = useSelector((state) => state.temperaments);

  const [input, setInput] = useState({
    name: "",
    height: "",
    weight: "",
    life_span: "",
    temperament: [],
  });

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelect = (e) => {
    setInput({
      ...input,
      temperament: [...input.temperament, e.target.value],
    });
    console.log('aki', input.temperament)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postDog(input));
    alert("Dog created!");
    setInput({
      name: "",
      height: "",
      weight: "",
      life_span: "",
      temperament: [],
    });
    history.push("/home");
  };

  return (
    <>
      <Header />
      <div>
        <h1>CREATE YOUR DOG</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label>Name: </label>
            <input
              type="text"  
              name="name"
              value={input.name}
              placeholder="Name..."
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Height: </label>
            <input
              type="text"
              name="height"
              value={input.height}
              placeholder="1 - 200"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Weight: </label>
            <input
              type="text"
              name="weight"
              placeholder="1 - 200"
              value={input.weight}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Life span: </label>
            <input
              type="text"
              name="life_span"
              placeholder="1 - 30"
              value={input.life_span}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Image: </label>
            <input 
            type="text"
            name="image"
            placeholder="Url..."
            value={input.image}
            onChange={handleChange}
            />
          </div>
          <div>
            <select onChange={(e) => handleSelect(e)}>
              {temperaments.map((t) => (
                <option value={t.name}>{t.name}</option>
              ))}
            </select>
            <ul>
              <li>{input.temperament.map((t) => `${t} ,`)}</li>
            </ul>
          </div>
          <button type="submit">CREATE</button>
        </form>
      </div>
    </>
  );
};

export default DogCreate;
