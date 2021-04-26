import React from "react";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const CartEmpty = () => {
  return (
    <div>
      <Alert severity="warning">This is a warning message!</Alert>
    </div>
  );
};

export default CartEmpty;
