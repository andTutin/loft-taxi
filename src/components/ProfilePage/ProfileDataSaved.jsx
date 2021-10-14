import { Paper, Grid, Typography, Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "50px",
    padding: "60px 43px",
  },
}));

const ProfileDataSaved = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    history.push("/map");
  };

  return (
    <Grid container direction="column" alignItems="center">
      <Paper className={classes.root}>
        <Typography variant="h3" align="center">
          Профиль
        </Typography>
        <Typography variant="body1" align="center">
          Платёжные данные сохранены. Теперь вы можете заказывать такси.
        </Typography>
        <Grid container direction="row" justify="center">
          <Button variant="contained" onClick={handleClick}>
            Перейти на карту
          </Button>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default ProfileDataSaved;
