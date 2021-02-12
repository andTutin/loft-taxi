import React from "react";
import { Grid, Paper, Typography, TextField, Button } from "@material-ui/core/";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registrationRequest } from "../../redux/actions";
import { makeStyles } from "@material-ui/core/styles";
import { useForm, Controller } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    padding: "55px 112px",
  },
  formText: {
    marginTop: "20px",
  },
  link: {
    color: theme.palette.secondary.main,
    textDecoration: "none",
  },
}));

const RegistrationForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const methods = useForm();
  const { handleSubmit, control, register, errors } = methods;
  const { loginStatus, error } = useSelector((state) => state);

  const onSubmit = ({ email, password, name, surname }) => {
    dispatch(
      registrationRequest({
        email,
        password,
        name: name || "Anonymous",
        surname: surname || "User",
      })
    );
  };

  if (loginStatus) {
    return <Redirect to="/map" />;
  }

  const helperEmailText = () => {
    switch (errors.email?.type) {
      case "required":
        return "Email обязателен";
      case "pattern":
        return "Невалидный Email";
      default:
        return null;
    }
  };

  const helperPasswordText = () => {
    return errors.password?.type === "required" ? "Пароль обязателен" : null;
  };

  return (
    <Paper className={classes.formWrapper}>
      <Typography component="h2" variant="h3" align="center">
        Регистрация
      </Typography>
      <Grid
        component="form"
        data-testid="registration-form"
        container
        direction="column"
        justify="center"
        alignItems="center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          as={TextField}
          name="email"
          control={control}
          rules={{
            required: true,
            pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
          }}
          variant="standard"
          margin="normal"
          fullWidth
          id="email"
          label="Email"
          placeholder="mail@mail.ru"
          defaultValue=""
          error={!!errors.email}
          helperText={helperEmailText()}
          inputRef={register}
        />
        <Grid container spacing={2}>
          <Grid item xs>
            <Controller
              as={TextField}
              name="name"
              control={control}
              rules={{
                required: false,
              }}
              variant="standard"
              margin="normal"
              fullWidth
              id="name"
              label="Имя"
              placeholder="Иван"
              defaultValue=""
              inputRef={register}
            />
          </Grid>
          <Grid item xs>
            <Controller
              as={TextField}
              name="surname"
              control={control}
              rules={{
                required: false,
              }}
              variant="standard"
              margin="normal"
              fullWidth
              id="surname"
              label="Фамилия"
              placeholder="Иванов"
              defaultValue=""
              inputRef={register}
            />
          </Grid>
        </Grid>
        <Controller
          as={TextField}
          type="password"
          name="password"
          control={control}
          rules={{ required: true, minLength: 6 }}
          variant="standard"
          margin="normal"
          fullWidth
          id="password"
          label="Пароль"
          placeholder="*************"
          defaultValue=""
          error={!!errors.password}
          helperText={helperPasswordText()}
        />
        <Button type="submit" fullWidth variant="contained">
          Зарегистрироваться
        </Button>
        <Grid
          container
          justify="center"
          alignItems="center"
          className={classes.formText}
        >
          <Typography component="p" variant="body1">
            Уже зарегистрированы?&nbsp;
            <Link to="/login" className={classes.link}>
              Войти
            </Link>
          </Typography>
        </Grid>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </Grid>
    </Paper>
  );
};

export default RegistrationForm;
