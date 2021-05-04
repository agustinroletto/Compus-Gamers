import React from "react";
import "./finishCart.css";
import { useState } from "react";

function finishCart() {
  const newOrders = {
    name: "",
    email: "",
    phone: "",
    items: [],
    total: 0,
  };
  return (
    <form>
      <h1>Finalizar compra</h1>
      <label htmlFor="Nombre y apellido">User Name</label>
      <input placeholder="Bill" name="name" />

      <label htmlFor="phone">Phone</label>
      <input placeholder="2215005653" name="phone" />

      <label htmlFor="email">Email</label>
      <input placeholder="bluebill1049@hotmail.com" type="text" name="email" />

      <div style={{ color: "blue" }}></div>
      <button className="buttonForm" type="submit" name="sumbit">
        Finalizar compra
      </button>
    </form>
  );
}

export default finishCart;
