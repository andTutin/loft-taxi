import { Grid, Typography, Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { profileOpen } from "../../modules/flags/actions";
const useStyles = makeStyles((theme) => ({
  root: {
    color: "#000",
    textDecoration: "none",
  },
}));

const ProfileDataSaved = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleEdit = () => dispatch(profileOpen());

  return (
    <Grid container direction="column" alignItems="center">
      <Typography variant="h3" align="center">
        Профиль
      </Typography>
      <Typography variant="body1" align="center">
        Платёжные данные сохранены. Теперь вы можете заказывать такси.
      </Typography>
      <Grid container direction="row" justify="space-around">
        <Link to="/order" className={classes.root}>
          <Button variant="contained">Перейти на карту</Button>
        </Link>
        <Button variant="contained" onClick={handleEdit}>
          Редактировать
        </Button>
      </Grid>
    </Grid>
  );
};

export default ProfileDataSaved;
