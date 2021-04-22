// Definimos un estado inicial de nuestro contador que va a ser igual a 0
// y ademas le pasamos un action
// El reducer va a recibir una accion de los actions

const counterReducer = (state = { item: {}, quantity: {} }, action) => {
  switch (action.type) {
    case "ADD":
      return state;
    case "DELETE":
      return state;
    default:
      return state;
  }
};

export default counterReducer;
