import React from "react";
import { Grid, Paper, Typography, TextField, Button } from "@material-ui/core/";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../../redux/actions";
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
  const dispatch = useDispatch();
  const { loginStatus } = useSelector((state) => state);
  const methods = useForm();
  const { handleSubmit, control, register, errors } = methods;

  const onSubmit = ({ email, password }) => {
    dispatch(loginRequest({ email, password }));
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
        Войти
      </Typography>
      <Grid
        component="form"
        data-testid="login-form"
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
      </Grid>
    </Paper>
  );
};

export default LoginForm;
