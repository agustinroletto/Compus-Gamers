import SimpleModal from "./ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

function ItemDetailContainer({ match }) {
  return (
    <div className="divItemDetail">
      <SimpleModal match={match} stock={Math.random() * 10} />
    </div>
  );
}

export default ItemDetailContainer;
