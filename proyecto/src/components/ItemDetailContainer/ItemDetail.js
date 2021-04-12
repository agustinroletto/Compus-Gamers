import React from "react";

function SimpleModal(products) {
  return (
    <div className="divItem">
      {Array.from(products).map((product) => {
        return (
          <div className="DivItemDetails">
            <h1>{product.login}</h1>
            <h2>{product.url}</h2>
            <a>{product.type}</a>
          </div>
        );
      })}
    </div>
  );
}

export default SimpleModal;
