import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import bg from "../assets/img/bg-auth.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    background: `url(${bg}) top left / cover`,
  },
}));

const BgSection = ({ children }) => {
  const classes = useStyles();

  return (
    <Grid
      item
      xs
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      {children}
    </Grid>
  );
};

export default BgSection;
