import React, { useState } from "react";
import { Grid, FormControl, Select, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CardsBlock from "./CardsBlock";

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
  const addresses = [
    {
      id: "1",
      value: "невский",
    },
    {
      id: "2",
      value: "пулково",
    },
    {
      id: "3",
      value: "гатчина",
    },
  ];

  const [filter, setFilter] = useState({
    type: "all",
    value: "",
  });

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
    setFilter({
      type: "from",
      value: event.target.value,
    });
  };

  const handleWhereChange = (event) => {
    setFilter({
      type: "where",
      value: event.target.value,
    });
  };

  return (
    <Grid container direction="column">
      <FormControl className={classes.formControl}>
        <Select
          native
          labelId="from"
          id="from"
          defaultValue={""}
          onChange={handleFromChange}
          label="from"
        >
          <option value="" disabled>
            Откуда
          </option>
          {filter.type === "where"
            ? addresses
                .filter((a) => a.value !== filter.value)
                .map((address, i) => {
                  return (
                    <option key={address.id} value={address.value}>
                      {address.value}
                    </option>
                  );
                })
            : addresses.map((address, i) => {
                return (
                  <option key={address.id} value={address.value}>
                    {address.value}
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
          defaultValue={""}
          onChange={handleWhereChange}
          label="where"
        >
          <option value="" disabled>
            Куда
          </option>
          {filter.type === "from"
            ? addresses
                .filter((a) => a.value !== filter.value)
                .map((address, i) => {
                  return (
                    <option key={address.id} value={address.value}>
                      {address.value}
                    </option>
                  );
                })
            : addresses.map((address, i) => {
                return (
                  <option key={address.id} value={address.value}>
                    {address.value}
                  </option>
                );
              })}
        </Select>
      </FormControl>
      <CardsBlock status={order.status} setStatus={setStatus} />
      <Button variant="contained" disabled>
        Заказать
      </Button>
    </Grid>
  );
};

export default OrderForm;
