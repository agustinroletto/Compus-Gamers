import "./ItemListContainer.css";
import CardContainer from "./ItemList";
import React, { useState, useEffect } from "react";

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => setProducts(data)); // ASIGNAR AL STATE ORIGINA VACIO, LA DATA QUE RECIBIMOS DE LA PETICION ASYNC
  }, []); // LE PASAMOS UN ARRAY VACIO PARA QUE NO LOOPEE DE FORMA INFINITA;

  return (
    <div className="divItemList">
      <CardContainer products={products} />
    </div>
  );
}
