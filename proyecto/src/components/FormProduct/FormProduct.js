import React, { useState } from "react";
import db from "../../Firebase";

const FormProduct = () => {
  const [producto, setProducto] = useState({
    title: "",
    imageId: "",
    price: 0,
    description: "",
    categoryId: "",
    stock: "",
  });

  const handleChange = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await db.collection("ItemList").add(producto);
      console.log("upload success");
    } catch (error) {
      console.log(error);
    }

    e.target.reset();
  };
  return (
    <div>
      <form className="formulario-container" onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            titulo
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Placa de video"
            name="title"
            onChange={handleChange}
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            imagen
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            name="imageId"
            onChange={handleChange}
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            precio
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="$xxx"
            name="price"
            onChange={handleChange}
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            descripcion
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="description"
            onChange={handleChange}
          ></textarea>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            stock
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="stock"
            onChange={handleChange}
          ></input>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            categoryId
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            name="categoryId"
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          cargar
        </button>
      </form>
    </div>
  );
};

export default FormProduct;
