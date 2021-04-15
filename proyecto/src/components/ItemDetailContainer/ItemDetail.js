import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SimpleModal({ match }) {
  const { slug } = useParams();
  const [item, setItem] = useState([]);
  console.log(match.params.itemId);
  useEffect(() => {
    fetch(`https://api.github.com/users/${match.params.itemId}`)
      .then((response) => response.json())
      .then((data) => setItem(data)); // ASIGNAR AL STATE ORIGINA VACIO, LA DATA QUE RECIBIMOS DE LA PETICION ASYNC
  }, []); // LE PASAMOS UN ARRAY VACIO PARA QUE NO LOOPEE DE FORMA INFINITA;
  return (
    <div className="divItem">
      <div className="DivItemDetails">
        <h1>{item.login}</h1>
        <h2>{item.url}</h2>
        <a>{item.type}</a>
      </div>
    </div>
  );
}

export default SimpleModal;
