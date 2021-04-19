import "./ItemListContainer.css";
import CardContainer from "../ItemList/ItemList";
import React, { useState, useEffect } from "react";
import Loading from "../../Loading/Loading";

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://e-show-server.herokuapp.com/api/v1/products")
      .then((response) => response.json())
      .then((data) => setProducts(data)); // ASIGNAR AL STATE ORIGINA VACIO, LA DATA QUE RECIBIMOS DE LA PETICION ASYNC
  }, []); // LE PASAMOS UN ARRAY VACIO PARA QUE NO LOOPEE DE FORMA INFINITA;
  if (products.length === 0) {
    return <Loading />;
  }
  return (
    <div className="divItemList">
      <CardContainer products={products} />
    </div>
  );
}
