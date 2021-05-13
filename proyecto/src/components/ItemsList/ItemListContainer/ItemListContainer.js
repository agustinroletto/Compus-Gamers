import "./ItemListContainer.css";
import CardContainer from "../ItemList/ItemList";
import React, { useState, useEffect } from "react";
import Loading from "../../Loading/Loading";
import db from "../../../Firebase";

export default function ItemListContainer() {
  const [spinner, setSpinner] = useState(true);

  const [items, setItems] = useState([]);

  useEffect(() => {
    setSpinner(false);
    const getData = async () => {
      const { docs } = await db.collection("ItemList").get();
      const data = docs.map((item) => ({
        quantity: 0,
        id: item.id,
        ...item.data(),
      }));
      setItems(data);
      setSpinner(true);
    };

    getData();
  }, []);
  return (
    <div className="divItemList">
      {spinner === false ? <Loading /> : null}
      <CardContainer products={items} />
    </div>
  );
}
