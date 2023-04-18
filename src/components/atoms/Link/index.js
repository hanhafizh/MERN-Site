import React from "react";
import "./link.scss";

const Link = ({ tittle, onClick }) => {
  return (
    <p className="link" onClick={onClick}>
      {tittle}
    </p>
  );
};

export default Link;
