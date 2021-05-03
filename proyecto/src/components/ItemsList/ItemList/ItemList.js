import React from "react";
import "./ItemList.css";
import Item from "../Item/Item";

function CardContainer({ products }) {
  return (
    <div className="itemContainer">
      <Item products={products} />
    </div>
  );
}

export default CardContainer;
