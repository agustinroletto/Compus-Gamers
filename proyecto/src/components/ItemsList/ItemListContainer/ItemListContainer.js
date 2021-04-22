import "./ItemListContainer.css";
import CardContainer from "../ItemList/ItemList";
import React, { useState, useEffect } from "react";
import Loading from "../../Loading/Loading";

export default function ItemListContainer() {
  const [spinner, setSpinner] = useState(true);

  const [products, setProducts] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setSpinner(false);
      fetch("https://e-show-server.herokuapp.com/api/v1/products")
        .then((response) => response.json())
        .then((data) => setProducts(data));
    }, 2000);
    // ASIGNAR AL STATE ORIGINA VACIO, LA DATA QUE RECIBIMOS DE LA PETICION ASYNC
  }, [setSpinner]); // LE PASAMOS UN ARRAY VACIO PARA QUE NO LOOPEE DE FORMA INFINITA;
  // if (products.length === 0) {
  //   return <Loading />;
  // }

  return (
    <div className="divItemList">
      {spinner ? <Loading /> : null}
      <CardContainer products={products} />
    </div>
  );
}
