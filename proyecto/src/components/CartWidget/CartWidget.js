import "./CartWidget.css";
import React from "react";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useSelector } from "react-redux";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
    color: "white",
  },
}))(Badge);

export default function CartWidget() {
  const carrito = useSelector((state) => state.Carrito);

  return (
    <IconButton aria-label="cart">
      <StyledBadge className="cartWidgetColor" badgeContent={carrito.length}>
        <ShoppingCartIcon className="cartWidgetCirculo" />
      </StyledBadge>
    </IconButton>
  );
}
