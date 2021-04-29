import React from "react";
import MuiAlert from "@material-ui/lab/Alert";
import { NavLink } from "react-router-dom";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const CartEmpty = () => {
  return (
    <div>
      <Alert severity="warning">
        Tu carrito está vacio! Vuelvo al catálogo de productos para agregar uno
      </Alert>
      <NavLink activeClassName="active" exact to="/">
        <p>Volver al inicio</p>
      </NavLink>
    </div>
  );
};

export default CartEmpty;
