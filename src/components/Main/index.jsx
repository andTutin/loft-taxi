import React from "react";
import { Header } from "../Header";
import { Grid } from "@material-ui/core";
import { CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";
import Modal from "../Modal";
import Map from "../Map/Map";

const Main = () => {
  const { isLoading } = useSelector((state) => state.flags);

  return (
    <>
      <Grid container component="main" direction="column" justify="flex-start">
        <Header />
        {isLoading ? (
          <Grid item xs container justify="center" alignItems="center">
            <CircularProgress color="secondary" />
          </Grid>
        ) : (
          <>
            <Map />
            <Modal />
          </>
        )}
      </Grid>
    </>
  );
};

export default Main;
