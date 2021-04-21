import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

const styles = (theme) => ({
  fab: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

function ContadorButton(props) {
  const { classes } = props;

  return (
    <div>
      <Button
        onClick={props.increment}
        color="primary"
        aria-label="Add"
        className={classes.fab}
      >
        <Icon class="fas fa-plus"></Icon>
      </Button>

      <Button
        onClick={props.decrement}
        color="secondary"
        aria-label="Edit"
        className={classes.fab}
      >
        <Icon class="fas fa-minus"></Icon>
      </Button>
      <p id="Cantidad">{props.contador}</p>
    </div>
  );
}

ContadorButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContadorButton);
