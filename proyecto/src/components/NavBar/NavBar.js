import { Component } from "react";
import { Button } from "./Button";
import CartWidget from "../Cart/CartWidget";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="Navbar-logo">
          Carrito <i className="fab fa-react"></i>
        </h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
          {/* la parte de arriba lo que hace es como un if, si esta //clickeado con el state de arriba agarra un logo de font awasome y si no agarra otro */}
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          <NavLink activeClassName="active" exact to="/">
            <li>Home</li>
          </NavLink>
          <NavLink activeClassName="active" exact to="/about">
            <li>About</li>
          </NavLink>
          <NavLink activeClassName="active" exact to="/contact">
            <li>Contact</li>
          </NavLink>
        </ul>
        <a href="#">
          <CartWidget />
        </a>
        <Button> Ingresar</Button>
      </nav>
    );
  }
}

export default NavBar;
