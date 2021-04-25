export const Add = (i) => {
  return {
    type: "ADD",
    payload: i,
  };
};

export const Delete = (d) => {
  return {
    type: "DELETE",
    payload: d,
  };
};

export const clearCart = () => {
  return {
    type: "CLEAR_CART",
  };
};
