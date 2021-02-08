import React from "react";
import Header from "../../components/Header";
import OrderForm from "./orderForm";
import FillProfileRequired from "./fillProfileRequered";
import OrderConfirmed from "./orderConfirmed";
import Map from "./Map";
import { useSelector } from "react-redux";
import { Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  blockWrapper: {
    position: "fixed",
    top: "200px",
    left: "50px",
    padding: "40px",
    zIndex: "110",
    boxSizing: "border-box",
  },
}));

const MapPage = () => {
  const classes = useStyles();
  const { isCanOrder, isLoading, isReorder } = useSelector((state) => state);

  if (isLoading) {
    return (
      <>
        <Grid
          container
          component="main"
          direction="column"
          justify="flex-start"
        >
          <Header />
          <Map className={classes.mapZindex} isLoading={isLoading} />
        </Grid>
      </>
    );
  }

  return (
    <Grid container component="main" direction="column" justify="flex-start">
      <Header />
      <Paper className={classes.blockWrapper}>
        {isCanOrder ? (
          isReorder ? (
            <OrderForm />
          ) : (
            <OrderConfirmed />
          )
        ) : (
          <FillProfileRequired />
        )}
      </Paper>
      <Map />
    </Grid>
  );
};

export default MapPage;
