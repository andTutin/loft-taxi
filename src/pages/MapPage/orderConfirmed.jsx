import React from "react";
import { Typography, Button, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { routeRequestFailed } from "../../redux/actions";

const OrderConfirmed = () => {
  const dispatch = useDispatch()

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(routeRequestFailed())
  };

  return (
    <>
      <Typography variant="h4">Заказ размещён</Typography>
      <Typography variant="body1">
        Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
      </Typography>
      <Grid container justify="center">
        <Button onClick={handleClick} variant="contained">
          Сделать новый заказ
        </Button>
      </Grid>
    </>
  );
};

export default OrderConfirmed;
