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

const Car = ({ status, price, img, isActive, setStatus }) => {
  const classes = useStyles();

  return (
    <Grid item container direction="column" className={classes.cardWrapper}>
      <Paper
        className={isActive ? classes.card : classes.cardNotActive}
        onClick={() => setStatus(status)}
      >
        <Typography variant="h6">{status}</Typography>
        <Typography variant="body2">Стоимость</Typography>
        <Typography variant="subtitle1">{price}&#x20bd;</Typography>
        <img src={img} alt="Автомобиль" className={classes.carImg} />
      </Paper>
    </Grid>
  );
};

export default React.memo(Car);
