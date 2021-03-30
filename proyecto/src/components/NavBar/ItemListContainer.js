import './ItemListContainer.css';


function ItemListContainer(props) {
  return (
    <div className="container">
      <h2 className='titulo'>Hola {props.title}, como estas?</h2>
    </div>
  );
}


export default ItemListContainer;

