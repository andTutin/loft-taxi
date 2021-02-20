import React from "react";
import Grid from "@material-ui/core/Grid";

const WithBackground = ({ background, children }) => {
  return (
    <Grid
      item
      xs
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{ background: `url(${background}) top left / cover` }}
    >
      {children}
    </Grid>
  );
};

export default WithBackground;
