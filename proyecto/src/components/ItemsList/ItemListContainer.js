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
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={grafica3090}
                title="Contemplative Reptile"
              />

              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                  Placa de video MSI 3090
                </Typography>
                <Typography component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
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
                image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                  Placa de video MSI 3080
                </Typography>
                <Typography component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Agregar al carrito
              </Button>
              <Button size="small" color="primary">
                Ver más
              </Button>
              <FloatingActionButtons stock="7" />
            </CardActions>
          </Card>{" "}
        </Grid>
        <Grid item xs>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                  Placa de video MSI 3070
                </Typography>
                <Typography component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Agregar al carrito
              </Button>
              <Button size="small" color="primary">
                Ver más
              </Button>
              <FloatingActionButtons stock="8" />
            </CardActions>
          </Card>{" "}
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                  Placa de video MSI 3060
                </Typography>
                <Typography component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Agregar al carrito
              </Button>
              <Button size="small" color="primary">
                Ver más
              </Button>
              <FloatingActionButtons stock="3" />
            </CardActions>
          </Card>{" "}
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                  Placa de video MSI 2080 TI
                </Typography>
                <Typography component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Agregar al carrito
              </Button>
              <Button size="small" color="primary">
                Ver más
              </Button>
              <FloatingActionButtons stock="9" />
            </CardActions>
          </Card>{" "}
        </Grid>
        <Grid item xs>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                  Placa de video MSI 3060
                </Typography>
                <Typography component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Agregar al carrito
              </Button>
              <Button size="small" color="primary">
                Ver más
              </Button>
              <FloatingActionButtons stock="0" />
            </CardActions>
          </Card>{" "}
        </Grid>
      </Grid>
    </div>
  );
}
