import logo from './logo.svg';
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl"
import Button from "react-bootstrap/Button"


function NavBar() {
  return (
 <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Proyecto React</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Categoría 1</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Categoría 2</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Categoría 3</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Ofertas</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Buscar</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>

  );
}

export default NavBar;
