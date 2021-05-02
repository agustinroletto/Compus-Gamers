import "./ItemListContainer.css";
import CardContainer from "../ItemList/ItemList";
import React, { useState, useEffect } from "react";
import Loading from "../../Loading/Loading";
import db from "../../../Firebase";

export default function ItemListContainer() {
  const [spinner, setSpinner] = useState(true);

  const [items, setItems] = useState([]);

  const [id, setId] = useState([]);
  //FIREBASE
  useEffect(() => {
    setSpinner(false);
    const fire = db;
    const itemCollection = fire.collection("ItemList");
    itemCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot === 0) {
          console.log("no hay nada pa");
        }
        setItems(querySnapshot.docs.map((doc) => doc.data()));
        itemCollection.get().then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            setId(doc.id);
            console.log(doc.id);
          });
        });
      })
      .catch((error) => {
        console.log("error buscando items", error);
      })
      .finally(() => {
        setSpinner(true);
      });
  }, []);

  console.log(items); //funciona joya

  return (
    <div className="divItemList">
      {spinner === false ? <Loading /> : null}
      <CardContainer products={items} id={id} />
    </div>
  );
}
