import React from "react";

const Cards = ({ cardDetails }) => {
  return (
    <div className="cards">
      <cardDetails.Icon />
      <h2>{cardDetails.title}</h2>
      <p>{cardDetails.details}</p>
    </div>
  );
};

export default Cards;
