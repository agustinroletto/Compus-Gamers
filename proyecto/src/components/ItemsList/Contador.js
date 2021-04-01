import React, { useState } from 'react'
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import ButtonGroup from "react-bootstrap/ButtonGroup"
import Button from "react-bootstrap/Button"
import './Contador.css'

export const Contador = (props) => {

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

  //console.log(props.stock)

  // const stock = (props.stock = stock) =>{
  //    contador <={stock} ? {handleIncrement} :'none';

    return (
        <div className='DivContador'>
            <ButtonToolbar className='ButtonContador' aria-label="Toolbar with button groups">
                <ButtonGroup className="mr-2 " aria-label="First group">
                    <Button onClick={handleIncrement}><i class="fas fa-plus"></i></Button> 
                    <Button onClick={handleDecrement}><i class="fas fa-minus"></i></Button> 
                    <p>{contador}</p>
                </ButtonGroup>
                <Button variant="outline-primary">Agregar al carritos</Button>            
  </ButtonToolbar>
        </div>
    )
}
