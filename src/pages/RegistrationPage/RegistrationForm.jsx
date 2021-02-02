import React, { useContext } from "react";
import AuthContext from "../../ctxs/authContext";
import RouteContext from "../../ctxs/routeContext";
import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Link,
} from "@material-ui/core/";

const RegistrationForm = () => {
  const { login } = useContext(AuthContext);
  const { setActivePage } = useContext(RouteContext);

  return (
    <Paper>
      <Typography component="h2" variant="h3" align="center">
        Регистрация
      </Typography>
      <Grid
        component="form"
        container
        direction="column"
        justify="center"
        alignItems="center"
        onSubmit={(e) => {
          e.preventDefault();
          login();
        }}
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
          label="Пароль"
          name="password"
          placeholder="*************"
        />
        <Button type="submit" fullWidth variant="contained">
          Зарегистрироваться
        </Button>
        <Grid component="div" container justify="flex-end" alignItems="center">
          <Typography component="p" variant="body1">
            Уже зарегистрированы?&nbsp;
            <Link
              color="secondary"
              href="/login"
              underline="none"
              onClick={(e) => {
                e.preventDefault();
                setActivePage("login");
              }}
            >
              Войти
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default RegistrationForm;
