import React from "react";
import "./ItemList.css";
import Item from "../Item/Item";

function CardContainer({ products, id }) {
  return (
    <div className="itemContainer">
      <Item products={products} id={id} />
    </div>
  );
}

export default CardContainer;
