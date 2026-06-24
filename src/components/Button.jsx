import React from "react";

const Button = ({ cta, onClick, variant = "primary" }) => {
  return (
    <button
      onClick={onClick}
      className={`  px-2 py-2  rounded-xl ${variant === "primary"? "bg-green-600 text-white": "border border-black"}`}
    >
      {cta}
    </button>
  );
};

export default Button;
