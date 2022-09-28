import React from "react";
import style from "../Paginated/Paginated.module.css";

const Paginated = ({ currentPage, dogsPerPage, allDogs, pagination }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={style.nav}>
      <ul className={style.list}>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <li key={number}  className={currentPage === number ? style.active : style.element}>
              <a onClick={() => pagination(number)} className={style.number}>{number}</a>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Paginated;
