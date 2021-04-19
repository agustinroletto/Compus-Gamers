import React from "react";
import "./ItemList.css";
import Item from "../Item/Item";

function CardContainer({ products }) {
  return (
    <div className="CardContainer">
      <Item products={products} />
    </div>
  );
}

export default CardContainer;
