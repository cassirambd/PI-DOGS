import React from "react";

const DogCard = ({ image, name, temperament, weight }) => {
  return (
    <>
      <div>
        <div>
          <img src={image} alt="img not found" width="300px" height="250px" />
        </div>
        <div>
          <h1>{name}</h1>
          <h3>{temperament}</h3>
          <h3>{weight.metric}</h3>
        </div>
      </div>
    </>
  );
};

export default DogCard;
