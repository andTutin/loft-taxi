import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Paper, Typography, TextField, Button } from "@material-ui/core/";
import cardLogo from "../../svg/cardLogo.svg";
import cardChip from "../../svg/cardChip.svg";
import cardSystemLogo from "../../svg/cardSystemLogo.svg";
import { postCardRequest } from "../../redux/actions";

const ProfileForm = () => {
  const dispatch = useDispatch();
  const { token, cardNumber, cardName, expiryDate, cvc } = useSelector(
    (state) => state
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      postCardRequest(
        "4815 1623 4242 1961",
        "08/15",
        "JOHN LOCKE",
        "815",
        token
      )
    );
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
                value={cardName || ""}
              />
              <TextField
                variant="standard"
                margin="normal"
                fullWidth
                id="cardNumber"
                label="Номер карты"
                name="cardNumber"
                placeholder="0000 0000 0000 0000"
                value={cardNumber || ""}
              />
              <TextField
                variant="standard"
                margin="normal"
                id="cardExpiry"
                label="MM/YY"
                name="cardExpiry"
                placeholder="05/23"
                value={expiryDate || ""}
              />
              <TextField
                variant="standard"
                margin="normal"
                id="cardCvc"
                label="CVC"
                name="cardCVC"
                placeholder="666"
                value={cvc || ""}
              />
            </Grid>
            <Grid container direction="column">
              <Paper style={{ width: "400px", height: "200px" }}>
                <Grid container direction="row" justify="space-between">
                  <img src={cardLogo} alt="Логотип Лофт Такси" />
                  <Typography>{expiryDate}</Typography>
                </Grid>
                <Grid>
                  <Typography>{cardNumber}</Typography>
                </Grid>
                <Grid>
                  <Typography>{cardName}</Typography>
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
