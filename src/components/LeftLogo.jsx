import React from "react";
import logo from "../assets/svg/logo.svg";
import { Grid } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  background: {
    background: theme.palette.primary.main,
  },
}));

const LeftLogo = () => {
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
      <img src={logo} alt="Логотип Лофт Такси" />
    </Grid>
  );
};

export default LeftLogo;
