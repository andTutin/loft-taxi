import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Paper, Typography, TextField, Button } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import cardLogo from "../../assets/svg/cardLogo.svg";
import cardChip from "../../assets/svg/cardChip.svg";
import cardSystemLogo from "../../assets/svg/cardSystemLogo.svg";
import { postCardRequest } from "../../redux/actions";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "50px",
    padding: "60px 43px",
  },
  form: {
    marginTop: "50px",
    minWidth: "800px",
  },
  card: {
    width: "100%",
    height: "100%",
    padding: "30px",
  },
  cardData: {
    height: "100%",
  },
}));

const ProfileForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { token, cardNumber, cardName, expiryDate, cvc } = useSelector(
    (state) => state
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      postCardRequest({
        cardNumber: "1111 2222 3333 4444",
        cardName: "CARD HOLDER",
        expiryDate: "01/23",
        cvc: "777",
        token,
      })
    );
  };

  return (
    <Grid container direction="column" alignItems="center">
      <Paper className={classes.root}>
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
          className={classes.form}
        >
          <Grid container direction="row" wrap="nowrap" spacing={5}>
            <Grid item xs container direction="column">
              <TextField
                variant="standard"
                margin="normal"
                fullWidth
                id="name"
                label="Имя владельца"
                name="name"
                placeholder="PIOTR PERVIY"
                defaultValue={cardName || ""}
              />
              <TextField
                variant="standard"
                margin="normal"
                fullWidth
                id="cardNumber"
                label="Номер карты"
                name="cardNumber"
                placeholder="0000 0000 0000 0000"
                defaultValue={cardNumber || ""}
              />
              <Grid container direction="row" spacing={5}>
                <Grid item xs>
                  <TextField
                    variant="standard"
                    margin="normal"
                    id="cardExpiry"
                    label="MM/YY"
                    name="cardExpiry"
                    placeholder="05/23"
                    defaultValue={expiryDate || ""}
                  />
                </Grid>
                <Grid item xs>
                  <TextField
                    variant="standard"
                    margin="normal"
                    id="cardCvc"
                    label="CVC"
                    name="cardCVC"
                    placeholder="666"
                    defaultValue={cvc || ""}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs container direction="row">
              <Grid item xs container direction="column" alignItems="stretch">
                <Paper className={classes.card}>
                  <Grid
                    container
                    direction="column"
                    justify="space-between"
                    alignContent="stretch"
                    className={classes.cardData}
                  >
                    <Grid container justify="space-between">
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
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid container direction="row" justify="center">
            <Button type="submit" variant="contained">
              Сохранить
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default ProfileForm;
