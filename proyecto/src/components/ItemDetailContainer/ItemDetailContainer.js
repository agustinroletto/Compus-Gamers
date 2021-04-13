import SimpleModal from "./ItemDetail";

function ItemDetailContainer({ product }) {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch("https://api.github.com/users")
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data)); // ASIGNAR AL STATE ORIGINA VACIO, LA DATA QUE RECIBIMOS DE LA PETICION ASYNC
  // }, []); // LE PASAMOS UN ARRAY VACIO PARA QUE NO LOOPEE DE FORMA INFINITA;

  return (
    <div>
      <SimpleModal products={product} />
    </div>
  );
}

export default ItemDetailContainer;
