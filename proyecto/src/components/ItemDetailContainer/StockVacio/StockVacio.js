import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import "./StockVacio.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function StockVacio() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity="warning">Selecciona una cantidad</Alert>
    </div>
  );
}
