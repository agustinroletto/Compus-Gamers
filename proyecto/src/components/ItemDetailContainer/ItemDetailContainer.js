import SimpleModal from "./ItemDetail";

function ItemDetailContainer({ match }) {
  console.log(match);
  return (
    <div>
      <SimpleModal match={match} />
    </div>
  );
}

export default ItemDetailContainer;
