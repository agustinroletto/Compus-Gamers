const Carrito = (state = [], action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      return state.filter((item) => item !== action.payload);
    case "CLEAR_CART":
      return (state = []);
    default:
      return state;
  }
};
export default Carrito;
