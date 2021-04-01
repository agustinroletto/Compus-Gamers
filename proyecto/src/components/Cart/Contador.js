import React from 'react'
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import ButtonGroup from "react-bootstrap/ButtonGroup"
import Button from "react-bootstrap/Button"

export const Contador = () => {
    return (
        <div>
            <ButtonToolbar aria-label="Toolbar with button groups">
  <ButtonGroup className="mr-2" aria-label="First group">
    <Button>1</Button> <Button>2</Button> <Button>3</Button> <Button>4</Button>
  </ButtonGroup>
  </ButtonToolbar>
        </div>
    )
}
