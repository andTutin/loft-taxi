import { Paper, Grid, Typography, Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setIsProfileOpened } from "../../redux/actions";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "50px",
    padding: "60px 43px",
  },
  /*
  btn: {
    width: "300px",
  },*/
}));

const ProfileFilled = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    history.push("/map");
  };

  useEffect(() => {
    return () => dispatch(setIsProfileOpened(true));
  });

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
export default ProfileFilled;
