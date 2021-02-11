import React from "react";
import { Typography, Button, Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const FillProfileRequired = () => {
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    history.push("/profile");
  };

  return (
    <>
      <Typography variant="h4">Заполните платежные данные</Typography>
      <Typography variant="body1">
        Укажите информацию о банковской карте, чтобы сделать заказ.
      </Typography>
      <Grid container justify="center">
        <Button onClick={handleClick} variant="contained">
          Перейти в профиль
        </Button>
      </Grid>
    </>
  );
};

export default FillProfileRequired;
