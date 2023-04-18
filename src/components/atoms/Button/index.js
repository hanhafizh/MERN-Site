import React from "react";
import "./button.scss";

const Button = ({ tittle, ...rest }) => {
  return (
    <div>
      <button className="button" {...rest}>
        {tittle}
      </button>
    </div>
  );
};

export default Button;
