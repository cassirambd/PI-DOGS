import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postDog, getTemperaments, getDogs } from "../redux/actions";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Modal from "./Modal";
import Header from "./Header";
import DoubleInput from "./DoubleInput";
import SelectTemperaments from "./SelectTemperaments";
import style from "../stylesheets/DogCreate.module.css";

const DogCreate = () => {
  const dispatch = useDispatch();
  // const history = useHistory();
  // const navigate = useNavigate();
  const temperament = useSelector((state) => state.temperaments);
  const dogs = useSelector((state) => state.allDogs);
  const [errors, setErrors] = useState({});
  const [tempsSelected, setTempsSelected] = useState([]);
  const [input, setInput] = useState({
    name: "",
    min_height: "",
    max_height: "",
    min_weight: "",
    max_weight: "",
    life_span: "",
    image: "",
    temperament: tempsSelected,
  });
  console.log(tempsSelected)
  const [modal, setModal] = useState({
    text: "",
    error: false,
    success: false,
  });
  const dogsName = dogs.map((d) => {
    return {
      name: d.name,
    };
  });

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(errors).length === 0) {
      dispatch(postDog(input));
      setModal({
        text: "Dog successfully created!",
        error: false,
        success: true,
      });
      setInput({
        name: "",
        // min_height: "",
        // max_height: "",
        // min_weight: "",
        // max_weight: "",
        // life_span: "",
        // image: "",
        // temperament: tempsSelected,
      });
    } else {
      setModal({
        text: "Dog can't be created!",
        error: true,
        success: false,
      });
    }
    // history("/home");
  };

  const handleAdd = (e) => {
    if (tempsSelected.length > 5) {
      return setModal({
        text: "You can't select more than 6 temperaments",
        error: true,
        success: false,
      });
    }
    if (e.target.value === "select") return;
    for (const key of tempsSelected) {
      if (key.temperament === e.target.value) return;
    }

    setTempsSelected([...tempsSelected, e.target.value]);
  };

  // [...tempsSelected, { [e.target.name]: e.target.value }]

  const handleRemove = (e) => {
    setTempsSelected(tempsSelected.filter((t) => t !== e.target.id));
  };

  const onClose = () => {
    setModal({
      text: "",
      error: false,
      success: false,
    });
  };

  let validate = (input) => {
    let errors = {};

    if (!input.name) {
      errors.name = "Name is required";
    } else if (!input.name.match(/^[A-Za-z]+$/)) {
      errors.name = "Name must contain only letters";
    } else if (!input.name.match(/^[A-Z][a-z]+$/)) {
      errors.name = "Name must start with a capital letter";
    } else if (dogsName.includes(input.name)) {
      errors.name = `The name ${input.name} already exists`;
    }

    if (!input.min_height) {
      errors.min_height = "Min height is required";
    } else if (
      parseInt(input.min_height) < 1 ||
      parseInt(input.min_height) >= 100
    ) {
      errors.min_height = "The min height must be between 1 and 100";
    } else if (parseInt(input.min_height) > parseInt(input.max_height)) {
      errors.min_height = "The min height can't be greater than the max height";
    }

    if (!input.max_height) {
      errors.max_height = "Max height is required";
    } else if (
      parseInt(input.max_height) < 1 ||
      parseInt(input.max_height) >= 100
    ) {
      errors.max_height = "The max height must be between 1 and 200";
    }

    if (!input.min_weight) {
      errors.min_weight = "Min weight is required";
    } else if (
      parseInt(input.min_weight) < 1 ||
      parseInt(input.min_weight) >= 50
    ) {
      errors.min_weight = "The min weight must be between 1 and 50";
    } else if (parseInt(input.min_weight) > parseInt(input.max_weight)) {
      errors.min_weight = "The min weight can't be greater than the max weight";
    }

    if (!input.max_weight) {
      errors.max_height = "Max weight is required";
    } else if (
      parseInt(input.max_weight) < 1 ||
      parseInt(input.max_weight) >= 120
    ) {
      errors.max_height = "The max weight must be between 1 and 120";
    }

    if (!input.life_span) {
      errors.life_span = "Life span is required";
    } else if (
      parseInt(input.life_span) < 1 ||
      parseInt(input.life_span) >= 30
    ) {
      errors.life_span = "The life span must be between 1 and 30";
    } else if (parseInt(input.life_span) > parseInt(input.life_span)) {
      errors.life_span =
        "The min life span can't be greater than the max life span";
    }

    if (!temperament.length) {
      setModal({
        text: "You must select at least one temperament",
        error: true,
        success: false,
      });
    }
    return errors;
  };

  return (
    <>
      <div className={style.container}>
        {(modal.error || modal.success) && (
          <Modal modal={modal} onClose={onClose} />
        )}
        <div className={style.header}>
          <Header />
        </div>
        <div className={style.main}>
          <section className={style.section}>
            <h1 className={style.title}>CREATE YOUR DOG</h1>
            <form onSubmit={handleSubmit} className={style.form}>
              <div className={style.subtitle}>
                <label>Name: </label>
                <input
                  className={style.input}
                  type="text"
                  name="name"
                  placeholder="Name..."
                  value={input.name}
                  autoComplete={"off"}
                  required
                  onChange={(e) => handleInputChange(e)}
                />
                <span className={style.validation}>
                  {errors.name && <p>{errors.name}</p>}
                </span>
              </div>
              {/* <div className={style.subtitle}>
                <DoubleInput
                  label="Height"
                  value={height}
                  setState={setHeight}
                />
              </div>
              <div className={style.subtitle}>
                <DoubleInput
                  label="Weight"
                  value={weight}
                  setState={setWeight}
                />
              </div>
              <div className={style.subtitle}>
                <DoubleInput
                  label="Life span"
                  value={life_span}
                  setState={setLifeSpan}
                />
              </div>
              <div className={style.subtitle}>
                <SelectTemperaments
                  temperament={temperament}
                  tempsSelected={tempsSelected}
                  handleAdd={handleAdd}
                  handleRemove={handleRemove}
                />
              </div> */}
              <div className={style.button_div}>
                <Button type={"submit"} text={"CREATE"} />
              </div>
            </form>
          </section>
        </div>
      </div>
    </>
  );
};




export default DogCreate;
