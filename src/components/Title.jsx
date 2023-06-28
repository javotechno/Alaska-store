import React from "react";
import "../scss/title.scss";

const Title = ({ title, subtitle, textDescription }) => {
  return (
    <>
      <h1 className="texto-header">{title}</h1>
      <h2 className="texto-header">{subtitle}</h2>
      <p className="texto-header">{textDescription}</p>
    </>
  );
};

export default Title;
