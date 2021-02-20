import React from "react";
import logoAuth from "../assets/logos/logoAuth.svg";
import { Grid } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  background: {
    background: theme.palette.primary.main,
  },
}));

const AuthPagesLogo = () => {
  const classes = useStyles();

  return (
    <Grid
      item
      xs={4}
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.background}
    >
      <img src={logoAuth} alt="Логотип Лофт Такси" />
    </Grid>
  );
};

export default AuthPagesLogo;
