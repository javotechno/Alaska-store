import React from "react";
import loaderImg from "../img/loader.gif";
import "../scss/loader.scss";

const CustomLoader = () => {
  return (
    <div className="loader-container">
      <img src={loaderImg} alt="loader" loading="lazy" />
    </div>
  );
};

export default CustomLoader;
