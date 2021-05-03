import React, { useState, useEffect } from "react";
import "./ItemDetail.css";
import Loading from "../../Loading/Loading";
import ContadorButton from "../Contador/Contador";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import db from "../../../Firebase";

import { useSelector, useDispatch } from "react-redux";
import { Add } from "../../../redux/Actions/Index";

function SimpleModal({ match }) {
  const [item, setItem] = useState([]);
  const [spinner, setSpinner] = useState(true);

  const [items, setItems] = useState([]);
  //FIREBASE

  useEffect(() => {
    var docRef = db.collection("ItemList").doc(`${match.params.Id}`);

    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          setItems(doc.data());
          console.log("Document data:", doc.data());
          setSpinner(false);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);

  const [contador, setContador] = useState(0);

  const handleIncrement = () => {
    if (contador < items.stock) {
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
    if (carrito.includes(item.Id)) {
      console.log(carrito[item]); //aca va que agregue un stock al array pero no pude encontrar como hacerlo.
      carrito.price = carrito.price + item.price;
    } else dispatch(Add(item));
  };
  return (
    <div className="divItem">
      {spinner ? (
        <Loading />
      ) : (
        <div className="DivItemDetails">
          <h1>{items.name}</h1>
          <img src={items.image} alt="Imagen del producto" />
          <p>${items.price}</p>
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
                    onClick={() => addItem(items)}
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
