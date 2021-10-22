import React from "react";
import Grid from "@material-ui/core/Grid";
import authBG from "../../assets/backgrounds/auth.jpg";
import { Redirect } from "react-router-dom";
import { useAuth } from "../../modules/auth";
import { useLocation } from "react-router-dom";
import Logo from "./Logo";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";

const Auth = () => {
  const location = useLocation();
  const { token } = useAuth();

  if (token) {
    return <Redirect to="/map" />;
  }

  return (
    <Grid container component="main" alignItems="stretch" wrap="nowrap">
      <Logo />
      <Grid
        item
        xs
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ background: `url(${authBG}) top left / cover` }}
      >
        {location.pathname.endsWith("login") ? (
          <LoginForm />
        ) : (
          <RegistrationForm />
        )}
      </Grid>
    </Grid>
  );
};

export default React.memo(Auth);
