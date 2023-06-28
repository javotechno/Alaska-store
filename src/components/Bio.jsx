import React from "react";

const Bio = () => {
  return (
    <>
      <section id="nosotros" className="py-5">
        <div className="row d-flex align-items-center">
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <h2 className="mb-3 text-center text-uppercase">Alaska</h2>
            <p className="fs-4">
              Alaska es una compañia de Argentina que en el 2022 fue creada por
              Sofía Olaechea (1998) y Federico Massolo (1999) dedicada a ropa
              deportiva, su principal mercado está en el skateboarding, de alto
              rendimiento y una reconocida marca de deportes de acción. Además
              de otros deportes urbanos y también extremos. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Recusandae repellendus quis
              molestias voluptate quibusdam expedita dolore tempore dolor
              possimus, voluptas ducimus ipsam doloribus voluptatum rem ipsa
              eius cumque vel incidunt.
            </p>
            <p>
              <strong className="fs-4">
                Alaska agranda el mercado, historia y valores.
              </strong>
            </p>
            <p className="fs-4">
              <i className="bi bi-brush"></i>La empresa argentina Alaska provee
              todo tipo de equipamiento para estos <strong>deportes</strong>,
              además de la indumentaria ligada a ellos y a la atmósfera de Hip
              Hop-Street que representan. Con un cuidadoso crecimiento, y
              ofreciendo productos que alcanzaban los más estrictos controles de
              calidad, Alaska se asoció a las mejores marcas del rubro, logrando
              así llevar la bandera de la vanguardia en el mundo deportivo y
              textil.
            </p>
          </div>
          <div className="col-12 col-md-6">
            <img
              className="w-100"
              src="https://res.cloudinary.com/dhtgiy7ji/image/upload/v1669387442/Alaska/Imagen_bf7y18.jpg"
              alt="Alaska"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Bio;
