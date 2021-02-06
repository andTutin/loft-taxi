import { Paper, Grid, Typography, Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

const ProfileFilled = () => {
  const history = useHistory();
  const handleClick = (e) => {
    e.preventDefault();
    history.push("/map");
  };

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
      </Paper>
    </Grid>
  );
};
export default ProfileFilled;
