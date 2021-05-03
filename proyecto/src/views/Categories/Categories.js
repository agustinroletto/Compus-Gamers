import React from "react";
import "./Categories.css";
import { useParams } from "react-router-dom";
import CardContainer from "../../components/ItemsList/ItemList/ItemList";
import { useState, useEffect } from "react";
import Loading from "../../components/Loading/Loading";
import db from "../../Firebase";

const Categories = ({ match }) => {
  const [spinner, setSpinner] = useState(true);
  const { categoriesId } = useParams();
  const [items, setItems] = useState([]);
  console.log(match.params.categoriesId);

  useEffect(() => {
    db.collection("ItemList")
      .where("categoryId", "==", `${match.params.categoriesId}`)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setItems(doc.data());
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      });
    setSpinner(true);
  }, []);

  console.log(items);
  return (
    <div>
      {spinner === false ? <Loading /> : null}
      <CardContainer products={items} />
      <h1>Hola {categoriesId}</h1>
    </div>
  );
};

export default Categories;
