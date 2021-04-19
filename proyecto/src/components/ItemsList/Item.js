import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FloatingActionButtons from "./Contador";
import "./Item.css";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    padding: theme.spacing(2),
    textAlign: "center",
    aling: "center",
    color: theme.palette.text.secondary,
  },
  media: {
    height: 350,
  },
}));

function Item({ products }) {
  const classes = useStyles();

  const [visibilidad, setVisibilidad] = useState(false);

  return (
    <div className="divItem">
      {Array.from(products).map((product) => (
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs>
              <Card className={classes.root}>
                <CardActionArea>
                  <NavLink activeClassName="active" to={`/item/${product.id}`}>
                    <CardMedia
                      className={classes.media}
                      image={product.image}
                      title="Contemplative Reptile"
                    />
                  </NavLink>
                  <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                      {product.name}
                    </Typography>
                    <Typography component="p">
                      {product.category.name}
                    </Typography>
                    <p> $ARS {product.price}</p>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Agregar al carrito
                  </Button>
                  <NavLink activeClassName="active" to={`/item/${product.id}`}>
                    <Button size="small" color="primary">
                      Ver más
                    </Button>
                  </NavLink>

                  <FloatingActionButtons stock={Math.random() * 10} />
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </div>
      ))}
    </div>
  );
}

export default Item;
