import React, { useContext } from "react";
import { AuthContext } from "../ctx/authContext";
import { Link, useHistory } from "react-router-dom";
import { Grid } from "@material-ui/core/";

const Nav = () => {
  const { logout } = useContext(AuthContext);
  const history = useHistory();

  const setStyle = (tab) => {
    return history.location.pathname === "/" + tab
      ? { color: "orange", textDecoration: "none" }
      : { color: "#fff", textDecoration: "none" };
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
        style={{ color: "#fff", textDecoration: 'none' }}
        to="/login"
        onClick={(e) => {
          logout();
        }}
      >
        Выйти
      </Link>
    </Grid>
  );
};

export default Nav;
