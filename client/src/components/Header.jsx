import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <>
      <div>
        <button>
          <Link to={"/home"}>HOME</Link>
        </button>
        <button>
          <Link to={"/createDog"}>CREATE DOG</Link>
        </button>
      </div>
    </>
  );
};

export default Header;
