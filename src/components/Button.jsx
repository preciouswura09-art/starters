import React from "react";

const Button = ({ cta, onClick }) => {
  return (
    <button onClick={onClick}>
      {cta} 
    </button>
  );
};

export default Button;
