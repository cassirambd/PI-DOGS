import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <div>
        <h1>WELCOME TO MY INDIVIDUAL PROJECT - DOGS</h1>
        <Link to={"/home"}>
          <button>HOME PAGE</button>
        </Link>
      </div>
    </>
  );
};

export default LandingPage;
