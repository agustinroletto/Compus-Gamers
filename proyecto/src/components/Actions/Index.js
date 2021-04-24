export const Add = (i, q) => {
  return {
    type: "ADD",
    payload: i,
    quantityload: q,
  };
};

export const Delete = () => {
  return {
    type: "DELETE",
  };
};
