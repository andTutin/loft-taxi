import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Paper, Typography, TextField, Button } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import cardLogo from "../../assets/svg/cardLogo.svg";
import cardChip from "../../assets/svg/cardChip.svg";
import cardSystemLogo from "../../assets/svg/cardSystemLogo.svg";
import { postCardRequest } from "../../redux/actions";
import { useForm, Controller } from "react-hook-form";

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
  const { handleSubmit, control, errors, watch } = useForm({
    reValidateMode: "onChange",
    defaultValues: {
      cardName,
      cardNumber,
      expiryDate,
      cvc,
    },
  });

  const onSubmit = ({ cardNumber, cardName, expiryDate, cvc }) => {
    dispatch(
      postCardRequest({
        cardNumber,
        cardName,
        expiryDate,
        cvc,
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
          onSubmit={handleSubmit(onSubmit)}
          className={classes.form}
        >
          <Grid container direction="row" wrap="nowrap" spacing={5}>
            <Grid item xs container direction="column">
              <Controller
                name="cardName"
                as={
                  <TextField
                    id="cardName"
                    label="Имя владельца"
                    placeholder="PIOTR PERVIY"
                    margin="normal"
                    fullWidth
                    error={!!errors.cardName}
                    helperText={errors.cardName?.message || null}
                  />
                }
                control={control}
                rules={{
                  required: "Поле обязательно для заполнения",
                  pattern: {
                    value: /^[A-Z]+\s[A-Z]+$/,
                    message: "Недопустимые символы",
                  },
                }}
              />
              <Controller
                name="cardNumber"
                as={
                  <TextField
                    id="cardNumber"
                    label="Номер карты"
                    placeholder="0000 0000 0000 0000"
                    margin="normal"
                    fullWidth
                    error={!!errors.cardNumber}
                    helperText={errors.cardNumber?.message || null}
                  />
                }
                control={control}
                rules={{
                  required: "Поле обязательно для заполнения",
                  pattern: {
                    value: /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/,
                    message: "Должен состоять из 4 блоков по 4 цифры, разделённых пробелом.",
                  },
                }}
              />
              <Grid container direction="row" spacing={5}>
                <Grid item xs>
                  <Controller
                    name="expiryDate"
                    as={
                      <TextField
                        id="expiryDate"
                        label="Срок действия"
                        placeholder="01/23"
                        margin="normal"
                        fullWidth
                        error={!!errors.expiryDate}
                        helperText={errors.expiryDate?.message || null}
                      />
                    }
                    control={control}
                    rules={{
                      required: "Поле обязательно для заполнения",
                      pattern: {
                        value: /^\d{2}\/\d{2}$/,
                        message: "Должен содержать 4 цифры разделённые символом \"/\"",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs>
                  <Controller
                    name="cvc"
                    as={
                      <TextField
                        id="cvc"
                        label="cvc"
                        placeholder="123"
                        margin="normal"
                        fullWidth
                        error={!!errors.cvc}
                        helperText={errors.cvc?.message || null}
                      />
                    }
                    control={control}
                    rules={{
                      required: "Поле обязательно для заполнения",
                      pattern: {
                        value: /^\d{3}$/,
                        message: "Должен быть из трёх цифр",
                      },
                    }}
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
                      <Typography>{watch("expiryDate")}</Typography>
                    </Grid>
                    <Grid>
                      <Typography>{watch("cardNumber")}</Typography>
                    </Grid>
                    <Grid>
                      <Typography>{watch("cardName")}</Typography>
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
