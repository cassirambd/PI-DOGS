import React from "react";
import style from "../stylesheets/Paginated.module.css";

const Paginated = ({ currentPage, dogsPerPage, allDogs, pagination }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++) {
    pageNumbers.push(i); //REVISARRR
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

//REVISAR EL usehistory EN EL DOG CREATE,
//BUSCAR EN TIEMPO REAL
//REVISAR EL IDIOMA DE LA VALIDACION DEL FORM
//COMPONENTE ERROR Y EL DELETE, HACER RESPONSIVE
//REVISAR VERSION DE  R R DOM
//REVISAR CONSOLE.LOG DE LOS ERRORES
