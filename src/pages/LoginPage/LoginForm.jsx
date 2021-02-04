import React, { useContext } from "react";
import { AuthContext } from "../../ctx/authContext";
import { Grid, Paper, Typography, TextField, Button } from "@material-ui/core/";
import { Link, useHistory } from "react-router-dom";

const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    login();
    setTimeout(() => {
      history.push("/map");
    }, 1000);
  };

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
