import React, { useState, useEffect } from "react";
import Item from "./Item";

import "./ItemListContainer.css";

const Items = [
  {
    id: 1,
    nombre: "Placa de video MSI 3090",
    descripcion: "lorem",
    precio: 190.0,
    img: "./img/3090.jpg",
    stock: "2",
  },
  {
    id: 2,
    nombre: "Placa de video MSI 3080",
    descripcion: "lorem2",
    precio: 150.0,
    img: "./img/3080.png",
    stock: "5",
  },
  {
    id: 3,
    nombre: "Placa de video MSI 3070",
    descripcion: "lorem3",
    precio: 100.0,
    img: "./img/3070.png",
    stock: "4",
  },
  {
    id: 4,
    nombre: "Placa de video MSI 3060",
    descripcion: "lorem4",
    precio: 80.9,
    img: "./img/3060.jpg",
    stock: "10",
  },
];

const Promises = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      const Products = Items;
      setData(...data, Products);
    }, 3000);
  }, []);
  return (
    <div>
      {Array.from(data).map((d) => {
        return (
          <Item
            img={d.img}
            title={d.nombre}
            descripcion={d.descripcion}
            stock={d.stock}
          />
        );
      })}
    </div>
  );
};
export default Promises;
