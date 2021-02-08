import React, { useState } from "react";
import { Grid, FormControl, Select, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CardsBlock from "./CardsBlock";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    boxSizing: "border-box",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  cardsBlock: {
    padding: "30px 0",
  },
  cardWrapper: {
    minWidth: "172px",
  },
  card: {
    padding: "15px",
    cursor: "pointer",
    opacity: "100%",
  },
  cardNotActive: {
    padding: "15px",
    cursor: "pointer",
    opacity: "50%",
  },
}));

const OrderForm = () => {
  const classes = useStyles();
  const { addressesList: addresses } = useSelector((state) => state);
  const [order, setOrder] = useState({
    from: "",
    where: "",
    status: "Стандарт",
  });

  const setStatus = (status) => {
    setOrder({
      ...order,
      status: status,
    });
  };
  const handleFromChange = (event) => {
    setOrder({
      ...order,
      from: event.target.value,
    });
  };
  const handleWhereChange = (event) => {
    setOrder({
      ...order,
      where: event.target.value,
    });
  };

  return (
    <Grid container direction="column">
      <FormControl className={classes.formControl}>
        <Select
          native
          labelId="from"
          id="from"
          defaultValue={order.from}
          onChange={handleFromChange}
          label="from"
        >
          <option value="" disabled>
            Откуда
          </option>
          {addresses
            .filter((item) => item.address !== order.where)
            .map((item) => {
              return (
                <option key={item.id} value={item.address}>
                  {item.address}
                </option>
              );
            })}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <Select
          native
          labelId="where"
          id="where"
          defaultValue={order.where}
          onChange={handleWhereChange}
          label="where"
        >
          <option value="" disabled>
            Куда
          </option>
          {addresses
            .filter((item) => item.address !== order.from)
            .map((item) => {
              return (
                <option key={item.id} value={item.address}>
                  {item.address}
                </option>
              );
            })}
        </Select>
      </FormControl>
      <CardsBlock status={order.status} setStatus={setStatus} />
      <Button
        variant="contained"
        disabled={order.from && order.where ? false : true}
      >
        Заказать
      </Button>
    </Grid>
  );
};

export default OrderForm;
