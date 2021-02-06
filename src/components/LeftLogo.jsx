import React from "react";
import logo from "../svg/logo.svg";
import { Grid } from "@material-ui/core/";

const LeftLogo = () => {
  return (
    <Grid
      item
      xs={4}
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{ background: "#1C1A19" }}
    >
      <img src={logo} alt="Логотип Лофт Такси" />
    </Grid>
  );
};

export default LeftLogo;
