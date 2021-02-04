import React, { useContext } from "react";
import { AuthContext } from "../../ctx/authContext";
import { Grid, Paper, Typography, TextField, Button } from "@material-ui/core/";
import { Link, useHistory } from "react-router-dom";

const RegistrationForm = () => {
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
