import React, { useState, useEffect } from "react";
import db from "../../../../Firebase";

const OrderId = () => {
  const [orderId, setorderId] = useState();

  useEffect(() => {
    const getData = async () => {
      const { docs } = await db.collection("orders").get();
      const data = docs.map((item) => item.id);
      setorderId(data);
    };

    getData();
  }, []);

  return (
    <div>
      <h1>Muchas gracias por su compra!</h1>
      <p>
        En unos instantes le estará llegando a su mail la confirmación de la
        misma.
      </p>
      <p>Su orden de compra es {orderId} </p>
    </div>
  );
};

export default OrderId;
