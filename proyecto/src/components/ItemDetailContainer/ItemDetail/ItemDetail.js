import React, { useState, useEffect } from "react";
import "./ItemDetail.css";
import Loading from "../../Loading/Loading";
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

  function LoadingItem() {
    return <Loading />;
  }

  return (
    <div className="divItem">
      <div className="DivItemDetails">
        <h1>{item.name}</h1>
        {item.image ? (
          <img src={item.image} alt="Imagen del producto" />
        ) : (
          LoadingItem()
        )}
        <a>{item.price}</a>
      </div>
    </div>
  );
}

export default SimpleModal;
