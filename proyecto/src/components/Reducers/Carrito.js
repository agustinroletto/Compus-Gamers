

const Carrito = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [...state, {action.payload, action.quantityload}]
    case "DELETE":
      return state;
    default:
      return state;
  }
};
export default Carrito;