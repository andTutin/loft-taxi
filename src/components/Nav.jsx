import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Grid } from "@material-ui/core/";
import { useDispatch } from "react-redux";
import { logoutButtonPressed } from "../redux/actions";
import { makeStyles } from "@material-ui/core/styles";

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
  const dispatch = useDispatch();

  const setClassName = (tab) => {
    return history.location.pathname === `/${tab}`
      ? classes.active
      : classes.root;
  };

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logoutButtonPressed());
  };

  return (
    <Grid item xs={2} container justify="space-between">
      <Link to="/map" className={setClassName("map")}>
        Карта
      </Link>
      <Link to="/profile" className={setClassName("profile")}>
        Профиль
      </Link>
      <Link className={classes.root} to="/login" onClick={handleLogout}>
        Выйти
      </Link>
    </Grid>
  );
};

export default Nav;
