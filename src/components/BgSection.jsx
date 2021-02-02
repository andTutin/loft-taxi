import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import bg from "../bg-auth.jpg";

const useStyles = makeStyles((theme) => ({
  bgSection: {
    height: "100%",
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
      className={classes.bgSection}
    >
      {children}
    </Grid>
  );
};

export default BgSection;
