import React from "react";
import { Grid, Paper, Typography, TextField, Button } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import cardLogo from "../../assets/card/logo.svg";
import cardChip from "../../assets/card/chip.svg";
import cardSystem from "../../assets/card/system.svg";
import { useForm, Controller } from "react-hook-form";
import { usePayment } from "../../modules/payment";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "50px",
    padding: "60px 43px",
  },
  form: {
    marginTop: "20px",
  },
  card: {
    width: "323px",
    height: "228px",
    padding: "30px",
  },
  cardData: {
    height: "100%",
  },
}));

const ProfileForm = () => {
  const classes = useStyles();
  const { cardNumber, cardName, expiryDate, cvc, sendCard } = usePayment();
  const { handleSubmit, control, errors, watch } = useForm({
    reValidateMode: "onChange",
    defaultValues: {
      cardName,
      cardNumber,
      expiryDate,
      cvc,
    },
  });

  return (
    <Grid container direction="column" alignItems="center">
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
        onSubmit={handleSubmit(sendCard)}
        className={classes.form}
      >
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
                message:
                  "Должен состоять из 4 блоков по 4 цифры, разделённых пробелом.",
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
                    message:
                      'Должен содержать 4 цифры разделённые символом "/"',
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
          <Grid item xs container direction="column" alignItems="center">
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
                  <img src={cardSystem} alt="Логотип Лофт Такси" />
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <Grid container direction="row" justify="center">
          <Button type="submit" variant="contained">
            Сохранить
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProfileForm;
