import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import logoAuth from "../../assets/logos/logoAuth.svg";

const useStyles = makeStyles((theme) => ({
  background: {
    background: theme.palette.primary.main,
  },
}));

const Logo = () => {
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

export default React.memo(Logo);
