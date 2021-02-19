import React from "react";
import Nav from "./Nav";
import { Grid, AppBar } from "@material-ui/core/";
import logoHeader from "../../assets/logos/logoHeader.svg";

export const Header = () => {
  return (
    <AppBar color="primary" position="static">
      <Grid container justify="space-between" alignItems="center">
        <img src={logoHeader} alt="Лофт Такси Лого" />
        <Nav />
      </Grid>
    </AppBar>
  );
};
