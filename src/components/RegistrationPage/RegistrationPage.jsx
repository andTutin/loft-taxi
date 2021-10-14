import React from "react";
import AuthPagesLogo from "../AuthPagesLogo";
import WithBackground from "../WithBackground";
import RegistrationForm from "./RegistrationForm";
import Grid from "@material-ui/core/Grid";
import authBG from "../../assets/backgrounds/auth.jpg";
import { Redirect } from "react-router-dom";
import { useAuth } from "../../modules/auth";

export const RegistrationPage = () => {
  const { token } = useAuth();

  if (token) {
    return <Redirect to="/map" />;
  }

  return (
    <Grid container component="main" alignItems="stretch" wrap="nowrap">
      <AuthPagesLogo />
      <WithBackground background={authBG}>
        <RegistrationForm />
      </WithBackground>
    </Grid>
  );
};
