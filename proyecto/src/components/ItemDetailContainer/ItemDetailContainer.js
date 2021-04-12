import SimpleModal from "./ItemDetail";
import React, { useState, useEffect } from "react";

function ItemDetailContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => setProducts(data)); // ASIGNAR AL STATE ORIGINA VACIO, LA DATA QUE RECIBIMOS DE LA PETICION ASYNC
  }, []); // LE PASAMOS UN ARRAY VACIO PARA QUE NO LOOPEE DE FORMA INFINITA;
  console.log(products); //esto aca anda
  return (
    <div>
      <SimpleModal products={products} />
    </div>
  );
}

export default ItemDetailContainer;
