import React from "react";
import AuthPagesLogo from "../AuthPagesLogo";
import WithBackground from "../WithBackground";
import RegistrationForm from "./RegistrationForm";
import Grid from "@material-ui/core/Grid";
import authBG from "../../assets/backgrounds/auth.jpg";

export const RegistrationPage = () => {
  return (
    <Grid container component="main" alignItems="stretch" wrap="nowrap">
      <AuthPagesLogo />
      <WithBackground background={authBG}>
        <RegistrationForm />
      </WithBackground>
    </Grid>
  );
};
