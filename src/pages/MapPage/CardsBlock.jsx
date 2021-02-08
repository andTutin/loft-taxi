import React from 'react';
import { Grid, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import standart from "./standart.png";
import premium from "./premium.png";
import business from "./business.png";

const useStyles = makeStyles((theme) => ({
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

const CardsBlock = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      wrap="nowrap"
      spacing={3}
      className={classes.cardsBlock}
    >
      <Grid item container direction="column" className={classes.cardWrapper}>
        <Paper className={classes.card}>
          <Typography variant="h6">Стандарт</Typography>
          <Typography variant="body2">Стоимость</Typography>
          <Typography variant="subtitle1">150Р</Typography>
          <div
            style={{
              width: "102px",
              height: "78px",
              background: `url(${standart}) center center / cover`,
            }}
          ></div>
        </Paper>
      </Grid>
      <Grid item container direction="column" className={classes.cardWrapper}>
        <Paper className={classes.cardNotActive}>
          <Typography variant="h6">Премиум</Typography>
          <Typography variant="body2">Стоимость</Typography>
          <Typography variant="subtitle1">250Р</Typography>
          <div
            style={{
              width: "118px",
              height: "81px",
              background: `url(${premium}) center center / cover`,
            }}
          ></div>
        </Paper>
      </Grid>
      <Grid item container direction="column" className={classes.cardWrapper}>
        <Paper className={classes.cardNotActive}>
          <Typography variant="h6">Бизнес</Typography>
          <Typography variant="body2">Стоимость</Typography>
          <Typography variant="subtitle1">350Р</Typography>
          <div
            style={{
              width: "108px",
              height: "81px",
              background: `url(${business}) center center / cover`,
            }}
          ></div>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default CardsBlock;
