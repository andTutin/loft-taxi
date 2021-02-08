import React from "react";
import { Grid, Paper, Typography, TextField, Button } from "@material-ui/core/";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../../redux/actions";
import { makeStyles } from "@material-ui/core/styles";

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
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      loginRequest({ email: "tutin_test@test.com", password: "123123" })
    );
  };

  if (loginStatus) {
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
        onSubmit={handleSubmit}
      >
        <TextField
          variant="standard"
          margin="normal"
          fullWidth
          id="email"
          label="Email"
          name="email"
          placeholder="mail@mail.ru"
        />
        <TextField
          variant="standard"
          margin="normal"
          fullWidth
          id="password"
          label="Пароль"
          name="password"
          placeholder="*************"
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
