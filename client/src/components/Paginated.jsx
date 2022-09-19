import React from "react";

const Paginated = ({ dogsPerPage, allDogs, pagination }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++) {
    pageNumbers.push(i); //REVISARRR
  }

  return (
    <nav>
      <ul>
        {pageNumbers &&
          pageNumbers.map((number) => (
            <li key={number}>
              <a onClick={() => pagination(number)}>{number}</a>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Paginated;
