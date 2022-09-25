import React from "react";
import style from "../stylesheets/Loader.module.css";

const Loader = () => {
  return (
    <div className={style.loader}>
      <span>Loading...</span>
      <span>Loading...</span>
    </div>
  );
};

export default Loader;
