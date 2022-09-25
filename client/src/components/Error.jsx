import React from "react";
import { Link } from "react-router-dom"
import Button from "./Button";
import img from "../images/errordog.png";

const Error = () => {
  return(
    <>
    <main>
      <section>
        <h1>
          ERROR 404
          <p>PAGE NOT FOUND</p>
          <img src={img} alt="doggie" />
          <Link to={"/home"}>
            <Button text={"GO HOME"} />
          </Link>
        </h1>
      </section>
    </main>
    </>
  )
}

export default Error