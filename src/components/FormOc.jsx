import React from "react";
import { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import Swal from "sweetalert2";
import { useCartContext } from "../context/CartContext";
import "../scss/formOc.scss";

const FormOc = () => {
  const { cart, totalPrice } = useCartContext();
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [adress, setAdress] = useState("");

  //const [x, setX] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(event.target.elements.nombre.value);
    //console.log(event.target.elements.apellido.value);
    //console.dir(event.target);
    //enviar la info a la base de datos
    const order = {
      buyer: {
        name: nombre,
        apellido: apellido,
        email: mail,
        phone: phone,
        adress: adress,
      },
      items: cart.map((product) => ({
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: product.quantity,
      })),
      total: totalPrice(),
    };

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(({ id }) => {
      Swal.fire({
        title: "Su orden de compra se cargó con éxito!",
        text: `Gracias por ser parte de tienda Alaska, tu id de compra es: ${id}`,
        imageUrl: "",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
      });
    });
  };

  // const handleChange = () => {
  //     name y value de cada input
  // }

  const handleChangeNombre = (event) => {
    //console.log(event.target.value);
    setNombre(event.target.value);
  };

  const handleChangeApellido = (event) => {
    setApellido(event.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleChangeMail = (e) => {
    setMail(e.target.value);
  };

  const handleChangeAdress = (e) => {
    setAdress(e.target.value);
  };

  return (
    <section className="contacto contact mt-5 mb-5 ">
      <div className="container-fluid my-5">
        <form action="" onSubmit={handleSubmit}>
          <legend className="fs-6 mb-3">
            <div className="titlepruchase1">
              <strong className="title-purchase">
                Gracias por confiar en nosotros!
              </strong>
            </div>
            <p className="paragraph-purchase">
              Complete el formulario para terminar con su compra.
            </p>
          </legend>
          <div className="row">
            <label className="form-label end-purchase-name">
              Nombre:
              <div className="endpurchasename">
                <input
                  className="form-control required"
                  type="text"
                  placeholder="Nombre"
                  name="nombre"
                  value={nombre}
                  onChange={handleChangeNombre}
                  required
                />
              </div>
            </label>
          </div>
          <div className="row">
            <label className="form-label surname-form">
              Apellido
              <div className="sunameform1">
                <input
                  className="form-control required"
                  type="text"
                  placeholder="Apellido"
                  name="apellido"
                  value={apellido}
                  onChange={handleChangeApellido}
                  required
                />
              </div>
            </label>
          </div>
          <div className="row">
            <label className="form-label tel-form">
              Teléfono
              <div className="telform1">
                <input
                  className="form-control required"
                  type="number"
                  placeholder="Número de Teléfono"
                  name="phone"
                  value={phone}
                  onChange={handleChangePhone}
                  required
                />
              </div>
            </label>
          </div>
          <div className="row">
            <label className="form-label email-form-pruchase">
              E-mail
              <div className="emailform1">
                <input
                  className="form-control required"
                  type="email"
                  placeholder="E-mail"
                  name="email"
                  value={mail}
                  onChange={handleChangeMail}
                  required
                />
              </div>
            </label>
          </div>
          <div className="row">
            <label className="form-label address-form">
              Domicilio
              <div className="adressform1">
                <input
                  className="form-control required"
                  type="text"
                  placeholder="Domicilio de entrega"
                  name="adress"
                  value={adress}
                  onChange={handleChangeAdress}
                  required
                />
              </div>
            </label>
          </div>
          <button className="btn btn-secondary" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default FormOc;
