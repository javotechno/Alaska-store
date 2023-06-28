import React from "react";
import ContactForm from "./ContactForm";
import "../scss/contact.scss";

const Contact = () => {
  return (
    <>
      <section id="contacto" className="contacto contact mt-5 mb-5 ">
        <ContactForm />
      </section>
    </>
  );
};

export default Contact;
