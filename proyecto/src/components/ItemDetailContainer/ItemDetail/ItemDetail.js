import React, { useState, useEffect } from "react";
import "./ItemDetail.css";
import Loading from "../../Loading/Loading";
import ContadorButton from "../Contador/Contador";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { Add, Delete, clearCart } from "../../../redux/Actions/Index";

function SimpleModal({ match, stock }) {
  const [item, setItem] = useState([]);
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSpinner(false);
      fetch(
        `https://e-show-server.herokuapp.com/api/v1/products/${match.params.Id}`
      )
        .then((response) => response.json())
        .then((data) => setItem(data));
    }, 1000);

    // ASIGNAR AL STATE ORIGINA VACIO, LA DATA QUE RECIBIMOS DE LA PETICION ASYNC
  }, [setSpinner]); // LE PASAMOS UN ARRAY VACIO PARA QUE NO LOOPEE DE FORMA INFINITA;

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

  //REDUX
  const carrito = useSelector((state) => state.Carrito);
  const dispatch = useDispatch();

  const addItem = (item) => {
    if (carrito.includes(item) === true) {
      console.log(carrito[item]); //aca va que agregue un stock al array pero no pude encontrar como hacerlo.
    } else dispatch(Add(item));
  };
  return (
    <div className="divItem">
      {spinner ? (
        <Loading />
      ) : (
        <div className="DivItemDetails">
          <h1>{item.name}</h1>
          <img src={item.image} alt="Imagen del producto" />
          <p>${item.price}</p>
          <p className="cuotas">Disponible en 3 cuotas sin interés</p>
          <ContadorButton
            increment={handleIncrement}
            decrement={handleDecrement}
            contador={contador}
          />
          <div className="divButtons">
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
            {contador > 0 && (
              <div>
                <NavLink activeClassName="active" exact to="/cart">
                  <Button
                    variant="outlined"
                    color="primary"
                    className="agregarAlCarrito"
                    onClick={() => addItem(item)}
                  >
                    Agregar al carrito
                  </Button>
                </NavLink>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default SimpleModal;
