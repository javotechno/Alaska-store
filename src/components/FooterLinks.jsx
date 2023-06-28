import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.jpeg";

const FooterLinks = () => {
  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="d-none d-sm-block col-12 col-md-3">
          <NavLink className="text-decoration-none" to="/">
            <img
              src={logo}
              alt="Alaska logo"
              width="200"
              height="100"
              loading="lazy"
            />
          </NavLink>
        </div>
        <div className="col-12 col-md-3 mb-3">
          <ul className="list-unstyled">
            <li className="pb-2">
              <NavLink className="text-decoration-none" to="/">
                Inicio
              </NavLink>
            </li>
            <li className="pb-2">
              <NavLink className="text-decoration-none" to="/categoria/remeras">
                Remeras
              </NavLink>
            </li>
            <li className="pb-2">
              <NavLink className="text-decoration-none" to="/categoria/buzos">
                Buzos
              </NavLink>
            </li>
            <li className="pb-2">
              <NavLink
                className="text-decoration-none"
                to="/categoria/zapatillas"
              >
                Zapatillas
              </NavLink>
            </li>
            <li className="pb-2">
              <NavLink className="text-decoration-none" to="/contacto">
                Contacto
              </NavLink>
            </li>
            <li className="pb-2">
              <NavLink className="text-decoration-none" to="/sobre-mi">
                Sobre mi
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-3 mb-3">
          <ul className="list-unstyled">
            <li className="mb-2">
              <a
                className="text-decoration-none"
                href="tel:1161519161"
                title="Administración"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-telephone-fill"></i>
                <strong> Administración. </strong>
                Llamada
              </a>
            </li>
            <li className="mb-2">
              <a
                className="text-decoration-none"
                href="tel:1158169575"
                title="Administración"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-telephone-fill"></i>
                <strong> Ventas.</strong> Llamada : +5491158169575
              </a>
            </li>
            <li className="mb-2">
              <a
                className="text-decoration-none"
                href="https://wa.me/+51161519161"
                title="Administración"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-whatsapp"></i>
                <strong> Ventas.</strong> WhatsApp +5491161519161
              </a>
            </li>
            <li className="mb-2">
              <a
                className="text-decoration-none"
                href="https://goo.gl/maps/xDRhASVev4MzqwPs5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-geo-alt-fill"></i>
                <strong> Monseñor de Andrea 146</strong>
                <br />
                Tandil (7000), Buenos Aires, Arg.
              </a>
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-3">
          <p className="texto-footer">Conoce mis redes</p>
          <ul className="list-unstyled d-inline-flex">
            <li className="me-3">
              <a
                className="text-decoration-none fs-5"
                href="https://www.facebook.com/nachorivaro"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-facebook"></i>
              </a>
            </li>
            <li className="me-3">
              <a
                className="text-decoration-none fs-5"
                href="https://www.instagram.com/javorivarola/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-instagram"></i>
              </a>
            </li>
            <li>
              <a
                className="text-decoration-none fs-5"
                target="_blank"
                href="mailto:nacho.rivarola@gmail.com"
                rel="noopener noreferrer"
                title="E-mail"
              >
                <i className="bi bi-envelope-fill"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
