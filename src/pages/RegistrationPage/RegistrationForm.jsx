import React from "react";
import { Grid, Paper, Typography, TextField, Button } from "@material-ui/core/";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registrationRequest } from "../../redux/actions";
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

const RegistrationForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { loginStatus } = useSelector((state) => state);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      registrationRequest({
        email: "reg_test@mail.com",
        password: "123123",
        name: "foo",
        surname: "bar",
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
          id="name"
          label="Как вас зовут?"
          name="name"
          placeholder="Пётр Александрович"
        />
        <TextField
          variant="standard"
          margin="normal"
          fullWidth
          id="password"
          label="Придумайте пароль"
          name="password"
          placeholder="*************"
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
      </Grid>
    </Paper>
  );
};

export default RegistrationForm;
