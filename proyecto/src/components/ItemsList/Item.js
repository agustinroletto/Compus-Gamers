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
import grafica3090 from "./img/3090.jpg";
import grafica3080 from "./img/3080.png";
import grafica3070 from "./img/3070.png";
import grafica3060 from "./img/3060.jpg";
import grafica2080 from "./img/2080.jpg";
import AlertStock from "./AlertStock";

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
              <FloatingActionButtons stock="5" />
            </CardActions>
          </Card>
        </Grid>
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
              <FloatingActionButtons stock="5" />
            </CardActions>
          </Card>
        </Grid>
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
              <FloatingActionButtons stock="5" />
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
