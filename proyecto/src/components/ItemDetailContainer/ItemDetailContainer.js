import SimpleModal from "./ItemDetail";

function ItemDetailContainer({ product }) {
  return (
    <div>
      <SimpleModal products={product} />
    </div>
  );
}

export default ItemDetailContainer;
