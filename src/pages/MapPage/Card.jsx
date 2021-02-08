import React from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cardWrapper: {
    minWidth: "172px",
  },
  card: {
    padding: "15px",
    cursor: "pointer",
    opacity: "100%",
    height: "100%",
  },
  cardNotActive: {
    padding: "15px",
    cursor: "pointer",
    opacity: "50%",
    height: "100%",
  },
  carImg: {
    width: "102px",
    height: "78px",
    display: "block",
    margin: "10px auto 0",
  },
}));

const Card = ({ status, price, car, isActive, setActive }) => {
  const classes = useStyles();

  return (
    <Grid item container direction="column" className={classes.cardWrapper}>
      <Paper
        className={isActive ? classes.card : classes.cardNotActive}
        onClick={() => setActive(status)}
      >
        <Typography variant="h6">{status}</Typography>
        <Typography variant="body2">Стоимость</Typography>
        <Typography variant="subtitle1">{price}&#x20bd;</Typography>
        <img src={car} alt="Автомобиль" className={classes.carImg} />
      </Paper>
    </Grid>
  );
};

export default Card;
