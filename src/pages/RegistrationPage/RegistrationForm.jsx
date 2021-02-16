import React from "react";
import { Grid, Paper, Typography, TextField, Button } from "@material-ui/core/";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registrationRequest } from "../../modules/auth";
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
  const { loginStatus } = useSelector((state) => state.auth);
  const { error } = useSelector((state) => state.helpers);
  const methods = useForm();
  const { handleSubmit, control, errors } = methods;

  const onSubmit = ({ email, password, name, surname }) => {
    dispatch(
      registrationRequest({
        email,
        password,
        name,
        surname,
      })
    );
  };

  if (loginStatus) {
    return <Redirect to="/map" />;
  }

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
        <Grid container spacing={2}>
          <Grid item xs>
            <Controller
              name="name"
              as={
                <TextField
                  id="name"
                  label="Имя"
                  placeholder="Иван"
                  margin="normal"
                  fullWidth
                  error={!!errors.name}
                  helperText={errors.name?.message || null}
                />
              }
              control={control}
              rules={{
                required: "Как вас зовут?",
              }}
              defaultValue=""
            />
          </Grid>
          <Grid item xs>
            <Controller
              name="surname"
              as={
                <TextField
                  id="surname"
                  label="Фамилия"
                  placeholder="Петров"
                  margin="normal"
                  fullWidth
                  error={!!errors.surname}
                  helperText={errors.surname?.message || null}
                />
              }
              control={control}
              rules={{
                required: "Как вас зовут?",
              }}
              defaultValue=""
            />
          </Grid>
        </Grid>
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
          rules={{
            required: "Пароль обязателен",
            minLength: {
              value: 6,
              message: "Пароль должен быть не менее 6 символов длиной",
            },
            pattern: {
              value: /[a-zA-Z0-9]+/,
              message: "Разрёшенные символы a-z, A-Z, 0-9",
            },
          }}
          defaultValue=""
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
