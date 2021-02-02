import React from "react";
import Grid from "@material-ui/core/Grid";
import Header from "../../components/Header";
import Map from "../../components/Map";

const MapPage = () => {
  return (
    <Grid container component="main" direction="column" justify="flex-start">
      <Header />
      <Map />
    </Grid>
  );
};

export default MapPage;
