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

const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const { setActivePage } = useContext(RouteContext);

  return (
    <Paper>
      <Typography component="h2" variant="h3" align="center">
        Войти
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
          id="password"
          label="Пароль"
          name="password"
          placeholder="*************"
        />
        <Grid container justify="flex-end">
          <Link
            color="secondary"
            href="/reset"
            underline="none"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Забыли пароль?
          </Link>
        </Grid>
        <Button type="submit" fullWidth variant="contained">
          Войти
        </Button>
        <Grid component="div" container justify="flex-end" alignItems="center">
          <Typography component="p" variant="body1">
            Новый пользователь?&nbsp;
            <Link
              color="secondary"
              href="/registration"
              underline="none"
              onClick={(e) => {
                e.preventDefault();
                setActivePage("registration");
              }}
            >
              Зарегистрируйтесь
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default LoginForm;
