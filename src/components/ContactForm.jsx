import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const formSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "inmo_gama",
        "contacto_inmo-gamalero",
        form.current,
        "_foHohnEONQliAi_t"
      )
      .then(
        (result) => {
          alert("Mensaje enviado con éxito");
        },
        (error) => {
          alert("Hubo un error: " + error.text);
        }
      );
  };

  return (
    <>
      <section className="container-fluid mb-5">
        <h2 className="mb-3 title-form">Contacto</h2>
        <form ref={form} onSubmit={formSubmit} className="container-fluid">
          <legend className="fs-6 mb-3 text-description">
            Gracias por su interés en el trabajo de Alaska. Complete el
            formulario y nos pondremos en contacto.
          </legend>
          <div className="mb-3 row">
            <label className="form-label name-form">
              Nombre:
              <div className="nameform1">
                <input
                  className="form-control required name-form1"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Ingrese su nombre"
                  required
                />
              </div>
            </label>
          </div>
          <div className="mb-3 row">
            <label className="form-label tel-form">
              Teléfono:
              <div className="telform1">
                <input
                  className="form-control required"
                  type="number"
                  id="tel"
                  name="tel"
                  placeholder="Ingrese su teléfono"
                  required
                />
              </div>
            </label>
          </div>
          <div className="mb-3 row">
            <label className="form-label email-form">
              E-mail:
              <div className="emailform1">
                <input
                  className="form-control"
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Ingrese su e-mail"
                />
              </div>
            </label>
          </div>
          <div className="mb-3 row">
            <label className="form-label form-form">
              Hacenos tu consulta:
              <div className="formform1">
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="4"
                  cols="50"
                ></textarea>
              </div>
            </label>
          </div>
          <div>
            <div className="btn-env btn btn-primary">
              <button type="submit" className="btn btn-secundary">
                Enviar
              </button>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default ContactForm;
