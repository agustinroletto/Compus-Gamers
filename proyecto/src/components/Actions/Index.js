export const Add = (i, q) => {
  return {
    type: "ADD",
    payload: i,
    q,
  };
};

export const Delete = () => {
  return {
    type: "DELETE",
  };
};
