import React from "react";
import "./Categories.css";
import { useParams } from "react-router-dom";

export const Categories = () => {
  const { categoriesId } = useParams();

  return (
    <div>
      <h1>Hola {categoriesId}</h1>
    </div>
  );
};
