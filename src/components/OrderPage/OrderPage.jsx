import React, { useEffect } from "react";
import { Header } from "../Header";
import Map from "./Map/Map";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { profileOpen } from "../../modules/flags";

export const OrderPage = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.flags);

  useEffect(() => {
    dispatch(profileOpen());
  }, [dispatch]);

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
