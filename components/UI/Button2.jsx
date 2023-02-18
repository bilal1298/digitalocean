import React from "react";

const Button = ({ position, children }) => {
  return (
    <button className={`my-button ${position === "center" ? "my-button-center" : undefined}`}>
      {children}
    </button>
  );
};

export default Button;
