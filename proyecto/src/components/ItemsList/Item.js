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

import "./ItemListContainer.css";

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

export default function Item(props) {
  const classes = useStyles();

  return (
    <div className="divItem">
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={props.img}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="headline" component="h2">
                    {props.title}
                  </Typography>
                  <Typography component="p">{props.descripcion}</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Agregar al carrito
                </Button>
                <Button size="small" color="primary">
                  Ver más
                </Button>
                <FloatingActionButtons stock={props.stock} />
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
