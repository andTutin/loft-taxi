import React from "react";
import Nav from "./Nav";
import { Grid, AppBar } from "@material-ui/core/";
import logo from "../logoHeader.svg";

const Header = () => {
  return (
      <AppBar color="primary" position="static">
        <Grid container justify="space-between" alignItems="center">
          <img src={logo} alt="Лофт Такси Лого" />
          <Nav />
        </Grid>
      </AppBar>
  );
};

export default Header;
