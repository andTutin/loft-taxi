import React from "react";
import { Grid, Paper, Typography, TextField, Button } from "@material-ui/core/";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postRegistrationRequest } from "../../redux/actions";

const RegistrationForm = () => {
  const { loginStatus } = useSelector(state => state);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postRegistrationRequest("tutin_test@test.com", "123123", 'Andrew', 'Tutin'));
  };

  if (loginStatus) {
    return <Redirect to="/map" />;
  }

  return (
    <Paper>
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
        <Grid component="div" container justify="flex-end" alignItems="center">
          <Typography component="p" variant="body1">
            Уже зарегистрированы?&nbsp;
            <Link to="/login">Войти</Link>
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default RegistrationForm;
