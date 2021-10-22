import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Car from "./Car";
import tariffs from "./tariffs";

const useStyles = makeStyles((theme) => ({
  cardsBlock: {
    padding: "30px 0",
    minHeight: "300px",
  },
}));

const CarSelector = ({ status, setStatus }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="stretch"
      wrap="nowrap"
      spacing={3}
      className={classes.cardsBlock}
    >
      {tariffs.map((t) => (
        <Car
          key={t.id}
          {...t}
          isActive={t.status === status}
          setStatus={setStatus}
        />
      ))}
    </Grid>
  );
};

export default React.memo(CarSelector);
