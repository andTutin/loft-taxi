import React from "react";
import Header from "../../components/Header";
import Map from "./Map";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";
import Modal from "../../components/modal";

const MapPage = () => {
  const { isLoading } = useSelector((state) => state.flags);

  if (isLoading) {
    return (
      <Grid container component="main" direction="column" justify="flex-start">
        <Header />
        <Grid item xs container justify="center" alignItems="center">
          <CircularProgress color="secondary" />
        </Grid>
      </Grid>
    );
  }

  return (
    <>
      <Grid container component="main" direction="column" justify="flex-start">
        <Header />
        <Map />
      </Grid>
      <Modal />
    </>
  );
};

export default MapPage;
