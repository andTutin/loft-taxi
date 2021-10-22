import React from "react";
import { Grid } from "@material-ui/core";
import CarSelector from "./CarSelector";
import RouteSelector from "./RouteSelector";
import OrderButton from "./OrderButton";
import useOrderForm from "./useOrderForm";

const OrderForm = () => {
  const {
    from,
    handleFromChange,
    to,
    handleToChange,
    status,
    handleStatusChange,
    handleSubmit,
  } = useOrderForm();

  return (
    <Grid
      component="form"
      onSubmit={handleSubmit}
      container
      direction="column"
      style={{ width: "auto", padding: "10px" }}
    >
      <RouteSelector
        from={from}
        setFrom={handleFromChange}
        to={to}
        setTo={handleToChange}
      />
      <CarSelector status={status} setStatus={handleStatusChange} />
      <OrderButton isDisabled={!(from && to)} />
    </Grid>
  );
};

export default OrderForm;
