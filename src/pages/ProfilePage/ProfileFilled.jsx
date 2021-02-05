import { Paper, Grid, Typography, Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { editProfile } from "../../redux/actions";

const ProfileFilled = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleClick = (e) => {
    e.preventDefault();
    history.push("/map");
  };

  const reopenProfile = (e) => {
    e.preventDefault();
    dispatch(editProfile())
  }

  return (
    <Grid container direction="column" alignItems="center">
      <Paper style={{ marginTop: "50px", width: "700px" }}>
        <Typography variant="h2" align="center">
          Профиль
        </Typography>
        <Typography variant="h4" align="center">
          Платёжные данные сохранены. Теперь вы можете заказывать такси.
        </Typography>
        <Grid container direction="row" justify="center">
          <Button
            variant="contained"
            onClick={handleClick}
            style={{ width: "300px" }}
          >
            Перейти на карту
          </Button>
        </Grid>
        <Grid container direction="row" justify="center">
          <Button variant="contained" style={{ width: "300px" }} onClick={reopenProfile}>
            Редактировать профиль
          </Button>
        </Grid>
      </Paper>
    </Grid>
  );
};
export default ProfileFilled;
