import React from "react";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";
import { useNavigate } from "react-router-dom";
import "../scss/cart.scss";

const Cart = () => {
  const { cart, totalPrice, clearCart } = useCartContext();
  let history = useNavigate();

  if (cart.length === 0) {
    return (
      <>
        <div className="container-fluid my-5">
          <div className="row">
            <div className="col-12 col-md-6 mb-3">
              <h4>Aún no agregaste elementos en el carrito</h4>
            </div>
            <div className="col-12 col-md-6">
              <Link to="/" className="btn btn-secondary">
                Ir a hacer compras
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8">
            {cart.map((product) => (
              <ItemCart key={product.id} product={product} />
            ))}
          </div>
          <div className="col-12 col-md-4 ">
            <div className="container">
              <div className="row">
                <div className="card">
                  <div className="card-body container">
                    <h5 className="card-title text-center text-uppercase">
                      Resumen de compra
                    </h5>
                    <div className="row g-4">
                      <div className="col-12 col-md-6 mb-2 mb-md-3">
                        <button
                          onClick={() => history(-1)}
                          className="btn btn-secondary"
                        >
                          <i className="bi bi-arrow-left-circle-fill"></i>
                        </button>
                      </div>
                      <div className="col-12 col-md-6 mb-2 mb-md-3">
                        <button
                          className="btn btn-secondary"
                          onClick={() => clearCart()}
                        >
                          Vaciar carrito
                        </button>
                      </div>
                    </div>
                    <div className="col-12">
                      <h6 className="text-uppercase mb-2 mb-md-3">
                        Total: $ {totalPrice()}
                      </h6>
                    </div>

                    <div className="col-12">
                      <Link to="/checkout" className="btn btn-secondary">
                        Pagar
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
