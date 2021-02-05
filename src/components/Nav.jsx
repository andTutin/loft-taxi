import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Grid } from "@material-ui/core/";
import { useDispatch } from "react-redux";
import { logoutButtonPressed } from "../redux/actions";

const Nav = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const setStyle = (tab) => {
    return history.location.pathname === "/" + tab
      ? { color: "orange", textDecoration: "none" }
      : { color: "#fff", textDecoration: "none" };
  };

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logoutButtonPressed());
  };

  return (
    <Grid item xs={2} container justify="space-between">
      <Link to="/map" style={setStyle("map")}>
        Карта
      </Link>
      <Link to="/profile" style={setStyle("profile")}>
        Профиль
      </Link>
      <Link
        style={{ color: "#fff", textDecoration: "none" }}
        to="/login"
        onClick={handleLogout}
      >
        Выйти
      </Link>
    </Grid>
  );
};

export default Nav;
