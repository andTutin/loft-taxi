import React, { useContext } from "react";
import AuthContext from "../ctxs/authContext";
import RouteContext from "../ctxs/routeContext";
import { Grid, Button } from "@material-ui/core/";

const Nav = () => {
  const { logout } = useContext(AuthContext);
  const { activePage, setActivePage } = useContext(RouteContext);
  const setActiveTab = (page) => {
    return activePage === page ? { color: "#FDBF5A" } : { color: "#fff" };
  };

  return (
    <Grid item xs={2} container justify="space-between">
      <Button
        href="/map"
        onClick={(e) => {
          e.preventDefault();
          setActivePage("map");
        }}
        style={setActiveTab("map")}
      >
        Карта
      </Button>
      <Button
        href="/profile"
        onClick={(e) => {
          e.preventDefault();
          setActivePage("profile");
        }}
        style={setActiveTab("profile")}
      >
        Профиль
      </Button>
      <Button
        style={{ color: "#fff" }}
        href="/login"
        onClick={(e) => {
          e.preventDefault();
          logout();
        }}
      >
        Выйти
      </Button>
    </Grid>
  );
};

export default Nav;
