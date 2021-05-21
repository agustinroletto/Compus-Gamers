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

  const url = match.params.categoriesId;

  useEffect(() => {
    const call = async () => {
      const { docs } = await db.collection("ItemList").get();
      const data = docs.map((item) => ({ id: item.id, ...item.data() }));
      setItems(data);
    };
    call();
  }, []);
  const itemFilter = items.filter((i) => i.categoryId === url);

  return (
    <div>
      {spinner === false ? <Loading /> : null}
      <CardContainer products={itemFilter} />
    </div>
  );
};

export default Categories;
