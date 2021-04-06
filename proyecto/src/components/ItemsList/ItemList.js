import React from "react";
import Item from "./Item";
import grafica3090 from "./img/3090.jpg";
import promiseTimeout from "./TimeOutPromise";

import "./ItemListContainer.css";

const Items = [
  {
    id: 1,
    nombre: "Placa de video MSI 3090",
    descripcion: "lorem",
    precio: 190.0,
  },
  {
    id: 2,
    nombre: "Placa de video MSI 3080",
    descripcion: "lorem2",
    precio: 150.0,
  },
  {
    id: 3,
    nombre: "Placa de video MSI 3070",
    descripcion: "lorem3",
    precio: 100.0,
  },
  {
    id: 4,
    nombre: "Placa de video MSI 3060",
    descripcion: "lorem4",
    precio: 80.9,
  },
];

export default function AutoGrid() {
  const doSomething = function () {
    return new Promise((resolve, reject) => {
      /* ...  */
    });
  };

  // Apply a timeout of 5 seconds to doSomething
  let doIt = promiseTimeout(5000, doSomething());

  // Wait for the promise to get resolved
  doIt.then((response) => {
    const Products = Items.map((user) => {
      return <Item img="" title={user.nombre} descripcion={user.descripcion} />;
    });
  });

  // Wait for the promise to get rejected or timed out
  doIt.catch((error) => {
    // Deal with error
  });

  return (
    <div className="">
      <Item img={grafica3090} />
      <Item />
    </div>
  );
}
