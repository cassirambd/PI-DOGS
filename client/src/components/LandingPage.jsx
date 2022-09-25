import React from "react";
import { Link } from "react-router-dom";
import style from "../stylesheets/LandingPage.module.css";
import linkedin from "../images/logo1.png";
import github from "../images/logo2.png";

const LandingPage = () => {
  return (
    <>
      <div className={style.main}>
        <section className={style.section}>
          <h1 className={style.title}>WELCOME</h1>
          <h1 className={style.title}>TO MY</h1>
          <h1 className={style.title}>INDIVIDUAL PROJECT</h1>
          <h1 className={style.title}>DOGS</h1>
          <Link to={"/home"} className={style.buttonlink}>
            <button data-text="Awesome" className={style.button}>
              <span className={style.actual_text}>&nbsp;HOME&nbsp;</span>
              <span className={style.hover_text} aria-hidden="true">
                &nbsp;HOME&nbsp;
              </span>
            </button>
          </Link>
          <button className={style.btn}>
            <span>ABOUT ME</span>
          <div className={style.container}>
            <a
              className={style.a1}
              href="https://www.linkedin.com/in/barbara-cassiram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={style.linkedin} src={linkedin} alt="" />
            </a>
            <a
              className={style.a2}
              href="https://github.com/cassirambd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={style.github} src={github} alt="" />
            </a>
          </div>
          </button>
        </section>
      </div>
    </>
  );
};

export default LandingPage;
