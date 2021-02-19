import React from "react";
import { Grid, Paper, Typography, TextField, Button } from "@material-ui/core/";
import { Link, Redirect } from "react-router-dom";
import { useAuth } from "../../modules/auth";
import { useSelector } from "react-redux";
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

const LoginForm = () => {
  const classes = useStyles();
  const { token, login } = useAuth();
  const { error } = useSelector((state) => state);
  const methods = useForm();
  const { handleSubmit, control, errors } = methods;

  if (token) {
    return <Redirect to="/map" />;
  }

  return (
    <Paper className={classes.formWrapper}>
      <Typography component="h2" variant="h3" align="center">
        Войти
      </Typography>
      <Grid
        component="form"
        data-testid="login-form"
        container
        direction="column"
        justify="center"
        alignItems="center"
        onSubmit={handleSubmit(login)}
      >
        <Controller
          name="email"
          as={
            <TextField
              type="email"
              id="email"
              label="Email"
              placeholder="mail@mail.ru"
              margin="normal"
              fullWidth
              error={!!errors.email}
              helperText={errors.email?.message || null}
            />
          }
          control={control}
          rules={{
            required: "Email обязателен",
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: "Невалидный Email",
            },
          }}
          defaultValue=""
        />
        <Controller
          name="password"
          as={
            <TextField
              type="password"
              id="password"
              label="Пароль"
              placeholder="*************"
              margin="normal"
              fullWidth
              error={!!errors.password}
              helperText={errors.password?.message || null}
            />
          }
          control={control}
          rules={{ required: "Пароль обязателен" }}
          defaultValue=""
        />
        <Button type="submit" fullWidth variant="contained">
          Войти
        </Button>
        <Grid
          container
          justify="flex-end"
          alignItems="center"
          className={classes.formText}
        >
          <Typography component="p" variant="body1">
            Новый пользователь?&nbsp;
            <Link to="/registration" className={classes.link}>
              Зарегистрируйтесь
            </Link>
          </Typography>
        </Grid>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </Grid>
    </Paper>
  );
};

export default LoginForm;
