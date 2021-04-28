import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Delete, clearCart } from "../../redux/Actions/Index";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import CartEmpty from "./cartEmpty/CartEmpty";

const Cart = () => {
  const carrito = useSelector((state) => state.Carrito);
  const dispatch = useDispatch();

  function itemsId(id) {
    carrito.map((id) => {
      if (carrito.includes(id) === true) dispatch(Delete(id));
    });
  }
  const cartVacio = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      {carrito === [] ? (
        <CartEmpty />
      ) : (
        carrito.map((product) => (
          <div>
            <p>{product.name}</p>
            <Button
              variant="outlined"
              color="primary"
              className="terminarCompra"
              onClick={() => cartVacio()}
            >
              Vaciar carrito
            </Button>
            <Button
              variant="outlined"
              color="secundary"
              className="terminarCompra"
              onClick={() => itemsId(product.id)}
            >
              Eliminar Item
            </Button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
