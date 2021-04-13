import React from "react";

function SimpleModal({ products }) {
  return (
    <div className="divItem">
      <div className="DivItemDetails">
        <h1>{products.login}</h1>
        <h2>{products.url}</h2>
        <a>{products.type}</a>
      </div>
    </div>
  );
}

export default SimpleModal;
