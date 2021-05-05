import { Component } from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import React from "react";
import Categories from "./Categories/Categories";

class NavBar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <NavLink activeClassName="active" exact to="/">
          <h1 className="Navbar-logo">
            Carrito <i class="fab fa-js-square"></i>
          </h1>
        </NavLink>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          <NavLink activeClassName="active" exact to="/">
            <li className="liNavBar">Home</li>
          </NavLink>
          <NavLink activeClassName="active" exact to="/about">
            <li className="liNavBar">About</li>
          </NavLink>
          <NavLink activeClassName="active" exact to="/contact">
            <li className="liNavBar">Contacto</li>
          </NavLink>
          <Categories />
        </ul>
        <NavLink activeClassName="active" exact to="/formproduct">
          <li className="liNavBar">Form Product</li>
        </NavLink>
        <NavLink activeClassName="active" exact to="/cart">
          <CartWidget />
        </NavLink>
      </nav>
    );
  }
}

export default NavBar;
