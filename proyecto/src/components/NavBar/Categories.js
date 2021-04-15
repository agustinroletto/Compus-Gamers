import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import "./Categories.css";
import { NavLink } from "react-router-dom";

export default function Categories() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Categorias
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <NavLink activeClassName="active" to="/categories/categoria1">
          <MenuItem onClick={handleClose}>Categoria 1</MenuItem>
        </NavLink>
        <NavLink activeClassName="active" to="/categories/categoria2">
          <MenuItem onClick={handleClose}>Categoria 2</MenuItem>
        </NavLink>{" "}
        <NavLink activeClassName="active" to="/categories/categoria3">
          <MenuItem onClick={handleClose}>Categoria 3</MenuItem>
        </NavLink>
      </Menu>
    </div>
  );
}
