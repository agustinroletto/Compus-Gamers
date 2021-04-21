import React, { useState, useEffect } from "react";
import "./ItemDetail.css";
import Loading from "../../Loading/Loading";
import ContadorButton from "../Contador/Contador";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";

function SimpleModal({ match, stock }) {
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch(
      `https://e-show-server.herokuapp.com/api/v1/products/${match.params.Id}`
    )
      .then((response) => response.json())
      .then((data) => setItem(data)); // ASIGNAR AL STATE ORIGINA VACIO, LA DATA QUE RECIBIMOS DE LA PETICION ASYNC
  }, []); // LE PASAMOS UN ARRAY VACIO PARA QUE NO LOOPEE DE FORMA INFINITA;

  function LoadingItem() {
    return <Loading />;
  }

  const [contador, setContador] = useState(0);

  const handleIncrement = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const handleDecrement = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  const [compra, setCompra] = useState(0);

  const onChangeValue = (e) => {
    if (compra <= stock) {
      setCompra(compra + contador);
      console.log(compra);
    }
  };

  const decrementValue = (e) => {
    if (compra >= 0) {
      setCompra(compra - contador);
      console.log(compra);
    }
  };

  return (
    <div className="divItem">
      <div className="DivItemDetails">
        <h1>{item.name}</h1>
        {item.image ? (
          <img src={item.image} alt="Imagen del producto" />
        ) : (
          LoadingItem()
        )}
        <p>${item.price}</p>
        <p className="cuotas">Disponible en 3 cuotas sin interés</p>
        <ContadorButton
          increment={handleIncrement}
          decrement={handleDecrement}
          contador={contador}
        />
        <div className="divButtons">
          <IconButton aria-label="delete" onClick={decrementValue}>
            <DeleteIcon />
          </IconButton>
          <IconButton
            color="primary"
            aria-label="add to shopping cart"
            onClick={contador > 0 ? onChangeValue : null}
          >
            <AddShoppingCartIcon />
          </IconButton>

          {contador > 0 ? (
            <NavLink activeClassName="active" exact to="/cart">
              <Button
                variant="outlined"
                color="primary"
                className="terminarCompra"
              >
                Finalizar compra
              </Button>
            </NavLink>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default SimpleModal;
