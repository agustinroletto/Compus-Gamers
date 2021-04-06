import React, { useState } from 'react'
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";


const styles = (theme) => ({
  fab: {
    margin: theme.spacing.unit
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  }
});

function FloatingActionButtons(props) {
    
  const { classes } = props;
   const [contador, setContador] = useState(0) //entre parentesis va el valor inicial del estado. devuelve un array con dos valores: el primero es el valor del estado, en este caso 0 y el 2do es una funcion que actualiza el estado, osea que actualiza el state iniciado en 0. 

  const handleIncrement = () => { //esto es una funcion que toma el setcontador, que tambien es una funcion, y le suma al contador 1. 
    

  if(contador < props.stock){
  setContador( contador + 1)
}
  };

  const handleDecrement = () => {
    if(contador > 0){
   setContador( contador - 1)
}
    
  
  };
  return (
    <div>
      <Button onClick={handleIncrement} color="primary" aria-label="Add" className={classes.fab}>
        <Icon class="fas fa-plus"></Icon>
      </Button>
   
      <Button onClick={handleDecrement} color="secondary" aria-label="Edit" className={classes.fab}>
        <Icon class="fas fa-minus"></Icon>
      </Button>
      <p>{contador}</p>
    </div>
  );
}

FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FloatingActionButtons);
