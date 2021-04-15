import "./ItemListContainer.css";
import CardContainer from "./ItemList";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Loading from "../Loading/Loading";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users")
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
