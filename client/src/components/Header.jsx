import React from "react";
import { Link } from "react-router-dom";
import { getDogs } from "../redux/actions";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getDogs());
  };

  return (
    <>
      <div>
        <button
          onClick={(e) => {
            handleClick(e);
          }}
        >
          HOME
        </button>
        <button>
          <Link to={"/createdog"}>CREATE DOG</Link>
        </button>
      </div>
    </>
  );
};

export default Header;
