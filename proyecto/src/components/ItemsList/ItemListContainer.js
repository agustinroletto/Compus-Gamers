import './ItemListContainer.css';
import {Contador} from './Contador'
import Card from "react-bootstrap/Card"
import CardDeck from "react-bootstrap/CardDeck"
import grafica3090 from './img/3090.jpg'
import grafica3080 from './img/3080.png'
import grafica3070 from './img/3070.png'
import grafica3060 from './img/3060.jpg'


function ItemListContainer(props) {
  return (
    <div className="container">
      <div>
        <CardDeck>
  <Card>
    <Card.Img variant="top" src={grafica3090} />
    <Card.Body>
      <Card.Title>Placa de video MSI Gaming Trio 3090</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
            <Contador stock="5" />


    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={grafica3080} />
    <Card.Body>
      <Card.Title>Placa de video MSI Gaming Trio 3080</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
            <Contador stock='4' />

    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={grafica3070} />
    <Card.Body>
      <Card.Title>Placa de video MSI Gaming Trio 3070</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
            <Contador stock='10' />
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
      </div>
    </div>
    
  );
}


export default ItemListContainer;

