import React from "react";
import "../scss/cartWidget.scss";
import { useCartContext } from "../context/CartContext";

export const CartWidget = () => {
  const { totalProducts } = useCartContext();

  return (
    <>
      <i className="bi bi-cart icon-cart"></i>
      <span>{totalProducts() || ""}</span>
    </>
  );
};

export default CartWidget;
