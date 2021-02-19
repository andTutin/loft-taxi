import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Grid } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import { useAuth } from "../../modules/auth";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    textDecoration: "none",
  },
  active: {
    color: theme.palette.secondary.main,
    textDecoration: "none",
  },
}));

const Nav = () => {
  const history = useHistory();
  const classes = useStyles();
  const { logout } = useAuth();

  const setClassName = (tab) => {
    return history.location.pathname === `/${tab}`
      ? classes.active
      : classes.root;
  };

  return (
    <Grid item xs={2} container justify="space-between">
      <Link to="/map" className={setClassName("map")}>
        Карта
      </Link>
      <Link to="/profile" className={setClassName("profile")}>
        Профиль
      </Link>
      <Link className={classes.root} to="/login" onClick={logout}>
        Выйти
      </Link>
    </Grid>
  );
};

export default Nav;
