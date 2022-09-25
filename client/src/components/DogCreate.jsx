import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postDog, getTemperaments } from "../redux/actions";
import { useHistory } from "react-router-dom";
import Button from "./Button";
import Modal from "./Modal";
import Header from "./Header";
import DoubleInput from "./DoubleInput";
import SelectTemperaments from "./SelectTemperaments";
import style from "../stylesheets/DogCreate.module.css";

const DogCreate = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const temperament = useSelector((state) => state.temperaments);

  const [name, setName] = useState("");
  const [height, setHeight] = useState({
    min: "",
    max: "",
  });
  const [weight, setWeight] = useState({
    min: "",
    max: "",
  });
  const [life_span, setLifeSpan] = useState({
    min: "",
    max: "",
  });
  const [tempsSelected, setTempsSelected] = useState([]);
  const [modal, setModal] = useState({
    text: "",
    error: false,
    success: false,
  });

  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Validate()) return;

    const finalHeight = `${height.min} - ${height.max}`;
    const finalWeight = `${weight.min} - ${weight.max}`;
    const finalLifeSpan = `${life_span.min} - ${life_span.max} years`;
    const dataDog = {
      name,
      height: finalHeight,
      weight: finalWeight,
      life_span: finalLifeSpan,
      temperament: tempsSelected,
    };

    dispatch(postDog(dataDog));

    setModal({
      text: "Dog successfully created!",
      error: false,
      success: true,
    });

    setName("");
    setHeight({ min: "", max: "" });
    setWeight({ min: "", max: "" });
    setLifeSpan({ min: "", max: "" });
    setTempsSelected([]);
    history.push("/home");
  };

  const handleAdd = (e) => {
    if (tempsSelected.length > 4) {
      return setModal({
        text: "You can't select more than 5 temperaments",
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

  const Validate = () => {
    if (!name) {
      setModal({
        text: "Name is required",
        error: true,
        success: false,
      });
      return true;
    } else if (!name.match(/^[A-Za-z]+$/)) {
      setModal({
        text: "Name must contain only letters",
        error: true,
        success: false,
      });
      return true;
    } else if (!name.match(/^[A-Z][a-z]+$/)) {
      setModal({
        text: "Name must start with a capital letter",
        error: true,
        success: false,
      });
      return true;
    }

    if (parseFloat(height.min) === 0 || parseFloat(height.max) === 0) {
      setModal({
        text: "The height can't be 0",
        error: true,
        success: false,
      });
      return true;
    } else if (parseFloat(height.min) > parseFloat(height.max)) {
      setModal({
        text: "The min height can't be greater than the max height",
        error: true,
        success: false,
      });
      return true;
    }

    if (parseFloat(weight.min) === 0 || parseFloat(weight.max) === 0) {
      setModal({
        text: "The weight can't be 0",
        error: true,
        success: false,
      });
      return true;
    } else if (parseFloat(weight.min) > parseFloat(weight.max)) {
      setModal({
        text: "The min weight can't be greater than the max weight",
        error: true,
        success: false,
      });
      return true;
    }

    if (parseFloat(life_span.min) === 0 || parseFloat(life_span.max) === 0) {
      setModal({
        text: "The life span can't be 0",
        error: true,
        success: false,
      });
      return true;
    } else if (parseFloat(life_span.min) > parseFloat(life_span.max)) {
      setModal({
        text: "The min life span can't be greater than the max life span",
        error: true,
        success: false,
      });
      return true;
    }
    return false;
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
                  value={name}
                  autoComplete={"off"}
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className={style.subtitle}>
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
              </div>
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
