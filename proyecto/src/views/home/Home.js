import React from "react";
import ItemListContainer from "../../components/ItemsList/ItemListContainer/ItemListContainer";
import Galeria from "../../components/Carousel/Carousel";

function Home() {
  return (
    <div>
      <Galeria />

      <ItemListContainer />
    </div>
  );
}

export default Home;
