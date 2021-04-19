import SimpleModal from "./ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

function ItemDetailContainer({ match }) {
  return (
    <div className="divItemDetail">
      <SimpleModal match={match} />
    </div>
  );
}

export default ItemDetailContainer;
