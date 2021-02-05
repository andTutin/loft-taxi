import React from "react";
import { Grid, Paper, Typography, TextField, Button } from "@material-ui/core/";
import cardLogo from "../../svg/cardLogo.svg";
import cardChip from "../../svg/cardChip.svg";
import cardSystemLogo from "../../svg/cardSystemLogo.svg";

const ProfileForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Grid container direction="column" alignItems="center">
      <Paper style={{ marginTop: "50px" }}>
        <Typography variant="h2" align="center">
          Профиль
        </Typography>
        <Typography variant="h4" align="center">
          Введите платёжные данные
        </Typography>
        <Grid
          container
          component="form"
          data-testid="profile-form"
          direction="column"
          onSubmit={handleSubmit}
          style={{ padding: "50px" }}
        >
          <Grid container direction="row" wrap="nowrap">
            <Grid container direction="column" style={{ marginRight: "50px" }}>
              <TextField
                variant="standard"
                margin="normal"
                fullWidth
                id="name"
                label="Имя владельца"
                name="name"
                placeholder="PIOTR PERVIY"
              />
              <TextField
                variant="standard"
                margin="normal"
                fullWidth
                id="cardNumber"
                label="Номер карты"
                name="cardNumber"
                placeholder="0000 0000 0000 0000"
              />
              <TextField
                variant="standard"
                margin="normal"
                id="cardExpiry"
                label="MM/YY"
                name="cardExpiry"
                placeholder="05/23"
              />
              <TextField
                variant="standard"
                margin="normal"
                id="cardCvc"
                label="CVC"
                name="cardCVC"
                placeholder="666"
              />
            </Grid>
            <Grid container direction="column">
              <Paper style={{ width: "400px", height: "200px" }}>
                <Grid container direction="row" justify="space-between">
                  <img src={cardLogo} alt="Логотип Лофт Такси" />
                  <Typography>05/23</Typography>
                </Grid>
                <Grid>
                  <Typography>0000 0000 0000 0000</Typography>
                </Grid>
                <Grid>
                  <Typography>MR. CARDHOLDER</Typography>
                </Grid>
                <Grid container direction="row" justify="space-between">
                  <img src={cardChip} alt="Логотип Лофт Такси" />
                  <img src={cardSystemLogo} alt="Логотип Лофт Такси" />
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          <Grid container direction="row" justify="center">
            <Button
              type="submit"
              variant="contained"
              style={{ width: "300px" }}
            >
              Сохранить
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default ProfileForm;
