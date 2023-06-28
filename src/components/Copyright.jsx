import React from "react";
import "../scss/copyright.scss";

const Copyright = () => {
  return (
    <div className="copy copyright px-2 py-3">
      <div className="container-fluid">
        <p className="text-center mb-0">
          Copyright © | Todos los derechos reservados 2023. Alaska . Tandil |{" "}
          <a
            href="https://www.linkedin.com/in/javier-ignacio-rivarola-509a12235/
            "
            target="_blank"
            rel="noreferrer noopener"
            className="text-decoration-none"
          >
            Hecho por Javier Ignacio Rivarola
          </a>
        </p>
      </div>
    </div>
  );
};

export default Copyright;
