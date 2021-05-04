import React, { useState } from "react";
import "./finishCart.css";
import db from "../../../Firebase";
import { useSelector, useDispatch } from "react-redux";
import firebase from "firebase/app";
import "firebase/firestore";

const FinishCart = () => {
  const carrito = useSelector((state) => state.Carrito);
  const [order, setOrder] = useState({
    name: "",
    email: "",
    phone: "",
    items: { carrito },
    total: 0,
    date: firebase.firestore.Timestamp.fromDate(new Date()),
  });

  const handleChange = (e) => {
    setOrder({
      ...order,
      [e.target.name]: e.target.value,
    });
  };

  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      await db.collection("orders").add(order);
      console.log("se subio el producto");
    } catch (error) {
      console.log(" NO se subio el producto");
    }
    e.target.reset();
  };

  return (
    <form onSubmit={handleSumbit}>
      <h1>Finalizar compra</h1>
      <label htmlFor="Nombre y apellido">User Name</label>
      <input placeholder="Bill" name="name" onChange={handleChange} />

      <label htmlFor="phone">Phone</label>
      <input placeholder="2215005653" name="phone" onChange={handleChange} />

      <label htmlFor="email">Email</label>
      <input
        placeholder="bluebill1049@hotmail.com"
        type="text"
        name="email"
        onChange={handleChange}
      />

      <button className="buttonForm" type="submit" name="sumbit">
        Finalizar compra
      </button>
    </form>
  );
};

export default FinishCart;
