import React from "react";
import { Grid, Paper, Typography, TextField, Button } from "@material-ui/core/";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postLoginRequest } from "../../redux/actions";

const LoginForm = () => {
  const { loginStatus } = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postLoginRequest("tutin_test@test.com", "123123"));
  };

  if (loginStatus) {
    return <Redirect to="/map" />;
  }

  return (
    <Paper>
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
        <Grid component="div" container justify="flex-end" alignItems="center">
          <Typography component="p" variant="body1">
            Новый пользователь?&nbsp;
            <Link to="/registration">Зарегистрируйтесь</Link>
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default LoginForm;
