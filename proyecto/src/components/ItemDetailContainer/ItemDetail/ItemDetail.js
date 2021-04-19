import React, { useState, useEffect } from "react";
import "./ItemDetail.css";

function SimpleModal({ match }) {
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch(
      `https://e-show-server.herokuapp.com/api/v1/products/${match.params.Id}`
    )
      .then((response) => response.json())
      .then((data) => setItem(data)); // ASIGNAR AL STATE ORIGINA VACIO, LA DATA QUE RECIBIMOS DE LA PETICION ASYNC
  }, []); // LE PASAMOS UN ARRAY VACIO PARA QUE NO LOOPEE DE FORMA INFINITA;
  console.log(item);

  return (
    <div className="divItem">
      <div className="DivItemDetails">
        <h1>{item.name}</h1>
        <img src={item.image} />
        <a>{item.price}</a>
      </div>
    </div>
  );
}

export default SimpleModal;
