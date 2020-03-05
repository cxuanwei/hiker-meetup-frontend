import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import styles from "../_subAsset/jss/authNavbarStyle";

const useStyles = makeStyles(styles);

export default function AuthNavbar() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.container}></Toolbar>
    </AppBar>
  );
}
