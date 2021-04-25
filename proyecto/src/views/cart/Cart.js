import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Delete, clearCart } from "../../redux/Actions/Index";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const carrito = useSelector((state) => state.Carrito);
  const dispatch = useDispatch();

  const removeItem = (item) => {
    if (carrito.includes(item) === true) dispatch(Delete(item)); //aca me faltaria pasarle el id y que busque ese id y lo quite.
  };

  const cartVacio = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <p>{carrito.name}</p>
      <NavLink activeClassName="active" exact to="/cart">
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
          onClick={() => removeItem(carrito.item)}
        >
          Eliminar Item
        </Button>
      </NavLink>
    </div>
  );
};

export default Cart;
