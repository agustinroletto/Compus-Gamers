import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Delete, clearCart } from "../../redux/Actions/Index";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import CartEmpty from "./cartEmpty/CartEmpty";

const Cart = () => {
  const carrito = useSelector((state) => state.Carrito);
  const dispatch = useDispatch();

  const removeItem = (id) => {
    console.log(id);
    if (carrito.includes(id)) dispatch(Delete(id)); //aca tengo el mismo error que en la otra, como accedo al id del item.
  };
  const cartVacio = () => {
    dispatch(clearCart());
    setTotal(0);
  };

  const [total, setTotal] = useState(0);
  useEffect(() => {
    carrito.forEach((product) => {
      setTotal(total + Number(product.price));
    });
  }, []);

  return (
    <div>
      {carrito.length === 0 ? (
        <CartEmpty />
      ) : (
        carrito.map((product) => (
          <div>
            <p>{product.name}</p>

            <Button
              variant="outlined"
              color="secundary"
              className="terminarCompra"
              onClick={() => removeItem(product.id)}
            >
              Eliminar Item
            </Button>
          </div>
        ))
      )}
      {carrito.length !== 0 ? (
        <div>
          <p>total: {total} </p>
          <p>Cantidad de productos: {carrito.length} </p>
          <Button
            variant="outlined"
            color="primary"
            className="terminarCompra"
            onClick={() => cartVacio()}
          >
            Vaciar carrito
          </Button>
          <NavLink activeClassName="active" exact to="/">
            <Button variant="contained" color="secondary">
              <p>Volver al home</p>
            </Button>
          </NavLink>
        </div>
      ) : null}
    </div>
  );
};

export default Cart;
