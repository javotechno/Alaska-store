import Swal from "sweetalert2";
import React, { useState, useContext } from "react";

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProduct = (item, quantity) => {
    if (isInCart(item.id)) {
      setCart(
        cart.map((product) => {
          return product.id === item.id
            ? { ...product, quantity: product.quantity + quantity }
            : product;
        })
      );
    } else {
      setCart([...cart, { ...item, quantity: quantity }]);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Producto añadido al carrito",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
  };
  const totalProducts = () =>
    cart.reduce(
      (acumulador, productoActual) => acumulador + productoActual.quantity,
      0
    );

  const clearCart = () => {
    Swal.fire({
      title: "Seguro quieres vaciar el carrito?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Vaciar carrito!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Carrito vaciado");
        setCart([]);
      }
    });
  };

  const isInCart = (id) =>
    cart.find((product) => product.id === id) ? true : false;

  const removeProduct = (id) => {
    Swal.fire({
      title: "¿Desea eliminar el producto? ",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Producto eliminado del carrito !");
        setCart(cart.filter((product) => product.id !== id));
      }
    });
  };

  return (
    <CartContext.Provider
      value={{
        clearCart: clearCart,
        isInCart: isInCart,
        removeProduct: removeProduct,
        addProduct: addProduct,
        totalPrice: totalPrice,
        totalProducts: totalProducts,
        cart: cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
